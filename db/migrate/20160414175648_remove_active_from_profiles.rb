class RemoveActiveFromProfiles < ActiveRecord::Migration
  def change
    remove_column :profiles, :active, :boolean
  end
end
