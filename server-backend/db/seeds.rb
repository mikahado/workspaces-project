puts "🌱 Seeding messages..."

ws_comments = ["Great", "Terrible.", "Is fine.", "Fav place", "Avoid at all costs.", "Love it.", "Good lighting. Too many rats."]
ws_place = ["Cafe", "Hotel Lobby", "POPS", "Library", "Resturaunt", "Diner", "Mall"]


Workspace.create(name: "David Rubenstein Atrium,", address: "61 W 62nd St, New York, NY 10023")
Workspace.create(name: "W New York - Union Square", address: "201 Park Ave S, New York, NY 10003")
Workspace.create(name: "Bowery Road", address: "132 4th Ave, New York, NY 10003")


Workspace.all.each do |workspace|
    rand(2..5).times do
        Review.create(rating: rand(1..5), comment: ws_comments.sample, workspace_id: workspace.id)
    end
end


Workspace.all.each do |workspace|
    Service.create(kind_of_place: ws_place.sample, has_wifi: [true, false].sample, description: " . . . ", workspace_id: workspace.id)
end

puts "✅ Done seeding!"
