class CommentsController < ApplicationController

  def index
    @profile = Profile.all
    @comment= Comment.all
    @arena = Arena.all
    @user = User.all
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
      if Arena.count < 2
        Arena.create(user_id: current_user.id, vote: 0)
        # render comments_path
        respond_to do |format|
          format.js
        end
      end
    end

  def check_arena
    @arena = Arena.all
    @comment = Comment.all
    if @arena.count == 2
      Arena.destroy_all
      Comment.destroy_all
    end
    redirect_to comments_path
  end

  def vote_left
    @arena = Arena.all
    leftcount = @arena.first.vote + 1
    @arena.first.update(:vote => leftcount)
    respond_to do |format|
      format.js
    end
  end

  def vote_right
    @arena = Arena.all
    rightcount = @arena.last.vote + 1
    @arena.last.update(:vote => rightcount)
    respond_to do |format|
      format.js
    end
  end

  def update_profile_left
    @arena = Arena.all
    current_win = @arena.first.user.profile.wins + 1
    current_loss = @arena.last.user.profile.loss + 1
    @arena.first.user.profile.update(:wins => current_win)
    @arena.last.user.profile.update(:loss => current_loss)
    redirect_to comments_path
  end

   def update_profile_left_ko
    @arena = Arena.all
    current_win = @arena.first.user.profile.wins + 1
    current_loss = @arena.last.user.profile.loss + 1
    current_ko = @arena.first.user.profile.ko + 1
    @arena.first.user.profile.update(:wins => current_win, :ko => current_ko)
    @arena.last.user.profile.update(:loss => current_loss)
    redirect_to comments_path
  end

  def update_profile_right
    @arena = Arena.all
    current_win = @arena.last.user.profile.wins + 1
    current_loss = @arena.first.user.profile.loss + 1
    @arena.last.user.profile.update(:wins => current_win)
    @arena.first.user.profile.update(:loss => current_loss)
    redirect_to comments_path
  end

  def update_profile_right_ko
    @arena = Arena.all
    current_win = @arena.last.user.profile.wins + 1
    current_loss = @arena.first.user.profile.loss + 1
    current_ko = @arena.last.user.profile.ko + 1
    @arena.last.user.profile.update(:wins => current_win, :ko => current_ko)
    @arena.first.user.profile.update(:loss => current_loss)
    redirect_to comments_path
  end

  def update_profile_ties
    @arena = Arena.all
    @user = User.all
    right_tie_count = @arena.last.user.profile.ties + 1
    left_tie_count = @arena.first.user.profile.ties + 1
    @arena.last.user.profile.update(:ties => right_tie_count)
    @arena.first.user.profile.update(:ties => left_tie_count)
    redirect_to comments_path
  end

  def refresh
    @arena = Arena.all
    respond_to do |format|
      format.js
    end
  end

  def exit
    @arena = Arena.all
    @arena.where(user_id: current_user.id).first.destroy
    redirect_to refresh_path
  end

  def sign_out_exit
    @arena = Arena.all
    @arena.where(user_id: current_user.id).first.destroy
    current_session.destroy
    redirect_to refresh_path
  end
end
