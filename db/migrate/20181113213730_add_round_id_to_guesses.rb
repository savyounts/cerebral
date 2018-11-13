class AddRoundIdToGuesses < ActiveRecord::Migration[5.2]
  def change
    add_column :guesses, :round_id, :integer
  end
end
