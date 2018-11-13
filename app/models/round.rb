class Round < ApplicationRecord
  belongs_to :decks
  belongs_to :user 
end
