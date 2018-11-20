# user = User.create(username:'sav', email: 'sav@sav.com', password: 'password')
# DECK 1
deck = Deck.create(name:'Spanish Basics', description: 'Practice your Spanish vocabulary')

card1 = Card.create(question:"Translate: Hola", answer:"hello", deck_id: deck.id)
card2 = Card.create(question:"Translate: Beach", answer:"playa", hint:"You PLAY on the beach", deck_id: deck.id)
card3 = Card.create(question:"Translate: Dog", answer:"perro", deck_id: deck.id)
card4 = Card.create(question:"Translate: Queso", answer:"cheese", hint:"Think chip dip", deck_id: deck.id)
card5 = Card.create(question:"Translate: Eggs", answer:"juevos", deck_id: deck.id)
card6 = Card.create(question:"Translate: Onion", answer:"cebolla", deck_id: deck.id)
card7 = Card.create(question:"Translate: To eat", answer:"comidar", deck_id: deck.id)
card8 = Card.create(question:"Translate: Tia", answer:"aunt", hint:"If uncle is tio...", deck_id: deck.id)

round = Round.create(username: "Savannah", deck_id:deck.id)
round2 = Round.create(username: "Sam", deck_id:deck.id)

Guess.create(response:'hello', card_id:card1.id, round_id: round.id)
Guess.create(response:'playa', card_id:card2.id, round_id: round.id)
Guess.create(response:'perro', card_id:card3.id, round_id: round2.id)


# DECK 2
deck2 = Deck.create(name:'Car Makes and Models', description: 'Name the corresponding maker of each model')

card9 = Card.create(question:"Escape", answer:"Ford", hint:"American Made", deck_id: deck2.id)
card10 = Card.create(question:"CX9", answer:"Mazda", hint:"Japan", deck_id: deck2.id)
card11 = Card.create(question:"Escalade", answer:"Cadillac", hint:"American", deck_id: deck2.id)
card12 = Card.create(question:"Santa Fe", answer:"Honda", hint:"Japan", deck_id: deck2.id)
card13 = Card.create(question:"Forerunner", answer:"Toyota", hint:"Japan", deck_id: deck2.id)
card14 = Card.create(question:"Outback", answer:"Subaru", hint:"Japan", deck_id: deck2.id)
card15 = Card.create(question:"TrailBlazer", answer:"Chevrolet", hint:"American", deck_id: deck2.id)
card16 = Card.create(question:"Soul", answer:"Kia", hint:"South Korea", deck_id: deck2.id)

round3 = Round.create(username: "Josh", deck_id:deck2.id)
round4 = Round.create(username: "Mark", deck_id:deck2.id)


Guess.create(response:'Ford', card_id:card9.id, round_id: round3.id)
Guess.create(response:'Mazda', card_id:card10.id, round_id: round3.id)
Guess.create(response:'Cadillac', card_id:card11.id, round_id: round4.id)



# DECK 3
deck3 = Deck.create(name:'Country Capitals', description: 'Name the missing country or it\'s capital.')

card17 = Card.create(question:"Luxembourg", answer:"Luxembourg City", hint:"Think ... Luxembourg", deck_id: deck3.id)
card18 = Card.create(question:"Estonia", answer:"Tallinn", hint:"They\'re not 'short in' Estonia", deck_id: deck3.id)
card19 = Card.create(question:"Iceland", answer:"Reykjavik", hint:"If you've ever traveled to Iceland.. you've probably flown here.", deck_id: deck3.id)
card20 = Card.create(question:"Montevideo", answer:"Uruguay", hint:"South America", deck_id: deck3.id)
card21 = Card.create(question:"Santigao", answer:"Chile", hint:"Patagonia", deck_id: deck3.id)
card22 = Card.create(question:"Bosnia", answer:"Sarajevo", hint:"Where Franz Ferdinand was assassinated", deck_id: deck3.id)
card23 = Card.create(question:"Wellington", answer:"New Zeland", hint:"Way down under", deck_id: deck3.id)
card24 = Card.create(question:"Bangkok", answer:"Thailand", hint:"South East Asia", deck_id: deck3.id)

round5 = Round.create(username: "Thomas", deck_id:deck3.id)
round6 = Round.create(username: "Emily", deck_id:deck3.id)


Guess.create(response:'Luxembourg City', card_id:card17.id, round_id: round5.id)
Guess.create(response:'Tallinn', card_id:card18.id, round_id: round5.id)
Guess.create(response:'Reykjavik', card_id:card19.id, round_id: round6.id)

# DECK 4
deck4 = Deck.create(name:'Airport Codes', description: 'Give city of the airport name or missing Airport code.')

