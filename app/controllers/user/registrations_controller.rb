class User::ResgisrationsController < Devise::RegistrationsController
  before_filter :configue_permitted_parametrs

  protected

  def configue_permitted_parametrs
    devise_parameter_sanitizer.for(:sign_up).push(:first_name, :last_name)
    devise_parameter_sanitizer.for(:account_update).push(:first_name, :last_name)

  end
end