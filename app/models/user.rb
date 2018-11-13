class User < ApplicationRecord
  has_many :decks
  has_many :rounds
  has_secure_password

  validates :username, :password, :email, presence: true
  validates :username, :email, uniqueness:{case_sensitive: false}

end
