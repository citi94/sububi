import { Question } from '../../types/latin'

// Thema 10: Nouns - The Ablative Case
// Multi-test progression: Test A (Introduction), Test B (Reinforcement), Test C (Mastery)
// Anti-gaming: Randomized answer positions, varied contexts, authentic distractors
// Core concept: Ablative case shows "how, where, when, by what means"

export const thema10Questions: Question[] = [
  // TEST A: INTRODUCTION LEVEL (67% threshold) - Questions 10A-1 through 10A-6
  // Basic ablative recognition and "how/where/when" understanding
  
  {
    id: "10A-1",
    question: "What questions does the ablative case answer?",
    options: ["Who? What?", "How? Where? When?", "Whose?", "To whom?"],
    correctAnswer: 1,
    explanation: "The ablative case answers 'How? Where? When?' It tells us the way something happens, the place where it happens, or the time when it happens."
  },
  {
    id: "10A-2",
    question: "In 'Marcus walks WITH a friend', which word would be ablative in Latin?",
    options: ["Marcus", "walks", "with", "friend"],
    correctAnswer: 3,
    explanation: "'Friend' would be in ablative case because it shows HOW Marcus walks - with someone. The ablative tells us the way or manner of doing something."
  },
  {
    id: "10A-3",
    question: "In 'Puella gladio pugnat' (The girl fights with a sword), what does 'gladio' tell us?",
    options: ["Who is fighting", "What is being fought", "How she fights", "When she fights"],
    correctAnswer: 2,
    explanation: "'Gladio' (with a sword) tells us HOW she fights! It's in ablative case, showing the means or way of fighting. Ablative answers 'how?'"
  },
  {
    id: "10A-4",
    question: "In 'Marcus gladio pugnat' (Marcus fights with a sword), what case would 'gladio' be?",
    options: ["Nominative", "Accusative", "Ablative", "Genitive"],
    correctAnswer: 2,
    explanation: "'Gladio' is ablative case! It shows HOW Marcus fights - with a sword. Ablative tells us the means or way of doing something."
  },
  {
    id: "10A-5",
    question: "In 'Puer in horto ludit', what does the phrase 'in horto' tell us?",
    options: ["when the boy plays", "where the boy plays", "how the boy plays", "why the boy plays"],
    correctAnswer: 1,
    explanation: "'In horto' tells us WHERE the boy plays! 'Horto' is ablative case showing the location. Ablative answers 'where?' along with 'how?' and 'when?'"
  },
  {
    id: "10A-6",
    question: "If someone writes 'with a pen' in Latin, which case would 'pen' be?",
    options: ["Nominative", "Accusative", "Ablative", "Genitive"],
    correctAnswer: 2,
    explanation: "'Pen' would be ablative case because it shows HOW someone writes - with what tool. The ablative case shows the means or instrument used to do something."
  },

  // TEST B: REINFORCEMENT LEVEL (75% threshold) - Questions 10B-1 through 10B-6  
  // Ablative endings, prepositions, and case identification
  
  {
    id: "10B-1",
    question: "What is the ablative singular ending for 2nd declension masculine nouns like 'gladius' (sword)?",
    options: ["-us", "-um", "-o", "-i"],
    correctAnswer: 2,
    explanation: "Second declension masculine ablative singular ends in -o. So 'gladius' becomes 'gladio' meaning 'with/by the sword'."
  },
  {
    id: "10B-2",
    question: "In 'Magister cum discipulis ambulat' (The teacher walks with students), what case is 'discipulis'?",
    options: ["Nominative", "Dative", "Ablative", "Accusative"],
    correctAnswer: 2,
    explanation: "'Discipulis' is ablative plural because it follows 'cum' (with). The preposition 'cum' always takes the ablative case."
  },
  {
    id: "10B-3",
    question: "Which preposition always requires the ablative case?",
    options: ["ad (to)", "cum (with)", "per (through)", "ante (before)"],
    correctAnswer: 1,
    explanation: "'Cum' (with) always takes ablative case. When you see 'cum', the next noun will be ablative, like 'cum amico' (with a friend)."
  },
  {
    id: "10B-4",
    question: "What is the difference between 'in villam' and 'in villa'?",
    options: ["No difference", "'Villam' is accusative (into), 'villa' is ablative (in)", "'Villa' is nominative, 'villam' is accusative", "Both mean 'house'"],
    correctAnswer: 1,
    explanation: "'In villam' (accusative) shows movement INTO the house, while 'in villa' (ablative) shows location IN the house. The case changes the meaning!"
  },
  {
    id: "10B-5",
    question: "In 'Epistulam penna scribit' (He writes a letter with a pen), which word shows the instrument?",
    options: ["epistulam", "penna", "scribit", "All of them"],
    correctAnswer: 1,
    explanation: "'Penna' (pen) is in ablative case, showing the instrument or tool used for writing. Ablative of means shows what you use to do something."
  },
  {
    id: "10B-6",
    question: "How do you say 'with the girl' in Latin if 'girl' is 'puella'?",
    options: ["cum puella", "cum puellam", "cum puellae", "puella cum"],
    correctAnswer: 0,
    explanation: "'Cum puella' is correct! 'Puella' stays the same in ablative singular (ends in -a), and 'cum' always comes before its noun."
  },

  // TEST C: MASTERY LEVEL (83% threshold) - Questions 10C-1 through 10C-6
  // Complex ablative usage, case mastery, and complete case system review
  
  {
    id: "10C-1",
    question: "Analyze: 'Marcus gladio hostis vulnerat.' Why is 'gladio' ablative but 'hostis' accusative?",
    options: ["Both should be ablative", "'Gladio' shows means (how), 'hostis' shows direct object (what)", "'Hostis' shows location", "There's an error in the sentence"],
    correctAnswer: 1,
    explanation: "Perfect analysis! 'Gladio' is ablative showing HOW Marcus wounds (with a sword - means). 'Hostis' is accusative showing WHAT he wounds (the enemy - direct object)."
  },
  {
    id: "10C-2",
    question: "Compare all five cases: nominative, accusative, genitive, dative, ablative. Which answers 'by what means'?",
    options: ["Nominative (who/what)", "Accusative (who/what directly)", "Genitive (whose)", "Dative (to whom)", "Ablative (how/where/when)"],
    correctAnswer: 4,
    explanation: "Ablative answers 'by what means' along with 'how', 'where', and 'when'. It's the most versatile case, showing circumstances around the action."
  },
  {
    id: "10C-3",
    question: "In 'Pueri cum magistro in schola libros legunt', identify all ablative words and their functions.",
    options: ["Only 'magistro' - accompaniment", "'Magistro' (with whom), 'schola' (where)", "'Libros' and 'schola'", "'Pueri' and 'magistro'"],
    correctAnswer: 1,
    explanation: "Both 'magistro' and 'schola' are ablative! 'Magistro' shows accompaniment (with the teacher), 'schola' shows location (in the school). Ablative has many functions!"
  },
  {
    id: "10C-4",
    question: "Why does Latin use ablative instead of accusative in 'tempore aestatis' (in summer time)?",
    options: ["Because summer is hot", "Ablative shows WHEN, accusative shows WHAT", "Because 'tempore' is always ablative", "There's no difference"],
    correctAnswer: 1,
    explanation: "Ablative shows WHEN something happens (time), while accusative shows WHAT is being acted upon (direct object). Time expressions use ablative!"
  },
  {
    id: "10C-5",
    question: "Advanced: In 'Discipuli magistri consilium sapientia audiunt', what if 'sapientia' is ablative?",
    options: ["It makes no sense", "Students hear advice WITH wisdom (manner)", "Wisdom becomes the subject", "It changes the tense"],
    correctAnswer: 1,
    explanation: "Excellent! If 'sapientia' is ablative, it shows HOW they listen - 'Students hear the teacher's advice WITH wisdom.' Ablative of manner shows the way something is done!"
  },
  {
    id: "10C-6",
    question: "Master all cases: In 'Pater filio gladio hostis vulnerat', identify each case and its function.",
    options: ["All are nominative", "'Pater' (who), 'filio' (to whom), 'gladio' (how), 'hostis' (what)", "'Filio' and 'gladio' are both dative", "Only 'pater' is nominative"],
    correctAnswer: 1,
    explanation: "Perfect mastery! 'Pater' = nominative (who acts), 'filio' = dative (for whom), 'gladio' = ablative (how/means), 'hostis' = accusative (what). You know all five cases!"
  }
]