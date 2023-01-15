class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table "reviews" do |t|
      t.integer :rating
      t.text :comment
      t.timestamps
      t.integer :workspace_id
    end
  end
end
