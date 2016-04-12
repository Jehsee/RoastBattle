class HomeController < ApplicationController
  def index
    @profile = Profile.all
    @comment = Comment.all
    # @comment = Comment.where(user_id: current_user.id)
    # if user_signed_in?
    # @comments = Comment.all
    # @comment = Comment.where(user_id: current_user.id).first
  end
  def update
    @comment = Comment.where(user_id: current_user.id)
    @comment.update(params[:comment])
  end
end
