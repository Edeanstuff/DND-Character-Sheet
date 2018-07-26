var DNDCharacter = {
    basicCharacterTraits = {
        class: "",
        level: 0,
        background: "",
        playerName: "",
        race: "",
        age: 0,
        height: 0,
        weight: 0,
        eyes: "",
        skin: "",
        hair: "",
        alignment: "",
        personalityTraits: "",
        ideals: "",
        bonds: "",
        flaws: ""
    },

    bonusChararcterTraits = {
        features: "",
        traits: "",
        languages: "",
        useableWeapons: "",
        weaponProficiencies: ""
    },

    characterStats = {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
        savingStrength: 0,
        savingDexterity: 0,
        savingConstitution: 0,
        savingIntelligence: 0,
        savingWisdom: 0,
        savingCharisma: 0,
        acrobatics: 0,
        animalHandling: 0,
        arcana: 0,
        athletics: 0,
        deception: 0,
        history: 0,
        insight: 0,
        intimidation: 0,
        investigation: 0,
        medicine: 0,
        nature: 0,
        perception: 0,
        performance: 0,
        persuasion: 0,
        religion: 0,
        sleightOfHand: 0,
        stealth: 0,
        survival: 0,
        armorClass: 0,
        inititive: 0,
        speed: 0,
        health: 0,
        tempHP: 0,
        hitDice: "",
        passiveWisdom: 0,
        spellcastingAbility: 0,
        spellSaveDC: 0,
        spellAttackBonus: 0
    },

    weapons = [],

    currencyCopper = 0,

    magicAbilities = {
        cantrips = [],
        levelOne = [],
        levelTwo = [],
        levelThree = [],
        levelFour = [],
        levelFive = [],
        levelSix = [],
        levelSeven = [],
        levelEight = [],
        levelNine = []
    },

    inventory = [],

    backstory: ""
}