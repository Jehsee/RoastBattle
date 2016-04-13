class CommentsController < ApplicationController

  def index
    @profile = Profile.all
    @comment= Comment.all
    @arena = Arena.all
  end

  def create
    @comment = Comment.all
    respond_to do |format|
      Comment.create(user_id: current_user.id, content: params[:content])
      format.js
    end
  end

  def join_arena
    @arena = Arena.all
    respond_to do |format|
      Arena.create(user_id: current_user.id)
      format.js
    end
  end
end
