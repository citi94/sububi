import { Question } from '../../types/latin'

export const thema13Questions: Question[] = [
  {
    id: "13-1",
    question: "What is the vocative case used for?",
    options: ["Showing possession", "Direct address/calling someone", "Showing location", "Showing time"],
    correctAnswer: 1,
    explanation: "The vocative case is used for direct address - when you're calling or speaking directly to someone."
  },
  {
    id: "13-2",
    question: "How do you say 'Marcus!' when calling to Marcus?",
    options: ["Marcus", "Marce", "Marci", "Marcum"],
    correctAnswer: 1,
    explanation: "'Marce!' is the vocative form. For 2nd declension -us names, drop the -us and add -e for direct address."
  },
  {
    id: "13-3",
    question: "In 'Salve, amice!' (Hello, friend!), what case is 'amice'?",
    options: ["Nominative", "Accusative", "Dative", "Vocative"],
    correctAnswer: 3,
    explanation: "'Amice' is vocative case because you're directly addressing the friend. It's like saying 'Hello, friend!'"
  },
  {
    id: "13-4",
    question: "What is the vocative of 'puella' (girl)?",
    options: ["puella", "puellam", "puellae", "puello"],
    correctAnswer: 0,
    explanation: "For 1st declension nouns like 'puella', the vocative is the same as nominative. So it's 'puella!' when calling a girl."
  },
  {
    id: "13-5",
    question: "How would you say 'Come here, students!' in Latin if 'discipuli' means students?",
    options: ["Venite, discipuli!", "Venite, discipulos!", "Venite, discipulorum!", "Venite, discipulis!"],
    correctAnswer: 0,
    explanation: "'Venite, discipuli!' uses vocative plural, which is the same as nominative plural for most nouns."
  },
  {
    id: "13-6",
    question: "Which sentence shows someone being called or addressed?",
    options: ["Marcus librum legit", "Marco librum do", "Marce, veni huc!", "Marcum video"],
    correctAnswer: 2,
    explanation: "'Marce, veni huc!' (Marcus, come here!) uses vocative 'Marce' to directly address Marcus."
  }
]