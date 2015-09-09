describe('pigLatin', function() {
  it("For words that start with a, add ay to the end.", function() {
    expect(pigLatin('at')).to.equal('atay')
  });

  it("For words that start with e, add ay to the end.", function() {
    expect(pigLatin('eat')).to.equal('eatay')
  });

  it("For words that start with a consonant, move first letter to end and add ay.", function() {
    expect(pigLatin('pig')).to.equal('igpay')
  });
});
