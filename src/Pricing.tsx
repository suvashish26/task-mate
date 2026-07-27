import { useState } from 'react'
import TopNav from './TopNav'
import Footer from './Footer'

const pricingPlans = [
  {
    name: 'Hobby',
    description: 'For individual mastery.',
    price: '$0',
    frequency: '/mo',
    features: ['Basic Kanban boards', 'Terminal-centric focus mode', 'Progressive learning tracking'],
    cta: 'Start for free',
    variant: 'outline',
  },
  {
    name: 'Pro',
    description: 'For serious builders.',
    price: '$12',
    frequency: '/mo',
    features: ['Everything in Hobby', 'Deep Work Analytics', 'GitHub/GitLab automated sync', 'Unlimited personal projects', 'Priority CLI access'],
    cta: 'Get Pro',
    variant: 'primary',
    badge: 'Most popular',
  },
  {
    name: 'Team',
    description: 'For high-growth engineering teams.',
    price: '$49',
    frequency: '/mo',
    features: ['Collaborative Sprints', 'Team Mastery Maps', 'Shared workflow templates', 'Priority support & onboarding'],
    cta: 'Contact Sales',
    variant: 'outline',
  },
]

const faqItems = [
  {
    question: 'Is there a public API available?',
    answer: 'Yes. You can connect to our public API to automate task creation, sync workflow data, and integrate with your team tools.',
  },
  {
    question: 'How is my data secured?',
    answer: 'We use encrypted storage, secure transport layers, and strict access controls to protect your information at every step.',
  },
  {
    question: 'Are there self-hosting options?',
    answer: 'Our current offering is managed SaaS, but we support private cloud deployments for enterprise customers.',
  },
  {
    question: 'What happens if I cancel my subscription?',
    answer: 'Your account will remain active through the current billing period, and you can export your data before the subscription ends.',
  },
]

const Pricing = () => {
  const [selectedBilling, setSelectedBilling] = useState<'monthly' | 'annual'>('monthly')
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <TopNav />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">TaskMate</p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Focus on mastery, not monthly fees
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Simple, transparent pricing designed for developers who value flow state over features bloat.
          </p>
        </section>

        <section className="mx-auto mt-10 flex flex-col items-center justify-center gap-3 rounded-full bg-slate-100 px-3 py-3 sm:w-fit sm:flex-row">
          <button
            onClick={() => setSelectedBilling('monthly')}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${selectedBilling === 'monthly' ? 'bg-slate-950 text-white shadow-sm' : 'bg-white text-slate-600 hover:bg-slate-100'}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setSelectedBilling('annual')}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${selectedBilling === 'annual' ? 'bg-slate-950 text-white shadow-sm' : 'bg-white text-slate-600 hover:bg-slate-100'}`}
          >
            Annual
          </button>
          <div className="rounded-full bg-violet-100 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">
            Save 20%
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`group rounded-[2rem] border p-6 shadow-sm transition ${plan.variant === 'primary' ? 'border-violet-600 bg-white shadow-slate-200' : 'border-slate-200 bg-white'}`}
            >
              {plan.badge ? (
                <div className="mb-5 inline-flex rounded-full bg-violet-600 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  {plan.badge}
                </div>
              ) : null}
              <h2 className="text-xl font-semibold text-slate-950">{plan.name}</h2>
              <p className="mt-2 text-sm text-slate-500">{plan.description}</p>
              <div className="mt-8 flex items-end gap-2">
                <p className="text-4xl font-semibold text-slate-950">{plan.price}</p>
                <span className="pb-1 text-sm text-slate-500">{plan.frequency}</span>
              </div>
              <ul className="mt-8 space-y-3 text-sm text-slate-600">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 block h-2.5 w-2.5 rounded-full bg-violet-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-10 inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition ${plan.variant === 'primary' ? 'bg-violet-600 text-white hover:bg-violet-700' : 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50'}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </section>

        <section className="mt-16 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Engineered for Focus</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Our pricing reflects our philosophy</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
                Tools should be invisible until you need them. No dark patterns, no hidden tiers. You should always know what you’re paying for and why.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-900">No hidden fees</p>
                <p className="mt-2 text-sm text-slate-600">What you see is what you pay, with straightforward upgrades for teams.</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-900">High-performance support</p>
                <p className="mt-2 text-sm text-slate-600">Support and onboarding are built into plans for every scale.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="flex flex-col gap-4 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Frequently Asked Questions</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">Get answers fast</h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-slate-600">
                Can’t find what you’re looking for? Reach out to our technical support team.
              </p>
            </div>
            <div className="mt-6 space-y-4">
              {faqItems.map((item, index) => {
                const isOpen = openFaq === index
                return (
                  <button
                    key={item.question}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-6 py-5 text-left transition hover:border-slate-300"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-base font-medium text-slate-950">{item.question}</span>
                      <span className="text-slate-500">{isOpen ? '−' : '+'}</span>
                    </div>
                    {isOpen ? <p className="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p> : null}
                  </button>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Pricing
