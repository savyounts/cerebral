class Round < ApplicationRecord
  belongs_to :deck
  belongs_to :user
  has_many :guesses

  validates :deck_id, :user_id, presence: true

  def current_card
    deck.cards[guesses.size]
  end

  def record_guess(response)
    guess = Guess.create(response:response, card_id: self.current_card.id, round_id: self.id)
    guesses << guess
  end

  def number_correct
    guesses.each {|guess| self.score += 1 if guess.correct?}
    save
    self.score
  end

  def percent_correct
    (number_correct.to_f/self.deck.cards.size)*100
  end
end
