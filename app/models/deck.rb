class Deck < ApplicationRecord
  has_many :cards
  has_many :rounds
  belongs_to :user 
end
