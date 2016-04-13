class AddActiveToProfiles < ActiveRecord::Migration
  def change
    add_column :profiles, :active, :boolean
  end
end
