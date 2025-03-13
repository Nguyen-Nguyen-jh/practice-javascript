/* Given an array of integers, removing duplicate elements and creating an array whose elements are unique. 
  (Eg: [1,2,2,3,4,4,4,5,6] => [1,2,3,4,5,6]). Find 3-4 ways to solve this.
 */

// Method 1: Using Set
// const uniqueArrayWithSet = (arr) => [...new Set(arr)];
// console.log(uniqueArray([1, 2, 2, 3, 4, 4, 4, 5, 6]));

// // Method 2: Using filter
// const uniqueArrayWithFilter = (arr) => arr.filter((item, index) => arr.indexOf(item) === index);
// console.log(uniqueArrayWithFilter([1, 2, 2, 3, 4, 4, 4, 5, 6]));

// // Method 3: Using reduce
// const uniqueArrayWithReduce = (arr) => arr.reduce((acc, item) => acc.includes(item) ? acc : [...acc, item], []);
// console.log(uniqueArrayWithReduce([1, 2, 2, 3, 4, 4, 4, 5, 6]));

/* Given an array of integers, find integers with the most repetitions. If multiple numbers have the same maximum number of repetition, export all of them.
Maximum 3 rounds, not nested. */

// Using forEach
// const mostRepeatedNumbersWithForEach = (arr) => {
//   const obj = {};
//   arr.forEach((item) => {
//     obj[item] = obj[item] ? obj[item] + 1 : 1;
//   });
//   const max = Math.max(...Object.values(obj));
//   return Object.keys(obj).filter((key) => obj[key] === max);
// };

/*  Create a decision question tree, the answer of the previous question will affect the appearance of the 
  following question. Requirements: Easily add, edit or delete to the questionnaire at low cost */

// Cấu trúc cây câu hỏi (Decision Tree)
const questionTree = [
  {
    id: 1,
    question: 'Do you like programming?',
    answers: [
      { text: 'Yes', nextQuestionId: 2 },
      { text: 'No', nextQuestionId: 3 },
    ],
  },
  {
    id: 2,
    question: 'What programming languages do you know?',
    answers: [
      { text: 'JavaScript', nextQuestionId: 4 },
      { text: 'Python', nextQuestionId: 4 },
      { text: 'Other', nextQuestionId: 4 },
    ],
  },
  {
    id: 3,
    question: 'What do you like to do instead?',
    answers: [
      { text: 'Reading', nextQuestionId: 5 },
      { text: 'Gaming', nextQuestionId: 5 },
      { text: 'Sports', nextQuestionId: 5 },
    ],
  },
  {
    id: 4,
    question: 'Do you want to learn more programming?',
    answers: [
      { text: 'Yes', nextQuestionId: 6 },
      { text: 'No', nextQuestionId: 7 },
    ],
  },
  {
    id: 5,
    question: 'Do you want to share more hobbies?',
    answers: [
      { text: 'Yes', nextQuestionId: 6 },
      { text: 'No', nextQuestionId: 7 },
    ],
  },
  {
    id: 6,
    question: 'Do you want to receive learning resources?',
    answers: [
      { text: 'Yes', nextQuestionId: 7 },
      { text: 'No', nextQuestionId: 7 },
    ],
  },
  {
    id: 7,
    question: 'Thanks for answering the questions! Goodbye!',
    answers: [],
  },
];

// Hàm để điều khiển câu hỏi và câu trả lời, sử dụng mảng câu trả lời
function askQuestion(currentQuestionId, answers) {
  const currentQuestion = questionTree.find((q) => q.id === currentQuestionId);

  if (!currentQuestion) {
    console.log('Invalid question ID.');
    return;
  }

  console.log(currentQuestion.question); // In câu hỏi ra màn hình
  currentQuestion.answers.forEach((answer, index) => {
    console.log(`${index + 1}. ${answer.text}`); // In các đáp án
  });

  if (answers.length === 0) {
    console.log('No more answers.');
    return;
  }

  // Lấy câu trả lời đã chọn (index từ mảng answers)
  const answerIndex = answers[0]; // lấy câu trả lời đầu tiên trong mảng

  // Kiểm tra chỉ số trả lời hợp lệ
  if (answerIndex >= 0 && answerIndex < currentQuestion.answers.length) {
    // In ra đáp án đã chọn
    console.log(`You selected: ${currentQuestion.answers[answerIndex].text}`);

    const nextQuestionId = currentQuestion.answers[answerIndex].nextQuestionId;
    // Xóa câu trả lời đã xử lý và gọi đệ quy cho câu hỏi tiếp theo
    answers.shift();
    askQuestion(nextQuestionId, answers);
  } else {
    console.log('Invalid answer index.');
  }
}

// Hàm thêm câu hỏi mới
function addQuestion(newQuestion) {
  // Kiểm tra xem câu hỏi mới có id hợp lệ không
  if (questionTree.some((q) => q.id === newQuestion.id)) {
    console.log('Question with this ID already exists.');
    return;
  }

  questionTree.push(newQuestion);
  console.log('Question added successfully!');
}

// Hàm chỉnh sửa câu hỏi hiện tại
function editQuestion(questionId, updatedQuestion) {
  const questionIndex = questionTree.findIndex((q) => q.id === questionId);

  if (questionIndex === -1) {
    console.log('Question not found.');
    return;
  }

  questionTree[questionIndex] = updatedQuestion;
  console.log('Question edited successfully!');
}

// Hàm xóa câu hỏi theo ID
function deleteQuestion(questionId) {
  const questionIndex = questionTree.findIndex((q) => q.id === questionId);

  if (questionIndex === -1) {
    console.log('Question not found.');
    return;
  }

  questionTree.splice(questionIndex, 1);
  console.log('Question deleted successfully!');
}

// giải thích ý nghĩa của tham số truyền vào:
// Chạy từ câu hỏi đầu tiên
// [0, 1, 0] Truyền vào mảng đáp án cho từng câu hỏi, nghĩa là:
// - Câu hỏi 1, chọn đáp án đầu tiên (Yes)
// - Câu hỏi 2, chọn đáp án thứ hai (Python)
// - Câu hỏi 4, chọn đáp án đầu tiên (Yes)
askQuestion(1, [0, 1, 0]);

// Thêm câu hỏi mới
// addQuestion({
//   id: 8,
//   question: 'What is your favorite color?',
//   answers: [
//     { text: 'Red', nextQuestionId: 9 },
//     { text: 'Blue', nextQuestionId: 9 },
//     { text: 'Green', nextQuestionId: 9 },
//   ],
// });

// Chỉnh sửa câu hỏi có ID = 2
// editQuestion(2, {
//     id: 2,
//     question: "Which programming languages do you prefer?",
//     answers: [
//         { text: "JavaScript", nextQuestionId: 4 },
//         { text: "Python", nextQuestionId: 4 },
//         { text: "Ruby", nextQuestionId: 4 }
//     ]
// });

// // Xóa câu hỏi có ID = 3
// deleteQuestion(3);
