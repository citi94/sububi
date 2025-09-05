import { Question } from '../../types/latin'

export const thema3Questions: Question[] = [
  {
    id: "3-1",
    question: "In 'Puella librum legit' (The girl reads the book), what case is 'puella'?",
    options: ["Nominative", "Accusative", "Genitive", "Dative"],
    correctAnswer: 0,
    explanation: "'Puella' is the subject of the sentence (who is doing the reading), so it's in the nominative case."
  },
  {
    id: "3-2",
    question: "In 'Marcus aquam videt' (Marcus sees the water), what case is 'aquam'?",
    options: ["Nominative", "Accusative", "Genitive", "Dative"],
    correctAnswer: 1,
    explanation: "'Aquam' is the direct object (what Marcus sees), so it's in the accusative case. Accusative answers 'what?' or 'whom?'."
  },
  {
    id: "3-3",
    question: "Which case do we use for the subject of a sentence?",
    options: ["Accusative", "Nominative", "Genitive", "Ablative"],
    correctAnswer: 1,
    explanation: "The nominative case is always used for the subject - the person or thing doing the action in the sentence."
  },
  {
    id: "3-4",
    question: "What question does the accusative case answer?",
    options: ["Who? What?", "What? Whom?", "Whose?", "Where?"],
    correctAnswer: 1,
    explanation: "The accusative case answers 'what?' or 'whom?' - it shows the direct object of the verb."
  },
  {
    id: "3-5",
    question: "In 'Servus dominum vocat' (The slave calls the master), which word is nominative?",
    options: ["servus", "dominum", "vocat", "None of them"],
    correctAnswer: 0,
    explanation: "'Servus' is nominative because it's the subject (who is calling). 'Dominum' is accusative (who is being called)."
  },
  {
    id: "3-6",
    question: "What is the accusative singular ending for most 1st declension nouns like 'puella'?",
    options: ["-a", "-am", "-ae", "-as"],
    correctAnswer: 1,
    explanation: "First declension nouns (like puella) end in -am in the accusative singular: puella becomes puellam."
  },
  {
    id: "3-7",
    question: "In 'Poeta fabulam narrat' (The poet tells a story), what case is 'fabulam'?",
    options: ["Nominative", "Accusative", "Genitive", "Vocative"],
    correctAnswer: 1,
    explanation: "'Fabulam' is accusative because it's the direct object - the thing being told. It answers 'what does he tell?'"
  },
  {
    id: "3-8",
    question: "Which word would be the subject in a Latin sentence?",
    options: ["The word in accusative case", "The word in nominative case", "The verb", "The word at the end"],
    correctAnswer: 1,
    explanation: "The subject is always in the nominative case. It tells us who or what is performing the action of the verb."
  }
]