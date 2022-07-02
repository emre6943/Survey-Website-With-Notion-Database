export class C2RecordData {
    participant: string
    wordShown: string
    wordAnswer: string
    testWord: string
    testAnswer: string

    constructor (participant: string, wordShown: string, wordAnswer: string, testWord: string, testAnswer: string) {
        this.participant = participant
        this.wordShown = wordShown
        this.wordAnswer = wordAnswer
        this.testWord = testWord
        this.testAnswer = testAnswer
    }
}