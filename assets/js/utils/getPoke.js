'use strict';

const getPoke = (cb) => {

  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', _ => {

    if (xhr.status !== 200) return cb(new error('Error de getPoke'));

    cb(null, xhr.response);
  });

  xhr.open('GET','https://pokeapi.co/api/v2/pokedex/1/' );
  xhr.responseType = 'json';
  xhr.send();
};