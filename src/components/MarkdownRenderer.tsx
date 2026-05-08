import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function parseInline(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  // Process bold, links, and inline code
  const regex = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)|`([^`]+)`/g;
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    if (match[1]) {
      nodes.push(<strong key={key++}>{match[1]}</strong>);
    } else if (match[2] && match[3]) {
      nodes.push(
        <a key={key++} href={match[3]} className="text-[#1E3A5F] hover:text-[#D4A853] underline decoration-[#D4A853]/30 hover:decoration-[#D4A853]" target={match[3].startsWith('http') ? '_blank' : undefined} rel={match[3].startsWith('http') ? 'noopener noreferrer' : undefined}>
          {match[2]}
        </a>
      );
    } else if (match[4]) {
      nodes.push(<code key={key++} className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">{match[4]}</code>);
    }
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }
  return nodes.length > 0 ? nodes : [text];
}

function parseTableRow(line: string): string[] {
  return line
    .split('|')
    .map((cell) => cell.trim())
    .filter((cell) => cell.length > 0);
}

function isSeparatorRow(line: string): boolean {
  return /^\|[\s\-:|]+\|$/.test(line.trim()) || /^[\s\-:|]+\|/.test(line.trim());
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Skip empty lines
    if (!trimmed) {
      i++;
      continue;
    }

    // H1 - skip (title is rendered separately)
    if (trimmed.startsWith('# ') && !trimmed.startsWith('## ')) {
      i++;
      continue;
    }

    // H2
    if (trimmed.startsWith('## ')) {
      const text = trimmed.replace(/^##\s+/, '');
      const id = slugify(text);
      elements.push(
        <h2 key={key++} id={id} className="text-2xl font-bold text-[#1E3A5F] mt-12 mb-4 scroll-mt-24">
          {parseInline(text)}
        </h2>
      );
      i++;
      continue;
    }

    // H3
    if (trimmed.startsWith('### ')) {
      const text = trimmed.replace(/^###\s+/, '');
      elements.push(
        <h3 key={key++} className="text-xl font-semibold text-[#1E3A5F] mt-8 mb-3">
          {parseInline(text)}
        </h3>
      );
      i++;
      continue;
    }

    // H4
    if (trimmed.startsWith('#### ')) {
      const text = trimmed.replace(/^####\s+/, '');
      elements.push(
        <h4 key={key++} className="text-lg font-semibold text-gray-800 mt-6 mb-2">
          {parseInline(text)}
        </h4>
      );
      i++;
      continue;
    }

    // Horizontal rule
    if (/^(-{3,}|\*{3,}|_{3,})$/.test(trimmed)) {
      elements.push(<hr key={key++} className="my-8 border-gray-200" />);
      i++;
      continue;
    }

    // Table
    if (trimmed.includes('|') && i + 1 < lines.length && isSeparatorRow(lines[i + 1]?.trim())) {
      const headerCells = parseTableRow(trimmed);
      i += 2; // skip header and separator
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().includes('|')) {
        rows.push(parseTableRow(lines[i].trim()));
        i++;
      }
      elements.push(
        <div key={key++} className="my-6 overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#1E3A5F]">
              <tr>
                {headerCells.map((cell, ci) => (
                  <th key={ci} className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                    {parseInline(cell)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3 text-sm text-gray-700">
                      {parseInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // Unordered list
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      const items: React.ReactNode[] = [];
      while (i < lines.length && (lines[i].trim().startsWith('- ') || lines[i].trim().startsWith('* '))) {
        const text = lines[i].trim().replace(/^[-*]\s+/, '');
        items.push(<li key={items.length} className="text-gray-700">{parseInline(text)}</li>);
        i++;
      }
      elements.push(
        <ul key={key++} className="my-4 pl-6 space-y-2 list-disc marker:text-[#D4A853]">
          {items}
        </ul>
      );
      continue;
    }

    // Ordered list
    if (/^\d+\.\s/.test(trimmed)) {
      const items: React.ReactNode[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        const text = lines[i].trim().replace(/^\d+\.\s+/, '');
        items.push(<li key={items.length} className="text-gray-700">{parseInline(text)}</li>);
        i++;
      }
      elements.push(
        <ol key={key++} className="my-4 pl-6 space-y-2 list-decimal marker:text-[#D4A853]">
          {items}
        </ol>
      );
      continue;
    }

    // Blockquote
    if (trimmed.startsWith('> ')) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('> ')) {
        quoteLines.push(lines[i].trim().replace(/^>\s?/, ''));
        i++;
      }
      elements.push(
        <blockquote key={key++} className="my-6 pl-6 border-l-4 border-[#D4A853] bg-[#D4A853]/5 py-4 pr-4 rounded-r-lg text-gray-700 italic">
          {quoteLines.map((ql, qi) => (
            <p key={qi}>{parseInline(ql)}</p>
          ))}
        </blockquote>
      );
      continue;
    }

    // Meta description line (skip it — already shown in header)
    if (trimmed.startsWith('**Meta description:**')) {
      i++;
      continue;
    }

    // Table of Contents links (skip — we render our own)
    if (trimmed.startsWith('- [') && trimmed.includes('](#')) {
      i++;
      continue;
    }
    if (trimmed === '## Table of Contents' || trimmed === '## Table of contents') {
      i++;
      // Skip all following ToC link lines
      while (i < lines.length && (lines[i].trim().startsWith('- [') || !lines[i].trim())) {
        i++;
      }
      continue;
    }

    // Regular paragraph
    const paraLines: string[] = [trimmed];
    i++;
    while (i < lines.length && lines[i].trim() && !lines[i].trim().startsWith('#') && !lines[i].trim().startsWith('- ') && !lines[i].trim().startsWith('* ') && !/^\d+\.\s/.test(lines[i].trim()) && !lines[i].trim().startsWith('>') && !lines[i].trim().startsWith('|') && !/^(-{3,}|\*{3,}|_{3,})$/.test(lines[i].trim())) {
      paraLines.push(lines[i].trim());
      i++;
    }
    elements.push(
      <p key={key++} className="my-4 text-gray-700 leading-relaxed">
        {parseInline(paraLines.join(' '))}
      </p>
    );
  }

  return <div>{elements}</div>;
}
