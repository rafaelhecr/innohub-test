const assert = require('assert');
const question1 = require('../question1')
const question2 = require('../question2')
const question3 = require('../question3')
const question4 = require('../question4')
const question5 = require('../question5')

describe('Pregunta 1', () => {
    describe('Modulo Reverse', () => {
        it('question1(abc) debe regresar [c,b,a]', function(){
            assert.deepEqual(question1.reverse('abc'), ['c','b','a'])
        })
        it('question1(xyz) debe regresar [z,y,x]', function(){
            assert.deepEqual(question1.reverse('xyz'), ['z','y','x'])
        })
        it('question1(abcdef) debe regresar [f,e,d,c,b,a]', function(){
            assert.deepEqual(question1.reverse('abcdef'), ['f','e','d','c','b','a'])
        })
    });
});

describe('Pregunta 2', () => {
    describe('Modulo Reverse', () => {
        it('question2(abc) debe regresar [c,b,a]', function(){
            assert.deepEqual(question2.reverse('abc'), ['c','b','a'])
        })
        it('question2(xyz) debe regresar [z,y,x]', function(){
            assert.deepEqual(question2.reverse('xyz'), ['z','y','x'])
        })
        it('question2(abcdef) debe regresar [f,e,d,c,b,a]', function(){
            assert.deepEqual(question2.reverse('abcdef'), ['f','e','d','c','b','a'])
        })
    });
});

describe('Pregunta 3', () => {
    describe('Cálculo de cuadros sombreados', () => {
        it('quiestion3(3) debe regresar 9', function(){
            assert.deepEqual(question3.squareShadow(3), 9)
        })
        it('quiestion3(4) debe regresar 16', function(){
            assert.deepEqual(question3.squareShadow(4), 16)
        })
        it('quiestion3(5) debe regresar 25', function(){
            assert.deepEqual(question3.squareShadow(5), 25)
        })
    });
});

describe('Pregunta 4', () => {
    describe('Obtener n + Fibonacci(n)', () => {
        it('quiestion4(3) debe regresar 6', function(){
            assert.deepEqual(question4.totalFibonacci(3), 6)
        })
        it('quiestion4(4) debe regresar 10', function(){
            assert.deepEqual(question4.totalFibonacci(4), 10)
        })
        it('quiestion4(5) debe regresar 15', function(){
            assert.deepEqual(question4.totalFibonacci(5), 15)
        })
    });
});

describe('Pregunta 5', () => {
    describe('Obtener n + Fibonacci(n) no recursivo', () => {
        it('quiestion5(3) debe regresar 6', function(){
            assert.deepEqual(question5.serieFibonacci(3),6 )
        })
        it('quiestion5(4) debe regresar 10', function(){
            assert.deepEqual(question5.serieFibonacci(4), 10)
        })
        it('quiestion5(5) debe regresar 15', function(){
            assert.deepEqual(question5.serieFibonacci(5), 15)
        })
    });
});