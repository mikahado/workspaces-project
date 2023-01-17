puts "🌱 Seeding messages..."

review_comments = ["Great stuff.", "Is good.", "Favorite place in all the world", "Nothing special, but you can get your work done.", "It's fine -- very OK", "Has a floor? Nothing much else. I think I'm lost.", "Avoid like the plague.", "This is my world. I can't stop loving it.", "Good lighting but way too many rats.", "Cute! But no bathrooms.", "Never again!", "I basically finished my degree here!", "I failed ALL my classes here. It is cursed.", "No room. Why is it even on this amazing site?", "Super fancy, but super judgy. Who cares if I'm still running Windows 95? It's none of their business."]

kind_of_place = ["Cafe", "Hotel Lobby", "POPS", "Library", "Resturaunt", "Diner", "Random Nook", "Museum"]

Workspace.create(name: "David Rubenstein Atrium", address: "61 W 62nd St, New York, NY 10023")
Workspace.create(name: "W New York - Union Square", address: "201 Park Ave S, New York, NY 10003")
Workspace.create(name: "Bowery Road", address: "132 4th Ave, New York, NY 10003")
Workspace.create(name: "MUD", address: "307 E 9th St, New York, NY 10003")
Workspace.create(name: "Remedy Diner", address: "245 E Houston St, New York, NY 10002")
Workspace.create(name: "Ripley-Grier Studios", address: "520 8th Ave 16th floor, New York, NY 10018")
Workspace.create(name: "Galaxy Diner", address: "665 9th Ave, New York, NY 10036")
Workspace.create(name: "Buunni Coffee - Inwood", address: "4961 Broadway, New York, NY 10034")
Workspace.create(name: "Cooper Hewitt, Smithsonian Design Museum", address: "2 E 91st St, New York, NY 10128")
Workspace.create(name: "The Chipped Cup", address: "3610 Broadway, New York, NY 10031")
Workspace.create(name: "New York Public Libraries", address: "Anywhere.")

Workspace.all.each do |workspace|
    rand(3..5).times do
        Review.create(rating: rand(1..4), comment: review_comments.sample, workspace_id: workspace.id)
    end
end

Workspace.all.each do |workspace|
    Service.create(kind_of_place: kind_of_place.sample, has_wifi: [true, false].sample, description: " . . . ", workspace_id: workspace.id)
end

puts "✅ Done seeding!"
