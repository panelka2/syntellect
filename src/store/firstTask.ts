import { makeAutoObservable } from "mobx";

class FirstInput {
    string = ''
    constructor() {
        makeAutoObservable(this)
    }

    setString(str: string) {
        this.string = str
    }

    delString() {
        this.string = ''
    }

    helloString() {
        this.string = 'Hello World!'
    }
    
    callAlertForNumber() {
        if (typeof +this.string === "number" && !isNaN(+this.string) && this.string !== " ") {
          alert(`Вы ввели число: ${this.string}`);
        }
    }

    callAlert() {
        alert(`Вы ввели: ${this.string}`)
    }
}
export const firstInput = new FirstInput();
export const secondInput = new FirstInput()
 

