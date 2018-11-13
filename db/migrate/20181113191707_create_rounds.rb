class CreateRounds < ActiveRecord::Migration[5.2]
  def change
    create_table :rounds do |t|
      t.string :deck_id
      t.string :user_id
      t.string :score

      t.timestamps
    end
  end
end
