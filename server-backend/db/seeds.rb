puts "🌱 Seeding messages..."

review_comments = ["Great stuff.", "Is good.", "Favorite place in all the world", "Nothing special, but you can get your work done.", "It's fine -- very OK", "Has a floor? Nothing much else. I think I'm lost.", "Avoid like the plague.", "This is my world. I can't stop loving it.", "Good lighting but way too many rats.", "Cute! But no bathrooms.", "Never again!", "I basically finished my degree here!", "I failed ALL my classes here. It is cursed.", "It feels like I'm spinning in place.", "Literally no tables! Why is it even on this amazing site? PLEASE DELETE!", "Super fancy, but super judgy. Who cares if I'm still running Windows 95? It's none of their business.", "Great!", "Good stuff.", "OK", "Pure bad.", "Ughghghgh!", "NOPE!", "Hell yeah, I met my husband here.", "This is the place.", "Where even am I?", "GET OUT ASAP", "What is this?"]

kind_of_place = ["I don't know.", "Cafe", "Hotel Lobby", "POPS", "Library", "Resturaunt", "Diner", "Random Nook", "Museum"]

Workspace.create(title: "David Rubenstein Atrium", address: "61 W 62nd St, New York, NY 10023")
Workspace.create(title: "W New York - Union Square", address: "201 Park Ave S, New York, NY 10003")
Workspace.create(title: "Bowery Road", address: "132 4th Ave, New York, NY 10003")
Workspace.create(title: "MUD", address: "307 E 9th St, New York, NY 10003")
Workspace.create(title: "Remedy Diner", address: "245 E Houston St, New York, NY 10002")
Workspace.create(title: "Ripley-Grier Studios", address: "520 8th Ave 16th floor, New York, NY 10018")
Workspace.create(title: "Galaxy Diner", address: "665 9th Ave, New York, NY 10036")
Workspace.create(title: "Buunni Coffee - Inwood", address: "4961 Broadway, New York, NY 10034")
Workspace.create(title: "Cooper Hewitt, Smithsonian Design Museum", address: "2 E 91st St, New York, NY 10128")
Workspace.create(title: "The Chipped Cup", address: "3610 Broadway, New York, NY 10031")
Workspace.create(title: "NYPL Schwarzman Building ", address: "Anywhere.")

Workspace.all.each do |workspace|
    rand(2..8).times do
        Review.create(rating: rand(1..5), comment: review_comments.sample, workspace_id: workspace.id)
    end
end

Workspace.all.each do |workspace|
    Service.create(kind_of_place: kind_of_place.sample, has_wifi: [true, false].sample, description: " . . . ", workspace_id: workspace.id)
end

puts "✅ Done seeding!"
