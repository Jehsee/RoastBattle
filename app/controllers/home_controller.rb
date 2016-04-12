class HomeController < ApplicationController
  def index
    redirect_to comments_path
  end
end
