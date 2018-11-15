class DeckSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :highscore, :average_score, :edit_pwd, :view_pwd, :scores, :topscores
  has_many :cards
  has_many :rounds
end
