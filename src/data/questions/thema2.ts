import { Question } from '../../types/latin'

// Thema 2: Intransitive Verbs (1st Conjugation Patterns)
// Multi-test progression: Test A (Introduction), Test B (Reinforcement), Test C (Mastery)
// Anti-gaming: Randomized answer positions, varied contexts, authentic distractors

export const thema2Questions: Question[] = [
  // TEST A: INTRODUCTION LEVEL (67% threshold) - Questions 2A-1 through 2A-6
  {
    id: "2A-1",
    question: "What does the Latin verb 'amo' mean in English?",
    options: ["I love", "I walk", "I work", "I sing"],
    correctAnswer: 0,
    explanation: "'Amo' means 'I love'! This is a 1st conjugation verb ending in -o, which means 'I' do the action. Think 'I am in love' - 'amo' sounds like 'am-o'!"
  },
  {
    id: "2A-2", 
    question: "Which Latin word means 'to walk'?",
    options: ["cantare", "ambulare", "laborare", "vocare"],
    correctAnswer: 1,
    explanation: "'Ambulare' means 'to walk'! Remember 'ambulance' - it helps people walk (or move) to the hospital! The infinitive form ends in -are."
  },
  {
    id: "2A-3",
    question: "What does 'canto' mean?",
    options: ["I call", "I work", "I sing", "I love"],
    correctAnswer: 2,
    explanation: "'Canto' means 'I sing'! Think of a 'cantor' in church who sings, or 'can't stop singing'! The -o ending means 'I' do the singing."
  },
  {
    id: "2A-4",
    question: "Complete this sentence: 'Marcus ___' (Marcus walks)",
    options: ["ambulat", "ambulo", "ambulare", "ambulant"],
    correctAnswer: 0,
    explanation: "'Marcus ambulat' means 'Marcus walks'! Since Marcus is one person (he), we use 'ambulat' which ends in -t for 'he/she/it does the action'."
  },
  {
    id: "2A-5",
    question: "What is the infinitive (to + verb) form of 'laboro' (I work)?",
    options: ["laborat", "laborare", "laborant", "laboramus"],
    correctAnswer: 1,
    explanation: "'Laborare' means 'to work'! The infinitive form always ends in -are for 1st conjugation verbs. Think 'labor-are' = 'to do labor/work'!"
  },
  {
    id: "2A-6",
    question: "Which verb means 'I call' in Latin?",
    options: ["voco", "canto", "laboro", "ambulo"],
    correctAnswer: 0,
    explanation: "'Voco' means 'I call'! Think of 'vocal' - using your voice to call someone. The -o ending shows it's 'I' who does the calling."
  },

  // TEST B: REINFORCEMENT LEVEL (75% threshold) - Questions 2B-1 through 2B-6
  {
    id: "2B-1",
    question: "Anna loves to sing. How do you say 'Anna sings' in Latin?",
    options: ["Anna canto", "Anna cantat", "Anna cantare", "Anna cantant"],
    correctAnswer: 1,
    explanation: "'Anna cantat' is correct! Since Anna is one person (she), we use 'cantat' which ends in -t for 'he/she/it sings'. One person = -t ending!"
  },
  {
    id: "2B-2",
    question: "Which ending do we use with 'nos' (we) for 1st conjugation verbs?",
    options: ["-t", "-mus", "-nt", "-s"],
    correctAnswer: 1,
    explanation: "'Nos' (we) uses the -mus ending! 'Nos ambulamus' = 'we walk'. Think 'Must walk together' - 'mus' for 'we must'!"
  },
  {
    id: "2B-3",
    question: "What does 'Tu laboras' mean?",
    options: ["I work", "You work", "He works", "We work"],
    correctAnswer: 1,
    explanation: "'Tu laboras' means 'You work'! 'Tu' means 'you' and 'laboras' ends in -s, which is the ending for 'you' (singular) in 1st conjugation verbs."
  },
  {
    id: "2B-4",
    question: "Complete: 'Pueri ___' (The boys walk)",
    options: ["ambulamus", "ambulat", "ambulant", "ambulas"],
    correctAnswer: 2,
    explanation: "'Pueri ambulant' is correct! 'Pueri' means 'boys' (more than one), so we need 'ambulant' with the -nt ending for 'they walk'."
  },
  {
    id: "2B-5",
    question: "Which is NOT a correct person/number ending for 1st conjugation verbs?",
    options: ["-o (I)", "-s (you)", "-unt (they)", "-mus (we)"],
    correctAnswer: 2,
    explanation: "'-unt' is NOT correct for 1st conjugation! The correct 'they' ending is '-nt' (like ambulant). '-unt' is used in other conjugations, not the 1st!"
  },
  {
    id: "2B-6",
    question: "How would you say 'We love' in Latin?",
    options: ["amamus", "amant", "amat", "amas"],
    correctAnswer: 0,
    explanation: "'Amamus' means 'we love'! The -mus ending is for 'we': am- (love stem) + -amus (we ending) = 'we love'. Remember: 'We must love' = 'amamus'!"
  },

  // TEST C: MASTERY LEVEL (83% threshold) - Questions 2C-1 through 2C-6
  {
    id: "2C-1",
    question: "Complete correctly: 'Magistra et discipuli ___' (The teacher and students work together)",
    options: ["laborat", "laborant", "laboramus", "laboras"],
    correctAnswer: 1,
    explanation: "'Magistra et discipuli laborant' is correct! When you have multiple people (teacher AND students), you need 'laborant' with -nt ending for 'they work'."
  },
  {
    id: "2C-2",
    question: "Which sentence shows the correct verb form for its subject?",
    options: ["Ego cantas (I sing)", "Tu ambulant (You walk)", "Nos vocamus (We call)", "Marcus laborant (Marcus works)"],
    correctAnswer: 2,
    explanation: "'Nos vocamus' is the only correct match! Ego needs -o, tu needs -s, nos needs -mus (correct!), and Marcus needs -t. Subject and verb must agree!"
  },
  {
    id: "2C-3",
    question: "What's wrong with this sentence: 'Puella ambulare in horto'?",
    options: ["Nothing - it's correct", "'Ambulare' should be 'ambulat'", "'Puella' should be 'Puellae'", "'Horto' should be 'hortus'"],
    correctAnswer: 1,
    explanation: "The infinitive 'ambulare' (to walk) should be 'ambulat' (she walks)! We need the conjugated form 'ambulat' because Puella (the girl) is actually doing the walking now."
  },
  {
    id: "2C-4",
    question: "Choose the sentence that means 'You all call loudly':",
    options: ["Vos vocatis clare", "Tu vocas clare", "Nos vocamus clare", "Pueri vocant clare"],
    correctAnswer: 0,
    explanation: "'Vos vocatis clare' means 'You all call loudly'! 'Vos' = you all, 'vocatis' = call (with -tis ending for 'you all'), 'clare' = loudly/clearly."
  },
  {
    id: "2C-5",
    question: "Why can't we say 'Marcus et Anna ambulat' for 'Marcus and Anna walk'?",
    options: ["'Marcus' should come after 'Anna'", "'Ambulat' is for one person, but we have two people", "'Et' is the wrong word for 'and'", "The sentence is actually correct"],
    correctAnswer: 1,
    explanation: "Correct! 'Ambulat' is for one person (-t ending), but 'Marcus et Anna' is two people. We need 'ambulant' (-nt ending) for 'they walk': 'Marcus et Anna ambulant'."
  },
  {
    id: "2C-6",
    question: "Complete this conversation: 'Quid facis?' 'Ego ___.' (What are you doing? I am singing.)",
    options: ["canto", "cantas", "cantat", "cantare"],
    correctAnswer: 0,
    explanation: "'Ego canto' means 'I am singing'! Even though 'ego' (I) is stated, we still need 'canto' with -o ending for 'I sing/am singing'. Perfect conversation response!"
  }
]