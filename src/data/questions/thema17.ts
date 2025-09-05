import { Question } from '../../types/latin'

export const thema17Questions: Question[] = [
  {
    id: "17-1",
    question: "What makes a verb 'mixed conjugation'?",
    options: ["It uses endings from 1st conjugation", "It combines patterns from 3rd and 4th conjugations", "It's irregular", "It only exists in past tense"],
    correctAnswer: 1,
    explanation: "Mixed conjugation verbs (like capio, facio) look like 4th conjugation but follow 3rd conjugation patterns in most forms."
  },
  {
    id: "17-2",
    question: "How do you say 'I make' in Latin?",
    options: ["facio", "facis", "facit", "faciunt"],
    correctAnswer: 0,
    explanation: "'Facio' means 'I make' or 'I do'. It's a mixed conjugation verb that looks like 4th but acts like 3rd."
  },
  {
    id: "17-3",
    question: "What does 'capit' mean if 'capio' means 'I capture'?",
    options: ["you capture", "he/she captures", "we capture", "they capture"],
    correctAnswer: 1,
    explanation: "'Capit' means 'he/she captures'. Even though 'capio' looks like 4th conjugation, it uses 3rd conjugation endings."
  },
  {
    id: "17-4",
    question: "Which verbs are mixed conjugation?",
    options: ["amo, video", "capio, facio", "audio, venio", "sum, est"],
    correctAnswer: 1,
    explanation: "'Capio' (capture) and 'facio' (make/do) are the main mixed conjugation verbs. They end in -io but follow 3rd patterns."
  },
  {
    id: "17-5",
    question: "How do you say 'we make' in Latin?",
    options: ["facimus", "faciamus", "faciemus", "faciebamus"],
    correctAnswer: 0,
    explanation: "'Facimus' means 'we make'. Mixed conjugation verbs use regular 3rd conjugation endings for most forms."
  },
  {
    id: "17-6",
    question: "What's tricky about mixed conjugation verbs?",
    options: ["They're always irregular", "They look like 4th but mostly act like 3rd", "They only work in questions", "They can't be conjugated"],
    correctAnswer: 1,
    explanation: "Mixed conjugation verbs are tricky because they end in -io (like 4th conjugation) but use 3rd conjugation patterns for most forms."
  }
]