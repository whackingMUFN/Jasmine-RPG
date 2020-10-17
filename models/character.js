module.exports = function(sequelize, DataTypes) {
  var Character = sequelize.define("character", {
    player_name: DataTypes.STRING,
    player_age: DataTypes.INTEGER,
    player_race: DataTypes.STRING,
    player_class: DataTypes.STRING,
    player_strength: DataTypes.INTEGER,
    player_magic: DataTypes.INTEGER,
    player_health: DataTypes.INTEGER
  },
  Character.associate());
  return Character;
};


// class Character extends Model {

// }

// class Race extends Model {

// }

// Character.init({
//   player_name: DataTypes.STRING,
//   player_age: DataTypes.INTEGER,
//   player_race: DataTypes.STRING,
//   player_class: DataTypes.STRING,
//   player_strength: DataTypes.INTEGER,
//   player_magic: DataTypes.INTEGER,
//   player_health: DataTypes.INTEGER
// },
// Character.associate())
// Race.init({})