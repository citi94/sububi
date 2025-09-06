import { Question } from '../../types/latin'

export const thema9Questions: Question[] = [
  {
    id: "9-1",
    question: "What question does the genitive case answer?",
    options: ["Who? What?", "Whose?", "To whom?", "How?"],
    correctAnswer: 1,
    explanation: "The genitive case answers 'whose?' - it shows possession or ownership. Like 'the dog's bone' or 'Maria's book'."
  },
  {
    id: "9-2",
    question: "In 'liber puellae' (the girl's book), which word is in genitive case?",
    options: ["liber", "puellae", "Both words", "Neither word"],
    correctAnswer: 1,
    explanation: "'Puellae' is genitive case, meaning 'of the girl' or 'the girl's'. It shows whose book it is."
  },
  {
    id: "9-3",
    question: "What does the dative case show?",
    options: ["The subject", "The direct object", "To whom or for whom", "Whose something is"],
    correctAnswer: 2,
    explanation: "The dative case shows 'to whom' or 'for whom' something is done. It's the indirect object of the sentence."
  },
  {
    id: "9-4",
    question: "In 'Marcus puellae rosam dat' (Marcus gives a rose to the girl), what case is 'puellae'?",
    options: ["Nominative", "Accusative", "Genitive", "Dative"],
    correctAnswer: 3,
    explanation: "'Puellae' is dative case, meaning 'to the girl'. It shows who receives the rose - the indirect object."
  },
  {
    id: "9-5",
    question: "What is the genitive singular ending for 1st declension nouns like 'puella'?",
    options: ["-a", "-am", "-ae", "-is"],
    correctAnswer: 2,
    explanation: "First declension genitive singular ends in -ae. So 'puella' becomes 'puellae' meaning 'of the girl' or 'the girl's'."
  },
  {
    id: "9-6",
    question: "Which sentence shows possession?",
    options: ["Puella cantat", "Puella librum legit", "Puer puellae epistulam scribit", "Liber puellae magnus est"],
    correctAnswer: 3,
    explanation: "'Liber puellae magnus est' (The girl's book is big) shows possession. 'Puellae' is genitive, showing whose book it is."
  },
  {
    id: "9-7",
    question: "In 'Magister discipulis fabulam narrat' (The teacher tells a story to the students), what case is 'discipulis'?",
    options: ["Nominative", "Accusative", "Genitive", "Dative"],
    correctAnswer: 3,
    explanation: "'Discipulis' is dative plural, meaning 'to the students'. They are the ones receiving the story - the indirect object."
  },
  {
    id: "9-8",
    question: "What's the difference between 'dominus servi' and 'dominus servo'?",
    options: ["No difference", "'Servi' means 'the slave's master', 'servo' means 'to the slave'", "'Servi' means 'of the slave', 'servo' means 'to the slave'", "'Servi' is plural, 'servo' is singular"],
    correctAnswer: 2,
    explanation: "'Dominus servi' means 'the master of the slave' (genitive), while 'dominus servo' would mean 'the master to the slave' (dative)."
  }
]