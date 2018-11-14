class RoundSerializer < ActiveModel::Serializer
  attributes :id, :score, :created_at, :user_id
  belongs_to :deck
end
