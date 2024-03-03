const PokemonModel = (sequelize, DataTypes) => {
    return sequelize.define("pokemon", {
        pokemon_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING
        },
        type_1: {
            type: DataTypes.STRING
        },
        type_2: {
            type: DataTypes.STRING
        },
        hit_points: {
            type: DataTypes.INTEGER
        },
        attack: {
            type: DataTypes.INTEGER
        },
        defense: {
            type: DataTypes.INTEGER
        },
        special_attack: {
            type: DataTypes.INTEGER
        },
        special_defense: {
            type: DataTypes.INTEGER
        },
        speed: {
            type: DataTypes.INTEGER
        },
        generation: {
            type: DataTypes.INTEGER
        },
        legendary: {
            type: DataTypes.STRING
        },
        evolves_from_id: {
            type: DataTypes.INTEGER
        },
    },
    {
        freezeTableName: true,
    })
}

export {PokemonModel};