class ArticlesController < ApplicationController
  def index
    @articles = Article.all
    render json: @articles
  end

  def show
    @article = Article.find(params[:id])
    render json: @article
  end

  def create
    @article = Article.new(params.require(:article).permit(:title,:text))

    respond_to do |format|
      if @article.save
        format.json {head :ok}
      else
        format.json render json: @article.errors, status: :unprocessable_entity
      end
    end
  end

  def delete
    Article.find(params[:id]).destroy
    render status: 200
  end
end