card25 = Card.create(question:"DIA", answer:"Denver", hint:"Colorado", deck_id: deck4.id)
card26 = Card.create(question:"Atlanta, GA", answer:"ATL", hint:"Think T.I.", deck_id: deck4.id)
card27 = Card.create(question:"Portland, OR", answer:"PDX", hint:"'X' marks the spot", deck_id: deck4.id)
card28 = Card.create(question:"St. Louis", answer:"STL", hint:"Have you ever seen a Cardinals hat?", deck_id: deck4.id)
card29 = Card.create(question:"AAL", answer:"AALBORG", hint:"Denmark", deck_id: deck4.id)
card30 = Card.create(question:"ABQ", answer:"ALBUQUERQUE", hint:"New Mexico", deck_id: deck4.id)
card31 = Card.create(question:"Nantucket, MA", answer:"ACK", hint:"The Navy reserved all codes starting with N", deck_id: deck4.id)
card32 = Card.create(question:"Bratislava, Slovakia", answer:"BTS", deck_id: deck4.id)

round7 = Round.create(username: "Kellar", deck_id:deck4.id)
round8 = Round.create(username: "Kate", deck_id:deck4.id)

Guess.create(response:'Denver', card_id:card25.id, round_id: round7.id)
Guess.create(response:'ATL', card_id:card26.id, round_id: round7.id)
Guess.create(response:'PDX', card_id:card27.id, round_id: round8.id)

# DECK 5
deck5 = Deck.create(name:'Who created that?', description: 'Name the creator of this invention.')

card33 = Card.create(question:"Cinematograph", answer:"Thomas Edison", hint:"He failed like.. so many times.", deck_id: deck5.id)
card34 = Card.create(question:"Dynamite", answer:"Alfred Nobel", hint:"It's like he should have gotten some sort of 'prize'", deck_id: deck5.id)
card35 = Card.create(question:"Telescope", answer:"Hans Lippershey", hint:"Invented by Hans ___ in 1608", deck_id: deck5.id)
card36 = Card.create(question:"Telephone", answer:"Alexander Graham Bell", hint:"A.G.B", deck_id: deck5.id)
card37 = Card.create(question:"Safety pin", answer:"William Hurst", hint:"Don't prick yourself, it could really hur-st", deck_id: deck5.id)
card38 = Card.create(question:"Revolver", answer:"Samuel Colt", hint:"___ 45", deck_id: deck5.id)
card39 = Card.create(question:"Diesel engine", answer:"Rudolf Diesel", hint:"Its almost as if he named it after himself.", deck_id: deck5.id)
card40 = Card.create(question:"Aeroplane", answer:"Wright Brothers", hint:"Hmm.. it wasn't the Wrong brothers", deck_id: deck5.id)

round9 = Round.create(username: "Kellar", deck_id:deck5.id)
round10 = Round.create(username: "Kate", deck_id:deck5.id)

Guess.create(response:'Thomas Edison', card_id:card33.id, round_id: round9.id)
Guess.create(response:'Alfred Nobel', card_id:card34.id, round_id: round9.id)
Guess.create(response:'Hans Lippershey', card_id:card35.id, round_id: round10.id)


# DECK 6
deck6 = Deck.create(name:'State Capitals', description: 'Name the State or its Capital')

card41 = Card.create(question:"Columbus", answer:"Ohio", hint:"He sailed the ocean blue...", deck_id: deck6.id)
card42 = Card.create(question:"Texas", answer:"Austin", hint:"6th Street", deck_id: deck6.id)
card43 = Card.create(question:"Montana", answer:"Helena", hint:"____a of Troy", deck_id: deck6.id)
card44 = Card.create(question:"Wyoming", answer:"Cheyenne", hint:"A.G.B", deck_id: deck6.id)
card45 = Card.create(question:"Trenton", answer:"New Jersey", hint:"Snookie", deck_id: deck6.id)
card46 = Card.create(question:"Boise", answer:"Idaho", hint:"Potatoes", deck_id: deck6.id)
card47 = Card.create(question:"Pierre", answer:"South Dakota", hint:"Mount Rushmore", deck_id: deck6.id)
card48 = Card.create(question:"Madison", answer:"Wisconsin", hint:"Cheese Curds", deck_id: deck6.id)

round11 = Round.create(username: "Kellar", deck_id:deck6.id)
round12 = Round.create(username: "Kate", deck_id:deck6.id)

Guess.create(response:'Ohio', card_id:card41.id, round_id: round11.id)
Guess.create(response:'Austin', card_id:card42.id, round_id: round11.id)
Guess.create(response:'Helena', card_id:card43.id, round_id: round12.id)
