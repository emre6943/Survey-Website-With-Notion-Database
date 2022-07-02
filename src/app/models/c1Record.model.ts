export class C1RecordData {
    participant: string
    wordPair: string
    testWord: string
    testAnswer: string

    constructor (participant: string, wordPair: string, testWord: string, testAnswer: string){
        this.participant = participant
        this.wordPair = wordPair
        this.testWord = testWord
        this.testAnswer = testAnswer
    }
}