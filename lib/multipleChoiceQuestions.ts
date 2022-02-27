type MultipleChoiceAnswerType = {
  text: string;
  correct: boolean;
}

export type MultipleChoiceQuestionType = {
  question: string;
  answers: Array<MultipleChoiceAnswerType>
}

type MultipleChoiceQuestionsType = Array<MultipleChoiceQuestionType>;

export const multipleChoiceQuestions: MultipleChoiceQuestionsType = [
  {
    question: 'ElectricityQ',
    answers: [
      {
        text: 'ElectricityA0',
        correct: false,
      },
      {
        text: 'ElectricityA1',
        correct: false,
      },
      {
        text: 'ElectricityA2',
        correct: true,
      },
    ]
  },
]