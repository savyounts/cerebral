require 'rails_helper'

RSpec.describe Deck, :type => :model do

  let(:user) {
    User.create(
      username: "sav",
      email: "sav@sav.com",
      password: "sav"
    )
    }

    let(:round) {
        Round.create(
          deck_id: deck2.id,
          user_id: user.id,
          score: 10
        )
      }

  let(:deck) {
      Deck.create(
        user_id: user.id,
        name: "First Deck",
        description: "this is my first deck"
      )
    }

    let(:deck2) {
        Deck.create(
          user_id: user.id,
          name: "Second Deck",
          description: "this is my 2nd deck"
        )
      }

  let(:card) {
      Card.create(
        :question => "What's 2 + 2?",
        :answer => "4",
        :hint => "use your fingers",
        :deck_id => deck.id
      )
    }

    it "is valid with a user_id, name, and highscore" do
      expect(deck).to be_valid
    end

    it "should have default highscore of 0" do
      expect(deck.highscore).to eq(0)
    end

    it "should have cards" do
      expect(deck.cards).to eq([card])
    end

    it "can have a round" do
      expect(deck2.rounds).to eq([round])
    end

    it "scores returns array of all round scores in decending order" do
      deck2.rounds << round
      expect(deck2.scores).to eq([10])
    end

    it "updates the highscore" do
      deck2.rounds << round
      expect(deck2.highscore).to eq(10)
    end

    it "should return the average score of all the rounds" do
      round2 = Round.create(deck_id: deck2.id, user_id: user.id)
      deck2.rounds << round2
      deck2.rounds << round
      expect(deck2.average_score).to eq(5)
    end
end
