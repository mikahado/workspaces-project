class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  # 

  get '/' do 
  end

  get '/workspaces' do
    workspaces = Workspace.all
    workspaces.to_json(include: [:services, :reviews])
  end

  get '/workspaces/:id' do
    workspace = Workspace.find(params[:id])
    workspace.to_json(include: [:services, :reviews])
  end

  post '/workspaces' do
    review = Review.create(
        rating: params[:rating], 
        comment: params[:comment] ,
        workspace_id: params[:workspace_id]
    )
    review.to_json
  end

  get '/services' do
    services = Service.all
    services.to_json
  end

  get '/services/:id' do
    workspace = Service.find(params[:id])
    workspace.to_json(include: [:services, :reviews])
  end

  patch '/services/:id' do
    review = Review.find(params[:id])
    review.update(
      score: params[:score],
      comment: params[:comment]
    )
    review.to_json
  end

  get '/reviews' do
    workspaces = Review.all
    workspaces.to_json
  end

  post '/reviews' do
    review = Review.create(
        rating: params[:rating], 
        comment: params[:comment] ,
        workspace_id: params[:workspace_id]
    )
    review.to_json
  end

  delete '/reviews/:id' do
    review = Review.find(params[:id])
    review.destroy
    review.to_json
  end

  patch '/reviews/:id' do
    review = Review.find(params[:id])
    review.update(
      score: params[:score],
      comment: params[:comment]
    )
    review.to_json
  end



end