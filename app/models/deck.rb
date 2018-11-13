require 'pry'
class Deck < ApplicationRecord

  has_many :cards
  has_many :rounds
  belongs_to :user


  def scores
    rounds.map {|round| round.score}.sort.reverse!
  end

  def highscore
    scores.first || 0
  end

end
