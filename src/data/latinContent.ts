import { Thema } from '../types/latin'
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
import { thema11Questions } from './questions/thema11'
import { thema12Questions } from './questions/thema12'
import { thema13Questions } from './questions/thema13'
import { thema14Questions } from './questions/thema14'
import { thema15Questions } from './questions/thema15'
import { thema16Questions } from './questions/thema16'
import { thema17Questions } from './questions/thema17'
import { thema18Questions } from './questions/thema18'
import { thema19Questions } from './questions/thema19'
import { thema20Questions } from './questions/thema20'

export const latinThemas: Thema[] = [
  {
    id: 1,
    title: "Thema I: Verbs",
    description: "Learn basic verb conjugations and forms",
    icon: "⚡",
    questions: thema1Questions
  },
  {
    id: 2,
    title: "Thema II: Nouns (1st & 2nd Declension)",
    description: "Master the first two noun declensions",
    icon: "📚",
    questions: thema2Questions
  },
  {
    id: 3,
    title: "Thema III: Cases",
    description: "Understanding nominative and accusative cases",
    icon: "🏛️",
    questions: thema3Questions
  },
  {
    id: 4,
    title: "Thema IV: Numbers",
    description: "Count from 1 to 10 in Latin",
    icon: "🔢",
    questions: thema4Questions
  },
  {
    id: 5,
    title: "Thema V: Prepositions",
    description: "Learn essential Latin prepositions",
    icon: "🔗",
    questions: thema5Questions
  },
  {
    id: 6,
    title: "Thema VI: Subordinate Clauses",
    description: "Understanding 'dum' and conditional clauses",
    icon: "🌊",
    questions: thema6Questions
  },
  {
    id: 7,
    title: "Thema VII: More Verb Tenses",
    description: "Future and perfect tense forms",
    icon: "⏰",
    questions: thema7Questions
  },
  {
    id: 8,
    title: "Thema VIII: Adverbs",
    description: "Learn common Latin adverbs",
    icon: "💨",
    questions: thema8Questions
  },
  {
    id: 9,
    title: "Thema IX: Genitive & Dative Cases",
    description: "Master the genitive and dative cases",
    icon: "🎯",
    questions: thema9Questions
  },
  {
    id: 10,
    title: "Thema X: Ablative Case Basics",
    description: "Introduction to the ablative case",
    icon: "🛡️",
    questions: thema10Questions
  },
  {
    id: 11,
    title: "Thema XI: More Ablative Case",
    description: "Advanced ablative case usage",
    icon: "🏺",
    questions: thema11Questions
  },
  {
    id: 12,
    title: "Thema XII: More Prepositions",
    description: "Additional preposition patterns",
    icon: "🌉",
    questions: thema12Questions
  },
  {
    id: 13,
    title: "Thema XIII: Vocative Case",
    description: "Learn the vocative case for direct address",
    icon: "📢",
    questions: thema13Questions
  },
  {
    id: 14,
    title: "Thema XIV: Questions",
    description: "Forming questions in Latin",
    icon: "❓",
    questions: thema14Questions
  },
  {
    id: 15,
    title: "Thema XV: Cardinal Numbers",
    description: "Numbers 11-100 and beyond",
    icon: "🔣",
    questions: thema15Questions
  },
  {
    id: 16,
    title: "Thema XVI: 3rd & 4th Conjugations",
    description: "Master the remaining verb conjugations",
    icon: "⚙️",
    questions: thema16Questions
  },
  {
    id: 17,
    title: "Thema XVII: Mixed Conjugations",
    description: "Handle verbs with mixed patterns",
    icon: "🔄",
    questions: thema17Questions
  },
  {
    id: 18,
    title: "Thema XVIII: Imperfect Tense",
    description: "Learn the imperfect tense",
    icon: "🕰️",
    questions: thema18Questions
  },
  {
    id: 19,
    title: "Thema XIX: Perfect Tense",
    description: "Master the perfect tense system",
    icon: "✨",
    questions: thema19Questions
  },
  {
    id: 20,
    title: "Thema XX: Comprehensive Review",
    description: "Put it all together for your test!",
    icon: "🏆",
    questions: thema20Questions
  }
]