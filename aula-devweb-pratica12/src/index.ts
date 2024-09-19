interface Avião {
    decolar(): void;
    acelerar(): void;
    desacelerar(): void;
    pousar(): void;
}

class Jato implements Avião {

    private velocidade = 0;
    private _nome: string;

    public constructor(nome: string) {
        this._nome = nome;
    }

    public get nome(): string {
        return this._nome;
    }

    decolar(): void {
        if (this.velocidade === 0) {
            console.log(`${this._nome} está decolando.`);
            this.velocidade = 300;
        }
    }
    acelerar(): void {
        if (this.velocidade >= 300) {
            this.velocidade += 5
            console.log(`${this._nome} está acelerando. Velocidade atual: ${this.velocidade} km/h`);
        }
    }
    desacelerar(): void {
        if (this.velocidade > 300)
            this.velocidade -= 10
        console.log(`${this._nome} está desacelerando. Velocidade atual: ${this.velocidade} km/h`);
    }
    pousar(): void {
        if (this.velocidade === 300) {
            console.log(`${this._nome} está pousando.`);
            this.velocidade = 0
        }
    }
}

const jato = new Jato("F18 HORNET");
jato.decolar();
jato.acelerar();
jato.acelerar();
jato.acelerar();
jato.desacelerar();
jato.desacelerar();
jato.desacelerar();
jato.pousar();

class Turboelice implements Avião {

    private velocidade = 0;
    private _nome: string;

    public constructor(nome: string) {
        this._nome = nome;
    }

    public get nome(): string {
        return this._nome;
    }

    decolar(): void {
        if (this.velocidade === 0) {
            console.log(`${this._nome} está decolando.`);
            this.velocidade = 200;
        }
    }
    acelerar(): void {
        if (this.velocidade >= 200) {
            this.velocidade += 5
            console.log(`${this._nome} está acelerando. Velocidade atual: ${this.velocidade} km/h`);
        }
    }
    desacelerar(): void {
        if (this.velocidade > 200)
            this.velocidade -= 5
            console.log(`${this._nome} está desacelerando. Velocidade atual: ${this.velocidade} km/h`);
    }
    pousar(): void {
        if (this.velocidade === 200) {
            console.log(`${this._nome} está pousando.`);
            this.velocidade = 0
        }
    }
}

const turboelice = new Turboelice("super Tucano");
turboelice.decolar();
turboelice.acelerar();
turboelice.acelerar();
turboelice.acelerar();
turboelice.desacelerar();
turboelice.desacelerar();
turboelice.desacelerar();
turboelice.pousar();

