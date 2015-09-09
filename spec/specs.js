describe('pigLatin', function() {
  it("add ay to the end of a word", function() {
    expect(pigLatin("ackbar")).to.equal("ackbaray");
  });

  it("adds consonant with ay to the end of the word", function() {
    expect(pigLatin("vader")).to.equal("adervay");
  });

  it("adds consonants with ay to the end of the word", function() {
    expect(pigLatin("chewbacca")).to.equal("ewbaccachay");
  });

  it("adds qu with ay to the end of the word", function() {
    expect(pigLatin("queen amidala")).to.equal("eenquay amidalaay");
  });

  it("adds consonant + qu with ay to the end of the word", function() {
    expect(pigLatin("squib")).to.equal("ibsquay");
  });

  it("adds y with ay to the end of the word", function() {
    expect(pigLatin("yoda")).to.equal("odayay");
  });

  it("treats hyphenated words as two words", function() {
    expect(pigLatin("qui-gon")).to.equal("iquay-ongay");
  });
});
