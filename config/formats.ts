// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: import('../sim/dex-formats').FormatList = [

	// S/V Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "Cobblemon Singles",
	},
	{
		name: "[Gen 9] Unrated Random Battle",
		desc: `Randomized teams of Pok&eacute;mon with sets that are generated to be competitively viable.`,
		mod: 'gen9',
		team: 'random',
		rated: false,
		ruleset: ['Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod', 'Terastal Clause'],
	},
	{
		name: "[Gen 9] OU",
		mod: 'gen9',
		ruleset: ['Standard', 'Terastal Clause'],
		banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Sand Veil', 'Shadow Tag', 'Snow Cloak', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Last Respects'],
	},
	{
		name: "[Gen 9] OU World Cup",
		mod: 'gen9worldcup',
		ruleset: ['Standard', 'Terastal Clause'],
		banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Sand Veil', 'Shadow Tag', 'Snow Cloak', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Last Respects'],
	},
	{
		name: "[Gen 9] Ubers",
		mod: 'gen9',
		ruleset: ['Standard', 'Terastal Clause'],
		banlist: ['AG', 'Moody', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Last Respects'],
	},
	{
		name: "[Gen 9] UU",
		mod: 'gen9',
		ruleset: ['[Gen 9] OU'],
		banlist: ['OU', 'UUBL'],
	},
	{
		name: "[Gen 9] LC",
		mod: 'gen9',
		ruleset: ['Little Cup', 'Evasion Abilities Clause', 'Standard', 'Terastal Clause'],
		banlist: [
			'Aipom', 'Basculin-White-Striped', 'Cutiefly', 'Diglett-Base', 'Dunsparce', 'Duraludon', 'Flittle', 'Gastly', 'Girafarig', 'Gligar',
			'Magby', 'Meditite', 'Misdreavus', 'Murkrow', 'Porygon', 'Qwilfish-Hisui', 'Rufflet', 'Scraggy', 'Scyther', 'Sneasel', 'Sneasel-Hisui',
			'Snivy', 'Stantler', 'Voltorb-Hisui', 'Vulpix', 'Vulpix-Alola', 'Yanma', 'Moody', 'Heat Rock', 'Baton Pass', 'Sticky Web',
		],
	},
	{
		name: "[Gen 9] Monotype",
		mod: 'gen9',
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Same Type Clause', 'Terastal Clause'],
		// banlist: [
		// 	'Annihilape', 'Arceus', 'Baxcalibur', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Blaziken', 'Deoxys-Normal', 'Deoxys-Attack',
		// 	'Dialga', 'Dialga-Origin', 'Espathra', 'Eternatus', 'Giratina', 'Giratina-Origin', 'Gouging Fire', 'Groudon', 'Ho-Oh', 'Iron Bundle', 'Kingambit',
		// 	'Koraidon', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane',
		// 	'Palafin', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Solgaleo', 'Ursaluna-Bloodmoon', 'Urshifu-Single-Strike', 'Zacian',
		// 	'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Moody', 'Shadow Tag', 'Booster Energy', 'Damp Rock', 'Focus Band', 'King\'s Rock',
		// 	'Quick Claw', 'Razor Fang', 'Smooth Rock', 'Acupressure', 'Baton Pass', 'Last Respects', 'Shed Tail',
		// ],
	},
	{
		name: "[Gen 9] Custom Game",
		mod: 'gen9',
		searchShow: false,
		debug: true,
		battle: { trunc: Math.trunc },
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100', 'Terastal Clause'],
	},

	// S/V Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "Cobblemon Doubles",
	},
	{
		name: "[Gen 9] Random Doubles Battle",
		mod: 'gen9',
		gameType: 'doubles',
		team: 'random',
		ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Illusion Level Mod', 'Sleep Clause Mod', 'Terastal Clause'],
	},
	{
		name: "[Gen 9] Doubles OU",
		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', '!Gravity Sleep Clause', 'Terastal Clause'],
	},
	{
		name: "[Gen 9] Doubles Ubers",
		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', '!Gravity Sleep Clause', 'Terastal Clause'],
	},
	{
		name: "[Gen 9] Doubles UU",
		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['[Gen 9] Doubles OU'],
		banlist: ['DOU', 'DBL'],
	},
	{
		name: "[Gen 9] VGC",
		mod: 'gen9',
		gameType: 'doubles',
		bestOfDefault: true,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 9', 'VGC Timer', 'Force Open Team Sheets', 'Best of = 3', 'Limit Two Restricted', 'Terastal Clause'],
		restricted: ['Restricted Legendary'],
	},
	{
		name: "[Gen 9] VGC World Cup",
		mod: 'gen9worldcup',
		gameType: 'doubles',
		bestOfDefault: true,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 9', 'VGC Timer', 'Force Open Team Sheets', 'Best of = 3', 'Limit Two Restricted', 'Terastal Clause'],
		restricted: ['Restricted Legendary'],
	},
	{
		name: "[Gen 9] Doubles Custom Game",
		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		battle: { trunc: Math.trunc },
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100', 'Terastal Clause'],
	},

	// S/V Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "Unofficial Metagames",
	},
	{
		name: "[Gen 9] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		mod: 'gen9',
		ruleset: [
			'Picked Team Size = 1', 'Max Team Size = 3',
			'Standard', 'Terastal Clause', 'Sleep Moves Clause', 'Accuracy Moves Clause', '!Sleep Clause Mod',
		],
		banlist: [
			'Arceus', 'Archaludon', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Cinderace', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Dialga',
			'Dialga-Origin', 'Dragonite', 'Eternatus', 'Flutter Mane', 'Gholdengo', 'Giratina', 'Giratina-Origin', 'Gouging Fire', 'Groudon', 'Ho-Oh', 'Jirachi',
			'Koraidon', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Meloetta', 'Mew', 'Mewtwo', 'Mimikyu', 'Miraidon', 'Necrozma',
			'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Ogerpon-Cornerstone', 'Ogerpon-Hearthflame', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Regidrago', 'Reshiram',
			'Scream Tail', 'Shaymin-Sky', 'Snorlax', 'Solgaleo', 'Terapagos', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Moody',
			'Focus Band', 'Focus Sash', 'King\'s Rock', 'Razor Fang', 'Quick Claw', 'Acupressure', 'Perish Song',
		],
	},
	{
		name: "[Gen 9] NFE",
		desc: `Only Pok&eacute;mon that can evolve are allowed.`,
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Not Fully Evolved', 'Sleep Moves Clause', 'Terastal Clause'],
		banlist: [
			'Basculin-White-Striped', 'Bisharp', 'Chansey', 'Combusken', 'Dipplin', 'Duraludon', 'Electabuzz', 'Gligar', 'Gurdurr',
			'Haunter', 'Magmar', 'Magneton', 'Porygon2', 'Primeape', 'Qwilfish-Hisui', 'Rhydon', 'Scyther', 'Sneasel', 'Sneasel-Hisui',
			'Ursaring', 'Vulpix-Base', 'Arena Trap', 'Magnet Pull', 'Moody', 'Shadow Tag', 'Baton Pass',
		],
	},
];
