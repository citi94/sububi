import { Question } from '../../types/latin'

export const thema2Questions: Question[] = [
  {
    id: "2-1",
    question: "What case is 'puella' (girl) in the sentence 'Puella ambulat'?",
    options: ["Nominative", "Accusative", "Genitive", "Dative"],
    correctAnswer: 0,
    explanation: "'Puella' is the subject of the sentence (the one doing the walking), so it's in the nominative case."
  },
  {
    id: "2-2",
    question: "What is the accusative singular form of 'dominus' (lord/master)?",
    options: ["dominus", "domini", "dominum", "domino"],
    correctAnswer: 2,
    explanation: "'Dominum' is the accusative singular of 'dominus'. We use accusative for the direct object of a verb."
  },
  {
    id: "2-3",
    question: "Which word means 'table' in Latin?",
    options: ["mensa", "porta", "aqua", "terra"],
    correctAnswer: 0,
    explanation: "'Mensa' means table. It's a 1st declension noun, like 'puella' (girl) and 'porta' (gate)."
  },
  {
    id: "2-4",
    question: "What is the plural nominative of 'servus' (slave)?",
    options: ["servi", "servos", "servo", "servum"],
    correctAnswer: 0,
    explanation: "'Servi' is the nominative plural of 'servus'. The -i ending shows it's plural nominative for 2nd declension masculine nouns."
  },
  {
    id: "2-5",
    question: "In 'Marcus mensam videt', what case is 'mensam'?",
    options: ["Nominative", "Accusative", "Genitive", "Dative"],
    correctAnswer: 1,
    explanation: "'Mensam' is accusative because it's the direct object - the thing that Marcus sees. Accusative singular 1st declension ends in -am."
  },
  {
    id: "2-6",
    question: "What does 'aqua' mean?",
    options: ["earth", "water", "gate", "road"],
    correctAnswer: 1,
    explanation: "'Aqua' means water. It's a 1st declension feminine noun, like 'puella' and 'mensa'."
  },
  {
    id: "2-7",
    question: "Which declension does 'filius' (son) belong to?",
    options: ["1st declension", "2nd declension", "3rd declension", "4th declension"],
    correctAnswer: 1,
    explanation: "'Filius' is a 2nd declension noun. You can tell because it ends in -us and follows the same pattern as 'dominus' and 'servus'."
  }
]