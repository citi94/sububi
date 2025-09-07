import { Question } from '../../types/latin'

// Thema 7: Nouns - The Genitive Case
// Multi-test progression: Test A (Introduction), Test B (Reinforcement), Test C (Mastery)
// Anti-gaming: Randomized answer positions, varied contexts, authentic distractors
// Core concept: Genitive case shows possession/ownership ("whose" or "of")

export const thema7Questions: Question[] = [
  // TEST A: INTRODUCTION LEVEL (67% threshold) - Questions 7A-1 through 7A-6
  {
    id: "7A-1",
    question: "In the phrase 'liber puellae' (the girl's book), whose book is it?",
    options: ["the boy's book", "the teacher's book", "the girl's book", "my book"],
    correctAnswer: 2,
    explanation: "It's the girl's book! 'Puellae' shows possession - it tells us the book belongs to the girl. This is called the genitive case, and it's like adding 's in English!"
  },
  {
    id: "7A-2",
    question: "What does 'domus magistri' mean in English?",
    options: ["the teacher's house", "the teacher loves the house", "the house is big", "the teacher is home"],
    correctAnswer: 0,
    explanation: "'Domus magistri' means 'the teacher's house'! 'Magistri' is the genitive form that shows the house belongs to the teacher. It's like saying 'the teacher's house' in English!"
  },
  {
    id: "7A-3",
    question: "Which word shows 'whose' in the phrase 'rosa matris' (mother's rose)?",
    options: ["rosa", "matris", "both words", "neither word"],
    correctAnswer: 1,
    explanation: "'Matris' shows 'whose'! This word is in the genitive case, which tells us WHO owns something. 'Matris' means 'of the mother' or 'mother's' - it shows possession!"
  },
  {
    id: "7A-4",
    question: "What question does the genitive case answer?",
    options: ["What?", "Where?", "Whose?", "When?"],
    correctAnswer: 2,
    explanation: "The genitive case answers 'Whose?'! It tells us who owns or possesses something. Like in 'the girl's book' - whose book? The girl's book! That's what genitive does in Latin!"
  },
  {
    id: "7A-5",
    question: "In 'aqua pueri' (the boy's water), which word means 'boy's'?",
    options: ["aqua", "pueri", "aqua pueri", "none of them"],
    correctAnswer: 1,
    explanation: "'Pueri' means 'boy's'! It's the genitive form that shows the water belongs to the boy. 'Aqua' means water, and 'pueri' tells us whose water it is!"
  },
  {
    id: "7A-6",
    question: "Which English word is most like what the genitive case does?",
    options: ["is", "and", "'s (apostrophe s)", "the"],
    correctAnswer: 2,
    explanation: "The apostrophe s ('s) is most like the genitive case! Just like we say 'Anna's book' in English, Latin uses genitive case to show 'Anna's' - who owns the book!"
  },

  // TEST B: REINFORCEMENT LEVEL (75% threshold) - Questions 7B-1 through 7B-6
  {
    id: "7B-1",
    question: "What case is the word 'magistri' in the phrase 'liber magistri' (the teacher's book)?",
    options: ["nominative", "accusative", "genitive", "vocative"],
    correctAnswer: 2,
    explanation: "'Magistri' is in the genitive case! It shows possession - the book belongs to the teacher. Genitive case endings for 2nd declension masculine nouns end in -i, like 'magistri'!"
  },
  {
    id: "7B-2",
    question: "Which ending shows genitive case for 1st declension nouns like 'puella'?",
    options: ["-a", "-ae", "-am", "-is"],
    correctAnswer: 1,
    explanation: "The -ae ending shows genitive case for 1st declension nouns! 'Puella' (girl) becomes 'puellae' (girl's). So 'liber puellae' means 'the girl's book'!"
  },
  {
    id: "7B-3",
    question: "Complete this phrase: 'The boy's house' = 'domus ___'",
    options: ["puer", "pueri", "puerum", "puero"],
    correctAnswer: 1,
    explanation: "'Domus pueri' means 'the boy's house'! 'Pueri' is the genitive form of 'puer' (boy). The -i ending shows possession - whose house? The boy's house!"
  },
  {
    id: "7B-4",
    question: "What does 'mater puellae' mean?",
    options: ["the girl loves mother", "mother and girl", "the girl's mother", "mother is a girl"],
    correctAnswer: 2,
    explanation: "'Mater puellae' means 'the girl's mother'! 'Mater' = mother, 'puellae' = girl's (genitive). The genitive shows whose mother - it belongs to/is related to the girl!"
  },
  {
    id: "7B-5",
    question: "Which phrase shows correct genitive usage?",
    options: ["puella rosa", "rosa puella", "rosa puellae", "puellae rosa est"],
    correctAnswer: 2,
    explanation: "'Rosa puellae' is correct! This means 'the girl's rose'. 'Puellae' is genitive (girl's), showing who owns the rose. The genitive word usually comes after the thing being possessed!"
  },
  {
    id: "7B-6",
    question: "Why do we use 'magistri' instead of 'magister' in 'domus magistri'?",
    options: ["Because it sounds better", "To show the house belongs to the teacher", "Because 'magister' is wrong", "To make it plural"],
    correctAnswer: 1,
    explanation: "We use 'magistri' to show the house belongs to the teacher! 'Magistri' is the genitive case of 'magister', showing possession. It's not about plural - it's about ownership!"
  },

  // TEST C: MASTERY LEVEL (83% threshold) - Questions 7C-1 through 7C-6
  {
    id: "7C-1",
    question: "In 'Liber discipuli in mensa est' (The student's book is on the table), identify the genitive word and explain its function.",
    options: ["'Liber' - it's the subject", "'Discipuli' - it shows whose book", "'Mensa' - it shows location", "'Est' - it shows the action"],
    correctAnswer: 1,
    explanation: "'Discipuli' is genitive and shows whose book! Even in a longer sentence, the genitive still answers 'whose?' The book belongs to the student. Genitive shows possession relationships!"
  },
  {
    id: "7C-2",
    question: "What's the difference between 'puella' and 'puellae' in these sentences: 'Puella bona est' vs 'Liber puellae magnus est'?",
    options: ["No difference - they're the same", "First is subject (girl is good), second is possessive (girl's book)", "First is plural, second is singular", "First is present, second is future"],
    correctAnswer: 1,
    explanation: "Perfect! First 'puella' is nominative (subject) - 'The girl is good'. Second 'puellae' is genitive (possessive) - 'The girl's book is big'. Same girl, different jobs in the sentence!"
  },
  {
    id: "7C-3",
    question: "Why is 'amici' genitive in 'domus amici' but nominative in 'amici boni sunt'?",
    options: ["It's not - both are nominative", "Context determines case: possession vs subject", "It's always genitive", "The word order changed"],
    correctAnswer: 1,
    explanation: "Context determines case! In 'domus amici' (friend's house), 'amici' shows possession (genitive). In 'amici boni sunt' (friends are good), 'amici' is the subject doing the being (nominative)."
  },
  {
    id: "7C-4",
    question: "Complete with the correct genitive form: 'Rosa ___ pulchra est' (The girl's rose is beautiful)",
    options: ["puella", "puellae", "puellarum", "puellam"],
    correctAnswer: 1,
    explanation: "'Rosa puellae pulchra est' - 'The girl's rose is beautiful'! 'Puellae' is the genitive singular of 'puella', showing the rose belongs to one girl. The -ae ending marks possession!"
  },
  {
    id: "7C-5",
    question: "In 'Marcus filium magistri videt' (Marcus sees the teacher's son), what relationship does the genitive show?",
    options: ["Marcus owns the teacher", "The teacher owns the son", "The son owns Marcus", "Marcus owns the son"],
    correctAnswer: 1,
    explanation: "The teacher owns/is related to the son! 'Magistri' (teacher's) is genitive, showing 'filium' (son) belongs to or is related to the teacher. Genitive connects two nouns in a possessive relationship!"
  },
  {
    id: "7C-6",
    question: "Analyze this sentence: 'Pueri libros puellarum legunt.' What does 'puellarum' tell us?",
    options: ["The girls are reading", "There are many books", "The books belong to the girls", "The boys are girls"],
    correctAnswer: 2,
    explanation: "The books belong to the girls! 'Puellarum' is genitive plural (girls'), showing the books are possessed by the girls. The boys are reading the girls' books. Genitive shows ownership relationships!"
  }
]