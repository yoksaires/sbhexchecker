// Данные из CSV (предварительно обработаны)
const armorData = [
    
			{"name":"Shadow Assassin Boots","color":"#000000"},
			{"name":"Wither Chestplate","color":"#000000"},
			{"name":"Bat Person Boots","color":"#000000"},
			{"name":"Bat Person Chestplate","color":"#000000"},
			{"name":"Bat Person Leggings","color":"#000000"},
			{"name":"Watcher Chestplate","color":"#000000"},
			{"name":"Wither Boots","color":"#000000"},
			{"name":"Shadow Assassin Leggings","color":"#000000"},
			{"name":"Shadow Assassin Leggings","color":"#000000"},
			{"name":"Shadow Assassin Boots","color":"#000000"},
			{"name":"Necromancer Lord Chestplate","color":"#000000"},
			{"name":"Shadow Assassin Chestplate","color":"#000000"},
			{"name":"Obsidian Chestplate","color":"#000000"},
			{"name":"Rancher's Boots","color":"#000000"},
			{"name":"Wither Leggings","color":"#000000"},
			{"name":"Watcher Boots","color":"#000000"},
			{"name":"Squid Boots","color":"#000000"},
			{"name":"Watcher Leggings","color":"#000000"},
			{"name":"Shadow Assassin Chestplate","color":"#000000"},
			{"name":"Tarantula Chestplate","color":"#000000"},
			{"name":"Tarantula Boots","color":"#000000"},
			{"name":"Tarantula Helmet","color":"#000000"},
			{"name":"Tarantula Leggings","color":"#000000"},
			{"name":"Lapis Armor Chestplate","color":"#0000ff"},
			{"name":"Lapis Armor Boots","color":"#0000ff"},
			{"name":"Lapis Armor Leggings","color":"#0000ff"},
			{"name":"Shark Scale Boots","color":"#002ca6"},
			{"name":"Shark Scale Leggings","color":"#002ca6"},
			{"name":"Shark Scale Chestplate","color":"#002ca6"},
			{"name":"Helmet of Growth","color":"#00be00"},
			{"name":"Chestplate of Growth","color":"#00be00"},
			{"name":"Leggings of Growth","color":"#00be00"},
			{"name":"Boots of Growth","color":"#00be00"},
			{"name":"Party Top Hat","color":"#00ff00"},
			{"name":"Cactus Chestplate","color":"#00ff00"},
			{"name":"Cactus Boots","color":"#00ff00"},
			{"name":"Emerald Armor Chestplate","color":"#00ff00"},
			{"name":"Cactus Helmet","color":"#00ff00"},
			{"name":"Emerald Armor Helmet","color":"#00ff00"},
			{"name":"Cactus Leggings","color":"#00ff00"},
			{"name":"Emerald Armor Leggings","color":"#00ff00"},
			{"name":"Emerald Armor Boots","color":"#00ff00"},
			{"name":"Rotten Leggings","color":"#017d31"},
			{"name":"Rotten Chestplate","color":"#017d31"},
			{"name":"Squash Chestplate","color":"#03430e"},
			{"name":"Glacite Chestplate","color":"#03fcf8"},
			{"name":"Glacite Leggings","color":"#03fcf8"},
			{"name":"Glacite Boots","color":"#03fcf8"},
			{"name":"Stereo Pants","color":"#04cfd3"},
			{"name":"Shimmering Light Slippers","color":"#07031b"},
			{"name":"Shimmering Light Trousers","color":"#07031b"},
			{"name":"Shimmering Light Tunic","color":"#07031b"},
			{"name":"Infernal Fervor Boots","color":"#07a674"},
			{"name":"Fervor Boots","color":"#07a674"},
			{"name":"Burning Fervor Boots","color":"#07a674"},
			{"name":"Hot Fervor Boots","color":"#07a674"},
			{"name":"Fiery Fervor Boots","color":"#07a674"},
			{"name":"Final Destination Chestplate","color":"#0a0011"},
			{"name":"Final Destination Boots","color":"#0a0011"},
			{"name":"Angler Leggings","color":"#0b004f"},
			{"name":"Angler Boots","color":"#0b004f"},
			{"name":"Angler Chestplate","color":"#0b004f"},
			{"name":"Burned Pants","color":"#0c0c96"},
			{"name":"Squash Leggings","color":"#0c4a16"},
			{"name":"Water Hydra Boots","color":"#101555"},
			{"name":"Water Hydra Chestplate","color":"#101555"},
			{"name":"Water Hydra Leggings","color":"#101555"},
			{"name":"Sea Walker Chestplate","color":"#10616e"},
			{"name":"Sea Walker Boots","color":"#10616e"},
			{"name":"Sea Walker Leggings","color":"#10616e"},
			{"name":"Guardian Chestplate","color":"#117391"},
			{"name":"Squash Boots","color":"#13561e"},
			{"name":"Wyld Boots","color":"#154918"},
			{"name":"Storm's Chestplate","color":"#1793c4"},
			{"name":"Storm's Leggings","color":"#17a8c4"},
			{"name":"Infernal Fervor Leggings","color":"#17bf89"},
			{"name":"Fervor Leggings","color":"#17bf89"},
			{"name":"Burning Fervor Leggings","color":"#17bf89"},
			{"name":"Hot Fervor Leggings","color":"#17bf89"},
			{"name":"Fiery Fervor Leggings","color":"#17bf89"},
			{"name":"Elegant Tuxedo Jacket","color":"#191919"},
			{"name":"Elegant Tuxedo Oxfords","color":"#191919"},
			{"name":"Snake-in-a-Boot","color":"#1a004c"},
			{"name":"Reaper Boots","color":"#1b1b1b"},
			{"name":"Reaper Chestplate","color":"#1b1b1b"},
			{"name":"Reaper Leggings","color":"#1b1b1b"},
			{"name":"Storm's Boots","color":"#1cd4e4"},
			{"name":"Werewolf Chestplate","color":"#1d1105"},
			{"name":"Werewolf Boots","color":"#1d1105"},
			{"name":"Werewolf Leggings","color":"#1d1105"},
			{"name":"Thunder Chestplate","color":"#24dde5"},
			{"name":"Thunder Leggings","color":"#24dde5"},
			{"name":"Thunder Boots","color":"#24dde5"},
			{"name":"Skeleton Lord Chestplate","color":"#268105"},
			{"name":"Skeleton Lord Leggings","color":"#268105"},
			{"name":"Skeleton Lord Boots","color":"#268105"},
			{"name":"Slug Boots","color":"#276114"},
			{"name":"Infernal Aurora Chestplate","color":"#2841f1"},
			{"name":"Aurora Chestplate","color":"#2841f1"},
			{"name":"Burning Aurora Chestplate","color":"#2841f1"},
			{"name":"Hot Aurora Chestplate","color":"#2841f1"},
			{"name":"Fiery Aurora Chestplate","color":"#2841f1"},
			{"name":"Wise Dragon Boots","color":"#29f0e9"},
			{"name":"Wise Dragon Leggings","color":"#29f0e9"},
			{"name":"Wise Dragon Chestplate","color":"#29f0e9"},
			{"name":"Minos Hunter Boots","color":"#304b4e"},
			{"name":"Fancy Tuxedo Oxfords","color":"#332a2a"},
			{"name":"Fancy Tuxedo Jacket","color":"#332a2a"},
			{"name":"Ugly Boots","color":"#3333ff"},
			{"name":"Vanguard Chestplate","color":"#3588ff"},
			{"name":"Vanguard Leggings","color":"#3588ff"},
			{"name":"Vanguard Boots","color":"#3588ff"},
			{"name":"Wyld Leggings","color":"#35b73b"},
			{"name":"Necromancer Lord Leggings","color":"#370147"},
			{"name":"Goblin Chestplate","color":"#37b042"},
			{"name":"Goblin Leggings","color":"#37b042"},
			{"name":"Goblin Boots","color":"#37b042"},
			{"name":"Exceedingly Comfy Sneakers","color":"#380024"},
			{"name":"Cheap Tuxedo Jacket","color":"#383838"},
			{"name":"Cheap Tuxedo Oxfords","color":"#383838"},
			{"name":"Infernal Terror Chestplate","color":"#3e05af"},
			{"name":"Terror Chestplate","color":"#3e05af"},
			{"name":"Burning Terror Chestplate","color":"#3e05af"},
			{"name":"Hot Terror Chestplate","color":"#3e05af"},
			{"name":"Fiery Terror Chestplate","color":"#3e05af"},
			{"name":"Infernal Aurora Leggings","color":"#3f56fb"},
			{"name":"Aurora Leggings","color":"#3f56fb"},
			{"name":"Burning Aurora Leggings","color":"#3f56fb"},
			{"name":"Hot Aurora Leggings","color":"#3f56fb"},
			{"name":"Fiery Aurora Leggings","color":"#3f56fb"},
			{"name":"Necromancer Lord Boots","color":"#400352"},
			{"name":"Crypt Witherlord Helmet","color":"#450101"},
			{"name":"Crypt Witherlord Leggings","color":"#450101"},
			{"name":"Crypt Witherlord Boots","color":"#450101"},
			{"name":"Crypt Witherlord Chestplate","color":"#450101"},
			{"name":"Goldor's Chestplate","color":"#45413c"},
			{"name":"Nutcracker Boots","color":"#46343a"},
			{"name":"Holy Dragon Chestplate","color":"#47d147"},
			{"name":"Holy Dragon Leggings","color":"#47d147"},
			{"name":"Holy Dragon Boots","color":"#47d147"},
			{"name":"Femurgrowth Leggings","color":"#48ff00"},
			{"name":"Maxor's Chestplate","color":"#4a14b7"},
			{"name":"Leaflet Tunic","color":"#4dcc4d"},
			{"name":"Leaflet Sandals","color":"#4dcc4d"},
			{"name":"Leaflet Pants","color":"#4dcc4d"},
			{"name":"Gunther's Sneakers","color":"#4f2886"},
			{"name":"Squire Boots","color":"#545454"},
			{"name":"Fallen Star Chestplate","color":"#586158"},
			{"name":"Fallen Star Boots","color":"#586158"},
			{"name":"Fallen Star Leggings","color":"#586158"},
			{"name":"Fermento Chestplate","color":"#58890c"},
			{"name":"Super Heavy Chestplate","color":"#5a6464"},
			{"name":"Super Heavy Leggings","color":"#5a6464"},
			{"name":"Glossy Mineral Chestplate","color":"#5b0dae"},
			{"name":"Glossy Mineral Leggings","color":"#5b0dae"},
			{"name":"Glossy Mineral Boots","color":"#5b0dae"},
			{"name":"Infernal Terror Leggings","color":"#5d23d1"},
			{"name":"Terror Leggings","color":"#5d23d1"},
			{"name":"Burning Terror Leggings","color":"#5d23d1"},
			{"name":"Hot Terror Leggings","color":"#5d23d1"},
			{"name":"Fiery Terror Leggings","color":"#5d23d1"},
			{"name":"Maxor's Leggings","color":"#5d2fb9"},
			{"name":"Spooky Chestplate","color":"#606060"},
			{"name":"Spooky Boots","color":"#606060"},
			{"name":"Spooky Leggings","color":"#606060"},
			{"name":"Infernal Aurora Boots","color":"#6184fc"},
			{"name":"Aurora Boots","color":"#6184fc"},
			{"name":"Burning Aurora Boots","color":"#6184fc"},
			{"name":"Hot Aurora Boots","color":"#6184fc"},
			{"name":"Fiery Aurora Boots","color":"#6184fc"},
			{"name":"Goldor's Leggings","color":"#65605a"},
			{"name":"Fermento Leggings","color":"#6a9c1b"},
			{"name":"Magma Lord Boots","color":"#6f0f08"},
			{"name":"Magma Lord Chestplate","color":"#6f0f08"},
			{"name":"Magma Lord Leggings","color":"#6f0f08"},
			{"name":"Cropie Chestplate","color":"#7a2900"},
			{"name":"Prospecting Chestplate","color":"#7a7964"},
			{"name":"Prospecting Boots","color":"#7a7964"},
			{"name":"Prospecting Helmet","color":"#7a7964"},
			{"name":"Prospecting Leggings","color":"#7a7964"},
			{"name":"Creeper Pants","color":"#7ae82c"},
			{"name":"Infernal Terror Boots","color":"#7c44ec"},
			{"name":"Terror Boots","color":"#7c44ec"},
			{"name":"Burning Terror Boots","color":"#7c44ec"},
			{"name":"Hot Terror Boots","color":"#7c44ec"},
			{"name":"Fiery Terror Boots","color":"#7c44ec"},
			{"name":"Ghostly Boots","color":"#808080"},
			{"name":"Heavy Chestplate","color":"#828282"},
			{"name":"Heavy Leggings","color":"#828282"},
			{"name":"Fermento Boots","color":"#83b03b"},
			{"name":"Goldor's Boots","color":"#88837e"},
			{"name":"Maxor's Boots","color":"#8969c8"},
			{"name":"Melon Boots","color":"#899e20"},
			{"name":"Melon Chestplate","color":"#899e20"},
			{"name":"Melon Leggings","color":"#899e20"},
			{"name":"Arachne's Boots","color":"#8b0000"},
			{"name":"Arachne's Chestplate","color":"#8b0000"},
			{"name":"Arachne's Leggings","color":"#8b0000"},
			{"name":"Cropie Leggings","color":"#94451f"},
			{"name":"Emperor Leggings","color":"#990d00"},
			{"name":"Emperor Robes","color":"#990d00"},
			{"name":"Emperor Shoes","color":"#990d00"},
			{"name":"Great Spook Leggings","color":"#993399"},
			{"name":"Great Spook Chestplate","color":"#993399"},
			{"name":"Great Spook Boots","color":"#993399"},
			{"name":"Great Spook Helmet","color":"#993399"},
			{"name":"Protector Dragon Boots","color":"#99978b"},
			{"name":"Protector Dragon Chestplate","color":"#99978b"},
			{"name":"Protector Dragon Leggings","color":"#99978b"},
			{"name":"Zombie Lord Leggings","color":"#9b01c1"},
			{"name":"Zombie Lord Chestplate","color":"#9b01c1"},
			{"name":"Zombie Lord Boots","color":"#9b01c1"},
			{"name":"Rotten Helmet","color":"#9e7003"},
			{"name":"Rotten Boots","color":"#9e7003"},
			{"name":"Boots of the Rising Sun","color":"#9f8609"},
			{"name":"Boots of the Rising Sun","color":"#9f8609"},
			{"name":"Frozen Blaze Chestplate","color":"#a0daef"},
			{"name":"Frozen Blaze Leggings","color":"#a0daef"},
			{"name":"Frozen Blaze Boots","color":"#a0daef"},
			{"name":"Salmon Leggings","color":"#a82b76"},
			{"name":"Salmon Chestplate","color":"#a82b76"},
			{"name":"Salmon Chestplate","color":"#a82b76"},
			{"name":"Salmon Leggings","color":"#a82b76"},
			{"name":"Bouncy Chestplate","color":"#adff2f"},
			{"name":"Bouncy Leggings","color":"#adff2f"},
			{"name":"Bouncy Helmet","color":"#adff2f"},
			{"name":"Bouncy Boots","color":"#adff2f"},
			{"name":"Unstable Dragon Boots","color":"#b212e3"},
			{"name":"Unstable Dragon Chestplate","color":"#b212e3"},
			{"name":"Unstable Dragon Leggings","color":"#b212e3"},
			{"name":"Heat Helmet","color":"#b3b3b3"},
			{"name":"Heat Leggings","color":"#b3b3b3"},
			{"name":"Heat Boots","color":"#b3b3b3"},
			{"name":"Heat Chestplate","color":"#b3b3b3"},
			{"name":"Cropie Boots","color":"#bb6535"},
			{"name":"Adaptive Boots","color":"#bfbcb2"},
			{"name":"Adaptive Chestplate","color":"#bfbcb2"},
			{"name":"Adaptive Leggings","color":"#bfbcb2"},
			{"name":"Adaptive Chestplate","color":"#bfbcb2"},
			{"name":"Adaptive Leggings","color":"#bfbcb2"},
			{"name":"Adaptive Boots","color":"#bfbcb2"},
			{"name":"Spirit Boots","color":"#bfbfbf"},
			{"name":"Spirit Boots","color":"#bfbfbf"},
			{"name":"Salmon Helmet","color":"#c13c0f"},
			{"name":"Salmon Boots","color":"#c13c0f"},
			{"name":"Salmon Boots","color":"#c13c0f"},
			{"name":"Salmon Helmet","color":"#c13c0f"},
			{"name":"Cheap Tuxedo Pants","color":"#c7c7c7"},
			{"name":"Yog Chestplate","color":"#c83200"},
			{"name":"Yog Leggings","color":"#c83200"},
			{"name":"Yog Boots","color":"#c83200"},
			{"name":"Yog Helmet","color":"#c83200"},
			{"name":"Rabbit Chestplate","color":"#cbd2db"},
			{"name":"Rabbit Leggings","color":"#cbd2db"},
			{"name":"Rabbit Helmet","color":"#cbd2db"},
			{"name":"Rabbit Boots","color":"#cbd2db"},
			{"name":"Farmer Boots","color":"#cc5500"},
			{"name":"Mineral Boots","color":"#cce5ff"},
			{"name":"Mineral Chestplate","color":"#cce5ff"},
			{"name":"Mineral Leggings","color":"#cce5ff"},
			{"name":"Moogma Leggings","color":"#ce2c2c"},
			{"name":"Zombie Soldier Leggings","color":"#d07f00"},
			{"name":"Zombie Soldier Helmet","color":"#d07f00"},
			{"name":"Zombie Soldier Boots","color":"#d07f00"},
			{"name":"Zombie Soldier Chestplate","color":"#d07f00"},
			{"name":"Starlight Chestplate","color":"#d400ff"},
			{"name":"Starlight Boots","color":"#d400ff"},
			{"name":"Celeste Helmet","color":"#d48ef2"},
			{"name":"Fancy Tuxedo Pants","color":"#d4d4d4"},
			{"name":"Zombie Commander Chestplate","color":"#d51230"},
			{"name":"Zombie Commander Boots","color":"#d51230"},
			{"name":"Zombie Commander Leggings","color":"#d51230"},
			{"name":"Zombie Commander Helmet","color":"#d51230"},
			{"name":"Strong Dragon Chestplate","color":"#d91e41"},
			{"name":"Stone Chestplate","color":"#d9d9d9"},
			{"name":"Steel Chestplate","color":"#d9d9d9"},
			{"name":"Metal Chestplate","color":"#d9d9d9"},
			{"name":"Young Dragon Leggings","color":"#dde4f0"},
			{"name":"Young Dragon Chestplate","color":"#dde4f0"},
			{"name":"Young Dragon Boots","color":"#dde4f0"},
			{"name":"Leggings of the Rising Sun","color":"#debc15"},
			{"name":"Leggings of the Rising Sun","color":"#debc15"},
			{"name":"Rampart Chestplate","color":"#df2e06"},
			{"name":"Rampart Leggings","color":"#df2e06"},
			{"name":"Rampart Boots","color":"#df2e06"},
			{"name":"Strong Dragon Leggings","color":"#e09419"},
			{"name":"Speedster Leggings","color":"#e0fcf7"},
			{"name":"Speedster Boots","color":"#e0fcf7"},
			{"name":"Mercenary Boots","color":"#e0fcf7"},
			{"name":"Speedster Chestplate","color":"#e0fcf7"},
			{"name":"Speedster Helmet","color":"#e0fcf7"},
			{"name":"Skeleton Grunt Boots","color":"#e1eb34"},
			{"name":"Skeleton Grunt Chestplate","color":"#e1eb34"},
			{"name":"Skeleton Grunt Helmet","color":"#e1eb34"},
			{"name":"Skeleton Grunt Leggings","color":"#e1eb34"},
			{"name":"Infernal Hollow Boots","color":"#e3fffa"},
			{"name":"Hollow Boots","color":"#e3fffa"},
			{"name":"Burning Hollow Boots","color":"#e3fffa"},
			{"name":"Hot Hollow Boots","color":"#e3fffa"},
			{"name":"Fiery Hollow Boots","color":"#e3fffa"},
			{"name":"Infernal Crimson Boots","color":"#e65300"},
			{"name":"Crimson Boots","color":"#e65300"},
			{"name":"Burning Crimson Boots","color":"#e65300"},
			{"name":"Hot Crimson Boots","color":"#e65300"},
			{"name":"Fiery Crimson Boots","color":"#e65300"},
			{"name":"Infernal Crimson Leggings","color":"#e66105"},
			{"name":"Crimson Leggings","color":"#e66105"},
			{"name":"Burning Crimson Leggings","color":"#e66105"},
			{"name":"Hot Crimson Leggings","color":"#e66105"},
			{"name":"Fiery Crimson Leggings","color":"#e66105"},
			{"name":"Super Heavy Boots","color":"#e6e6e6"},
			{"name":"Super Heavy Helmet","color":"#e6e6e6"},
			{"name":"Necron's Chestplate","color":"#e7413c"},
			{"name":"Necron's Leggings","color":"#e75c3c"},
			{"name":"Necron's Boots","color":"#e76e3c"},
			{"name":"Flaming Chestplate","color":"#ed6612"},
			{"name":"Pumpkin Boots","color":"#edaa36"},
			{"name":"Pumpkin Chestplate","color":"#edaa36"},
			{"name":"Pumpkin Helmet","color":"#edaa36"},
			{"name":"Pumpkin Leggings","color":"#edaa36"},
			{"name":"Infernal Fervor Chestplate","color":"#f04729"},
			{"name":"Fervor Chestplate","color":"#f04729"},
			{"name":"Burning Fervor Chestplate","color":"#f04729"},
			{"name":"Hot Fervor Chestplate","color":"#f04729"},
			{"name":"Fiery Fervor Chestplate","color":"#f04729"},
			{"name":"Strong Dragon Boots","color":"#f0d124"},
			{"name":"Old Dragon Boots","color":"#f0e6aa"},
			{"name":"Old Dragon Chestplate","color":"#f0e6aa"},
			{"name":"Old Dragon Leggings","color":"#f0e6aa"},
			{"name":"Superior Dragon Boots","color":"#f25d18"},
			{"name":"Superior Dragon Chestplate","color":"#f2df11"},
			{"name":"Superior Dragon Leggings","color":"#f2df11"},
			{"name":"Blaze Boots","color":"#f7da33"},
			{"name":"Blaze Chestplate","color":"#f7da33"},
			{"name":"Blaze Leggings","color":"#f7da33"},
			{"name":"Nutcracker Chestplate","color":"#fc2f3c"},
			{"name":"Crystal Chestplate","color":"#fcf3ff"},
			{"name":"Crystal Helmet","color":"#fcf3ff"},
			{"name":"Crystal Boots","color":"#fcf3ff"},
			{"name":"Crystal Leggings","color":"#fcf3ff"},
			{"name":"Elegant Tuxedo Pants","color":"#fefdfc"},
			{"name":"Mushroom Chestplate","color":"#ff0000"},
			{"name":"Mushroom Boots","color":"#ff0000"},
			{"name":"Mushroom Helmet","color":"#ff0000"},
			{"name":"Mushroom Leggings","color":"#ff0000"},
			{"name":"Chestplate of the Pack","color":"#ff0000"},
			{"name":"Minos Hunter Chestplate","color":"#ff0a0a"},
			{"name":"Minos Hunter Leggings","color":"#ff0a0a"},
			{"name":"Fairy's Fedora","color":"#ff3399"},
			{"name":"Orange Chestplate","color":"#ff4600"},
			{"name":"Fairy's Polo","color":"#ff66b2"},
			{"name":"Skeleton Master Chestplate","color":"#ff6b0b"},
			{"name":"Skeleton Master Boots","color":"#ff6b0b"},
			{"name":"Skeleton Master Leggings","color":"#ff6b0b"},
			{"name":"Skeleton Master Helmet","color":"#ff6b0b"},
			{"name":"Infernal Crimson Chestplate","color":"#ff6f0c"},
			{"name":"Crimson Chestplate","color":"#ff6f0c"},
			{"name":"Burning Crimson Chestplate","color":"#ff6f0c"},
			{"name":"Hot Crimson Chestplate","color":"#ff6f0c"},
			{"name":"Fiery Crimson Chestplate","color":"#ff6f0c"},
			{"name":"Final Destination Leggings","color":"#ff75ff"},
			{"name":"Celeste Boots","color":"#ff8eb6"},
			{"name":"Celeste Leggings","color":"#ff8eca"},
			{"name":"Celeste Chestplate","color":"#ff8ede"},
			{"name":"Armor of Magma Boots","color":"#ff9300"},
			{"name":"Armor of Magma Helmet","color":"#ff9300"},
			{"name":"Armor of Magma Leggings","color":"#ff9300"},
			{"name":"Armor of Magma Chestplate","color":"#ff9300"},
			{"name":"Fairy's Trousers","color":"#ff99cc"},
			{"name":"Berserker Chestplate","color":"#ffa33b"},
			{"name":"Biohazard Leggings","color":"#ffac00"},
			{"name":"Biohazard Suit","color":"#ffac00"},
			{"name":"Biohazard Boots","color":"#ffac00"},
			{"name":"Berserker Leggings","color":"#ffb727"},
			{"name":"Skeleton Soldier Leggings","color":"#ffbc0b"},
			{"name":"Skeleton Soldier Helmet","color":"#ffbc0b"},
			{"name":"Skeleton Soldier Boots","color":"#ffbc0b"},
			{"name":"Skeleton Soldier Chestplate","color":"#ffbc0b"},
			{"name":"Infernal Hollow Chestplate","color":"#ffcb0d"},
			{"name":"Hollow Chestplate","color":"#ffcb0d"},
			{"name":"Burning Hollow Chestplate","color":"#ffcb0d"},
			{"name":"Hot Hollow Chestplate","color":"#ffcb0d"},
			{"name":"Fiery Hollow Chestplate","color":"#ffcb0d"},
			{"name":"Fairy's Galoshes","color":"#ffcce5"},
			{"name":"Berserker Boots","color":"#ffd427"},
			{"name":"Farm Armor Chestplate","color":"#ffd700"},
			{"name":"Farm Armor Boots","color":"#ffd700"},
			{"name":"Farm Armor Leggings","color":"#ffd700"},
			{"name":"Farm Armor Helmet","color":"#ffd700"},
			{"name":"W Logo","color":"#ffd700"},
			{"name":"Eleanor's Tunic","color":"#ffd700"},
			{"name":"Eleanor's Cap","color":"#ffd700"},
			{"name":"Eleanor's Trousers","color":"#ffd700"},
			{"name":"Eleanor's Slippers","color":"#ffd700"},
			{"name":"Spongy Shoes","color":"#ffdc51"},
			{"name":"Sponge Leggings","color":"#ffdc51"},
			{"name":"Sponge Chestplate","color":"#ffdc51"},
			{"name":"Chicken Leggs","color":"#fff200"},
			{"name":"Infernal Hollow Leggings","color":"#fff6a3"},
			{"name":"Hollow Leggings","color":"#fff6a3"},
			{"name":"Burning Hollow Leggings","color":"#fff6a3"},
			{"name":"Hot Hollow Leggings","color":"#fff6a3"},
			{"name":"Fiery Hollow Leggings","color":"#fff6a3"},
			{"name":"Nutcracker Leggings","color":"#fff9eb"},
			{"name":"Farm Suit Boots","color":"#ffff00"},
			{"name":"Farm Suit Helmet","color":"#ffff00"},
			{"name":"Farm Suit Chestplate","color":"#ffff00"},
			{"name":"Farm Suit Leggings","color":"#ffff00"},
			{"name":"Heavy Helmet","color":"#ffffff"},
			{"name":"Heavy Boots","color":"#ffffff"},
			{"name":"Helmet of the Pack","color":"#ffffff"},
			{"name":"Snow Suit Chestplate","color":"#ffffff"},
			{"name":"Snow Suit Leggings","color":"#ffffff"},
			{"name":"Snow Suit Boots","color":"#ffffff"},
			{"name":"Aquamarine Dye","color":"#7FFFD4"},
			{"name":"Archfiend Dye","color":"#B80036"},
			{"name":"Bingo Blue Dye","color":"#002FA7"},
			{"name":"Bone Dye","color":"#E3DAC9"},
			{"name":"Brick Red Dye","color":"#CB4154"},
			{"name":"Byzantium Dye","color":"#702963"},
			{"name":"Carmine Dye","color":"#960018"},
			{"name":"Celadon Dye","color":"#ACE1AF"},
			{"name":"Celeste Dye","color":"#B2FFFF"},
			{"name":"Chocolate Dye","color":"#7B3F00"},
			{"name":"Copper Dye","color":"#B87333"},
			{"name":"Cyclamen Dye","color":"#F56FA1"},
			{"name":"Dark Purple Dye","color":"#301934"},
			{"name":"Dung Dye","color":"#4F2A2A"},
			{"name":"Emerald Dye","color":"#50C878"},
			{"name":"Flame Dye","color":"#E25822"},
			{"name":"Fossil Dye","color":"#866F12"},
			{"name":"Frostbitten Dye","color":"#09D8EB"},
			{"name":"Holly Dye","color":"#3C6746"},
			{"name":"Iceberg Dye","color":"#71A6D2"},
			{"name":"Jade Dye","color":"#00A86B"},
			{"name":"Livid Dye","color":"#CEB7AA"},
			{"name":"Mango Dye","color":"#FDBE02"},
			{"name":"Matcha Dye","color":"#74A12E"},
			{"name":"Midnight Dye","color":"#50216C"},
			{"name":"Mocha Dye","color":"#967969"},
			{"name":"Nadeshiko Dye","color":"#F6ADC6"},
			{"name":"Necron Dye","color":"#E7413C"},
			{"name":"Nyanza Dye","color":"#E9FFDB"},
			{"name":"Pearlescent Dye","color":"#115555"},
			{"name":"Pelt Dye","color":"#50414C"},
			{"name":"Periwinkle Dye","color":"#CCCCFF"},
			{"name":"Pure Black Dye","color":"#000000"},
			{"name":"Pure Blue Dye","color":"#0013FF"},
			{"name":"Pure White Dye","color":"#FFFFFF"},
			{"name":"Pure Yellow Dye","color":"#FFF700"},
			{"name":"Sangria Dye","color":"#D40808"},
			{"name":"Secret Dye","color":"#7D7D7D"},
			{"name":"Wild Strawberry Dye","color":"#FF43A4"},
			{"name":"Tentacle Dye","color":"#324D6C"}
            
];

