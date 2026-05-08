'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

interface Question {
  question: string;
  options: string[];
}

const questions: Question[] = [
  {
    question: 'What best describes your situation?',
    options: ['Starting a family', 'Approaching retirement', 'Self-employed', 'Protecting my mortgage', 'Planning my estate', 'Other'],
  },
  {
    question: "What's your age range?",
    options: ['Under 30', '30–45', '45–55', '55–65', '65+'],
  },
  {
    question: 'Do you currently have any life insurance?',
    options: ['Yes', 'No', 'Not sure'],
  },
  {
    question: 'What matters most to you?',
    options: ['Lowest cost', 'Building cash value', 'Lifetime coverage', 'Flexibility', 'Simple & straightforward'],
  },
  {
    question: 'Are you interested in Medicare or health insurance?',
    options: ['Yes — Medicare', 'Yes — Health insurance', 'No — just life/annuity', 'Not sure'],
  },
  {
    question: "What's your approximate household income?",
    options: ['Under $50K', '$50K–$100K', '$100K–$200K', '$200K+', 'Prefer not to say'],
  },
];

interface GuideRecommendation {
  title: string;
  description: string;
  href: string;
  category: string;
}

const allRecommendations: GuideRecommendation[] = [
  {
    title: 'Term Life Insurance: Complete Guide',
    description: 'Affordable coverage for a specific period — ideal for young families and mortgage protection.',
    href: '/guides/term-life-insurance-complete-guide',
    category: 'Life Insurance',
  },
  {
    title: 'Whole Life vs Universal Life Insurance',
    description: 'Compare permanent life insurance options that build cash value over time.',
    href: '/guides/whole-life-vs-universal-life-insurance',
    category: 'Life Insurance',
  },
  {
    title: 'IUL vs Term Life Insurance',
    description: 'Understand indexed universal life and when it makes sense over term coverage.',
    href: '/guides/iul-vs-term-life-insurance',
    category: 'Life Insurance',
  },
  {
    title: 'Best Life Insurance for Seniors Over 65',
    description: 'Coverage options designed for older adults including guaranteed issue and simplified policies.',
    href: '/guides/best-life-insurance-seniors-over-65',
    category: 'Life Insurance',
  },
  {
    title: 'Medicare Explained: Parts A, B, C, D',
    description: 'A comprehensive breakdown of all Medicare parts and what each one covers.',
    href: '/guides/medicare-explained-parts-a-b-c-d',
    category: 'Medicare',
  },
  {
    title: 'How Annuities Work: Complete Guide',
    description: 'Learn how annuities can provide guaranteed income in retirement.',
    href: '/guides/how-annuities-work-complete-guide',
    category: 'Annuities',
  },
  {
    title: 'Fixed vs Variable Annuity',
    description: 'Compare the two main annuity types to find the best fit for your retirement goals.',
    href: '/guides/fixed-annuity-vs-variable-annuity',
    category: 'Annuities',
  },
  {
    title: 'Florida Health Insurance Options',
    description: 'Explore affordable health insurance options available in Florida.',
    href: '/states/florida/florida-health-insurance-options',
    category: 'Health Insurance',
  },
];

function getRecommendations(answers: Record<number, string>): GuideRecommendation[] {
  const recs: GuideRecommendation[] = [];
  const situation = answers[0] || '';
  const age = answers[1] || '';
  const hasInsurance = answers[2] || '';
  const priority = answers[3] || '';
  const medicareInterest = answers[4] || '';

  // Medicare interest
  if (medicareInterest === 'Yes — Medicare' || age === '65+') {
    recs.push(allRecommendations.find(r => r.href.includes('medicare'))!);
  }

  // Health insurance interest
  if (medicareInterest === 'Yes — Health insurance') {
    recs.push(allRecommendations.find(r => r.href.includes('florida-health'))!);
  }

  // Retirement / annuities
  if (situation === 'Approaching retirement' || situation === 'Planning my estate') {
    recs.push(allRecommendations.find(r => r.href.includes('how-annuities'))!);
    if (priority === 'Building cash value' || priority === 'Flexibility') {
      recs.push(allRecommendations.find(r => r.href.includes('fixed-annuity'))!);
    }
  }

  // Seniors
  if (age === '55–65' || age === '65+') {
    recs.push(allRecommendations.find(r => r.href.includes('seniors'))!);
  }

  // Young families / mortgage
  if (situation === 'Starting a family' || situation === 'Protecting my mortgage') {
    recs.push(allRecommendations.find(r => r.href.includes('term-life'))!);
  }

  // Cash value seekers
  if (priority === 'Building cash value' || priority === 'Lifetime coverage') {
    recs.push(allRecommendations.find(r => r.href.includes('whole-life'))!);
    recs.push(allRecommendations.find(r => r.href.includes('iul-vs'))!);
  }

  // Simple / lowest cost
  if (priority === 'Lowest cost' || priority === 'Simple & straightforward') {
    recs.push(allRecommendations.find(r => r.href.includes('term-life'))!);
  }

  // No insurance yet
  if (hasInsurance === 'No') {
    recs.push(allRecommendations.find(r => r.href.includes('term-life'))!);
  }

  // Self-employed
  if (situation === 'Self-employed') {
    recs.push(allRecommendations.find(r => r.href.includes('florida-health'))!);
    recs.push(allRecommendations.find(r => r.href.includes('term-life'))!);
  }

  // Deduplicate and limit to 3
  const seen = new Set<string>();
  const unique: GuideRecommendation[] = [];
  for (const rec of recs) {
    if (rec && !seen.has(rec.href)) {
      seen.add(rec.href);
      unique.push(rec);
    }
    if (unique.length >= 3) break;
  }

  // Fallback if we have fewer than 2
  if (unique.length < 2) {
    for (const rec of allRecommendations) {
      if (!seen.has(rec.href)) {
        seen.add(rec.href);
        unique.push(rec);
      }
      if (unique.length >= 3) break;
    }
  }

  return unique;
}

