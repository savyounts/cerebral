RSpec.describe Guess, :type => :model do

  let(:user) {
    User.create(
      username: "sav",
      email: "sav@sav.com",
      password: "sav"
    )
    }

    let(:round) {
        Round.create(
          deck_id: deck.id,
          user_id: user.id,
        )
      }

      let(:deck) {
          Deck.create(
            name: "my deck",
            user_id: user.id
          )
        }

      let(:card) {
          Card.create(
            deck_id: deck.id,
            answer: "4",
            question: "2 + 2"
          )
        }

      let(:guess) {
          Guess.create(
            response: '4',
            round_id: round.id,
            card_id: card.id,
          )
        }

  it "is connected to a round and a card" do
    expect(guess.card).to eq(card)
    expect(guess.round).to eq(round)
  end

  it "returns true if the answer is correct" do
    expect(guess.correct?).to eq(true)
  end

end
