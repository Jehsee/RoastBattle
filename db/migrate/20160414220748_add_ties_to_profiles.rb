class AddTiesToProfiles < ActiveRecord::Migration
  def change
    add_column :profiles, :ties, :integer
  end
end
