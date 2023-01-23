class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # workspace routes

  # FOUR MAIN ROUTES

  get '/workspaces' do
    workspaces = Workspace.all
    workspaces.to_json(include: [:services, :reviews])
  end

  get '/workspaces/:id' do
    workspace = Workspace.find_by(id: params[:id])
    workspace.to_json(include: [:services, :reviews])
  end

  post '/reviews' do
    review = Review.create(params)
    review.to_json
  end

  delete '/reviews/:id' do
    review = Review.find_by(id: params[:id])
    review.destroy
    review.to_json
  end

  get '/reviews/:id' do
    reviews = Review.find_by(id: params[:id])
    reviews.to_json
  end

  patch '/reviews/:id' do
    review = Review.find_by(id: params[:id])
    review.update(
      comment: params[:comment]
    )
    review.to_json
  end

 

  # patch '/services/:id' do
  #   service = Service.find_by(id: params[:id])
  #   service.update(
  #     has_wifi: params[:has_wifi]
  #   )
  #   service.to_json
  # end

  
  # post '/workspaces' do
  #   review = Review.create(
  #       rating: params[:rating], 
  #       comment: params[:comment] ,
  #       workspace_id: params[:workspace_id]
  #   )
  #   review.to_json
  # end

  # # services routes

  # get '/services' do
  #   services = Service.all
  #   services.to_json
  # end

  # get '/services/:id' do
  #   service = Service.find_by(id: params[:id])
  #   service.to_json(include: [:services, :reviews])
  # end

  # patch '/services/:id' do
  #   service = Service.find_by(id: params[:id])
  #   service.update(
  #     has_wifi: params[:has_wifi]
  #   )
  #   service.to_json
  # end

  # # reviews routes

  
  # post '/reviews' do
  #   review = Review.create(
  #       rating: params[:rating], 
  #       comment: params[:comment] ,
  #       workspace_id: params[:workspace_id]
  #   )
  #   review.to_json
  # end

  

end