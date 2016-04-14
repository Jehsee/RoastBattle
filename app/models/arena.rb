require 'timers'
class Arena < ActiveRecord::Base
  belongs_to :user
  after_create do

  end

end
