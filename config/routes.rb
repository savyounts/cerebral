Rails.application.routes.draw do
  scope '/api' do
    resources :users
    resources :guesses
    resources :rounds
    resources :decks
    resources :cards
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
