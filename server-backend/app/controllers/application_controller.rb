class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  get '/workspaces' do
    workspaces = Workspace.all
    workspaces.to_json(include: [:services, :reviews])
  end

  get '/workspaces/:id' do
    workspace = Workspace.find_by(id: params[:id])
    workspace.to_json(include: [:services, :reviews])
  end

 post '/workspaces' do
    new_workspace = Workspace.create(
        title: params[:title], 
        address: params[:address]
    )
    new_workspace.to_json(include: [:services, :reviews])
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

  get '/reviews' do
    reviews = Review.all
    reviews.to_json
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

end