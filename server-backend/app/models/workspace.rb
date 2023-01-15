class Workspace < ActiveRecord::Base
    has_many :services
    has_many :reviews
end