function rgbToXyz(rgb) {
    let r = rgb.r / 255;
    let g = rgb.g / 255;
    let b = rgb.b / 255;

    r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
    g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
    b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

    r *= 100;
    g *= 100;
    b *= 100;

    const x = r * 0.4124564 + g * 0.3575761 + b * 0.1804375;
    const y = r * 0.2126729 + g * 0.7151522 + b * 0.0721750;
    const z = r * 0.0193339 + g * 0.1191920 + b * 0.9503041;

    return { x, y, z };
}

function xyzToLab(xyz) {
    const x = xyz.x / 95.047;
    const y = xyz.y / 100.000;
    const z = xyz.z / 108.883;

    const fx = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
    const fy = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
    const fz = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

    const l = (116 * fy) - 16;
    const a = 500 * (fx - fy);
    const b = 200 * (fy - fz);

    return { l, a, b };
}

function rgbToLab(rgb) {
    const xyz = rgbToXyz(rgb);
    return xyzToLab(xyz);
}

let currentLanguage = 'en';

const translations = {
    ru: {
        title: 'Анализатор цветов брони Hypixel',
        findButton: 'Найти',
        clearHistoryButton: 'Сбросить историю',
        hexPlaceholder: 'Введите HEX код',
        historyTitle: 'История запросов:',
        tableTitle: 'Таблица ближайших цветов:',
        armorHeader: 'Броня',
        hexHeader: 'HEX',
        colorHeader: 'Цвет',
        differenceHeader: 'Разница',
        tierHeader: 'Ранг',
        invalidHex: 'Неверный формат HEX кода',
        enteredColor: 'Введённый цвет:'
    },
    en: {
        title: 'Armor Color Analyzer Hypixel',
        findButton: 'Find',
        clearHistoryButton: 'Clear History',
        hexPlaceholder: 'Enter HEX code',
        historyTitle: 'History of Requests:',
        tableTitle: 'Table of Closest Colors:',
        armorHeader: 'Armor',
        hexHeader: 'HEX',
        colorHeader: 'Color',
        differenceHeader: 'Difference',
        tierHeader: 'Rank',
        invalidHex: 'Invalid HEX code format',
        enteredColor: 'Entered color:'
    }
};

