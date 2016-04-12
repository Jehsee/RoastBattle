class Profile < ActiveRecord::Base
  belongs_to :user

  has_attached_file :profilepic, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "/images/:style/missing.png"
  validates_attachment_content_type :profilepic, :content_type => /\Aimage\/.*\Z/
end
