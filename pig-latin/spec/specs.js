describe('pigLatin', function() {
  it("For words that start with a vowel, add ay to the end.", function() {
    expect(pigLatin('at')).to.equal('atay');
  });
});
