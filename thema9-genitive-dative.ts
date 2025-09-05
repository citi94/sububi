import { Question } from '../../types/latin'

export const thema9Questions: Question[] = [
  {
    id: "9-1",
    question: "What does the genitive case show in Latin?",
    options: ["The subject of the sentence", "Ownership or possession", "The direct object", "Where something happens"],
    correctAnswer: 1,
    explanation: "The genitive case shows ownership or possession - like 's in English. For example, 'puellae liber' means 'the girl's book'."
  },
  {
    id: "9-2",
    question: "What does the dative case show?",
    options: ["Who owns something", "The indirect object (to/for whom)", "The subject doing the action", "The direct object"],
    correctAnswer: 1,
    explanation: "The dative case shows the indirect object - to whom or for whom something is done. It answers 'to whom?' or 'for whom?'"
  },
  {
    id: "9-3",
    question: "In 'Marcus puellae rosam dat' (Marcus gives a rose to the girl), which word is in the dative case?",
    options: ["Marcus", "puellae", "rosam", "dat"],
    correctAnswer: 1,
    explanation: "Puellae is in the dative case because she's the one receiving the rose - the indirect object (to the girl)."
  },
  {
    id: "9-4",
    question: "If 'domini' means 'of the master' or 'the master's', what case is it?",
    options: ["Nominative", "Accusative", "Genitive", "Dative"],
    correctAnswer: 2,
    explanation: "Domini is genitive case because it shows possession ('of the master' or 'the master's')."
  },
  {
    id: "9-5",
    question: "Which question does the genitive case answer?",
    options: ["Who?", "What?", "Whose?", "To whom?"],
    correctAnswer: 2,
    explanation: "The genitive case answers 'whose?' - it tells us who owns or possesses something."
  },
  {
    id: "9-6",
    question: "In 'Pater filio pecuniam dat' (Father gives money to his son), what case is 'filio'?",
    options: ["Nominative", "Accusative", "Genitive", "Dative"],
    correctAnswer: 3,
    explanation: "Filio is in the dative case because the son is the indirect object - the one receiving the money (to the son)."
  },
  {
    id: "9-7",
    question: "What does 'amicorum' mean if 'amicus' means 'friend'?",
    options: ["friend (subject)", "friend (direct object)", "of the friends/friends'", "to the friends"],
    correctAnswer: 2,
    explanation: "Amicorum is the genitive plural meaning 'of the friends' or 'the friends'' - showing possession by multiple friends."
  },
  {
    id: "9-8",
    question: "Which sentence correctly shows both genitive and dative cases?",
    options: ["Magister discipulos librum dat", "Magister discipulis magistri librum dat", "Magister discipulis librum dat", "Magister discipulorum libro dat"],
    correctAnswer: 2,
    explanation: "Magister discipulis librum dat (The teacher gives a book to the students) - 'discipulis' is dative (to the students), 'librum' is accusative (direct object)."
  }
]