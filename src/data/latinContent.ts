import { Thema, Question } from '../types/latin'
import { thema1Questions } from './questions/thema1'
import { thema2Questions } from './questions/thema2'
import { thema3Questions } from './questions/thema3'
import { thema4Questions } from './questions/thema4'
import { thema5Questions } from './questions/thema5'
import { thema6Questions } from './questions/thema6'
import { thema7Questions } from './questions/thema7'
import { thema8Questions } from './questions/thema8'
import { thema9Questions } from './questions/thema9'
import { thema10Questions } from './questions/thema10'

// Utility function to organize questions by test level
function organizeQuestionsByTest(questions: Question[]) {
  const testA = questions.filter(q => q.id.includes('A-'))
  const testB = questions.filter(q => q.id.includes('B-'))
  const testC = questions.filter(q => q.id.includes('C-'))
  
  return {
    A: testA.length > 0 ? testA : questions.slice(0, 6), // fallback for old format
    B: testB.length > 0 ? testB : questions.slice(6, 12),
    C: testC.length > 0 ? testC : questions.slice(12, 18)
  }
}

export const latinThemas: Thema[] = [
  {
    id: 1,
    title: "Thema I: The Verb 'To Be'",
    description: "Master sum, es, est and personal pronouns ego, tu",
    icon: "⚡",
    questions: thema1Questions,
    tests: organizeQuestionsByTest(thema1Questions)
  },
  {
    id: 2,
    title: "Thema II: Intransitive Verbs",
    description: "Learn 1st conjugation verbs and basic verb patterns",
    icon: "🏃",
    questions: thema2Questions,
    tests: organizeQuestionsByTest(thema2Questions)
  },
  {
    id: 3,
    title: "Thema III: Subjects (Nominative Case)",
    description: "Understand subjects and basic noun declensions",
    icon: "👤",
    questions: thema3Questions,
    tests: organizeQuestionsByTest(thema3Questions)
  },
  {
    id: 4,
    title: "Thema IV: Objects (Accusative Case)", 
    description: "Learn direct objects and accusative endings",
    icon: "🎯",
    questions: thema4Questions,
    tests: organizeQuestionsByTest(thema4Questions)
  },
  {
    id: 5,
    title: "Thema V: Genders",
    description: "Master masculine, feminine, and neuter nouns",
    icon: "⚖️",
    questions: thema5Questions,
    tests: organizeQuestionsByTest(thema5Questions)
  },
  {
    id: 6,
    title: "Thema VI: Adjectives",
    description: "Learn adjective agreement in gender, number, and case",
    icon: "🎨",
    questions: thema6Questions,
    tests: organizeQuestionsByTest(thema6Questions)
  },
  {
    id: 7,
    title: "Thema VII: Nouns - The Genitive Case",
    description: "Understand possession and 'of' relationships",
    icon: "🏠",
    questions: thema7Questions,
    tests: organizeQuestionsByTest(thema7Questions)
  },
  {
    id: 8,
    title: "Thema VIII: First and Second Conjugations",
    description: "Compare 1st (-are) and 2nd (-ere) conjugation patterns",
    icon: "📋",
    questions: thema8Questions,
    tests: organizeQuestionsByTest(thema8Questions)
  },
  {
    id: 9,
    title: "Thema IX: Nouns - The Dative Case",
    description: "Learn indirect objects and 'to/for' relationships",
    icon: "📫",
    questions: thema9Questions,
    tests: organizeQuestionsByTest(thema9Questions)
  },
  {
    id: 10,
    title: "Thema X: Nouns - The Ablative Case",
    description: "Master basic ablative usage: 'by', 'with', 'from'",
    icon: "🛡️",
    questions: thema10Questions,
    tests: organizeQuestionsByTest(thema10Questions)
  }
]