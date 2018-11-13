class Card < ApplicationRecord
  belongs_to :deck

  validates :deck_id, :question, :answer, presence: true


end
