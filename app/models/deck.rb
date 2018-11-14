require 'pry'
class Deck < ApplicationRecord
  attr_accessor :average_score
  has_many :cards
  has_many :rounds
  belongs_to :user

  validates :user_id, :name, presence: true

  def initialize
    @average_score = 0
  end

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
