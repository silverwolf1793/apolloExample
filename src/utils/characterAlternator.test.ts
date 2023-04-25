import { describe } from 'mocha';
import { expect } from 'chai';
import { characterAlternator } from './characterAlternator';

describe('the characterAlternator function', () => {
  it('should exist', () => {
    expect(characterAlternator).to.exist;
  });
  it('should return a string', () => {
    expect(characterAlternator('')).to.be.a('string');
  });
  it('should return a string with alternating characters', () => {
    expect(characterAlternator('hello')).to.equal('HeLlO');
  });
  it('should start at every word with a capital letter', () => {
    expect(characterAlternator('helloo world')).to.equal('HeLlOo WoRlD');
  });
});
