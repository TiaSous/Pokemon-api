import express from "express";
import { success } from "./helper.mjs";
import { Pokemon } from "../db/sequelize.mjs";
import { Op } from "sequelize";

const getPokemon = express();

getPokemon.get("/", (req, res) => {
    if (req.query.name) {
        if (req.query.name.length < 2) {
            const message = `Le terme de la recherche doit contenir au moins 2 caractères`;
            return res.status(400).json({ message });
        }
        let limit = 3;
        if (req.query.limit) {
            limit = parseInt(req.query.limit);
        }
        return Pokemon.findAndCountAll({
            where: { name: { [Op.like]: `%${req.query.name}%` } },
            limit: limit,
        }).then((pokemons) => {
            const message = `Il y a ${pokemons.count} produits qui correspondent au terme de la recherche`;
            res.json(success(message, pokemons));
        });
    }
    Pokemon.findAll()
        .then((pokemons) => {
            const message = "La liste des produits a bien été récupérée.";
            res.json(success(message, pokemons));
        })
        .catch((error) => {
            const message =
                "La liste des produits n'a pas pu être récupérée. Merci de réessayer dans quelques instants.";
            res.status(500).json({ message, data: error });
        });
});

export { getPokemon };