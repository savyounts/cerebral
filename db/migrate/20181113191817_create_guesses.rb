class CreateGuesses < ActiveRecord::Migration[5.2]
  def change
    create_table :guesses do |t|
      t.string :response
      t.integer :card_id

      t.timestamps
    end
  end
end
