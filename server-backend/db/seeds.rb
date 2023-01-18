puts "🌱 seedin' time"

review_comments = ["Great stuff. It's as if heaven was here on earth!", "Is good ... I guess ... I think.", "My favorite place in the entire world!!!", "Nothin' special. But refills are free so that's cool.", "It's fine -- very OK. I would say it is remarkably middling.", "There are lots of hallways? Nothing else. I think I'm lost. Please help!", "Avoid this dump like the plague.", "This is my NEST. I can't leave here it. Literally they kick me out every night. It's the best.", "Lovely decor but wayyy too many rats.", "Cute! But no bathrooms.", "I'm done. Please fix the giant hole in the ceiling.", "I basically finished my degree here. Anyone hiring?", "Cursed! I failed ALL my classes here.", "It feels like I'm spinning in place.", "Literally no tables! Why is it even on this amazing site? PLEASE DELETE!", "Super fancy, but super judgy. Who cares if I'm still running Windows 95? It's none of their business.", "Great!", "Good stuff.", "OK", "Pure bad.", "Ughghghgh! Why do I even try. Like most places, it smells like humans.", "NOPE!", "Hell yeah, I met my husband here.", "This is the place.", "Where even am I? Is this a place? How tho is it even?", "GET OUT. They're coming!", "Whoaw I kind of love it."]

kind_of_place = ["I don't know.", "Cafe", "Hotel Lobby", "POPS", "Library", "Resturaunt", "Diner", "Random Nook", "Museum"]

Workspace.create(title: "David Rubenstein Atrium", address: "61 W 62nd St, New York, NY 10023")
Workspace.create(title: "W New York - Union Square", address: "201 Park Ave S, New York, NY 10003")
Workspace.create(title: "Bowery Road", address: "132 4th Ave, New York, NY 10003")
Workspace.create(title: "MUD Cafe", address: "307 E 9th St, New York, NY 10003")
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

puts "✅ done plantin' "
