function game() {
  window.gameObj = {
    attackDone: false,
    winHp: false,
    loseHp: false,
    gameOver: false,
    pokemonsList: [
      {
        id: 1,
        name: 'Pikachu',
        image: 'assets/images/pkm-pikachu.png',
        hp: 200,
        attack: 10,
        counterAttack: 20
      },
      {
        id: 2,
        name: 'Bulbasaur',
        image: 'assets/images/pkm-bulbasaur.png',
        hp: 130,
        attack: 15,
        counterAttack: 25
      },
      {
        id: 3,
        name: 'Ponyta',
        image: 'assets/images/pkm-ponyta.png',
        hp: 180,
        attack: 7,
        counterAttack: 15
      },
      {
        id: 4,
        name: 'Charmander',
        image: 'assets/images/pkm-charmander.png',
        hp: 110,
        attack: 12,
        counterAttack: 20
      },
      {
        id: 5,
        name: 'Squirtle',
        image: 'assets/images/pkm-squirtle.png',
        hp: 90,
        attack: 10,
        counterAttack: 20
      },
      {
        id: 6,
        name: 'Weddle',
        image: 'assets/images/pkm-weddle.png',
        hp: 100,
        attack: 8,
        counterAttack: 10
      }
    ],
    gameStart: true,
    yourPokemon: null,
    enemy: null,
    currentAttack: null
  };
}

$(document).ready(function() {
  game();
  // Gets Link for Theme Song
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'assets/audio.mp3');

  // Global variables
  var pkmArrayList = gameObj.pokemonsList;

  // Play song button
  $('.audio-play').on('click', function() {
    audioElement.play();
  });
  // Pause song button
  $('.audio-pause').on('click', function() {
    audioElement.pause();
  });

  console.log(gameObj.pokemonsList);

  // Pokemon list
  // function pokemonList() {
  //     var pkmArrayList = gameObj.pokemonsList;

  //     for (var i = 0; i < pkmArrayList.length; i++) {
  //         var pokemonDiv = $('<div class="pkm" id="pkm-' + pkmArrayList[i].id + '"></div>')

  //         var pokemonImg = $('<img src="' + pkmArrayList[i].image + '" alt="' + pkmArrayList[i].name + '"/>')
  //         var pokemonName = $('<span>' + pkmArrayList[i].name + '</span>');

  //         var appendDiv = $('#pokemons').append(pokemonDiv);
  //         $(pokemonDiv).html(pokemonImg).append(pokemonName);

  //     }
  // }
  // pokemonList();

  // Select pokemon
  // function yourPokemon() {
  //     $("#pokemons").on("click", ".pkm", function () {
  //         var chosen = $(this).attr('id');
  //         var img = $(this).attr('img');
  //         console.log(chosen);
  //         $('.your-choice').html('<div class="your-choice-item" ' + img + '/>');

  //     })
  // }
  // yourPokemon();

  // // Select enemy
  // function enemy() {
  //     var randomEnemy = Math.floor(Math.random() * pkmArrayList.length);
  //     console.log(randomEnemy)
  // }
  // enemy()

  $('#pkm-1').on('click', function() {
    $('.your-choice').html(
      '<img class="your-choice-item" src="assets/images/pkm-pikachu.png"/>' +
        '<div class="hp"><h3>HP: ' +
        100 +
        '</h3 ></div > '
    );
  });
  $('#pkm-2').on('click', function() {
    $('.your-choice').html(
      '<img class="your-choice-item" src="assets/images/pkm-bulbasaur.png"/>' +
        '<div class="hp"><h3>HP: ' +
        100 +
        '</h3 ></div > '
    );
  });
  $('#pkm-3').on('click', function() {
    $('.your-choice').html(
      '<img class="your-choice-item" src="assets/images/pkm-ponyta.png"/>' +
        '<div class="hp"><h3>HP: ' +
        100 +
        '</h3 ></div > '
    );
  });
  $('#pkm-4').on('click', function() {
    $('.your-choice').html(
      '<img class="your-choice-item" src="assets/images/pkm-charmander.png"/>' +
        '<div class="hp"><h3>HP: ' +
        100 +
        '</h3 ></div > '
    );
  });
  $('#pkm-5').on('click', function() {
    $('.your-choice').html(
      '<img class="your-choice-item" src="assets/images/pkm-squirtle.png"/>' +
        '<div class="hp"><h3>HP: ' +
        100 +
        '</h3 ></div > '
    );
  });
  $('#pkm-6').on('click', function() {
    $('.your-choice').html(
      '<img class="your-choice-item" src="assets/images/pkm-weddle.png"/>' +
        '<div class="hp"><h3>HP: ' +
        100 +
        '</h3 ></div > '
    );
  });
});
