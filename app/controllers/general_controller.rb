class GeneralController < ApplicationController
  def home
  end

  def advice_anniversaire
  end


  def new_group_project
    if !params[:telephone].blank?
      GeneralMailer.project_message(params).deliver
      @telephone = params[:telephone]
      @email = params[:email]
      @nb_person = params[:number_of_persons]
      @budget = params[:budget]
      @comment = params[:comment]
      @refering = params[:referring_page]
      @date = params[:date]
      GroupReservationApi.create_a_reservation(@telephone, @email, @date, @nb_person, @budget, @comment, @refering)
    else
      redirect_to :back, notice: "Vous devez entrer votre numéro afin que nos équipes puissent vous contacter"
    end

    redirect_to :back, notice: "Votre demande a bien été prise en compte. Nous allons vous recontacter dans les plus brefs délais"
    rescue ActionController::RedirectBackError
    redirect_to root_path, notice: "Message bien envoyé"
    return
  end
end
