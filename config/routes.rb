Neil::Application.routes.draw do
  root 'homepage#index'

  get 'resume', :to => 'files#resume'
  get 'lynch-timeline', :to => 'static#lynch_timeline'
end
