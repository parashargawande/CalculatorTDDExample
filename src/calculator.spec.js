'use strict'
const Calculator = require('./calculator')
const expect = require('chai').expect

// add function should exists and returns a number
describe('Calculator module', () => {
    it('should export add function',()=>{
        expect(Calculator.add).to.be.a('function')
    })
})