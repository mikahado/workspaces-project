class CreateWorkspaces < ActiveRecord::Migration[6.1]
  def change
    create_table :workspaces do |t|
      t.string :title
      t.string :address
      t.timestamps
    end
  end
end