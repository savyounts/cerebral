require 'pry'
class Deck < ApplicationRecord
  attr_accessor :average_score, :scores
  has_many :cards
  has_many :rounds
  # belongs_to :user

  validates  :name, presence: true
  # validates :user_id, presence: true


  def scores
    rounds.map {|round| round.score}.sort.reverse!
  end

  def average_score
    (scores.sum.to_f)/self.rounds.size
  end

  def highscore
    scores.first || 0
  end

end
