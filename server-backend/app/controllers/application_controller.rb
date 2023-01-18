class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  get '/workspaces' do
    workspaces = Workspace.all
    workspaces.to_json(include: [:services, :reviews])
  end

  get '/workspaces/:id' do
    workspace = Workspace.find(params[:id])
    workspace.to_json(include: [:services, :reviews])
  end

  post '/workspaces' do
    workspace = Workspace.create(
    title: params[:title],
    address: params[:address]
    )
    workspace.to_json
  end

  delete '/workspaces/:id' do
    workspace = Workspace.find(params[:id])
    workspace.destroy
    workspace.to_json(include: [:services, :reviews])
  end

end