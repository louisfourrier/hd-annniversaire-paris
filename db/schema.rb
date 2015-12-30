# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150926095310) do

  create_table "cama_comments", force: true do |t|
    t.string   "author"
    t.string   "author_email"
    t.string   "author_url"
    t.string   "author_IP"
    t.text     "content"
    t.string   "approved",       default: "pending"
    t.string   "agent"
    t.string   "typee"
    t.integer  "comment_parent"
    t.integer  "post_id"
    t.integer  "user_id"
    t.datetime "created_at",                         null: false
    t.datetime "updated_at",                         null: false
  end

  add_index "cama_comments", ["post_id"], name: "index_cama_comments_on_post_id"
  add_index "cama_comments", ["user_id"], name: "index_cama_comments_on_user_id"

  create_table "cama_custom_fields", force: true do |t|
    t.string  "object_class"
    t.string  "name"
    t.string  "slug"
    t.integer "objectid"
    t.integer "parent_id"
    t.integer "field_order"
    t.integer "count",        default: 0
    t.boolean "is_repeat",    default: false
    t.text    "description"
    t.string  "status"
  end

  create_table "cama_custom_fields_relationships", force: true do |t|
    t.integer "objectid"
    t.integer "custom_field_id"
    t.integer "term_order"
    t.string  "object_class"
    t.text    "value",             limit: 1073741823
    t.string  "custom_field_slug"
  end

  create_table "cama_metas", force: true do |t|
    t.string  "key"
    t.text    "value",        limit: 1073741823
    t.integer "objectid"
    t.string  "object_class"
  end

  create_table "cama_posts", force: true do |t|
    t.string   "title"
    t.string   "slug"
    t.text     "content",          limit: 1073741823
    t.text     "content_filtered", limit: 1073741823
    t.string   "status",                              default: "published"
    t.datetime "published_at"
    t.integer  "post_parent"
    t.string   "visibility",                          default: "public"
    t.text     "visibility_value"
    t.string   "post_class",                          default: "Post"
    t.datetime "created_at",                                                null: false
    t.datetime "updated_at",                                                null: false
    t.integer  "user_id"
    t.integer  "post_order",                          default: 0
    t.integer  "taxonomy_id"
  end

  add_index "cama_posts", ["user_id"], name: "index_cama_posts_on_user_id"

  create_table "cama_term_relationships", force: true do |t|
    t.integer "objectid"
    t.integer "term_order"
    t.integer "term_taxonomy_id"
  end

  add_index "cama_term_relationships", ["term_taxonomy_id"], name: "index_cama_term_relationships_on_term_taxonomy_id"

  create_table "cama_term_taxonomy", force: true do |t|
    t.string   "taxonomy"
    t.text     "description", limit: 1073741823
    t.integer  "parent_id"
    t.integer  "count"
    t.string   "name"
    t.string   "slug"
    t.integer  "term_group"
    t.integer  "term_order"
    t.string   "status"
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
    t.integer  "user_id"
  end

  add_index "cama_term_taxonomy", ["user_id"], name: "index_cama_term_taxonomy_on_user_id"

  create_table "cama_user_relationships", force: true do |t|
    t.integer "term_order"
    t.integer "active",           default: 1
    t.integer "term_taxonomy_id"
    t.integer "user_id"
  end

  add_index "cama_user_relationships", ["term_taxonomy_id"], name: "index_cama_user_relationships_on_term_taxonomy_id"
  add_index "cama_user_relationships", ["user_id"], name: "index_cama_user_relationships_on_user_id"

  create_table "cama_users", force: true do |t|
    t.string   "username"
    t.string   "role",                   default: "client"
    t.string   "email"
    t.string   "slug"
    t.string   "password_digest"
    t.string   "auth_token"
    t.string   "password_reset_token"
    t.integer  "parent_id"
    t.datetime "password_reset_sent_at"
    t.datetime "last_login_at"
    t.datetime "created_at",                                null: false
    t.datetime "updated_at",                                null: false
    t.integer  "site_id",                default: -1
  end

  add_index "cama_users", ["site_id"], name: "index_cama_users_on_site_id"

end
