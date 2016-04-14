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
      Arena.create(user_id: current_user.id, vote: 0)
      respond_to do |format|
        format.js
      end
    end

  def check_arena
    @arena = Arena.all
    @comment = Comment.all
    if @arena.count == 2
      Arena.destroy_all
      Comment.destroy_all
    end
  end

  def vote_left
    @arena = Arena.all
    leftcount = @arena.first.vote += 1
    @arena.first.update(:vote => leftcount)
    respond_to do |format|
      format.js
    end
  end

  def vote_right
    @arena = Arena.all
    rightcount = @arena.last.vote += 1
    @arena.last.update(:vote => rightcount)
    respond_to do |format|
      format.js
    end
  end
end
