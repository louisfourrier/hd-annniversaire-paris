source 'https://rubygems.org'
ruby '2.1.4'
#
#General
#
gem 'rails', '4.1.8'
gem 'pg'
gem "camaleon_cms"

#
#styling
#
gem 'sass-rails', '~> 4.0.3'
gem 'country_select', github: 'stefanpenner/country_select'
gem "font-awesome-rails" # For the font awesome fonts
gem 'google-webfonts-rails' # For the text fonts

#
# PAgination
#
gem 'will_paginate', '~> 3.0.6'
gem 'will_paginate-bootstrap'

#
#Javascript
#
gem 'jquery-rails'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.0.0'

#
#Development
#
group :development do
  gem 'spring'
  gem 'rubocop', '~> 0.27.1'
  gem "figaro"
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'quiet_assets'
end

#
#Testing
#
group :test, :development do
  gem 'rspec-rails', '~> 3.1.0'
  gem 'factory_girl', '~> 4.5.0'
  gem 'capybara', '~> 2.4.4'
  gem 'database_cleaner', '~> 1.3.0'
  gem 'launchy', '~> 2.4.3'
  gem 'shoulda-matchers', '~> 2.7.0'
  gem 'shoulda-callback-matchers', '~> 1.1.1'
  #gem 'pry-debugger', '~> 0.2.3'
  #gem 'jazz_hands', '~> 0.5.2'
  #gem 'foobar', '~> 0.0.1'
end

#
#Security
#
gem 'devise'

gem 'omniauth'
gem 'omniauth-facebook'
gem "omniauth-google-oauth2"


#Emailing
#
gem 'mailcatcher', group: :development
gem 'sanitize_email', '~> 1.1.4'
gem 'sidekiq', '~> 3.3.2'

#
#Deployment
#

gem 'rails_12factor'
#gem 'newrelic_rpm'
gem 'unicorn'

gem 'typhoeus'


## OPTIMIZATION COMPRESSION
gem 'rack-zippy'


## EXCEPTION
gem 'exception_notification'

gem 'sitemap_generator'


#################### Camaleon CMS include all gems for plugins and themes ####################
require './lib/plugin_routes'
instance_eval(PluginRoutes.draw_gems)
