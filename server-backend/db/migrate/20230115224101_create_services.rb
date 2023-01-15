class CreateServices < ActiveRecord::Migration[6.1]
  def change
    create_table :services do |t|
      t.string :kind_of_place
      t.boolean :has_wifi
      t.text :description
      t.integer :workspace_id
    end
  end
end
