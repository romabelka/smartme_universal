class ArticlesController < ApplicationController
def index
  @articles = {
      a: 1
  }
  render json: @articles
end
end
