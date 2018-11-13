class Guess < ApplicationRecord
  belongs_to :card
  belongs_to :round

end
