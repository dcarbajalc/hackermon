  // Aquí definieremos las imágenes y el nombre del CANVAS, para que se queden almacenados en la memoria:
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  const h = canvas.height;
  const w = canvas.width;
  var imgPk = new Image();
  imgPk.src =  'sprites/pokemon.png';
  var imgTrr = new Image();
  imgTrr.src ='sprites/battlebackground.png';
  var imgTrainer = new Image();
  imgTrainer.src = 'sprites/red.png';
  var imgLogotipo = new Image();
  imgLogotipo.src = 'sprites/logo.png';

  var audioBattle = new Audio();
  audioBattle.src ="sprites/battle.mp3";

  var selectionSound = new Audio();
  selectionSound.src ="sprites/select.mp3";


var arrayPokemon = [
    {Num: 0,Name: 'MissingNo',Type1: 0,Type2: 0,Move1: 0,Move2: 0,Move3: 0,Move4: 0,Hp: 0,Spd: 0,SpAtk: 0,Atk: 0,SpDef: 0,Def: 0},
  {Num: 1,Name: 'Venusaur',Type1: 5,Type2: 8,Move1: 1,Move2: 2,Move3: 3,Move4: 4,Hp: 80,Spd: 80,SpAtk: 100,Atk: 82,SpDef: 100,Def: 83},
  {Num: 2,Name: 'Charizard',Type1: 2,Type2: 10,Move1: 5,Move2: 6,Move3: 9,Move4: 8,Hp: 78,Spd: 100,SpAtk: 109,Atk: 84,SpDef: 85,Def: 78},
  {Num: 3,Name: 'Blastoise',Type1: 3,Type2: 0,Move1: 10,Move2: 11,Move3: 12,Move4: 13,Hp: 79,Spd: 78,SpAtk: 85,Atk: 83,SpDef: 105,Def: 100},
  {Num: 4,Name: 'Gengar',Type1: 14,Type2: 8,Move1: 23,Move2: 24,Move3: 2,Move4: 14,Hp: 60,Spd: 110,SpAtk: 130,Atk: 65,SpDef: 75,Def: 60},
  {Num: 5,Name: 'Pikachu',Type1: 4,Type2: 0,Move1: 16,Move2: 20,Move3: 21,Move4: 4,Hp: 60,Spd: 110,SpAtk: 95,Atk: 80,SpDef: 85,Def: 50},
  {Num: 6,Name: 'Dragonite',Type1: 15,Type2: 10,Move1: 15,Move2: 9,Move3: 12,Move4: 17,Hp: 91,Spd: 80,SpAtk: 100,Atk: 134,SpDef: 100,Def: 95},
  {Num: 7,Name: 'Alakazam',Type1: 11,Type2: 0,Move1: 23,Move2: 24,Move3: 11,Move4: 14,Hp: 55,Spd: 120,SpAtk: 135,Atk: 50,SpDef: 95,Def: 45},
  {Num: 8,Name: 'Lapras',Type1: 3,Type2: 6,Move1: 18,Move2: 19,Move3: 20,Move4: 21,Hp: 130,Spd: 60,SpAtk: 90,Atk: 85,SpDef: 95,Def: 80},
  {Num: 9,Name: 'Butterfree',Type1: 12,Type2: 10,Move1: 21,Move2: 22,Move3: 23,Move4: 24,Hp: 60,Spd: 70,SpAtk: 90,Atk: 45,SpDef: 80,Def: 50}
  ];
  
  var arrayType = [
  {TypeAtk: 'NoType',NoType: 1,Normal: 1,Fire: 1,Water: 1,Electric: 1,Grass: 1,Ice: 1,Fight: 1,Poison: 1,Ground: 1,Flying: 1,Psyquic: 1,Bug: 1,Rock: 1,Ghost: 1,Dragon: 1,Dark: 1,Steel: 1,Fairy: 1},
  {TypeAtk: 'Normal',NoType: 1,Normal: 1,Fire: 1,Water: 1,Electric: 1,Grass: 1,Ice: 1,Fight: 1,Poison: 1,Ground: 1,Flying: 1,Psyquic: 1,Bug: 1,Rock: 0.5,Ghost: 0,Dragon: 1,Dark: 1,Steel: 0.5,Fairy: 1},
  {TypeAtk: 'Fire',NoType: 1,Normal: 1,Fire: 0.5,Water: 0.5,Electric: 1,Grass: 2,Ice: 2,Fight: 1,Poison: 1,Ground: 1,Flying: 1,Psyquic: 1,Bug: 2,Rock: 0.5,Ghost: 1,Dragon: 0.5,Dark: 1,Steel: 2,Fairy: 1},
  {TypeAtk: 'Water',NoType: 1,Normal: 1,Fire: 2,Water: 0.5,Electric: 1,Grass: 0.5,Ice: 1,Fight: 1,Poison: 1,Ground: 2,Flying: 1,Psyquic: 1,Bug: 1,Rock: 2,Ghost: 1,Dragon: 0.5,Dark: 1,Steel: 1,Fairy: 1},
  {TypeAtk: 'Electric',NoType: 1,Normal: 1,Fire: 1,Water: 2,Electric: 0.5,Grass: 0.5,Ice: 1,Fight: 1,Poison: 1,Ground: 0,Flying: 2,Psyquic: 1,Bug: 1,Rock: 1,Ghost: 1,Dragon: 0.5,Dark: 1,Steel: 1,Fairy: 1},
  {TypeAtk: 'Grass',NoType: 1,Normal: 1,Fire: 0.5,Water: 2,Electric: 1,Grass: 0.5,Ice: 1,Fight: 1,Poison: 0.5,Ground: 2,Flying: 0.5,Psyquic: 1,Bug: 0.5,Rock: 2,Ghost: 1,Dragon: 0.5,Dark: 1,Steel: 0.5,Fairy: 1},
  {TypeAtk: 'Ice',NoType: 1,Normal: 1,Fire: 0.5,Water: 0.5,Electric: 1,Grass: 2,Ice: 0.5,Fight: 1,Poison: 1,Ground: 2,Flying: 2,Psyquic: 1,Bug: 1,Rock: 1,Ghost: 1,Dragon: 2,Dark: 1,Steel: 0.5,Fairy: 1},
  {TypeAtk: 'Fight',NoType: 1,Normal: 2,Fire: 1,Water: 1,Electric: 1,Grass: 1,Ice: 2,Fight: 1,Poison: 0.5,Ground: 1,Flying: 0.5,Psyquic: 0.5,Bug: 0.5,Rock: 2,Ghost: 0,Dragon: 1,Dark: 2,Steel: 2,Fairy: 0.5},
  {TypeAtk: 'Poison',NoType: 1,Normal: 1,Fire: 1,Water: 1,Electric: 1,Grass: 2,Ice: 1,Fight: 1,Poison: 0.5,Ground: 0.5,Flying: 1,Psyquic: 1,Bug: 1,Rock: 0.5,Ghost: 0.5,Dragon: 1,Dark: 1,Steel: 0,Fairy: 2},
  {TypeAtk: 'Ground',NoType: 1,Normal: 1,Fire: 2,Water: 1,Electric: 2,Grass: 0.5,Ice: 1,Fight: 1,Poison: 2,Ground: 1,Flying: 0,Psyquic: 1,Bug: 0.5,Rock: 2,Ghost: 1,Dragon: 1,Dark: 1,Steel: 2,Fairy: 1},
  {TypeAtk: 'Fly',NoType: 1,Normal: 1,Fire: 1,Water: 1,Electric: 0.5,Grass: 2,Ice: 1,Fight: 2,Poison: 1,Ground: 1,Flying: 1,Psyquic: 1,Bug: 2,Rock: 0.5,Ghost: 1,Dragon: 1,Dark: 1,Steel: 0.5,Fairy: 1},
  {TypeAtk: 'Psyquic',NoType: 1,Normal: 1,Fire: 1,Water: 1,Electric: 1,Grass: 1,Ice: 1,Fight: 2,Poison: 2,Ground: 1,Flying: 1,Psyquic: 0.5,Bug: 1,Rock: 1,Ghost: 1,Dragon: 1,Dark: 0,Steel: 0.5,Fairy: 1},
  {TypeAtk: 'Bug',NoType: 1,Normal: 1,Fire: 0.5,Water: 1,Electric: 1,Grass: 2,Ice: 1,Fight: 0.5,Poison: 0.5,Ground: 1,Flying: 0.5,Psyquic: 2,Bug: 1,Rock: 1,Ghost: 0.5,Dragon: 1,Dark: 2,Steel: 0.5,Fairy: 0.5},
  {TypeAtk: 'Rock',NoType: 1,Normal: 1,Fire: 2,Water: 1,Electric: 1,Grass: 1,Ice: 2,Fight: 0.5,Poison: 1,Ground: 0.5,Flying: 2,Psyquic: 1,Bug: 2,Rock: 1,Ghost: 1,Dragon: 1,Dark: 1,Steel: 0.5,Fairy: 1},
  {TypeAtk: 'Ghost',NoType: 1,Normal: 0,Fire: 1,Water: 1,Electric: 1,Grass: 1,Ice: 1,Fight: 1,Poison: 1,Ground: 1,Flying: 1,Psyquic: 2,Bug: 1,Rock: 1,Ghost: 2,Dragon: 1,Dark: 0.5,Steel: 1,Fairy: 1},
  {TypeAtk: 'Dragon',NoType: 1,Normal: 1,Fire: 1,Water: 1,Electric: 1,Grass: 1,Ice: 1,Fight: 1,Poison: 1,Ground: 1,Flying: 1,Psyquic: 1,Bug: 1,Rock: 1,Ghost: 1,Dragon: 2,Dark: 1,Steel: 0.5,Fairy: 0},
  {TypeAtk: 'Dark',NoType: 1,Normal: 1,Fire: 1,Water: 1,Electric: 1,Grass: 1,Ice: 1,Fight: 0.5,Poison: 1,Ground: 1,Flying: 1,Psyquic: 2,Bug: 1,Rock: 1,Ghost: 2,Dragon: 1,Dark: 0.5,Steel: 1,Fairy: 0.5},
  {TypeAtk: 'Steel',NoType: 1,Normal: 1,Fire: 0.5,Water: 0.5,Electric: 0.5,Grass: 1,Ice: 2,Fight: 1,Poison: 1,Ground: 1,Flying: 1,Psyquic: 1,Bug: 1,Rock: 2,Ghost: 1,Dragon: 1,Dark: 1,Steel: 0.5,Fairy: 2},
  {TypeAtk: 'Fairy',NoType: 1,Normal: 1,Fire: 0.5,Water: 1,Electric: 1,Grass: 1,Ice: 1,Fight: 2,Poison: 0.5,Ground: 1,Flying: 1,Psyquic: 1,Bug: 1,Rock: 1,Ghost: 1,Dragon: 2,Dark: 2,Steel: 0.5,Fairy: 1}
  ];
  
  var arrayAtack = [{Num_atk: 0,Name: 'NoAtack',Base: 'atk',Power: 0,Type: 0,Priority: 0,Anim: 0},
  {Num_atk: 1,Name: 'Power Whip',Base: 'atk',Power: 90,Type: 5,Priority: 0,Anim: 1},
  {Num_atk: 2,Name: 'Sludge Bomb',Base: 'sp',Power: 90,Type: 8,Priority: 0,Anim: 2},
  {Num_atk: 3,Name: 'Knock Off',Base: 'atk',Power: 65,Type: 16,Priority: 0,Anim: 3},
  {Num_atk: 4,Name: 'Mud Slap',Base: 'sp',Power: 70,Type: 9,Priority: 0,Anim: 4},
  {Num_atk: 5,Name: 'FlameThrower',Base: 'sp',Power: 90,Type: 2,Priority: 0,Anim: 5},
  {Num_atk: 6,Name: 'Rock Slide',Base: 'sp',Power: 60,Type: 13,Priority: 0,Anim: 6},
  {Num_atk: 7,Name: 'Dragon Pulse',Base: 'sp',Power: 80,Type: 15,Priority: 0,Anim: 7},
  {Num_atk: 8,Name: 'Thunder Punch',Base: 'atk',Power: 80,Type: 4,Priority: 0,Anim: 8},
  {Num_atk: 9,Name: 'Aerial Ace',Base: 'atk',Power: 90,Type: 10,Priority: 0,Anim: 9},
  {Num_atk: 10,Name: 'Water Pulse',Base: 'sp',Power: 90,Type: 3,Priority: 0,Anim: 10},
  {Num_atk: 11,Name: 'Aura Sphere',Base: 'sp',Power: 80,Type: 7,Priority: 0,Anim: 11},
  {Num_atk: 12,Name: 'Ice Punch',Base: 'atk',Power: 75,Type: 6,Priority: 0,Anim: 12},
  {Num_atk: 13,Name: 'Zen Headbutt',Base: 'atk',Power: 85,Type: 11,Priority: 0,Anim: 13},
  {Num_atk: 14,Name: 'Energy Ball',Base: 'sp',Power: 90,Type: 5,Priority: 0,Anim: 14},
  {Num_atk: 15,Name: 'Dragon Claw',Base: 'atk',Power: 100,Type: 15,Priority: 0,Anim: 15},
  {Num_atk: 16,Name: 'Pikaturbo',Base: 'sp',Power: 120,Type: 1,Priority: 1,Anim: 16},
  {Num_atk: 17,Name: 'Fire Punch',Base: 'atk',Power: 75,Type: 2,Priority: 0,Anim: 17},
  {Num_atk: 18,Name: 'Surf',Base: 'sp',Power: 90,Type: 3,Priority: 0,Anim: 18},
  {Num_atk: 19,Name: 'Ice Beam',Base: 'sp',Power: 90,Type: 6,Priority: 0,Anim: 19},
  {Num_atk: 20,Name: 'ThunderBolt',Base: 'sp',Power: 90,Type: 4,Priority: 0,Anim: 20},
  {Num_atk: 21,Name: 'Signal Beam',Base: 'sp',Power: 80,Type: 12,Priority: 0,Anim: 21},
  {Num_atk: 22,Name: 'Air Slash',Base: 'sp',Power: 70,Type: 10,Priority: 0,Anim: 22},
  {Num_atk: 23,Name: 'Psychic',Base: 'sp',Power: 75,Type: 11,Priority: 0,Anim: 23},
  {Num_atk: 24,Name: 'Shadow Ball',Base: 'sp',Power: 75,Type: 14,Priority: 0,Anim: 24}
  ];
  
  var arrayPokeFrame = [
    {Num: 0,CuadroUnoX: 0,CuadroUnoY: 0,CuadroDosX: 76,CuadroDosY: 0,EspaldaUnoX: 159,EspaldaUnoY: 0,EspaldaDosX: 0,EspaldaDosY: 0},
  {Num: 1,CuadroUnoX: 0,CuadroUnoY: 0,CuadroDosX: 76,CuadroDosY: 72,EspaldaUnoX: 159,EspaldaUnoY: 0,EspaldaDosX: 253,EspaldaDosY: 60},
  {Num: 2,CuadroUnoX: 0,CuadroUnoY: 72,CuadroDosX: 76,CuadroDosY: 157,EspaldaUnoX: 159,EspaldaUnoY: 72,EspaldaDosX: 253,EspaldaDosY: 134},
  {Num: 3,CuadroUnoX: 0,CuadroUnoY: 157,CuadroDosX: 76,CuadroDosY: 224,EspaldaUnoX: 159,EspaldaUnoY: 157,EspaldaDosX: 253,EspaldaDosY: 190},
  {Num: 4,CuadroUnoX: 0,CuadroUnoY: 224,CuadroDosX: 76,CuadroDosY: 296,EspaldaUnoX: 159,EspaldaUnoY: 224,EspaldaDosX: 253,EspaldaDosY: 259},
  {Num: 5,CuadroUnoX: 0,CuadroUnoY: 296,CuadroDosX: 76,CuadroDosY: 369,EspaldaUnoX: 159,EspaldaUnoY: 296,EspaldaDosX: 253,EspaldaDosY: 318},
  {Num: 6,CuadroUnoX: 0,CuadroUnoY: 369,CuadroDosX: 76,CuadroDosY: 455,EspaldaUnoX: 159,EspaldaUnoY: 369,EspaldaDosX: 253,EspaldaDosY: 399},
  {Num: 7,CuadroUnoX: 0,CuadroUnoY: 455,CuadroDosX: 76,CuadroDosY: 533,EspaldaUnoX: 159,EspaldaUnoY: 455,EspaldaDosX: 253,EspaldaDosY: 470},
  {Num: 8,CuadroUnoX: 0,CuadroUnoY: 533,CuadroDosX: 76,CuadroDosY: 610,EspaldaUnoX: 159,EspaldaUnoY: 533,EspaldaDosX: 253,EspaldaDosY: 536},
  {Num: 9,CuadroUnoX: 0,CuadroUnoY: 610,CuadroDosX: 76,CuadroDosY: 685,EspaldaUnoX: 159,EspaldaUnoY: 610,EspaldaDosX: 253,EspaldaDosY: 605}
  ]




  