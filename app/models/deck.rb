require 'pry'
class Deck < ApplicationRecord
  has_many :cards
  has_many :rounds
  belongs_to :user

  validates :user_id, :name, presence: true

  def scores
    rounds.map {|round| round.score}.sort.reverse!
  end

  def average_score
    (scores.sum)/rounds.size
  end

  def highscore
    scores.first || 0
  end

end
