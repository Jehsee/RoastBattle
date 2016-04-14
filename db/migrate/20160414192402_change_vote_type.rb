class ChangeVoteType < ActiveRecord::Migration
  def change
    change_column :arenas, :vote, :decimal
  end
end
