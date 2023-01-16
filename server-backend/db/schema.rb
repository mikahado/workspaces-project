
ActiveRecord::Schema.define(version: 2023_01_15_224101) do

  create_table "reviews", force: :cascade do |t|
    t.integer "rating"
    t.text "comment"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "workspace_id"
  end

  create_table "services", force: :cascade do |t|
    t.string "kind_of_place"
    t.boolean "has_wifi"
    t.text "description"
    t.integer "workspace_id"
  end

  create_table "workspaces", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
