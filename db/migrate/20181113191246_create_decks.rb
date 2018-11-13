class CreateDecks < ActiveRecord::Migration[5.2]
  def change
    create_table :decks do |t|
      t.string :name
      t.string :description
      t.string :tags
      t.string :user_id
      t.string :highscore
      t.string :edit_password

      t.timestamps
    end
  end
end
