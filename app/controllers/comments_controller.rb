class CommentsController < ApplicationController
  def index
    @profile = Profile.all
    @comment= Comment.all
    @arena = Arena.all
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

  def display_left_roaster
    @profile = current_user.profile
    respond_to do |format|
      @profile.update_attribute(:active, true)
      format.js
    end
  end

  def display_right_roaster
    @profile = current_user.profile
    respond_to do |format|
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
