Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: "users/sessions" }
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".
  resources :profiles
  resources :comments
  resources :arenas
  # You can have the root of your site routed with "root"
  # root 'welcome#index'
  root 'comments#index'

  get 'update_profile_ties' => 'comments#update_profile_ties'
  get 'update_profile_right' => 'comments#update_profile_right'
  get 'update_profile_right_ko' => 'comments#update_profile_right_ko'
  get 'update_profile_left' => 'comments#update_profile_left'
  get 'update_profile_left_ko' => 'comments#update_profile_left_ko'
  get 'check_arena' => 'comments#check_arena'
  get 'join_arena' => 'comments#join_arena'
  get 'refresh' => 'comments#refresh'
  get 'exit' => 'comments#exit'
  get 'sign_out_exit' => 'comments#sign_out_exit'
  post 'vote_left' => 'comments#vote_left'
  post 'vote_right' => 'comments#vote_right'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
