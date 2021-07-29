import process from 'process';
import {
    Tile,
    Boneyard,
    Player,
    Train
} from './trainObject.mjs';
let boneYard = new Boneyard();
//need to shuffle to get random order
boneYard.shuffle();
let player = new Player('James', boneYard);
player.drawTiles();
console.log(player.toString());

let train = new Train(12, player);

let tile = new Tile(5, 12);

if (!train.canPlaceTile(tile)) {
    console.log(`Oops, should be able to play ${tile.toString()}`);
    process.exit(1);
}

train.placeTile(tile);

tile = new Tile(7, 12);
if (train.canPlaceTile(tile)) {
    console.log(`Oops, should note be able to play ${train.toString()}) ${tile.toString()}`);
    process.exit(1);
}

tile = new Tile(5, 7);
train.placeTile(tile);
console.log(train.toString());