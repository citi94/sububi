import { Question } from '../../types/latin'

export const thema16Questions: Question[] = [
  {
    id: "16-1",
    question: "What are the present tense endings for 3rd conjugation verbs like 'lego' (I read)?",
    options: ["-o, -s, -t, -mus, -tis, -nt", "-o, -as, -at, -amus, -atis, -ant", "-eo, -es, -et, -emus, -etis, -ent", "-io, -is, -it, -imus, -itis, -iunt"],
    correctAnswer: 0,
    explanation: "3rd conjugation uses: -o (I), -s (you), -t (he/she), -mus (we), -tis (you all), -nt (they). Like: lego, legis, legit."
  },
  {
    id: "16-2",
    question: "What does 'audio' mean?",
    options: ["I see", "I hear", "I speak", "I write"],
    correctAnswer: 1,
    explanation: "'Audio' means 'I hear' or 'I listen to'. It's a 4th conjugation verb. Think of 'audio' equipment for hearing!"
  },
  {
    id: "16-3",
    question: "How do you say 'they capture' if 'capio' means 'I capture'?",
    options: ["capunt", "capiunt", "capent", "capiant"],
    correctAnswer: 1,
    explanation: "'Capiunt' means 'they capture'. 'Capio' is a 3rd conjugation -io verb, so it uses -iunt for 'they'."
  },
  {
    id: "16-4",
    question: "What conjugation is 'venio' (I come)?",
    options: ["1st conjugation", "2nd conjugation", "3rd conjugation", "4th conjugation"],
    correctAnswer: 3,
    explanation: "'Venio' is 4th conjugation. You can tell because it ends in -io and its infinitive is 'venire' (ending in -ire)."
  },
  {
    id: "16-5",
    question: "If 'dico' means 'I say', what does 'dicit' mean?",
    options: ["you say", "we say", "he/she says", "they say"],
    correctAnswer: 2,
    explanation: "'Dicit' means 'he/she says'. The -t ending shows 3rd person singular (he/she/it)."
  },
  {
    id: "16-6",
    question: "What does 'mittimus' mean if 'mitto' means 'I send'?",
    options: ["you send", "he sends", "we send", "they send"],
    correctAnswer: 2,
    explanation: "'Mittimus' means 'we send'. The -mus ending always means 'we' in any conjugation."
  }
]