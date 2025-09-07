import { Question } from '../../types/latin'

// Thema 8: First and Second Conjugations
// Multi-test progression: Test A (Introduction), Test B (Reinforcement), Test C (Mastery)
// Anti-gaming: Randomized answer positions, varied contexts, authentic distractors
// Core Focus: Comparing -are (1st) vs -ere (2nd) conjugation patterns

export const thema8Questions: Question[] = [
  // TEST A: INTRODUCTION LEVEL (67% threshold) - Questions 8A-1 through 8A-6
  {
    id: "8A-1",
    question: "Which verb family does 'amare' (to love) belong to?",
    options: ["1st conjugation", "2nd conjugation", "3rd conjugation", "4th conjugation"],
    correctAnswer: 0,
    explanation: "'Amare' belongs to the 1st conjugation! All 1st conjugation verbs end in -are in their infinitive form. Think: 'I am-are in love' = amare!"
  },
  {
    id: "8A-2",
    question: "What ending tells you a verb is 2nd conjugation?",
    options: ["-are", "-ere", "-ire", "-ure"],
    correctAnswer: 1,
    explanation: "2nd conjugation verbs end in -ere! Like 'videre' (to see), 'habere' (to have), 'docere' (to teach). The -ere ending is the clue!"
  },
  {
    id: "8A-3",
    question: "Which of these is a 1st conjugation verb?",
    options: ["videre (to see)", "laborare (to work)", "habere (to have)", "docere (to teach)"],
    correctAnswer: 1,
    explanation: "'Laborare' (to work) is 1st conjugation because it ends in -are! The other three end in -ere, making them 2nd conjugation verbs."
  },
  {
    id: "8A-4",
    question: "Complete: 'Marcus ___' (Marcus sees) - using the 2nd conjugation verb 'videre'",
    options: ["videt", "vidat", "vidit", "videat"],
    correctAnswer: 0,
    explanation: "'Marcus videt' means 'Marcus sees'! For 2nd conjugation verbs like 'videre', we use 'videt' with -t ending for 'he sees'."
  },
  {
    id: "8A-5",
    question: "Which verb means 'to have' and belongs to the 2nd conjugation?",
    options: ["amare", "vocare", "habere", "cantare"],
    correctAnswer: 2,
    explanation: "'Habere' means 'to have' and is 2nd conjugation (ends in -ere)! The others are all 1st conjugation verbs ending in -are."
  },
  {
    id: "8A-6",
    question: "What's the main difference between 'amare' and 'videre'?",
    options: ["One means love, one means see", "One ends in -are, one ends in -ere", "One is for boys, one is for girls", "Both A and B are correct"],
    correctAnswer: 3,
    explanation: "Both A and B are correct! 'Amare' means 'to love' and ends in -are (1st conjugation), while 'videre' means 'to see' and ends in -ere (2nd conjugation)."
  },

  // TEST B: REINFORCEMENT LEVEL (75% threshold) - Questions 8B-1 through 8B-6
  {
    id: "8B-1",
    question: "Anna loves books and Marcus sees birds. Which sentence shows both conjugations correctly?",
    options: ["Anna libros amat, Marcus aves videt", "Anna libros videt, Marcus aves amat", "Anna libros amet, Marcus aves videat", "Anna libros amaret, Marcus aves videret"],
    correctAnswer: 0,
    explanation: "Correct! 'Anna libros amat' (Anna loves books - 1st conjugation 'amare') and 'Marcus aves videt' (Marcus sees birds - 2nd conjugation 'videre')."
  },
  {
    id: "8B-2",
    question: "Which pair shows the correct 'we' forms for both conjugations?",
    options: ["amamus, videmus", "amamos, videmos", "amamus, videmos", "amamos, videmus"],
    correctAnswer: 0,
    explanation: "'Amamus' (we love - 1st conjugation) and 'videmus' (we see - 2nd conjugation) are both correct 'we' forms with -mus ending!"
  },
  {
    id: "8B-3",
    question: "The teacher teaches students. How do you say 'The teacher teaches' using 'docere'?",
    options: ["Magistra docat", "Magistra docet", "Magistra doxit", "Magistra docit"],
    correctAnswer: 1,
    explanation: "'Magistra docet' is correct! 'Docere' (to teach) is 2nd conjugation, so we use 'docet' for 'she teaches' - just like 'videt' from 'videre'."
  },
  {
    id: "8B-4",
    question: "Why do we say 'Tu habes' (you have) but 'Tu amas' (you love)?",
    options: ["'Habere' is 2nd conjugation, 'amare' is 1st conjugation", "Boys use different endings than girls", "'Habes' is wrong - it should be 'habis'", "There's no difference in the pattern"],
    correctAnswer: 0,
    explanation: "Exactly! 'Habere' is 2nd conjugation (ends -ere) so 'you' form is 'habes'. 'Amare' is 1st conjugation (ends -are) so 'you' form is 'amas'. Different verb families!"
  },
  {
    id: "8B-5",
    question: "Complete: 'Discipuli ___' (Students work) and 'Discipuli ___' (Students have)",
    options: ["laborant, habent", "laborent, habant", "laborunt, habunt", "laborint, habint"],
    correctAnswer: 0,
    explanation: "'Laborant' (they work - from laborare, 1st conjugation) and 'habent' (they have - from habere, 2nd conjugation). Both use -nt for 'they'!"
  },
  {
    id: "8B-6",
    question: "Which shows you can identify conjugations from conjugated forms?",
    options: ["'Vocat' ends in -at, so it's 1st conjugation", "'Monet' ends in -et, so it's 2nd conjugation", "'Ambulant' ends in -ant, so it's 1st conjugation", "All of these patterns help identify conjugations"],
    correctAnswer: 3,
    explanation: "All patterns help! 1st conjugation shows -a- vowel ('vocat', 'ambulant'), 2nd conjugation shows -e- vowel ('monet', 'habent'). The theme vowel tells the story!"
  },

  // TEST C: MASTERY LEVEL (83% threshold) - Questions 8C-1 through 8C-6
  {
    id: "8C-1",
    question: "Analyze: 'Pueri saepe vocant sed raro vident.' Why are different conjugations used?",
    options: ["'Vocare' (call) is 1st conjugation, 'videre' (see) is 2nd conjugation", "One is for boys, one is for girls", "'Saepe' makes it 1st conjugation, 'raro' makes it 2nd", "It's just random - Latin verbs don't follow patterns"],
    correctAnswer: 0,
    explanation: "Perfect analysis! 'Vocare' (to call) is 1st conjugation (-are ending), so 'vocant' has -a- theme vowel. 'Videre' (to see) is 2nd conjugation (-ere ending), so 'vident' has -e- theme vowel."
  },
  {
    id: "8C-2",
    question: "A student writes 'Marcus amat libros et vidat aves.' What needs correction?",
    options: ["Change 'amat' to 'amet'", "Change 'vidat' to 'videt'", "Change 'libros' to 'libras'", "Change 'aves' to 'avis'"],
    correctAnswer: 1,
    explanation: "'Vidat' should be 'videt'! The student mixed conjugation patterns. 'Videre' is 2nd conjugation, so it's 'videt' (like amat but with -e-), not 'vidat'."
  },
  {
    id: "8C-3",
    question: "Compare: 'laboramus' vs 'habemus'. What pattern do you notice?",
    options: ["Both end in -mus for 'we', but 'laboramus' has -a-, 'habemus' has -e-", "They mean the same thing", "'Laboramus' is wrong - should be 'laboremus'", "'Habemus' is wrong - should be 'habamus'"],
    correctAnswer: 0,
    explanation: "Excellent observation! Both use -mus for 'we', but the theme vowel differs: 'laboramus' has -a- (1st conjugation), 'habemus' has -e- (2nd conjugation). Same ending, different vowel!"
  },
  {
    id: "8C-4",
    question: "Why can't you say 'Ego vidare puellas' for 'I want to see the girls'?",
    options: ["'Puellas' should be 'puellos'", "'Vidare' doesn't exist - the infinitive is 'videre'", "'Ego' should be 'Tu'", "You can't use infinitives with 'ego'"],
    correctAnswer: 1,
    explanation: "Correct! 'Vidare' doesn't exist. The infinitive of 'video' (I see) is 'videre' because it's 2nd conjugation. Only 1st conjugation verbs have infinitives ending in -are!"
  },
  {
    id: "8C-5",
    question: "Complete this pattern: 'cantare/canto' (1st conj.) is like '___/moneo' (2nd conj.)",
    options: ["monare", "monere", "monire", "monure"],
    correctAnswer: 1,
    explanation: "'Monere/moneo' follows the 2nd conjugation pattern! Just like 'cantare/canto' (1st conjugation), we have 'monere' (infinitive) and 'moneo' (I warn/advise) for 2nd conjugation."
  },
  {
    id: "8C-6",
    question: "A Roman teacher explains: 'Some verbs love the -are ending, others prefer -ere.' What is she teaching about?",
    options: ["Why Latin is hard to learn", "The difference between 1st and 2nd conjugation verb families", "How to remember vocabulary", "The difference between nouns and verbs"],
    correctAnswer: 1,
    explanation: "She's teaching verb conjugations! Some verbs 'love' -are (1st conjugation like amare, laborare) while others 'prefer' -ere (2nd conjugation like videre, habere). Different verb families, different patterns!"
  }
]