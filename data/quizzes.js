const quizzes = [
    {
      id: 'quiz1',
      title: 'General Knowledge Quiz',
      description: 'Test your knowledge on various topics',
      imageUrl: 'https://picsum.photos/200/300',
      questions: [
        {
          id: 'quiz1-question-1',
          text: 'What is the capital of France?',
          choices: [
            { id: 'quiz1-question-1-choice-1', text: 'Paris' },
            { id: 'quiz1-question-1-choice-2', text: 'London' },
            { id: 'quiz1-question-1-choice-3', text: 'Berlin' },
          ],
          correctChoices: ['quiz1-question-1-choice-1'],
        },
        {
          id: 'quiz1-question-2',
          text: 'What is the largest ocean in the world?',
          choices: [
            { id: 'quiz1-question-2-choice-1', text: 'Atlantic Ocean' },
            { id: 'quiz1-question-2-choice-2', text: 'Pacific Ocean' },
            { id: 'quiz1-question-2-choice-3', text: 'Indian Ocean' },
          ],
          correctChoices: ['quiz1-question-2-choice-2'],
        },
        // Add 3 more questions for quiz1
        {
          id: 'quiz1-question-3',
          text: 'What is the smallest planet in our solar system?',
          choices: [
            { id: 'quiz1-question-3-choice-1', text: 'Mercury' },
            { id: 'quiz1-question-3-choice-2', text: 'Venus' },
            { id: 'quiz1-question-3-choice-3', text: 'Mars' },
          ],
          correctChoices: ['quiz1-question-3-choice-1'],
        },
        {
          id: 'quiz1-question-4',
          text: 'What is the rarest blood type?',
          choices: [
            { id: 'quiz1-question-4-choice-1', text: 'O' },
            { id: 'quiz1-question-4-choice-2', text: 'AB' },
            { id: 'quiz1-question-4-choice-3', text: 'B' },
          ],
          correctChoices: ['quiz1-question-4-choice-2'],
        },
        {
          id: 'quiz1-question-5',
          text: 'What is the largest mammal in the world?',
          choices: [
            { id: 'quiz1-question-5-choice-1', text: 'Elephant' },
            { id: 'quiz1-question-5-choice-2', text: 'Blue Whale' },
            { id: 'quiz1-question-5-choice-3', text: 'Hippopotamus' },
          ],
          correctChoices: ['quiz1-question-5-choice-2'],
        },
      ],
    },
    {
      id: 'quiz2',
      title: 'Science Quiz',
      description: 'Challenge your scientific knowledge',
      imageUrl: 'https://picsum.photos/200/300',
      questions: [
        {
          id: 'quiz2-question-1',
          text: 'What is the symbol for sodium on the periodic table?',
          choices: [
            { id: 'quiz2-question-1-choice-1', text: 'Na' },
            { id: 'quiz2-question-1-choice-2', text: 'S' },
            { id: 'quiz2-question-1-choice-3', text: 'Si' },
          ],
          correctChoices: ['quiz2-question-1-choice-1'],
        },
        {
          id: 'quiz2-question-2',
          text: 'What is the process of photosynthesis?',
          choices: [
            { id: 'quiz2-question-2-choice-1', text: 'Conversion of light energy to chemical energy' },
            { id: 'quiz2-question-2-choice-2', text: 'Conversion of chemical energy to light energy' },
            { id: 'quiz2-question-2-choice-3', text: 'Conversion of heat energy to chemical energy' },
          ],
          correctChoices: ['quiz2-question-2-choice-1'],
        },
        // Add 3 more questions for quiz2
        {
          id: 'quiz2-question-3',
          text: 'What is the unit of measurement for electric current?',
          choices: [
            { id: 'quiz2-question-3-choice-1', text: 'Volt' },
            { id: 'quiz2-question-3-choice-2', text: 'Ampere' },
            { id: 'quiz2-question-3-choice-3', text: 'Watt' },
          ],
          correctChoices: ['quiz2-question-3-choice-2'],
        },
        {
          id: 'quiz2-question-4',
          text: 'What is the study of living organisms called?',
          choices: [
            { id: 'quiz2-question-4-choice-1', text: 'Physics' },
            { id: 'quiz2-question-4-choice-2', text: 'Chemistry' },
            { id: 'quiz2-question-4-choice-3', text: 'Biology' },
          ],
          correctChoices: ['quiz2-question-4-choice-3'],
        },
        {
          id: 'quiz2-question-5',
          text: 'What is the smallest particle of an element?',
          choices: [
            { id: 'quiz2-question-5-choice-1', text: 'Molecule' },
            { id: 'quiz2-question-5-choice-2', text: 'Atom' },
            { id: 'quiz2-question-5-choice-3', text: 'Compound' },
          ],
          correctChoices: ['quiz2-question-5-choice-2'],
        },
      ],
    },
    {
      id: 'quiz3',
      title: 'History Quiz',
      description: 'Test your knowledge of historical events',
      imageUrl: 'https://picsum.photos/200/300',
      questions: [
        {
          id: 'quiz3-question-1',
          text: 'In what year did World War II end?',
          choices: [
            { id: 'quiz3-question-1-choice-1', text: '1945' },
            { id: 'quiz3-question-1-choice-2', text: '1944' },
            { id: 'quiz3-question-1-choice-3', text: '1946' },
          ],
          correctChoices: ['quiz3-question-1-choice-1'],
        },
        {
          id: 'quiz3-question-2',
          text: 'Who was the first president of the United States?',
          choices: [
            { id: 'quiz3-question-2-choice-1', text: 'George Washington' },
            { id: 'quiz3-question-2-choice-2', text: 'Abraham Lincoln' },
            { id: 'quiz3-question-2-choice-3', text: 'Thomas Jefferson' },
          ],
          correctChoices: ['quiz3-question-2-choice-1'],
        },
        // Add 3 more questions for quiz3
        {
          id: 'quiz3-question-3',
          text: 'In what year did the American Civil War begin?',
          choices: [
            { id: 'quiz3-question-3-choice-1', text: '1861' },
            { id: 'quiz3-question-3-choice-2', text: '1865' },
            { id: 'quiz3-question-3-choice-3', text: '1860' },
          ],
          correctChoices: ['quiz3-question-3-choice-1'],
        },
        {
          id: 'quiz3-question-4',
          text: 'What was the name of the first successful English settlement in North America?',
          choices: [
            { id: 'quiz3-question-4-choice-1', text: 'Jamestown' },
            { id: 'quiz3-question-4-choice-2', text: 'Plymouth' },
            { id: 'quiz3-question-4-choice-3', text: 'Boston' },
          ],
          correctChoices: ['quiz3-question-4-choice-1'],
        },
        {
          id: 'quiz3-question-5',
          text: 'In what year did the French Revolution begin?',
          choices: [
            { id: 'quiz3-question-5-choice-1', text: '1789' },
            { id: 'quiz3-question-5-choice-2', text: '1776' },
            { id: 'quiz3-question-5-choice-3', text: '1812' },
          ],
          correctChoices: ['quiz3-question-5-choice-1'],
        },
      ],
    },
    {
      id: 'quiz4',
      title: 'Geography Quiz',
      description: 'Test your knowledge of the world around us',
      imageUrl: 'https://picsum.photos/200/300',
      questions: [
        {
          id: 'quiz4-question-1',
          text: 'What is the longest river in the world?',
          choices: [
            { id: 'quiz4-question-1-choice-1', text: 'Nile River' },
            { id: 'quiz4-question-1-choice-2', text: 'Amazon River' },
            { id: 'quiz4-question-1-choice-3', text: 'Yangtze River' },
          ],
          correctChoices: ['quiz4-question-1-choice-1'],
        },
        {
          id: 'quiz4-question-2',
          text: 'What is the highest mountain in the world?',
          choices: [
            { id: 'quiz4-question-2-choice-1', text: 'Mount Everest' },
            { id: 'quiz4-question-2-choice-2', text: 'K2' },
            { id: 'quiz4-question-2-choice-3', text: 'Kangchenjunga' },
          ],
          correctChoices: ['quiz4-question-2-choice-1'],
        },
        // Add 3 more questions for quiz4
        {
          id: 'quiz4-question-3',
          text: 'What is the largest country in the world by land area?',
          choices: [
            { id: 'quiz4-question-3-choice-1', text: 'Russia' },
            { id: 'quiz4-question-3-choice-2', text: 'China' },
            { id: 'quiz4-question-3-choice-3', text: 'Canada' },
          ],
          correctChoices: ['quiz4-question-3-choice-1'],
        },
        {
          id: 'quiz4-question-4',
          text: 'What is the smallest continent in the world?',
          choices: [
            { id: 'quiz4-question-4-choice-1', text: 'Australia' },
            { id: 'quiz4-question-4-choice-2', text: 'Antarctica' },
            { id: 'quiz4-question-4-choice-3', text: 'Europe' },
          ],
          correctChoices: ['quiz4-question-4-choice-1'],
        },
        {
          id: 'quiz4-question-5',
          text: 'What is the largest desert in the world?',
          choices: [
            { id: 'quiz4-question-5-choice-1', text: 'Sahara Desert' },
            { id: 'quiz4-question-5-choice-2', text: 'Antarctic Desert' },
            { id: 'quiz4-question-5-choice-3', text: 'Arabian Desert' },
          ],
          correctChoices: ['quiz4-question-5-choice-1'],
        },
      ],
    },
  ];
  
  export default quizzes;