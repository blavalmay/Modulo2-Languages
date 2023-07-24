console.log("************** DELIVERABLE 05 *********************");

//5. Slot Machine
//El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.

class SlothMachine {
    coins: number;
    roulette1: boolean;
    roulette2: boolean;
    roulette3: boolean;

    constructor() {
        this.coins = 0;
    }

    play(){
        this.coins ++;
        this.roulette1 = Math.random() < 0.5;
        this.roulette2 = Math.random() < 0.5;
        this.roulette3 = Math.random() < 0.5;

        if(this.roulette1 === true && this.roulette2 === true && this.roulette3 === true) {
            console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
            this.coins = 0;
        }else{
            console.log("Good luck next time!!");
        }
    }
}

//Ejemplo

const machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"