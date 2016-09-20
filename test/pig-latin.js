'use strict';

const PigLatin = require('../');
const expect = require('chai').expect;

describe('PigLatin class tests suite', () => {
  it('Should create an instance of PigLatin by providing a string', () => {
    let pig = new PigLatin('michelada');
    expect(pig).to.be.ok;
  });

  it('Should expose the string through #phrase', () => {
    let pig = new PigLatin('michelada');
    expect(pig.phrase()).to.equal('michelada');
  });

  it('Should allow to reset the string through #reset keeping same instance', () => {
    let pig = new PigLatin('michelada');
    pig.reset('elixir');
    expect(pig.phrase()).to.equal('elixir');
  });

  it('Should have a #translate method', () => {
    let pig = new PigLatin('michelada');
    expect(pig.translate).to.be.ok;
  });

  it('Should throw an err if no initializing with a string', () => {
    function err () {
      new PigLatin(['mi','che','la','da']);
    }
    expect(err).to.throw(Error);
  });
});
