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

  delete '/workspaces/:id' do
    workspace = Workspace.find(params[:id])
    workspace.destroy
    workspace.to_json(include: [:services, :reviews])
  end

  # post '/workspaces/add' do
  #   workspace = Workspace.create(
  #   title: params[:title],
  #   address: params[:address]
  #   )
  #   workspace.to_json(include: [:services, :reviews])
  # end

  post '/reviews' do
    review = Review.create(
        rating: params[:rating], 
        comment: params[:comment] 
        workspace_id: params[:workspace_id]
    )
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