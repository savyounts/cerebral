Rails.application.routes.draw do
  scope '/api' do
    resources :users
    resources :guesses
    resources :rounds
    resources :decks
    resources :cards
  end
end
