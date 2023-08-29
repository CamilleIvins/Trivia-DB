import { AppState } from "../AppState.js";
import { Question } from "../models/Question.js";



class QuestionsService {
    async getQuestions() {
        console.log('service up');
        const category = await fetch('https://opentdb.com/api.php?amount=11&category=16&type=multiple')
        // const category2 = await fetch('https://opentdb.com/api.php?amount=11&category=9&type=multiple')

        // Promise.all([category1, category2]).then(([data1, data2]) => { console.log(data1, data2); }).catch(error => { console.log(error); })
        // const category = await fetch(
        //     [
        //         'https://opentdb.com/api.php?amount=11&category=16&type=multiple',
        //         'https://opentdb.com/api.php?amount=11&category=9&type=multiple'
        //     ]
        // )

        const data = await category.json()
        // console.log("troubleshoot", data.results)

        let newQuestions = data.results.map(question => new Question(question))
        console.log('game questions', newQuestions)
        AppState.questions = newQuestions
    }

    async getQuestionCategory(category) {
        console.log('gen q');

        const reply = await axios.get('https://opentdb.com/api.php?amount=11&category=9&type=multiple')

        console.log(reply.data.results);

        let newQuestions = reply.data.results.map(question => new Question(question))
        console.log('gen questions', newQuestions)
        let filtered = newQuestions.filter(nQ => nQ.category.incudes(category))
        AppState.questions = filtered
    }

    reveal(answer) {    //NOTE - NOT WORKING
        let reveal = AppState.questions.forEach(question => question.correctAnswer = answer)
        reveal = document.getElementById('hide').classList.remove('d-none')
    }
}




export const questionsService = new QuestionsService