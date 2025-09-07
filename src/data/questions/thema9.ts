import { Question } from '../../types/latin'

// Thema 9: Nouns - The Dative Case
// Multi-test progression: Test A (Introduction), Test B (Reinforcement), Test C (Mastery)
// Anti-gaming: Randomized answer positions, varied contexts, authentic distractors
// Focus: Dative case shows "to whom" or "for whom" (indirect object)

export const thema9Questions: Question[] = [
  // TEST A: INTRODUCTION LEVEL (67% threshold) - Questions 9A-1 through 9A-6
  // Basic dative recognition and "to whom" understanding
  
  {
    id: "9A-1",
    question: "What does the dative case tell us?",
    options: ["Who is doing something", "To whom something is given", "What is being done", "When something happens"],
    correctAnswer: 1,
    explanation: "The dative case shows 'to whom' or 'for whom' something is done. It tells us who receives the action - like who gets a gift or hears a story."
  },
  {
    id: "9A-2",
    question: "In the sentence 'Anna gives a book TO HER FRIEND', which part would be dative in Latin?",
    options: ["Anna", "gives", "book", "to her friend"],
    correctAnswer: 3,
    explanation: "'To her friend' shows who receives the book, so 'friend' would be in dative case in Latin. The dative answers 'to whom?'"
  },
  {
    id: "9A-3",
    question: "In 'Pater filio pecuniam dat' (The father gives money to his son), who receives the money?",
    options: ["The father", "The son", "The money", "No one"],
    correctAnswer: 1,
    explanation: "The son receives the money. 'Filio' means 'to the son' and is in dative case, showing who gets the money."
  },
  {
    id: "9A-4",
    question: "Which English word often signals that Latin would use dative case?",
    options: ["from", "with", "to", "by"],
    correctAnswer: 2,
    explanation: "The word 'to' often signals dative case in Latin. When we say 'give TO someone' or 'tell TO someone', that someone is in dative case."
  },
  {
    id: "9A-5",
    question: "In 'Marcus puellae rosam dat', what question does 'puellae' answer?",
    options: ["Who gives?", "What is given?", "To whom is it given?", "When is it given?"],
    correctAnswer: 2,
    explanation: "'Puellae' (to the girl) answers 'to whom is it given?' This is exactly what the dative case tells us - who receives something."
  },
  {
    id: "9A-6",
    question: "If a teacher tells a story to students, which word would be dative in Latin?",
    options: ["teacher", "tells", "story", "students"],
    correctAnswer: 3,
    explanation: "'Students' would be dative because they receive the story. In Latin: 'Magister discipulis fabulam narrat' - 'discipulis' (to the students) is dative."
  },

  // TEST B: REINFORCEMENT LEVEL (75% threshold) - Questions 9B-1 through 9B-6
  // Dative endings, case identification, and verb constructions
  
  {
    id: "9B-1",
    question: "What is the dative singular ending for 1st declension nouns like 'puella' (girl)?",
    options: ["-a", "-ae", "-am", "-is"],
    correctAnswer: 1,
    explanation: "First declension dative singular ends in -ae. So 'puella' becomes 'puellae' meaning 'to the girl'."
  },
  {
    id: "9B-2",
    question: "In 'Mater filiis cibum dat' (Mother gives food to her children), what case is 'filiis'?",
    options: ["Nominative", "Accusative", "Dative", "Genitive"],
    correctAnswer: 2,
    explanation: "'Filiis' is dative plural, meaning 'to the children'. It shows who receives the food from their mother."
  },
  {
    id: "9B-3",
    question: "Which verb commonly takes a dative object (someone 'to whom' you do this)?",
    options: ["video (see)", "habeo (have)", "do (give)", "sum (am)"],
    correctAnswer: 2,
    explanation: "'Do' (give) takes a dative object because you give something TO someone. You see someone directly, but you give TO someone."
  },
  {
    id: "9B-4",
    question: "What is the dative singular ending for 2nd declension masculine nouns like 'puer' (boy)?",
    options: ["-us", "-i", "-o", "-um"],
    correctAnswer: 2,
    explanation: "Second declension masculine dative singular ends in -o. So 'puer' becomes 'puero' meaning 'to the boy'."
  },
  {
    id: "9B-5",
    question: "In 'Julia servo epistulam mittit' (Julia sends a letter to the slave), which word is the indirect object?",
    options: ["Julia", "servo", "epistulam", "mittit"],
    correctAnswer: 1,
    explanation: "'Servo' (to the slave) is the indirect object in dative case. It shows who receives the letter that Julia sends."
  },
  {
    id: "9B-6",
    question: "How do you say 'to the teacher' in Latin if 'teacher' is 'magister'?",
    options: ["magister", "magistrum", "magistri", "magistro"],
    correctAnswer: 3,
    explanation: "'Magistro' means 'to the teacher'. This is the dative singular form of 'magister' (2nd declension masculine)."
  },

  // TEST C: MASTERY LEVEL (83% threshold) - Questions 9C-1 through 9C-6
  // Complex dative usage, case distinction, and sentence analysis
  
  {
    id: "9C-1",
    question: "Compare 'Puer magistrum videt' vs 'Puer magistro librum dat'. What's the key difference?",
    options: ["First has direct object, second has indirect object", "First is present tense, second is past tense", "First uses nominative, second uses accusative", "No significant difference"],
    correctAnswer: 0,
    explanation: "First sentence has direct object 'magistrum' (boy sees teacher). Second has indirect object 'magistro' (boy gives book TO teacher). Dative shows the recipient."
  },
  {
    id: "9C-2",
    question: "Why does the verb 'narro' (tell) often use dative case?",
    options: ["Because telling is difficult", "Because you tell stories TO someone", "Because it's a long word", "Because stories are important"],
    correctAnswer: 1,
    explanation: "'Narro' uses dative because you tell stories TO someone. The person hearing the story is the recipient (indirect object) in dative case."
  },
  {
    id: "9C-3",
    question: "In 'Discipuli magistro difficiles quaestiones rogant', identify the dative and explain why.",
    options: ["'Discipuli' - they're asking", "'Magistro' - he receives the questions", "'Quaestiones' - they're difficult", "'Difficiles' - describes the questions"],
    correctAnswer: 1,
    explanation: "'Magistro' is dative because the teacher receives/is asked the questions. Students ask questions TO the teacher, making him the indirect object."
  },
  {
    id: "9C-4",
    question: "What's wrong with this Latin: 'Marcus puella rosam dat'?",
    options: ["'Marcus' should be accusative", "'Puella' should be dative (puellae)", "'Rosam' should be nominative", "Nothing is wrong"],
    correctAnswer: 1,
    explanation: "'Puella' should be 'puellae' (dative) because she receives the rose. You give something TO someone, so the recipient needs dative case."
  },
  {
    id: "9C-5",
    question: "Which sentence correctly shows someone receiving a gift?",
    options: ["'Pater filium librum dat'", "'Pater filio librum dat'", "'Pater filius librum dat'", "'Pater filii librum dat'"],
    correctAnswer: 1,
    explanation: "'Pater filio librum dat' is correct. 'Filio' (dative) shows the son receives the book. The other forms don't properly show the recipient."
  },
  {
    id: "9C-6",
    question: "Advanced: In 'Amici poetae carmen pulchrum recitant', could 'poetae' be dative, and what would it mean?",
    options: ["No, it must be nominative", "Yes, 'friends recite a beautiful poem TO the poet'", "No, poems can't be given to people", "Yes, but it would mean the poet is singing"],
    correctAnswer: 1,
    explanation: "Yes! If 'poetae' is dative, it means 'Friends recite a beautiful poem TO the poet'. This shows the poet as the recipient of the performance - a lovely tribute!"
  }
]