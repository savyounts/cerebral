class CreateDecks < ActiveRecord::Migration[5.2]
  def change
    create_table :decks do |t|
      t.string :name
      t.text :description
      t.integer :user_id
      t.integer :highscore, default:0
      t.string :edit_pwd
      t.string :view_pwd



      t.timestamps
    end
  end
end
