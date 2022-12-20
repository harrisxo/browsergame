const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, require, unique: true },
  email: { type: String, require, unique: true },
  password: { type: String, require },
  level: { type: Number, default: 1 },
  units: {
    type: Array,
    default: [
      {
        hero_type: "warrior",
        attack: 5,
        available: 1,
        battling: 0,
      },
      {
        hero_type: "vicking",
        attack: 10,
        available: 1,
        battling: 0,
      },
      {
        hero_type: "magician",
        attack: 15,
        available: 1,
        battling: 0,
      },
      {
        hero_type: "prince",
        attack: 20,
        available: 1,
        battling: 0,
      },
    ],
  },
  last_played: { type: String, default: new Date().toISOString() },
  current_map: {
    type: Array,
    default: [
      {
        id: 1,
        occupied: true,
        hp: Math.floor(Math.random() * 400) + 1,
      },
      {
        id: 2,
        occupied: false,
        hp: Math.floor(Math.random() * 400) + 1,
      },
      {
        id: 3,
        occupied: false,
        hp: Math.floor(Math.random() * 400) + 1,
      },
      {
        id: 4,
        occupied: false,
        hp: Math.floor(Math.random() * 400) + 1,
      },
      {
        id: 5,
        occupied: false,
        hp: Math.floor(Math.random() * 400) + 1,
      },
      {
        id: 6,
        occupied: false,
        hp: Math.floor(Math.random() * 400) + 1,
      },
      {
        id: 7,
        occupied: false,
        hp: Math.floor(Math.random() * 400) + 1,
      },
      {
        id: 8,
        occupied: false,
        hp: Math.floor(Math.random() * 400) + 1,
      },
      {
        id: 9,
        occupied: false,
        hp: Math.floor(Math.random() * 400) + 1,
      },
      {
        id: 10,
        occupied: false,
        hp: Math.floor(Math.random() * 400) + 1,
      },
      {
        id: 11,
        occupied: false,
        hp: Math.floor(Math.random() * 400) + 1,
      },
      {
        id: 12,
        occupied: false,
        hp: Math.floor(Math.random() * 400) + 1,
      },
      {
        id: 13,
        occupied: false,
        hp: Math.floor(Math.random() * 400) + 1,
      },
      {
        id: 14,
        occupied: false,
        hp: Math.floor(Math.random() * 400) + 1,
      },
      {
        id: 15,
        occupied: false,
        hp: Math.floor(Math.random() * 400) + 1,
      },
      {
        id: 16,
        occupied: false,
        hp: Math.floor(Math.random() * 400) + 1,
      },
    ],
  },
  total_wins: 0,
});

const User = new mongoose.model("User", userSchema);

module.exports = { User };
