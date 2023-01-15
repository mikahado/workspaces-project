class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # routes

  get '/' do
    "home"
  end

  get '/workspaces' do
    workspaces = Workspace.all
    workspaces.to_json
  end

  get '/workspaces/:id' do
    workspace = Workspace.find(params[:id])
    workspace.to_json
  end

  post '/workspaces' do
    workspace = Workspace.create(
    name: params[:name],
    address: params[:address]
    )
    workspace.to_json
  end

  delete '/workspaces/:id' do
    workspace = Workspace.find(params[:id])
    workspace.destroy
    workspace.to_json
  end

  get '/reviews' do
    reviews = Review.all
    reviews.to_json
  end

  post '/reviews/:id' do
    review = Review.create(
      rating: params[:rating],
      comment: params[:comment]
    )
    review.to_json
  end

end
