"use strict";
class Jato {
    constructor(nome) {
        this.velocidade = 0;
        this._nome = nome;
    }
    get nome() {
        return this._nome;
    }
    decolar() {
        if (this.velocidade === 0) {
            console.log(`${this._nome} está decolando.`);
            this.velocidade = 300;
        }
    }
    acelerar() {
        if (this.velocidade >= 300) {
            this.velocidade += 5;
            console.log(`${this._nome} está acelerando. Velocidade atual: ${this.velocidade} km/h`);
        }
    }
    desacelerar() {
        if (this.velocidade > 300)
            this.velocidade -= 10;
        console.log(`${this._nome} está desacelerando. Velocidade atual: ${this.velocidade} km/h`);
    }
    pousar() {
        if (this.velocidade === 300) {
            console.log(`${this._nome} está pousando.`);
            this.velocidade = 0;
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
class Turboelice {
    constructor(nome) {
        this.velocidade = 0;
        this._nome = nome;
    }
    get nome() {
        return this._nome;
    }
    decolar() {
        if (this.velocidade === 0) {
            console.log(`${this._nome} está decolando.`);
            this.velocidade = 200;
        }
    }
    acelerar() {
        if (this.velocidade >= 200) {
            this.velocidade += 5;
            console.log(`${this._nome} está acelerando. Velocidade atual: ${this.velocidade} km/h`);
        }
    }
    desacelerar() {
        if (this.velocidade > 200)
            this.velocidade -= 5;
        console.log(`${this._nome} está desacelerando. Velocidade atual: ${this.velocidade} km/h`);
    }
    pousar() {
        if (this.velocidade === 200) {
            console.log(`${this._nome} está pousando.`);
            this.velocidade = 0;
        }
    }
}
const turboelice = new Turboelice("ATR");
turboelice.decolar();
turboelice.acelerar();
turboelice.acelerar();
turboelice.acelerar();
turboelice.desacelerar();
turboelice.desacelerar();
turboelice.desacelerar();
turboelice.pousar();
