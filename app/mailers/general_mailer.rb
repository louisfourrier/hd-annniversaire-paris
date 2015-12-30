class GeneralMailer < ActionMailer::Base
  default reply_to: "HD anniversaire Paris <admin@restaurant-anniversaire-paris.fr>"
  default from: "HD anniversaire Paris <admin@restaurant-anniversaire-paris.fr>"

  def project_message(params)
    @telephone = params[:telephone]
    @email = params[:email]
    @nb_person = params[:number_of_persons]
    @budget = params[:budget]
    @comment = params[:comment]
    @refering = params[:referring_page]
    @date = params[:date]

    mail to: "contact@happydining.fr", subject: "Nouveau message réservation de groupe"
  end

end
