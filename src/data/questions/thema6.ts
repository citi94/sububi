import { Question } from '../../types/latin'

// Test A: Introduction - Basic adjective recognition (67% threshold)
const testA: Question[] = [
  {
    id: "6A-1",
    question: "What does the Latin adjective 'magnus' mean?",
    options: ["big/great", "small", "bad", "good"],
    correctAnswer: 0,
    explanation: "'Magnus' means 'big' or 'great'! Like a magnificent castle or a great leader - something large and important."
  },
  {
    id: "6A-2", 
    question: "In 'puella bona' (good girl), what does 'bona' do?",
    options: ["names the girl", "describes the girl", "shows location", "indicates time"],
    correctAnswer: 1,
    explanation: "'Bona' describes the girl! Adjectives tell us what nouns are like. 'Bona' tells us the girl is good."
  },
  {
    id: "6A-3",
    question: "What does 'parvus' mean?",
    options: ["small", "big", "good", "bad"],
    correctAnswer: 0,
    explanation: "'Parvus' means 'small'! Think of a tiny puppy or a little coin - something not big."
  },
  {
    id: "6A-4",
    question: "What makes 'magnum' different from 'templum' in 'templum magnum'?",
    options: ["'Magnum' is longer", "'Magnum' describes, 'templum' names", "'Magnum' is harder to say", "'Magnum' comes second"],
    correctAnswer: 1,
    explanation: "'Magnum' describes while 'templum' names! 'Templum' names what we're talking about (a temple), 'magnum' describes what it's like (big)."
  },
  {
    id: "6A-5",
    question: "What does the adjective 'bonus' mean?",
    options: ["big", "small", "old", "good"],
    correctAnswer: 3,
    explanation: "'Bonus' means 'good'! Like a bonus point in games - something positive and nice."
  },
  {
    id: "6A-6",
    question: "What do adjectives like 'magnus' and 'bonus' tell us about nouns?",
    options: ["their location", "who owns them", "what they're like", "when they exist"],
    correctAnswer: 2,
    explanation: "Adjectives tell us what nouns are like! 'Magnus' tells us a temple is big, 'bonus' tells us a boy is good. They describe qualities!"
  }
]

// Test B: Reinforcement - Agreement rules and application (75% threshold)
const testB: Question[] = [
  {
    id: "6B-1",
    question: "Why does 'puella bona' use 'bona' instead of 'bonus'?",
    options: ["Bonus is the wrong word", "Adjectives must match their noun's gender", "Girls are always bona", "It sounds better"],
    correctAnswer: 1,
    explanation: "Adjectives must match their noun's gender! 'Puella' is feminine, so we use the feminine form 'bona' to match."
  },
  {
    id: "6B-2",
    question: "Which form of 'magnus' goes with 'templum' (neuter)?",
    options: ["magnus", "magna", "magnum", "any form works"],
    correctAnswer: 2,
    explanation: "'Magnum' matches 'templum'! Both are neuter. In Latin, adjectives change their endings to match their nouns."
  },
  {
    id: "6B-3",
    question: "For 'puer bonus' (good boy), why do we use 'bonus' not 'bona'?",
    options: ["Boys are always bonus", "Puer is masculine, so bonus matches", "Bona is for girls only", "It's just tradition"],
    correctAnswer: 1,
    explanation: "'Puer' is masculine, so 'bonus' matches! Masculine nouns take masculine adjective forms."
  },
  {
    id: "6B-4",
    question: "A student writes 'puella magnus'. What should the teacher correct?",
    options: ["Change 'puella' to 'puer'", "Change 'magnus' to 'magna'", "Add more words", "Switch the word order"],
    correctAnswer: 1,
    explanation: "Change 'magnus' to 'magna'! In Latin, adjectives must match their nouns. 'Puella' is feminine, so we need the feminine form 'magna'."
  },
  {
    id: "6B-5", 
    question: "Which adjective form matches 'aqua' (water, feminine)?",
    options: ["parvus", "parvum", "parva", "parvos"],
    correctAnswer: 2,
    explanation: "'Parva' matches 'aqua'! Both are feminine. We'd say 'aqua parva' (small water/little water)."
  },
  {
    id: "6B-6",
    question: "In Latin, what must adjectives do with their nouns?",
    options: ["Come before them", "Come after them", "Match their gender", "Be the same length"],
    correctAnswer: 2,
    explanation: "Adjectives must match their noun's gender! It's like a matching game - feminine nouns need feminine adjectives."
  }
]

// Test C: Mastery - Complex agreement and flexible word order (83% threshold)
const testC: Question[] = [
  {
    id: "6C-1",
    question: "Both 'magna puella' and 'puella magna' mean 'big girl'. What does this show?",
    options: ["One is wrong", "Word order is flexible in Latin", "They mean different things", "It's a mistake"],
    correctAnswer: 1,
    explanation: "Word order is flexible in Latin! Adjectives can come before or after their nouns. Both 'magna puella' and 'puella magna' are correct."
  },
  {
    id: "6C-2",
    question: "What makes 'liber magnus' (big book) correct?",
    options: ["Liber and magnus are both masculine", "Books are always big", "Magnus always describes liber", "It's just memorized"],
    correctAnswer: 0,
    explanation: "'Liber' (book) is masculine and 'magnus' is the masculine form - they match! That's what makes Latin grammar work."
  },
  {
    id: "6C-3",
    question: "If 'rosa' (rose) is feminine, what's the correct way to say 'small rose'?",
    options: ["rosa parvus", "rosa parvum", "rosa parva", "parvus rosa"],
    correctAnswer: 2,
    explanation: "'Rosa parva' is correct! 'Rosa' is feminine, so we need the feminine form 'parva' to match."
  },
  {
    id: "6C-4",
    question: "Why can't we say 'templum bona'?",
    options: ["Templum is too big for bona", "Templum is neuter but bona is feminine", "Bona doesn't mean good", "We can say it"],
    correctAnswer: 1,
    explanation: "The genders don't match! 'Templum' is neuter but 'bona' is feminine. We need 'templum bonum' instead."
  },
  {
    id: "6C-5",
    question: "In 'magister bonus' (good teacher), what shows this is correct Latin?",
    options: ["Magister is always bonus", "Both words are masculine so they match", "Teachers are always good", "It's in the textbook"],
    correctAnswer: 1,
    explanation: "Both words are masculine! 'Magister' (teacher) is masculine and 'bonus' is the masculine form - perfect match!"
  },
  {
    id: "6C-6",
    question: "What's the most important rule about Latin adjectives?",
    options: ["They're always last", "They always describe people", "They must agree with their noun's gender", "They're hard to spell"],
    correctAnswer: 2,
    explanation: "Adjectives must agree with their noun's gender! This is the golden rule - masculine with masculine, feminine with feminine, neuter with neuter."
  }
]

// Combine all test levels into one array
export const thema6Questions: Question[] = [
  ...testA,
  ...testB, 
  ...testC
]