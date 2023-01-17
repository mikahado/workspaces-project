puts "🌱 Seeding messages..."

review_comments = ["Great stuff.", "Terrible tables.", "Is good.", "Fav place in all the world", "Avoid like the plague.", "Can't stop loving it.", "Good lighting but way too many rats.", "Cute!", "Never again.", "I got my degree here!", "I failed all my classes here. It is cursed."]

kind_of_place = ["Cafe", "Hotel Lobby", "POPS", "Library", "Resturaunt", "Diner", "Nook"]


Workspace.create(name: "David Rubenstein Atrium", address: "61 W 62nd St, New York, NY 10023")
Workspace.create(name: "W New York - Union Square", address: "201 Park Ave S, New York, NY 10003")
Workspace.create(name: "Bowery Road", address: "132 4th Ave, New York, NY 10003")
Workspace.create(name: "MUD", address: "307 E 9th St, New York, NY 10003")
Workspace.create(name: "Remedy Diner", address: "245 E Houston St, New York, NY 10002")
Workspace.create(name: "Ripley-Grier Studios", address: "520 8th Ave 16th floor, New York, NY 10018")
Workspace.create(name: "Galaxy Diner", address: "665 9th Ave, New York, NY 10036")
Workspace.create(name: "Buunni Coffee - Inwood", address: "4961 Broadway, New York, NY 10034")

Workspace.all.each do |workspace|
    rand(3..5).times do
        Review.create(rating: rand(1..4), comment: review_comments.sample, workspace_id: workspace.id)
    end
end


Workspace.all.each do |workspace|
    Service.create(kind_of_place: kind_of_place.sample, has_wifi: [true, false].sample, description: " . . . ", workspace_id: workspace.id)
end

puts "✅ Done seeding!"
