RSpec.describe Round, :type => :model do

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
          user_id: user.id
        )
      }

  let(:deck) {
      Deck.create(
        user_id: user.id,
        name: "First Deck",
        description: "this is my first deck"
      )
    }

    it "should be valid with a user_id and deck_id" do
      expect(round).to be_valid
    end

    it "should have a default score of 0" do
      expect(round.score).to eq(0)
    end

    it "should know the current card" do
      card1 = Card.create(question:'1', answer:'2', deck_id: deck.id)
      card2 = Card.create(question:'3', answer:'4', deck_id: deck.id)

      expect(round.current_card).to eq(card1)
    end

    it "should create a new Guess with record_guess" do
      card1 = Card.create(question:'1', answer:'2', deck_id: deck.id)
      guess = round.record_guess('my response')
      expect(round.guesses.size).to eq(1)
    end

    it "should return the number correct" do
      card1 = Card.create(question:'1', answer:'2', deck_id: deck.id)
      guess = Guess.new(response:"2", round_id: round.id, card_id: card1.id)
      round.guesses << guess
      expect(round.number_correct).to eq(1)
    end

    # it "number correct should update the score" do
    #   card1 = Card.create(question:'1', answer:'2', deck_id: deck.id)
    #   guess = Guess.new(response:"2", round_id: round.id, card_id: card1.id)
    #   round.guesses << guess
    #   expect(round.score).to eq(1)
    # end

    it "should return percent correct" do
      card1 = Card.create(question:'1', answer:'2', deck_id: deck.id)
      card2 = Card.create(question:'1', answer:'2', deck_id: deck.id)
      right = Guess.new(response:"2", round_id: round.id, card_id: card1.id)
      wrong = Guess.new(response:"1", round_id: round.id, card_id: card1.id)

      round.guesses << right
      round.guesses << wrong
      expect(round.percent_correct).to eq(50)
    end

end
