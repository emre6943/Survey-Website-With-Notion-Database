export class C1RecordData {
    participant: string
    wordPair: string
    testWord: string
    testAnswer: string
    answerGivenInMs: number

    constructor (participant: string, wordPair: string, testWord: string, testAnswer: string, answerGivenInMs: number){
        this.participant = participant
        this.wordPair = wordPair
        this.testWord = testWord
        this.testAnswer = testAnswer
        this.answerGivenInMs = answerGivenInMs 
    }
}