import { AppState } from "../AppState.js";
import { questionsService } from "../services/QuestionsService.js";
import { setHTML } from "../utils/Writer.js";

function _drawQuestionsAll() {
    console.log('draw questions list');
    let content = ''
    let questions = AppState.questions
    questions.forEach(question => content += question.questionCard)
    setHTML('questions', content)
}

export class QuestionsController {
    constructor() {
        console.log("controller up");
        this.getQuestions()
        this.getQuestionCategory()
        debugger
        AppState.on('questions', _drawQuestionsAll)
    }

    async getQuestions() {
        await questionsService.getQuestions()
    }

    async getQuestionCategory(category) {
        await questionsService.getQuestionCategory(category)
    }

    reveal() {
        questionsService.reveal()
    }
}