class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_one :profile
  has_many :comments

  after_create do
    Profile.create(user_id: self.id, wins: 0, loss: 0, ko: 0)
  end
end
