const questions = []

module.exports.questions = questions
module.exports.getRandomQuestion = function()
{
    if(questions.length === 0)
    {
        return {
            id: 'no question',
            question: 'no question',
            tip: 'no question'
        }
    }
    const id = Math.floor(Math.random() * questions.length)
    return {
        id: id,
        question: questions[id].question,
        tip: questions[id].tip
    }
}
module.exports.addQuestion = function(question)
{
    if(question.question && question.tip && question.answer)
    {
        questions.push(question)
    }
}