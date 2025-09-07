import { Question } from '../../types/latin'

// Thema 4: Objects (Accusative Case)
// Multi-test progression: Test A (Introduction), Test B (Reinforcement), Test C (Mastery)
// Anti-gaming: Randomized answer positions, varied contexts, authentic distractors
// Focus: WHAT/WHOM receives the action (direct objects in accusative case)
// Building on: Themas 1-3 (verbs, subjects) - now adding the final piece of basic sentence structure

export const thema4Questions: Question[] = [
  // TEST A: INTRODUCTION LEVEL (67% threshold) - Questions 4A-1 through 4A-6
  // Focus: Basic direct object identification in simple sentences
  {
    id: "4A-1",
    question: "In 'Marcus librum legit' (Marcus reads a book), what is Marcus reading?",
    options: ["a teacher", "a book", "a letter", "a song"],
    correctAnswer: 1,
    explanation: "Marcus is reading a book! 'Librum' means 'book' and it's what receives Marcus's reading action. The thing that gets the action is called the direct object!"
  },
  {
    id: "4A-2",
    question: "Look at 'Puella aquam portat' (The girl carries water). What does the girl carry?",
    options: ["water", "flowers", "books", "food"],
    correctAnswer: 0,
    explanation: "The girl carries water! 'Aquam' means 'water' - it's what the girl is carrying. In Latin, 'aquam' ends in -am to show it receives the action of carrying."
  },
  {
    id: "4A-3",
    question: "In the sentence 'Discipulus magistrum videt' (The student sees the teacher), who gets seen?",
    options: ["the student", "the school", "the teacher", "the book"],
    correctAnswer: 2,
    explanation: "The teacher gets seen! 'Magistrum' means 'teacher' and he's the one being seen by the student. When someone or something receives the action, we call it the direct object."
  },
  {
    id: "4A-4",
    question: "What does a direct object tell us in a sentence?",
    options: ["who does the action", "where it happens", "what receives the action", "when it happens"],
    correctAnswer: 2,
    explanation: "A direct object tells us WHAT receives the action! If someone reads, carries, or sees something - that 'something' is the direct object. It gets the action done to it!"
  },
  {
    id: "4A-5",
    question: "Complete: 'Anna _____ dat' (Anna gives _____). What could Anna give?",
    options: ["rosam (a rose)", "puella (girl)", "magna (big)", "bene (well)"],
    correctAnswer: 0,
    explanation: "'Rosam' (a rose) is what Anna could give! A rose is something that can receive the action of giving. Notice how 'rosam' ends in -am to show it's the direct object!"
  },
  {
    id: "4A-6",
    question: "In 'Magister puerum vocat' (The teacher calls the boy), what is 'puerum'?",
    options: ["the one doing the calling", "the one being called", "where the calling happens", "why there is calling"],
    correctAnswer: 1,
    explanation: "'Puerum' is the one being called! The boy is receiving the teacher's calling action. 'Puerum' is the direct object - it tells us WHO gets the action of being called."
  },

  // TEST B: REINFORCEMENT LEVEL (75% threshold) - Questions 4B-1 through 4B-6  
  // Focus: Accusative case recognition, distinguishing subject from object
  {
    id: "4B-1",
    question: "Which word is in the accusative case (direct object form)?",
    options: ["puella (girl - subject)", "puellam (girl - object)", "magistra (teacher - subject)", "aqua (water - subject)"],
    correctAnswer: 1,
    explanation: "'Puellam' is in accusative case! The -am ending shows it's the direct object form. 'Puella' is the subject form, but 'puellam' is ready to receive an action!"
  },
  {
    id: "4B-2",
    question: "Compare: 'Marcus librum legit' vs 'Librum Marcus legit'. What stays the same?",
    options: ["Nothing - they mean different things", "Both have Marcus reading a book", "The word order must never change", "Only the first one is correct"],
    correctAnswer: 1,
    explanation: "Both have Marcus reading a book! In Latin, you can move words around because the endings tell you who does what. 'Marcus' is still the subject and 'librum' is still the direct object!"
  },
  {
    id: "4B-3",
    question: "Why does 'aquam' end in -am in 'Puella aquam portat'?",
    options: ["Because it's a long word", "Because water is important", "Because it's the direct object", "Because girls always carry water"],
    correctAnswer: 2,
    explanation: "'Aquam' ends in -am because it's the direct object! The -am ending is like a signal that says 'I'm receiving the action!' It shows what the girl is carrying."
  },
  {
    id: "4B-4",
    question: "In 'Discipuli magistrum et libros vident' (Students see the teacher and books), what are the direct objects?",
    options: ["discipuli only", "magistrum only", "libros only", "magistrum et libros"],
    correctAnswer: 3,
    explanation: "Both 'magistrum et libros' (the teacher and books) are direct objects! The students see both the teacher AND the books. Multiple things can receive the same action."
  },
  {
    id: "4B-5",
    question: "Which sentence correctly uses accusative case for the direct object?",
    options: ["Puella rosa dat", "Magister discipulus vocat", "Marcus aquam bene portat", "Anna liber legit"],
    correctAnswer: 2,
    explanation: "'Marcus aquam bene portat' is correct! 'Aquam' has the proper -am ending for a direct object. The other sentences use nominative forms that should be accusative."
  },
  {
    id: "4B-6",
    question: "What's the difference between 'puer' and 'puerum'?",
    options: ["One means boy, one means girl", "One is singular, one is plural", "'Puer' is subject, 'puerum' is direct object", "There is no difference"],
    correctAnswer: 2,
    explanation: "'Puer' is the subject form (boy who does action) and 'puerum' is the direct object form (boy who receives action). Same boy, different jobs in the sentence!"
  },

  // TEST C: MASTERY LEVEL (83% threshold) - Questions 4C-1 through 4C-6
  // Focus: Complex sentence analysis, subject-verb-object relationships, advanced application
  {
    id: "4C-1",
    question: "Analyze: 'Magistra discipulos libros dare iubet' (The teacher orders students to give books). What receives the direct commanding?",
    options: ["libros (the books)", "magistra (the teacher)", "discipulos (the students)", "dare (the giving)"],
    correctAnswer: 2,
    explanation: "'Discipulos' (the students) receives the commanding! The teacher is giving an order TO the students. They're the ones receiving her command, so 'discipulos' is the direct object of 'iubet'."
  },
  {
    id: "4C-2",
    question: "In 'Pueri et puellae magistrum amant' (Boys and girls love the teacher), identify subject and direct object.",
    options: ["Subject: magistrum, Object: pueri et puellae", "Subject: pueri et puellae, Object: magistrum", "Subject: pueri, Object: puellae", "Subject: amant, Object: magistrum"],
    correctAnswer: 1,
    explanation: "Subject: 'pueri et puellae' (boys and girls - they do the loving), Object: 'magistrum' (teacher - he receives their love). The subject does the action, the object receives it!"
  },
  {
    id: "4C-3",
    question: "Why is word order flexible in Latin compared to English?",
    options: ["Romans were confused about grammar", "Latin words are shorter than English", "Case endings show who does what to whom", "Latin has fewer words"],
    correctAnswer: 2,
    explanation: "Case endings show who does what to whom! In English we say 'Dog bites man' vs 'Man bites dog' - order matters. In Latin, endings like -um vs -us tell you who's doing the biting!"
  },
  {
    id: "4C-4",
    question: "Create a sentence: Use 'Anna' (subject), 'vocare' (to call), and 'amicum' (friend - object). What's correct?",
    options: ["Anna amicum vocat", "Anna amicus vocat", "Annam amicum vocat", "Anna amicum vocas"],
    correctAnswer: 0,
    explanation: "'Anna amicum vocat' (Anna calls her friend) is perfect! Anna (subject) does the calling, amicum (direct object with -um ending) receives it, vocat (verb) matches Anna (she calls)."
  },
  {
    id: "4C-5",
    question: "Advanced: 'Nos libros et chartas magistrae damus' (We give books and papers to the teacher). What are the direct objects?",
    options: ["nos only", "magistrae only", "libros et chartas", "damus only"],
    correctAnswer: 2,
    explanation: "'Libros et chartas' (books and papers) are the direct objects! They're what we give. 'Magistrae' is in dative case (to the teacher) - that's who receives the gift, but not the direct object."
  },
  {
    id: "4C-6",
    question: "Master challenge: How does understanding direct objects help you read Latin sentences?",
    options: ["It doesn't help much", "You can identify what receives each action", "It makes Latin harder to understand", "It only works with short sentences"],
    correctAnswer: 1,
    explanation: "You can identify what receives each action! Once you know who does what (subject-verb) and what gets done to what (direct object), you can understand the basic meaning of most Latin sentences!"
  }
]