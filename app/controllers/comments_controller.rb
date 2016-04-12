class CommentsController < ApplicationController
  def create
    Comment.create(user_id: current_user.id, content: params[:content])
    redirect_to root_path
  end
end
