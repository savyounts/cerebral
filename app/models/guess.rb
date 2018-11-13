class Guess < ApplicationRecord
  belongs_to :card
  belongs_to :round

  validates :card_id, :round_id, :response, presence: true


  def correct?
    response == card.answer
  end
end