function checkColor() {
    let hex = document.getElementById('hexInput').value.trim().toUpperCase();
    const resultDiv = document.getElementById('result');

    // Автоматическое добавление #, если его нет
    if (!hex.startsWith('#')) {
        hex = '#' + hex;
    }

    if (hex.length !== 7 || !/^#[0-9A-F]{6}$/.test(hex)) {
        resultDiv.textContent = translations[currentLanguage].invalidHex;
        updateColorPreview('');
        return;
    }

    // Обновить цвет превью
    updateColorPreview(hex);

    // Найти пять ближайших цветов
    const closestColors = findClosestColors(hex, armorData, 5);
    resultDiv.innerHTML = `<p>${translations[currentLanguage].enteredColor} ${hex} <span class="color-preview" style="background-color: ${hex};"></span></p>`;

    // Заполнить таблицу
    fillTable(closestColors);

    // Сохранить запрос в историю
    saveToHistory(hex);
    loadHistory();
}

function findClosestColors(targetHex, armorData, count) {
    const targetRGB = hexToRgb(targetHex);
    const targetLAB = rgbToLab(targetRGB);

    const colorDistances = armorData.map(item => {
        const itemRGB = hexToRgb(item.color);
        const itemLAB = rgbToLab(itemRGB);

        const deltaL = targetLAB.l - itemLAB.l;
        const deltaA = targetLAB.a - itemLAB.a;
        const deltaB = targetLAB.b - itemLAB.b;

        const distance = Math.sqrt(deltaL * deltaL + deltaA * deltaA + deltaB * deltaB);

        return {
            name: item.name,
            color: item.color,
            distance: distance
        };
    });

    colorDistances.sort((a, b) => a.distance - b.distance);
    return colorDistances.slice(0, count);
}

