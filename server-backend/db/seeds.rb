puts "🌱 Seeding messages..."

ws_comments = ["Great stuff.", "Terrible tables.", "Is good.", "Fav place in all the world", "Avoid like the plague.", "Can't stop loving it.", "Good lighting but way too many rats."]
place = ["Cafe", "Hotel Lobby", "POPS", "Library", "Resturaunt", "Diner", "Nook"]


Workspace.create(name: "David Rubenstein Atrium", address: "61 W 62nd St, New York, NY 10023")
Workspace.create(name: "W New York - Union Square", address: "201 Park Ave S, New York, NY 10003")
Workspace.create(name: "Bowery Road", address: "132 4th Ave, New York, NY 10003")

Workspace.all.each do |workspace|
    rand(3..5).times do
        Review.create(rating: rand(1..4), comment: ws_comments.sample, workspace_id: workspace.id)
    end
end


Workspace.all.each do |workspace|
    Service.create(kind_of_place: place.sample, has_wifi: [true, false].sample, description: " . . . ", workspace_id: workspace.id)
end

puts "✅ Done seeding!"
