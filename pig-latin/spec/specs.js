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

  it("For words that start with 2 consonants, move first 2 letters to end and add ay.", function() {
    expect(pigLatin('that')).to.equal('atthay')
  });

  it("For words that start with 3 consonants, move first 3 letters to end and add ay.", function () {
    expect(pigLatin('strike')).to.equal('ikestray')
  });

  it("For words that start with qu move first 2 letters to end and add ay.", function () {
    expect(pigLatin('queen')).to.equal('eenquay')
  });

  it("For any 2 words add ay to the end.", function () {
    expect(pigLatin('there home')).to.equal('erethay omehay')
  });


});
