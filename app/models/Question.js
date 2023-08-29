

export class Question {
    constructor({ category, question, difficulty, type, correct_answer, incorrect_answers }) {
        this.category = category
        this.question = question
        this.difficulty = difficulty
        this.type = type
        this.correctAnswer = correct_answer
        this.incorrectAnswers = incorrect_answers

        console.log('model up')
    }

    get questionCard() {
        return `
        <div class="col-12 col-md-4 card">
        <h2>${this.category}</h2>
        <div>${this.question}</div>
        <div>
        <span id="hide" class="d-none">${this.correctAnswer}</span> ${this.incorrectAnswers}</div>
        <button onclick="app.QuestionsController.reveal()">Answer</button>
        </div>
        `
    }
}