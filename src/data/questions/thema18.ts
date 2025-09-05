import { Question } from '../../types/latin'

export const thema18Questions: Question[] = [
  {
    id: "18-1",
    question: "What does the imperfect tense show?",
    options: ["Something happening now", "Something that will happen", "Something that was happening or used to happen", "Something completed in the past"],
    correctAnswer: 2,
    explanation: "The imperfect tense shows ongoing past action or something that used to happen repeatedly. Like 'I was reading' or 'I used to read'."
  },
  {
    id: "18-2",
    question: "What are the imperfect endings for all verbs?",
    options: ["-bam, -bas, -bat, -bamus, -batis, -bant", "-vi, -visti, -vit, -vimus, -vistis, -verunt", "-bo, -bis, -bit, -bimus, -bitis, -bunt", "-m, -s, -t, -mus, -tis, -nt"],
    correctAnswer: 0,
    explanation: "All verbs use the same imperfect endings: -bam (I was), -bas (you were), -bat (he/she was), -bamus (we were), -batis (you all were), -bant (they were)."
  },
  {
    id: "18-3",
    question: "What does 'ambulabat' mean?",
    options: ["he walks", "he will walk", "he was walking", "he has walked"],
    correctAnswer: 2,
    explanation: "'Ambulabat' means 'he was walking' or 'he used to walk'. The -bat ending shows imperfect tense."
  },
  {
    id: "18-4",
    question: "How do you say 'I was singing' in Latin if 'canto' means 'I sing'?",
    options: ["cantabo", "cantavi", "cantabam", "canto"],
    correctAnswer: 2,
    explanation: "'Cantabam' means 'I was singing' or 'I used to sing'. Take the stem 'canta-' and add imperfect ending '-bam'."
  },
  {
    id: "18-5",
    question: "What does 'erant' mean if 'sunt' means 'they are'?",
    options: ["they will be", "they were", "they have been", "they are"],
    correctAnswer: 1,
    explanation: "'Erant' means 'they were'. It's the imperfect tense of 'sunt' (they are), showing ongoing past state."
  },
  {
    id: "18-6",
    question: "Which sentence is in imperfect tense?",
    options: ["Marcus librum legit", "Marcus librum leget", "Marcus librum legebat", "Marcus librum legerat"],
    correctAnswer: 2,
    explanation: "'Marcus librum legebat' (Marcus was reading the book) is imperfect. The -ebat ending shows ongoing past action."
  }
]