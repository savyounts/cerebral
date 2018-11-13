# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.create!
deck = Deck.create(name:'test Deck 1', user_id:user.id)
card1 = Card.create(question:"Whats 1 + 1?", answer:"2", hint:"hint 1", deck_id: deck.id)
card2 = Card.create(question:"Whats 2 + 2?", answer:"4", hint:"hint 2", deck_id: deck.id)
card3 = Card.create(question:"Whats 3 + 3?", answer:"6", hint:"hint 3", deck_id: deck.id)
round = Round.create(user_id: user.id, deck_id:deck.id)
