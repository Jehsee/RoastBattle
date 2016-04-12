class CommentsController < ApplicationController
    def index
    @profile = Profile.all
    @comment = Comment.all
    # @comment = Comment.where(user_id: current_user.id)
    # if user_signed_in?
    # @comments = Comment.all
    # @comment = Comment.where(user_id: current_user.id).first
  end

  def create
    @comment = Comment.all
    respond_to do |format|
      Comment.create(user_id: current_user.id, content: params[:content])
      format.js
    end
  end
end
