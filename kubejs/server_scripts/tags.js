ServerEvents.tags('item', event => {
  event.add('forge:cheese', '#forge:cheeses')
  event.add('forge:plastic', 'pneumaticcraft:plastic')
  event.add('forge:dusts/ender', 'ae2:ender_dust')
  event.add('ars_nouveau:golem/shard', ['minecraft:amethyst_shard', 'ae2:certus_quartz_crystal'])
  event.add('mysticalagriculture:essences', [
    'mysticalagriculture:allthemodium_essence',
    'mysticalagriculture:unobtainium_essence',
    'mysticalagriculture:vibranium_essence',
  ])
  event.add('mysticalagriculture:seeds', [
    'mysticalagriculture:allthemodium_seeds',
    'mysticalagriculture:unobtainium_seeds',
    'mysticalagriculture:vibranium_seeds',
  ])

  //temp byg fix until above 2.0.0.13
  event.add('c:black_sand', '#forge:black_sand')
  event.add('c:white_sand', '#forge:white_sand')
  event.add('c:blue_sand', '#forge:blue_sand')
  event.add('c:purple_sand', '#forge:purple_sand')
  event.add('c:pink_sand', '#forge:pink_sand')
})

ServerEvents.tags('block', event => {
  event.add('buildinggadgets:blacklist/generic', '#forge:relocation_not_supported')
  event.add('ae2:blacklisted/spatial', '#forge:relocation_not_supported')
  event.add('forge:relocation_not_supported', ['minecraft:beehive', 'minecraft:bee_nest', /integrateddynamics:.+/])
  event.add('ars_nouveau:golem/budding', [
    'minecraft:budding_amethyst',
    'ae2:damaged_budding_quartz',
    'ae2:chipped_budding_quartz',
    'ae2:flawed_budding_quartz',
    'ae2:flawless_budding_quartz'
  ])
  event.add('ars_nouveau:golem/cluster', ['minecraft:amethyst_cluster', 'ae2:quartz_cluster'])
  event.add('mysticalagriculture:crops', [
    'mysticalagriculture:allthemodium_crop',
    'mysticalagriculture:unobtainium_crop',
    'mysticalagriculture:vibranium_crop',
  ])
    event.add('minecraft:beacon_base_blocks', [
    'allthemodium:vibranium_allthemodium_alloy_block',
    'allthemodium:unobtainium_allthemodium_alloy_block',
    'allthemodium:unobtainium_vibranium_alloy_block',
    'allthetweaks:atm_star_block'
  ])
})

ServerEvents.tags('entity_type', event => {
  event.add('kubejs:mob_blacklist', ['allthemodium:piglich', 'minecraft:iron_golem'])
  event.add('mob_grinding_utils:no_swab', '#kubejs:mob_blacklist')
  event.add('mob_grinding_utils:no_spawn', '#kubejs:mob_blacklist')
  event.add('pneumaticcraft:vacuum_trap_blacklisted', '#kubejs:mob_blacklist')
  event.add('industrialforegoing:mob_duplicator_blacklist', '#kubejs:mob_blacklist')
  event.add('spirit:soul_cage_blacklisted', '#kubejs:mob_blacklist')
})

ServerEvents.tags('worldgen/biome', event => {
  event.add('botania:mystical_flower_spawnlist', 'allthemodium:mining')
  event.add('botania:mystical_mushroom_spawnlist', [
    'allthemodium:the_other', 'allthemodium:soul_sand_valley', 'allthemodium:warped_forest',
    'allthemodium:desert_hills', 'allthemodium:desert', 'allthemodium:crimson_forest', 'allthemodium:basalt_deltas'])
})

//temp fix for bambooeverything breaking boat tags until above 2.2.4
ServerEvents.highPriorityData(event => {
  event.addJson(`minecraft:tags/items/boats.json`, {
    "replace": true,
    "values": [
      "minecraft:oak_boat",
      "minecraft:spruce_boat",
      "minecraft:birch_boat",
      "minecraft:jungle_boat",
      "minecraft:acacia_boat",
      "minecraft:dark_oak_boat",
      "minecraft:mangrove_boat",
      "#minecraft:chest_boats"
    ]
  })
})
