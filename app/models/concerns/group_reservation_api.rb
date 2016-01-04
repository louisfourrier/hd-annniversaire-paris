class GroupReservationApi
  require 'typhoeus'

  def self.main_route
    'https://www.happydining.fr/api/v1/group_reservations'
  end

  def self.create_a_reservation(phone, email, date_lead, nb_person_lead, budget_lead, comment_lead, refering_url)
    request = Typhoeus::Request.new(
      GroupReservationApi.main_route,
    method: :post,
    body: 'Creation of a group reservation',
    params: { 'group_reservation' => {
      'phone' => phone.to_s,
      'email' => email.to_s,
      'date_lead' => date_lead,
      'nb_person_lead' => nb_person_lead,
      'budget_lead' => budget_lead,
      'comment_lead' => comment_lead,
      'refering_url' => refering_url }
    },
    headers: { Accept: 'json' }
    )

    request.run
    response = request.response
    puts response.code
    response.body
  end
end
