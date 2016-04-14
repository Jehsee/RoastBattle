class CommentsController < ApplicationController

  def index
    @profile = Profile.all
    @comment= Comment.all
    @arena = Arena.all
  end

  def create
    @comment = Comment.all
    @arena = Arena.all
    Comment.create(user_id: current_user.id, content: params[:content])
    respond_to do |format|
      format.js
    end
  end

  def join_arena
    @arena = Arena.all
      Arena.create(user_id: current_user.id)
      respond_to do |format|
        format.js
      end
    end

  def check_arena
    @arena = Arena.all
    if @arena.count == 2
      Arena.destroy_all
    end
  end
end
