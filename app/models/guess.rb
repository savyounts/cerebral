class Guess < ApplicationRecord
  belongs_to :card
  belongs_to :round


  def correct?
    response == card.answer
  end
end
