# Pokemon-api
## Introduction
Le but avoir une api qui permet de recolter les informations sur les pokemons (en anglais) depuis une base de données (docker/db).
\
Il y a également une partie docker qui permet d'instantanément d'avoir tout en place.
\
Voici le git de la base de données : https://github.com/samchamper/pokemonDB
### Mettre en place localement
Il vous faudra avoir une db MySQL prête. Dans le fichier sequelize.mjs (pokemon-api/src/db/), il vous faudra changer la partie suivante : 

![image](https://github.com/TiaSous/Pokemon-api/assets/122774929/f90cd46a-63bb-40d8-b9d5-12e87c4d8b02)

il faudra changer cette partie en fonction de où est votre db.

#### Execution
Lorsque vous aurez finit, vous pourrez lancer l'api en faisant "npm start" dans un terminal.

#### Accéder à l'api
Pour accéder à l'api: http://localhost:3000/

## Docker
Pour lancer le docker : docker-compose up
\
Pour y accéder : http://localhost:3000/

## Routes
Pour l'instant l'api peut : 
- Récupérer tout les pokemons : http://localhost:3000/api/pokemon
- Récupérer un ou des pokémon selon leur nom : http://localhost:3000/api/pokemon?name=pikachu
