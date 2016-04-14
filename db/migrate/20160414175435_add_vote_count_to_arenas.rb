class AddVoteCountToArenas < ActiveRecord::Migration
  def change
    add_column :arenas, :vote, :integer
  end
end