function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255
    };
}

function getDistance(rgb1, rgb2) {
    const lab1 = rgbToLab(rgb1);
    const lab2 = rgbToLab(rgb2);

    const deltaL = lab1.l - lab2.l;
    const deltaA = lab1.a - lab2.a;
    const deltaB = lab1.b - lab2.b;

    return Math.sqrt(deltaL * deltaL + deltaA * deltaA + deltaB * deltaB);
}

function getRank(distance) {
    if (distance === 0) {
        return 'T0';
    } else if (distance < 1.999) {
        return 'T1';
    } else if (distance < 4.999) {
        return 'T2';
    } else if (distance < 9.999) {
        return 'T3';
    } else {
        return 'T4';
    }
}

function fillTable(colors) {
    const tableBody = document.getElementById('colorTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Очистить таблицу

    colors.forEach(item => {
        const row = tableBody.insertRow();
        const cellName = row.insertCell(0);
        const cellHex = row.insertCell(1);
        const cellColor = row.insertCell(2);
        const cellDistance = row.insertCell(3);
        const cellRank = row.insertCell(4);

        cellName.textContent = item.name;
        cellHex.textContent = item.color;
        cellColor.className = 'color-cell';
        cellColor.style.backgroundColor = item.color;
        cellDistance.textContent = item.distance.toFixed(2);
        cellRank.textContent = getRank(item.distance); // Получить ранг
    });
}

function saveToHistory(hex) {
    let history = JSON.parse(localStorage.getItem('colorHistory')) || [];
    if (!history.includes(hex)) {
        history.unshift(hex); // Добавляем в начало массива
        localStorage.setItem('colorHistory', JSON.stringify(history));
    }
}

function loadHistory() {
    const history = JSON.parse(localStorage.getItem('colorHistory')) || [];
    const historyContainer = document.getElementById('historyContainer');
    historyContainer.innerHTML = history.map(hex => `<span class="history-tag" onclick="checkColorFromHistory('${hex}')">${hex}</span>`).join(' ');
}

function checkColorFromHistory(hex) {
    document.getElementById('hexInput').value = hex;
    checkColor();
}

function toggleLanguage() {
    const languageSelect = document.getElementById('languageSelect');
    currentLanguage = languageSelect.value;

    const title = document.getElementById('title');
    const findButton = document.querySelector('button[onclick="checkColor()"]');
    const clearHistoryButton = document.querySelector('button[onclick="clearHistory()"]');
    const hexInput = document.getElementById('hexInput');
    const historyTitle = document.getElementById('historyTitle');
    const tableTitle = document.getElementById('tableTitle');
    const armorHeader = document.getElementById('armorHeader');
    const hexHeader = document.getElementById('hexHeader');
    const colorHeader = document.getElementById('colorHeader');
    const differenceHeader = document.getElementById('differenceHeader');
    const tierHeader = document.getElementById('tierHeader');

    title.textContent = translations[currentLanguage].title;
    findButton.textContent = translations[currentLanguage].findButton;
    clearHistoryButton.textContent = translations[currentLanguage].clearHistoryButton;
    hexInput.placeholder = translations[currentLanguage].hexPlaceholder;
    historyTitle.textContent = translations[currentLanguage].historyTitle;
    tableTitle.textContent = translations[currentLanguage].tableTitle;
    armorHeader.textContent = translations[currentLanguage].armorHeader;
    hexHeader.textContent = translations[currentLanguage].hexHeader;
    colorHeader.textContent = translations[currentLanguage].colorHeader;
    differenceHeader.textContent = translations[currentLanguage].differenceHeader;
    tierHeader.textContent = translations[currentLanguage].tierHeader;

    checkColor(); // Перезапустить проверку цвета для обновления текста результата
}

function clearHistory() {
    localStorage.removeItem('colorHistory');
    document.getElementById('historyContainer').innerHTML = '';
}

function updateColorPreview(hex) {
    const colorPreview = document.getElementById('colorPreview');
    if (colorPreview) {
        if (hex.length === 7 && /^#[0-9A-F]{6}$/i.test(hex)) {
            colorPreview.style.backgroundColor = hex;
        } else {
            colorPreview.style.backgroundColor = '';
        }
    }
}

// Загрузить историю при загрузке страницы
window.onload = loadHistory;
