user = User.create(username:'sav', email: 'sav@sav.com', password: 'password')

deck = Deck.create(name:'test Deck 1', user_id:user.id)
deck2 = Deck.create(name:'test Deck 2', user_id:user.id)

card1 = Card.create(question:"Whats 1 + 1?", answer:"2", hint:"hint 1", deck_id: deck.id)
card2 = Card.create(question:"Whats 2 + 2?", answer:"4", hint:"hint 2", deck_id: deck.id)
card3 = Card.create(question:"Whats 3 + 3?", answer:"6", hint:"hint 3", deck_id: deck.id)

round = Round.create(user_id: user.id, deck_id:deck2.id, score:10)
round2 = Round.create(user_id: user.id, deck_id:deck2.id)
round3 = Round.create(user_id: user.id, deck_id:deck.id)
round4 = Round.create(user_id: user.id, deck_id:deck.id)

guess = Guess.create(response:'2', card_id:card1.id, round_id: round.id)
guess = Guess.create(response:'4', card_id:card2.id, round_id: round.id)
guess = Guess.create(response:'6', card_id:card3.id, round_id: round.id)
guess = Guess.create(response:'2', card_id:card1.id, round_id: round3.id)
guess = Guess.create(response:'4', card_id:card2.id, round_id: round3.id)
guess = Guess.create(response:'5', card_id:card3.id, round_id: round3.id)
guess = Guess.create(response:'1', card_id:card1.id, round_id: round2.id)
guess = Guess.create(response:'4', card_id:card2.id, round_id: round2.id)
guess = Guess.create(response:'5', card_id:card3.id, round_id: round2.id)
