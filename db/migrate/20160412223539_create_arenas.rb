class CreateArenas < ActiveRecord::Migration
  def change
    create_table :arenas do |t|
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
