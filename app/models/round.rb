class Round < ApplicationRecord
  belongs_to :deck
  belongs_to :user
  has_many :guesses


  def current_card
    deck.cards[guesses.size]
  end

  def record_guess(response)
    guess = Guess.create(response:response, card_id: self.current_card.id, round_id: self.id)
    guesses << guess
  end

  def number_correct
    counter = 0
    guesses.each {|guess| counter += 1 if guess.response == guess.card.answer}
    counter
  end

  def percent_correct
    (number_correct.to_f/self.deck.cards.size)*100
  end
end
