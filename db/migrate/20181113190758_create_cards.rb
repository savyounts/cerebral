class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :question
      t.string :answer
      t.string :hint
      t.string :photo
      t.integer :deck_id

      t.timestamps
    end
  end
end
