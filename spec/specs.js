describe('pigLatin', function() {
  it("add ay to the end of a word", function() {
    expect(pigLatin("obiwan")).to.equal("obiwanay");
  });

  it("adds consonant with ay to the end of the word", function() {
    expect(pigLatin("vader")).to.equal("adervay");
  });

  it("adds consonants with ay to the end of the word", function() {
    expect(pigLatin("chewbacca")).to.equal("ewbaccachay");
  });

  it("adds qu with ay to the end of the word", function() {
    expect(pigLatin("quigon")).to.equal("igonquay");
  });
});