const categoryPillColors: Record<string, string> = {
  'Life Insurance': 'bg-[#1E3A5F] text-white',
  'Medicare': 'bg-[#0369A1] text-white',
  'Annuities': 'bg-[#D4A853] text-[#1E3A5F]',
  'Health Insurance': 'bg-[#0D9488] text-white',
};

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const progress = showResults ? 100 : ((currentStep) / questions.length) * 100;

  const handleSelect = (option: string) => {
    const newAnswers = { ...answers, [currentStep]: option };
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setShowResults(true);
      }
    }, 300);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  const recommendations = showResults ? getRecommendations(answers) : [];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1E3A5F] mb-3">
            Which Insurance Is Right for You?
          </h1>
          <p className="text-[#64748B] text-lg">
            Answer a few quick questions and we&apos;ll recommend the best guides for your situation.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="quiz-container mb-10">
          <div className="flex items-center justify-between text-xs text-[#64748B] mb-2">
            <span>{showResults ? 'Complete!' : `Question ${currentStep + 1} of ${questions.length}`}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="quiz-progress-bar">
            <div className="quiz-progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Quiz Content */}
        <div className="quiz-container">
          {!showResults ? (
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 sm:p-10">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1E3A5F] mb-8">
                {questions[currentStep].question}
              </h2>
              <div className="space-y-3">
                {questions[currentStep].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSelect(option)}
                    className={`quiz-option ${answers[currentStep] === option ? 'selected' : ''}`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {currentStep > 0 && (
                <button
                  onClick={handleBack}
                  className="mt-6 text-sm text-[#64748B] hover:text-[#1E3A5F] transition-colors flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back
                </button>
              )}
            </div>
          ) : (
            /* Results */
            <div className="animate-fade-in-up">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 sm:p-10 mb-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#059669]/10 rounded-full mb-4">
                    <svg className="w-8 h-8 text-[#059669]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-[#1E3A5F] mb-2">Based on your answers, we recommend:</h2>
                  <p className="text-[#64748B]">These guides are tailored to your situation and priorities.</p>
                </div>

                <div className="space-y-4">
                  {recommendations.map((rec) => (
                    <Link
                      key={rec.href}
                      href={rec.href}
                      className="block bg-[#F8FAFC] border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-[#D4A853]/40 transition-all group"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className={`inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full mb-2 ${categoryPillColors[rec.category] || 'bg-gray-100 text-gray-600'}`}>
                            {rec.category}
                          </span>
                          <h3 className="text-lg font-semibold text-[#1E3A5F] group-hover:text-[#D4A853] transition-colors mb-1">
                            {rec.title}
                          </h3>
                          <p className="text-sm text-[#64748B]">{rec.description}</p>
                        </div>
                        <svg className="w-5 h-5 text-[#94a3b8] group-hover:text-[#D4A853] shrink-0 mt-1 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="text-center space-y-4">
                <Link
                  href="/guides"
                  className="inline-flex items-center gap-2 text-[#1E3A5F] font-semibold hover:text-[#D4A853] transition-colors"
                >
                  Want more? Browse our full guide library
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <div>
                  <button
                    onClick={handleRestart}
                    className="text-sm text-[#64748B] hover:text-[#1E3A5F] transition-colors underline underline-offset-2"
                  >
                    Take the quiz again
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
