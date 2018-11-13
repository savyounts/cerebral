Rails.application.routes.draw do
  resources :users
  resources :guesses
  resources :rounds
  resources :decks
  resources :cards
  scope '/api' do
    
  end
end
