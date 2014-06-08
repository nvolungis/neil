Neil::Application.routes.draw do
  root 'homepage#index'

  get 'resume', :to => 'files#resume'
  get 'fresh-tilled-soil' => 'fresh_tilled_soil#index'
  get 'fts' => 'fresh_tilled_soil#index'

  get 'lynch-timeline', :to => 'static#lynch_timeline'
end
