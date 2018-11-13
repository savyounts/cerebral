require 'rails_helper'

RSpec.describe Card, :type => :model do

  let(:user) {
      User.create!
    }

  let(:deck) {
      Deck.create!(
        user_id: user.id
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

  it "is valid with a question, answer, and deck_id" do
    expect(card).to be_valid
  end

  it "has an answer" do
    expect(card.answer).to eq("4")
  end

  it "has a question" do
    expect(card.question).to eq("What's 2 + 2?")
  end
end
