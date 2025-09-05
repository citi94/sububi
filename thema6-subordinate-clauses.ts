import { Question } from '../../types/latin'

export const thema6Questions: Question[] = [
  {
    id: "6-1",
    question: "What does 'dum' mean when it connects two parts of a sentence?",
    options: ["because", "while", "after", "if"],
    correctAnswer: 1,
    explanation: "Dum means 'while' and shows that two things are happening at the same time."
  },
  {
    id: "6-2",
    question: "Which Latin word means 'if' and starts conditional sentences?",
    options: ["dum", "si", "postquam", "cum"],
    correctAnswer: 1,
    explanation: "Si means 'if' and is used to start conditional clauses - sentences that depend on something else happening."
  },
  {
    id: "6-3",
    question: "What does 'postquam' mean?",
    options: ["before", "while", "if", "after"],
    correctAnswer: 3,
    explanation: "Postquam means 'after'. It shows that one thing happened after another thing finished."
  },
  {
    id: "6-4",
    question: "In the sentence 'Marcus legit dum mater coquit', what is happening?",
    options: ["Marcus reads after mother cooks", "Marcus reads if mother cooks", "Marcus reads while mother cooks", "Marcus reads before mother cooks"],
    correctAnswer: 2,
    explanation: "Marcus reads while mother cooks - 'dum' shows both actions happen at the same time."
  },
  {
    id: "6-5",
    question: "Which sentence correctly uses 'si' (if)?",
    options: ["Si pluit, domi manebo", "Dum pluit, domi manebo", "Postquam pluit, domi manebo", "Cum pluit, domi manebo"],
    correctAnswer: 0,
    explanation: "Si pluit, domi manebo means 'If it rains, I will stay home.' Si introduces a condition."
  },
  {
    id: "6-6",
    question: "What type of clause does 'postquam' introduce?",
    options: ["A time clause showing 'before'", "A time clause showing 'after'", "A condition clause", "A place clause"],
    correctAnswer: 1,
    explanation: "Postquam introduces a time clause that shows something happened after another event finished."
  },
  {
    id: "6-7",
    question: "In 'Postquam cenam consumpsimus, ludimus', when did they play?",
    options: ["Before they ate dinner", "While they ate dinner", "After they ate dinner", "If they ate dinner"],
    correctAnswer: 2,
    explanation: "They played after they ate dinner. Postquam means the playing happened after the eating was finished."
  },
  {
    id: "6-8",
    question: "Which word would you use to say 'Marcus studies while his sister sleeps'?",
    options: ["si", "postquam", "dum", "de"],
    correctAnswer: 2,
    explanation: "You would use 'dum' because both actions (studying and sleeping) happen at the same time."
  }
]