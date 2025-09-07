import { Question } from '../../types/latin'

// Thema 1: The Verb 'To Be' (sum, esse)
// Multi-test progression: Test A (Introduction), Test B (Reinforcement), Test C (Mastery)
// Anti-gaming: Randomized answer positions, varied contexts, authentic distractors

export const thema1Questions: Question[] = [
  // TEST A: INTRODUCTION LEVEL (67% threshold) - Questions 1A-1 through 1A-6
  {
    id: "1A-1",
    question: "What does the Latin word 'sum' mean in English?",
    options: ["I am", "you are", "he is", "we are"],
    correctAnswer: 0,
    explanation: "'Sum' means 'I am'! Think of it like saying 'I am awesome!' The word 'sum' is how you say 'I am' in Latin. It's the most important word to learn first!"
  },
  {
    id: "1A-2", 
    question: "Which Latin word goes with 'tu' (you) to say 'you are'?",
    options: ["sum", "est", "sunt", "es"],
    correctAnswer: 3,
    explanation: "'Tu es' means 'you are'! Remember: 'tu' (you) always goes with 'es' (are). Think of 'yes, you are!' - the 'es' sounds like 'yes'!"
  },
  {
    id: "1A-3",
    question: "What does 'est' mean in English?",
    options: ["I am", "he/she/it is", "you are", "they are"],
    correctAnswer: 1,
    explanation: "'Est' means 'he is', 'she is', or 'it is'! When talking about one person or thing (not yourself or the person you're talking to), use 'est'."
  },
  {
    id: "1A-4",
    question: "Complete this sentence: 'Ego ___' (I am)",
    options: ["es", "est", "sum", "sunt"],
    correctAnswer: 2,
    explanation: "'Ego sum' means 'I am'! Even though 'ego' already means 'I', Romans liked to be extra clear. 'Ego' (I) + 'sum' (am) = 'I am'!"
  },
  {
    id: "1A-5",
    question: "What does 'sunt' mean?",
    options: ["they are", "we are", "you are", "I am"],
    correctAnswer: 0,
    explanation: "'Sunt' means 'they are'! When you're talking about more than one person or thing, 'sunt' is your word. Think: 'Sure, they are!' - 'sunt' sounds like 'sure'!"
  },
  {
    id: "1A-6",
    question: "Which Latin words mean 'we are'?",
    options: ["nos es", "ego sum", "tu es", "nos sumus"],
    correctAnswer: 3,
    explanation: "'Nos sumus' means 'we are'! 'Nos' means 'we' and 'sumus' means 'are' when talking about ourselves and others together."
  },

  // TEST B: REINFORCEMENT LEVEL (75% threshold) - Questions 1B-1 through 1B-6
  {
    id: "1B-1",
    question: "Marcus is a good student. How do you say 'Marcus is' in Latin?",
    options: ["Marcus sum", "Marcus est", "Marcus es", "Marcus sunt"],
    correctAnswer: 1,
    explanation: "'Marcus est' is correct! Since Marcus is one person (not you or someone you're talking to), we use 'est' which means 'he is'. 'Marcus est bonus discipulus' = 'Marcus is a good student'!"
  },
  {
    id: "1B-2",
    question: "Which pronoun (I, you, we, they) goes with the verb 'sumus'?",
    options: ["nos (we)", "ego (I)", "tu (you)", "puer (boy)"],
    correctAnswer: 0,
    explanation: "'Nos' (we) goes with 'sumus'! 'Nos sumus' means 'we are'. The -mus ending on 'sumus' is a clue that it's about 'we' - more than one person including yourself!"
  },
  {
    id: "1B-3",
    question: "What does 'Vos estis amici' mean?",
    options: ["We are friends", "I am a friend", "He is a friend", "You all are friends"],
    correctAnswer: 3,
    explanation: "'Vos estis amici' means 'You all are friends'! 'Vos' = you all, 'estis' = are (for you all), 'amici' = friends. It's talking to a group of people!"
  },
  {
    id: "1B-4",
    question: "Which of these is NOT a form of the verb 'sum, esse' (to be)?",
    options: ["est", "sumus", "amat", "sunt"],
    correctAnswer: 2,
    explanation: "'Amat' is NOT a form of 'sum, esse'! 'Amat' means 'he/she loves' and comes from 'amo, amare' (to love). The forms of 'to be' are: sum, es, est, sumus, estis, sunt."
  },
  {
    id: "1B-5",
    question: "How would you say 'The girls are happy' in Latin?",
    options: ["Puellae est laeta", "Puellae sunt laetae", "Puella sum laeta", "Puella es laeta"],
    correctAnswer: 1,
    explanation: "'Puellae sunt laetae' is correct! 'Puellae' = girls (more than one), so we need 'sunt' (they are). When there are multiple girls, everything needs to match: puellae sunt laetae!"
  },
  {
    id: "1B-6",
    question: "Why do we use 'es' in 'Tu es magnus' (You are big)?",
    options: ["Because 'tu' means 'you' and needs 'es'", "Because 'magnus' is big", "Because it sounds nice", "Because Romans liked long words"],
    correctAnswer: 0,
    explanation: "Correct! 'Tu' (you) always needs 'es' (are). In Latin, different people need different forms of 'to be': I am = sum, you are = es, he/she is = est. It's like a special matching game!"
  },

  // TEST C: MASTERY LEVEL (83% threshold) - Questions 1C-1 through 1C-6
  {
    id: "1C-1",
    question: "Complete this sentence correctly: 'Anna et Marcus ___ discipuli.' (Anna and Marcus ___ students.)",
    options: ["est", "es", "sunt", "sumus"],
    correctAnswer: 2,
    explanation: "'Anna et Marcus sunt discipuli' is correct! When you have two people (Anna AND Marcus), that's 'they', so you use 'sunt'. Even though you name them separately, together they're 'they are'!"
  },
  {
    id: "1C-2",
    question: "In Latin, why does the verb 'sum, esse' change its form?",
    options: ["To make it harder to learn", "To match WHO is doing the being (I, you, he, we, etc.)", "To sound more beautiful", "Because Romans were confused"],
    correctAnswer: 1,
    explanation: "Exactly! The verb changes to match WHO is being something. I am = sum, you are = es, he is = est, we are = sumus, you all are = estis, they are = sunt. Each person gets their own special form!"
  },
  {
    id: "1C-3",
    question: "Which sentence uses the verb 'sum, esse' correctly?",
    options: ["Ego et amicus meus sumus laeti", "Tu sum magnus", "Puella sunt bona", "Nos es discipuli"],
    correctAnswer: 0,
    explanation: "'Ego et amicus meus sumus laeti' is perfect! 'Ego et amicus meus' = 'my friend and I' = 'we', so we use 'sumus'. All the others mix up their verb forms with the wrong people!"
  },
  {
    id: "1C-4",
    question: "If someone says 'Magistra bona est', what can you tell about the teacher?",
    options: ["The teacher is a boy", "The teacher is sad", "The teacher loves students", "The teacher is a good woman"],
    correctAnswer: 3,
    explanation: "The teacher is a good woman! 'Magistra' = female teacher, 'bona' = good (feminine form), 'est' = she is. If it were a male teacher, it would be 'Magister bonus est'!"
  },
  {
    id: "1C-5",
    question: "What does 'Nos non sumus pigri' mean?",
    options: ["We are not pigs", "You are not lazy", "We are not lazy", "They are not big"],
    correctAnswer: 2,
    explanation: "'Nos non sumus pigri' means 'We are not lazy'! 'Nos' = we, 'non' = not, 'sumus' = are, 'pigri' = lazy. The word 'non' makes it negative - it's like saying 'We are NOT lazy!'"
  },
  {
    id: "1C-6",
    question: "A Roman student asks: 'Quis es?' What is the best way to answer?",
    options: ["Sum", "Est Marcus", "Ego sum Marcus", "Marcus sum ego"],
    correctAnswer: 2,
    explanation: "'Ego sum Marcus' is the best answer! 'Quis es?' means 'Who are you?' So you answer 'I am Marcus' = 'Ego sum Marcus'. Romans liked to put 'ego' first to be extra clear about who they were!"
  }
]