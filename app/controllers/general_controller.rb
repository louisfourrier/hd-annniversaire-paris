class GeneralController < ApplicationController
  def home
  end


  def new_group_project
    if !params[:telephone].blank?
      GeneralMailer.project_message(params).deliver
    else
      redirect_to :back, notice: "Vous devez entrer votre numéro afin que nos équipes puissent vous contacter"
    end

    redirect_to :back, notice: "Votre demande a bien été prise en compte. Nous allons vous recontacter dans les plus brefs délais"
    rescue ActionController::RedirectBackError
    redirect_to root_path, notice: "Message bien envoyé"
    return
  end
end
