import { Question } from '../../types/latin'

export const thema3Questions: Question[] = [
  {
    id: "3-1",
    question: "Which case is used for the subject of a sentence (the person or thing doing the action)?",
    options: ["Nominative", "Accusative", "Genitive", "Dative"],
    correctAnswer: 0,
    explanation: "The nominative case is used for the subject of a sentence - the person or thing that is doing the action."
  },
  {
    id: "3-2",
    question: "In the sentence 'Puella librum legit' (The girl reads the book), which word is in the accusative case?",
    options: ["puella", "librum", "legit", "None of them"],
    correctAnswer: 1,
    explanation: "Librum (book) is in the accusative case because it's the direct object - the thing being read by the girl."
  },
  {
    id: "3-3",
    question: "What does the accusative case show in a Latin sentence?",
    options: ["Who owns something", "The subject doing the action", "The direct object receiving the action", "Where something happens"],
    correctAnswer: 2,
    explanation: "The accusative case shows the direct object - the person or thing that receives the action of the verb."
  },
  {
    id: "3-4",
    question: "Which word would be the subject (nominative) in this sentence: 'Marcus aquam bibit' (Marcus drinks water)?",
    options: ["Marcus", "aquam", "bibit", "All of them"],
    correctAnswer: 0,
    explanation: "Marcus is the subject (nominative case) because he's the one doing the drinking."
  },
  {
    id: "3-5",
    question: "If 'puella' means 'girl' in the nominative case, what would 'puellam' be?",
    options: ["Another girl", "The girl in accusative case", "Many girls", "The girl's something"],
    correctAnswer: 1,
    explanation: "Puellam is 'girl' in the accusative case - used when the girl is receiving the action (direct object)."
  },
  {
    id: "3-6",
    question: "In 'Pater filium amat' (The father loves his son), which case is 'filium'?",
    options: ["Nominative", "Accusative", "Genitive", "Dative"],
    correctAnswer: 1,
    explanation: "Filium (son) is in the accusative case because he's the direct object - the one being loved."
  },
  {
    id: "3-7",
    question: "Which sentence correctly shows nominative and accusative cases?",
    options: ["Canis cattus videt", "Canis cattum videt", "Canus cattus videt", "Canem cattus videt"],
    correctAnswer: 1,
    explanation: "Canis cattum videt (The dog sees the cat) - 'canis' is nominative (subject) and 'cattum' is accusative (direct object)."
  },
  {
    id: "3-8",
    question: "What question does the accusative case answer?",
    options: ["Who?", "What? or Whom?", "Whose?", "Where?"],
    correctAnswer: 1,
    explanation: "The accusative case answers 'what?' or 'whom?' - it tells us what or who is receiving the action."
  }
]