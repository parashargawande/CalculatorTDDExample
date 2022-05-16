'use strict'
const Calculator = require('./calculator')
const expect = require('chai').expect
const assert = require('assert')

// add function should exists and returns a number
describe('Calculator module', () => {
    it('should export add function',()=>{
        expect(Calculator.add).to.be.a('function')
    })

    describe('add function',()=>{
        it('should return number',()=>{
            expect(Calculator.add()).to.be.a('number')
        })
    })

    //empty string return 0
    it('should return 0 for empty string',()=>{
        assert.equal(Calculator.add(""),0)
    })

    //two number returns addition
    it('should add two numbers',()=>{
        assert.equal(Calculator.add("1,2"),3)
    })

    it('should handle new line as seperator and more than 2 nos',()=>{
        expect(Calculator.add("1,2\n3")).to.be.equal(6)
    })

    //negative number returns error and show all of them in error
    it('should throw error when negative nos are given',()=>{
        expect(Calculator.add("1,2\n3\n-2")).to.throw(new Error())
    })
})