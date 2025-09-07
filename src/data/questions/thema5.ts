import { Question } from '../../types/latin'

// Test A: Introduction - Basic gender recognition (67% threshold)
const testA: Question[] = [
  {
    id: "5A-1",
    question: "What gender is the Latin noun 'puella' (girl)?",
    options: ["masculine", "feminine", "neuter", "all genders"],
    correctAnswer: 1,
    explanation: "'Puella' is feminine! Words ending in -a are usually feminine, like most girl/woman words."
  },
  {
    id: "5A-2",
    question: "What gender is the Latin noun 'templum' (temple)?",
    options: ["feminine", "neuter", "masculine", "no gender"],
    correctAnswer: 1,
    explanation: "'Templum' is neuter! Words ending in -um are always neuter - they're neither masculine nor feminine."
  },
  {
    id: "5A-3",
    question: "What gender is 'puer' (boy)?",
    options: ["neuter", "feminine", "masculine", "both masculine and feminine"],
    correctAnswer: 2,
    explanation: "'Puer' is masculine! Most words for boys and men are masculine gender."
  },
  {
    id: "5A-4",
    question: "Which word is feminine like 'puella'?",
    options: ["magister (teacher)", "rosa (rose)", "liber (book)", "oppidum (town)"],
    correctAnswer: 1,
    explanation: "'Rosa' is feminine! Like 'puella', it ends in -a. Most -a words are feminine."
  },
  {
    id: "5A-5",
    question: "Which word is neuter like 'templum'?",
    options: ["mensa (table)", "verbum (word)", "dominus (master)", "aqua (water)"],
    correctAnswer: 1,
    explanation: "'Verbum' is neuter! Like 'templum', it ends in -um. All -um words are neuter."
  },
  {
    id: "5A-6",
    question: "What gender is 'magister' (teacher)?",
    options: ["feminine", "neuter", "masculine", "depends on the teacher"],
    correctAnswer: 2,
    explanation: "'Magister' is masculine! Even though it can refer to any teacher, the word itself is masculine gender."
  }
]

// Test B: Reinforcement - Gender rules and patterns (75% threshold)
const testB: Question[] = [
  {
    id: "5B-1",
    question: "Words ending in -a are usually which gender?",
    options: ["masculine", "neuter", "feminine", "it varies randomly"],
    correctAnswer: 2,
    explanation: "Words ending in -a are usually feminine! Think 'puella', 'mensa', 'aqua', 'rosa' - all feminine."
  },
  {
    id: "5B-2",
    question: "Words ending in -um are which gender?",
    options: ["always neuter", "always masculine", "always feminine", "sometimes masculine, sometimes feminine"],
    correctAnswer: 0,
    explanation: "Words ending in -um are ALWAYS neuter! No exceptions - 'templum', 'oppidum', 'verbum' are all neuter."
  },
  {
    id: "5B-3",
    question: "Which group contains ONLY feminine nouns?",
    options: ["puer, magister, liber", "puella, rosa, mensa", "templum, verbum, oppidum", "poeta, agricola, nauta"],
    correctAnswer: 1,
    explanation: "'Puella', 'rosa', and 'mensa' are all feminine! They all end in -a and follow the normal pattern."
  },
  {
    id: "5B-4",
    question: "What makes 'poeta' (poet) tricky for gender?",
    options: ["It ends in -um but isn't neuter", "It ends in -a but is masculine", "It changes gender randomly", "It has no gender"],
    correctAnswer: 1,
    explanation: "'Poeta' ends in -a but is masculine! It's one of the PAIN exceptions we need to memorize."
  },
  {
    id: "5B-5",
    question: "Which is the correct gender for 'aqua' (water)?",
    options: ["masculine", "feminine", "neuter", "water has no gender"],
    correctAnswer: 1,
    explanation: "'Aqua' is feminine! It follows the normal -a ending pattern for feminine nouns."
  },
  {
    id: "5B-6",
    question: "What do 'liber' (book) and 'dominus' (master) have in common?",
    options: ["Both are feminine", "Both are neuter", "Both are masculine", "Both end in -um"],
    correctAnswer: 2,
    explanation: "Both 'liber' and 'dominus' are masculine! Even though they have different endings, they're both masculine gender."
  }
]

// Test C: Mastery - Exceptions and complex application (83% threshold)
const testC: Question[] = [
  {
    id: "5C-1",
    question: "What does PAIN help us remember?",
    options: ["Painful Latin grammar", "Four -a words that are masculine", "Words that cause pain to students", "Feminine words ending in -um"],
    correctAnswer: 1,
    explanation: "PAIN = Poeta, Agricola, Incola, Nauta - four masculine words that end in -a (breaking the usual pattern)!"
  },
  {
    id: "5C-2",
    question: "Why is 'agricola' (farmer) masculine despite ending in -a?",
    options: ["All job words are masculine", "It's one of the PAIN exceptions", "Only male farmers existed in Rome", "It's actually feminine"],
    correctAnswer: 1,
    explanation: "'Agricola' is one of the PAIN exceptions! Even though it ends in -a, it's masculine - we must memorize these special words."
  },
  {
    id: "5C-3",
    question: "Which statement about gender is TRUE?",
    options: ["Gender always matches the sex of the person", "Endings usually predict gender, but there are exceptions", "All words ending in consonants are masculine", "-um words can be any gender"],
    correctAnswer: 1,
    explanation: "Endings usually predict gender, but there are exceptions! The PAIN words show that some -a words are masculine."
  },
  {
    id: "5C-4",
    question: "If you see a new Latin word ending in -um, what gender is it most likely to be?",
    options: ["Probably masculine", "Probably feminine", "Definitely neuter", "Could be any gender"],
    correctAnswer: 2,
    explanation: "Definitely neuter! Unlike -a words (which have exceptions), ALL -um words are neuter. No exceptions!"
  },
  {
    id: "5C-5",
    question: "'Nauta' (sailor) and 'puella' (girl) both end in -a. How do their genders compare?",
    options: ["Both are feminine", "Both are masculine", "'Nauta' is masculine, 'puella' is feminine", "'Puella' is masculine, 'nauta' is feminine"],
    correctAnswer: 2,
    explanation: "'Nauta' is masculine (PAIN exception) but 'puella' is feminine (normal pattern). Same ending, different genders!"
  },
  {
    id: "5C-6",
    question: "Why do we need to learn Latin gender?",
    options: ["Just for fun", "To make adjectives agree with nouns", "Romans were very particular about grammar", "It doesn't matter anymore"],
    correctAnswer: 1,
    explanation: "We learn gender so adjectives can agree with nouns! A masculine noun needs masculine adjectives - this is essential for correct Latin!"
  }
]

// Combine all test levels into one array
export const thema5Questions: Question[] = [
  ...testA,
  ...testB, 
  ...testC
]