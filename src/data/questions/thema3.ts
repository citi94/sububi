import { Question } from '../../types/latin'

// Thema 3: Subjects (Nominative Case)
// Multi-test progression: Test A (Introduction), Test B (Reinforcement), Test C (Mastery)
// Anti-gaming: Randomized answer positions, varied contexts, authentic distractors
// Focus: WHO does the action (subjects only, building on known verbs from Themas 1-2)

export const thema3Questions: Question[] = [
  // TEST A: INTRODUCTION LEVEL (67% threshold) - Questions 3A-1 through 3A-6
  // Focus: Basic subject identification in familiar sentences
  {
    id: "3A-1",
    question: "In the sentence 'Puella cantat' (The girl sings), who is doing the singing?",
    options: ["the song", "the girl", "the teacher", "everyone"],
    correctAnswer: 1,
    explanation: "The girl is doing the singing! 'Puella' (the girl) is the subject - she's the one performing the action. The subject tells us WHO does what the verb says."
  },
  {
    id: "3A-2",
    question: "Look at 'Marcus ambulat' (Marcus walks). What is 'Marcus' called in grammar?",
    options: ["the verb", "the subject", "the action", "the place"],
    correctAnswer: 1,
    explanation: "'Marcus' is the subject! The subject is the person or thing doing the action. Marcus is the one walking, so he's the subject of the sentence."
  },
  {
    id: "3A-3",
    question: "Which word is the subject in 'Magistra laborat' (The teacher works)?",
    options: ["laborat", "works", "magistra", "the"],
    correctAnswer: 2,
    explanation: "'Magistra' is the subject! She's the one doing the working. The subject always tells us WHO or WHAT is doing the action in the sentence."
  },
  {
    id: "3A-4",
    question: "Complete: '_____ est bonus discipulus' (_____ is a good student). Who could be the subject?",
    options: ["Marcus", "in schola", "bonus", "laborat"],
    correctAnswer: 0,
    explanation: "'Marcus' could be the subject! The subject comes before 'est' and tells us WHO is a good student. Only a person's name can be the subject here."
  },
  {
    id: "3A-5",
    question: "In 'Discipuli cantant' (The students sing), how many people are doing the singing?",
    options: ["none", "one student", "many students", "the teacher"],
    correctAnswer: 2,
    explanation: "Many students are singing! 'Discipuli' means 'students' (more than one), and they're all doing the singing together. The subject can be one person or many people."
  },
  {
    id: "3A-6",
    question: "What does the subject of a sentence tell us?",
    options: ["where something happens", "when something happens", "who does the action", "why something happens"],
    correctAnswer: 2,
    explanation: "The subject tells us WHO does the action! Whether it's a person, animal, or thing - the subject is always the 'doer' of whatever the verb describes."
  },

  // TEST B: REINFORCEMENT LEVEL (75% threshold) - Questions 3B-1 through 3B-6
  // Focus: Distinguishing subjects from other sentence parts, understanding nominative case function
  {
    id: "3B-1",
    question: "In 'Pueri et puellae ambulant' (The boys and girls walk), what is the complete subject?",
    options: ["pueri", "puellae", "pueri et puellae", "ambulant"],
    correctAnswer: 2,
    explanation: "'Pueri et puellae' is the complete subject! When you have 'boys AND girls' together, they're all doing the walking, so the whole phrase is the subject."
  },
  {
    id: "3B-2",
    question: "Which sentence has 'magister' (teacher) as the subject?",
    options: ["Discipulus magistrum amat", "Magister est bonus", "In schola magistri", "Cum magistro ambulamus"],
    correctAnswer: 1,
    explanation: "'Magister est bonus' has 'magister' as the subject! He's the one who IS good. In the other sentences, 'magister' appears in different forms but isn't the subject."
  },
  {
    id: "3B-3",
    question: "Look at 'Nos sumus laeti' (We are happy). What type of word is 'nos'?",
    options: ["a verb", "a subject pronoun", "an adjective", "an adverb"],
    correctAnswer: 1,
    explanation: "'Nos' is a subject pronoun! It's the subject that tells us WHO is happy. Subject pronouns like 'nos' (we), 'ego' (I), and 'tu' (you) can be subjects."
  },
  {
    id: "3B-4",
    question: "In Latin, the subject is usually in which case?",
    options: ["accusative case", "genitive case", "nominative case", "dative case"],
    correctAnswer: 2,
    explanation: "The subject is in the nominative case! This is the 'naming' case - it names who or what does the action. Nominative = the subject case."
  },
  {
    id: "3B-5",
    question: "Which word could NOT be a subject in a Latin sentence?",
    options: ["puella (girl)", "ego (I)", "bene (well)", "discipuli (students)"],
    correctAnswer: 2,
    explanation: "'Bene' (well) cannot be a subject! It's an adverb that tells HOW something is done. Subjects are nouns or pronouns - people, places, or things that DO actions."
  },
  {
    id: "3B-6",
    question: "Complete: 'Anna _____ in horto' (Anna _____ in the garden). Which verb agrees with the subject 'Anna'?",
    options: ["ambulo (I walk)", "ambulas (you walk)", "ambulat (she walks)", "ambulamus (we walk)"],
    correctAnswer: 2,
    explanation: "'Ambulat' agrees with Anna! Since Anna is one person (she), we need 'ambulat' (she walks). The verb must match the subject in person and number."
  },

  // TEST C: MASTERY LEVEL (83% threshold) - Questions 3C-1 through 3C-6
  // Focus: Complex subject recognition, nominative vs. other cases, advanced application
  {
    id: "3C-1",
    question: "Analyze: 'Magistra discipulos vocat' (The teacher calls the students). Why is 'magistra' the subject?",
    options: ["Because it comes first", "Because it ends in -a", "Because she performs the calling action", "Because she's a teacher"],
    correctAnswer: 2,
    explanation: "'Magistra' is the subject because SHE performs the calling action! The subject is always the one doing what the verb describes, regardless of word order or endings."
  },
  {
    id: "3C-2",
    question: "Which sentence correctly shows a plural subject with its matching verb?",
    options: ["Puellae cantat in schola", "Magistri laborat bene", "Discipuli ambulant ad scholam", "Amici est laetus"],
    correctAnswer: 2,
    explanation: "'Discipuli ambulant ad scholam' is correct! 'Discipuli' (students - plural subject) matches with 'ambulant' (they walk - plural verb). Subject and verb must agree in number."
  },
  {
    id: "3C-3",
    question: "In 'Tu et ego sumus amici' (You and I are friends), what is the subject and why do we use 'sumus'?",
    options: ["'Tu' is subject; 'sumus' means 'you are'", "'Ego' is subject; 'sumus' means 'I am'", "'Tu et ego' is subject; 'sumus' means 'we are'", "'Amici' is subject; 'sumus' means 'friends are'"],
    correctAnswer: 2,
    explanation: "'Tu et ego' (you and I) is the complete subject, and 'sumus' means 'we are'! When you combine 'you and I', that equals 'we', so we use the 'we' form of the verb."
  },
  {
    id: "3C-4",
    question: "Compare these forms: 'puella' vs. 'puellam'. Which one can be a subject and why?",
    options: ["'puellam' - it's longer", "'puella' - it's in nominative case", "'puellam' - it sounds better", "Both can be subjects"],
    correctAnswer: 1,
    explanation: "'Puella' can be the subject because it's in nominative case! 'Puellam' is accusative case (used for direct objects). Only nominative forms can be subjects."
  },
  {
    id: "3C-5",
    question: "Create a sentence: If 'laborare' means 'to work' and you want to say 'The students work', what goes in the blank? '___ laborant.'",
    options: ["Discipulos", "Discipuli", "Discipulo", "Discipulum"],
    correctAnswer: 1,
    explanation: "'Discipuli laborant' (The students work) is correct! 'Discipuli' is the nominative plural form - the subject form for 'students' who are doing the working."
  },
  {
    id: "3C-6",
    question: "Advanced: In 'Mater et pater nos amant' (Mother and father love us), identify the complete subject and explain the verb choice.",
    options: ["'Nos' is subject; 'amant' means 'we love'", "'Mater' is subject; 'amant' means 'she loves'", "'Mater et pater' is subject; 'amant' means 'they love'", "'Mater et pater nos' is all the subject"],
    correctAnswer: 2,
    explanation: "'Mater et pater' is the complete subject meaning 'mother and father'! Since that's two people (they), we use 'amant' (they love). 'Nos' is the direct object (whom they love)."
  }
]