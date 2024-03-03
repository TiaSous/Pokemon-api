import { DataTypes, Sequelize } from "sequelize";
import { PokemonModel } from "../model/t_pokemon.mjs";

const sequelize = new Sequelize(
  "pokemon", // Nom de la DB qui doit exister
  "root", // Nom de l'utilisateur
  "root", // Mot de passe de l'utilisateur
  {
    host: "localhost",
    port: 6033,
    dialect: "mysql",
    logging: false,
    define: {
      timestamps: false // Désactiver la création automatique des champs createdAt et updatedAt
    }
  }
);

const Pokemon = PokemonModel(sequelize, DataTypes);


export { sequelize, Pokemon };