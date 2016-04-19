class ProfilesController < ApplicationController
  def index
    @profile = Profile.all
  end
  def show
    @profile = current_user.profile
  end
  def edit
    @profile = Profile.find(params[:id])

  end
  def update
    @profile = Profile.find(params[:id])
    @profile.update(profile_params)
    redirect_to profile_path
  end

    private
  def profile_params
    params.require(:profile).permit(:username, :profilepic, :description)
  end
end
