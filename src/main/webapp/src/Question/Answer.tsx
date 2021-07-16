export class Answer{
    text: string
    isCorrect: boolean

    constructor(text: string, isCorrect: boolean = false) {
        this.text = text;
        this.isCorrect = isCorrect;
    }
}
