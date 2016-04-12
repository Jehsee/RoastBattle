class AddAttachmentProfilepicToProfiles < ActiveRecord::Migration
  def self.up
    change_table :profiles do |t|
      t.attachment :profilepic
    end
  end

  def self.down
    remove_attachment :profiles, :profilepic
  end
end
