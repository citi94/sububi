import { Question } from '../../types/latin'

// Test A: Introduction - Basic adjective recognition (67% threshold)
const testA: Question[] = [
  {
    id: "6A-1",
    question: "What does the Latin adjective 'magnus' mean?",
    options: ["small", "bad", "big/great", "good"],
    correctAnswer: 2,
    explanation: "'Magnus' means 'big' or 'great'! Like a magnificent castle or a great leader - something large and important."
  },
  {
    id: "6A-2", 
    question: "In 'puella bona' (good girl), which word is the adjective?",
    options: ["puella", "bona", "both words", "neither word"],
    correctAnswer: 1,
    explanation: "'Bona' is the adjective! Adjectives describe nouns. 'Bona' describes what kind of girl - a good girl."
  },
  {
    id: "6A-3",
    question: "What does 'parvus' mean?",
    options: ["big", "small", "good", "bad"],
    correctAnswer: 1,
    explanation: "'Parvus' means 'small'! Think of a tiny puppy or a little coin - something not big."
  },
  {
    id: "6A-4",
    question: "Which word describes 'templum' in 'templum magnum' (big temple)?",
    options: ["templum", "magnum", "both equally", "it's unclear"],
    correctAnswer: 1,
    explanation: "'Magnum' describes the temple! It tells us what kind of temple - a big temple, not a small one."
  },
  {
    id: "6A-5",
    question: "What does the adjective 'bonus' mean?",
    options: ["big", "small", "good", "old"],
    correctAnswer: 2,
    explanation: "'Bonus' means 'good'! Like a bonus point in games - something positive and nice."
  },
  {
    id: "6A-6",
    question: "In Latin, adjectives are words that do what?",
    options: ["name things", "describe things", "show actions", "connect ideas"],
    correctAnswer: 1,
    explanation: "Adjectives describe things! They tell us what nouns are like - big, small, good, bad, pretty, ugly."
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
    question: "What's wrong with 'puella magnus'?",
    options: ["Nothing wrong", "Magnus is the wrong meaning", "Magnus is masculine but puella is feminine", "Should be magnum"],
    correctAnswer: 2,
    explanation: "The genders don't match! 'Puella' is feminine but 'magnus' is masculine. We need 'puella magna' instead."
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