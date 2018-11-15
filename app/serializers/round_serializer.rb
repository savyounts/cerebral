class RoundSerializer < ActiveModel::Serializer
  attributes :id, :score, :created_at, :username
  belongs_to :deck
end
