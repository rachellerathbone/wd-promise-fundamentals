'use strict';

// Export a function named getName that takes two arguments.
//    getJSON (function)
//    url (string)
//
// Invoke the getJSON function with the provided URL to send an HTTP GET request
// and return a pending promise. The promise will either be fulfilled with an
// object containing information about a Pokemon or be rejected with an error.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    pokemon (object)
// Return the promise from invoking the getJSON function with the URL of the
// first form of the provided pokemon.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    form (object)
// Return the name of the provided form as a string.
//
// Chain a rejected handler onto the above promise that takes one argument.
//    err (object)
// Return the provided error.
//
// Return the final promise from the chain.
module.exports.getName = function(getJSON, url) {
  // return getJSON(url)
  //   .then((pokemon) => getJSON(pokemon.forms[0].url))
  //   .then((form) => form.name)
  //   .catch((err) => err);
};

// Export a function named getId that takes two arguments.
//    getJSON (function)
//    url (string)
//
// Invoke the getJSON function with the provided URL to send an HTTP GET request
// and return a pending promise. The promise will either be fulfilled with an
// object containing information about a Pokemon or be rejected with an error.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    pokemon (object)
// Return the promise from invoking the getJSON function with the URL of the
// first form of the provided pokemon.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    form (object)
// Return the id of the provided form as a number.
//
// Chain a rejected handler onto the above promise that takes one argument.
//    err (object)
// Return the provided error.
//
// Return the final promise from the chain.



// Export a function named getIsBattleOnlyOrMega that takes two arguments.
//    getJSON (function)
//    url (string)
//
// Invoke the getJSON function with the provided URL to send an HTTP GET request
// and return a pending promise. The promise will either be fulfilled with an
// object containing information about a Pokemon or be rejected with an error.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    pokemon (object)
// Return the promise from invoking the getJSON function with the URL of the
// first form of the provided pokemon.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    form (object)
// Return a boolean of whether the provided form is battle only or is mega.
//
// Chain a rejected handler onto the above promise that takes one argument.
//    err (object)
// Return the provided error.
//
// Return the final promise from the chain.



// Export a function named getSprites that takes two arguments.
//    getJSON (function)
//    url (string)
//
// Invoke the getJSON function with the provided URL to send an HTTP GET request
// and return a pending promise. The promise will either be fulfilled with an
// object containing information about a Pokemon or be rejected with an error.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    pokemon (object)
// Return the promise from invoking the getJSON function with the URL of the
// first form of the provided pokemon.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    form (object)
// Return the sprites of the provided form as an object.
//
// Chain a rejected handler onto the above promise that takes one argument.
//    err (object)
// Return the provided error.
//
// Return the final promise from the chain.



// Export a function named getSpriteKeys that takes two arguments.
//    getJSON (function)
//    url (string)
//
// Invoke the getJSON function with the provided URL to send an HTTP GET request
// and return a pending promise. The promise will either be fulfilled with an
// object containing information about a Pokemon or be rejected with an error.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    pokemon (object)
// Return the promise from invoking the getJSON function with the URL of the
// first form of the provided pokemon.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    form (object)
// Return the keys of the sprites of the provided form as an array.
//
// Chain a rejected handler onto the above promise that takes one argument.
//    err (object)
// Return the provided error.
//
// Return the final promise from the chain.



// Export a function named getSpriteValues that takes two arguments.
//    getJSON (function)
//    url (string)
//
// Invoke the getJSON function with the provided URL to send an HTTP GET request
// and return a pending promise. The promise will either be fulfilled with an
// object containing information about a Pokemon or be rejected with an error.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    pokemon (object)
// Return the promise from invoking the getJSON function with the URL of the
// first form of the provided pokemon.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    form (object)
// Return the values of the sprites of the provided form as an array.
//
// Chain a rejected handler onto the above promise that takes one argument.
//    err (object)
// Return the provided error.
//
// Return the final promise from the chain.



// Export a function named getVersionGroup that takes two arguments.
//    getJSON (function)
//    url (string)
//
// Invoke the getJSON function with the provided URL to send an HTTP GET request
// and return a pending promise. The promise will either be fulfilled with an
// object containing information about a Pokemon or be rejected with an error.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    pokemon (object)
// Return the promise from invoking the getJSON function with the URL of the
// first form of the provided pokemon.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    form (object)
// Return the version group of the provided form as an object.
//
// Chain a rejected handler onto the above promise that takes one argument.
//    err (object)
// Return the provided error.
//
// Return the final promise from the chain.



// Export a function named getVersionGroupName that takes two arguments.
//    getJSON (function)
//    url (string)
//
// Invoke the getJSON function with the provided URL to send an HTTP GET request
// and return a pending promise. The promise will either be fulfilled with an
// object containing information about a Pokemon or be rejected with an error.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    pokemon (object)
// Return the promise from invoking the getJSON function with the URL of the
// first form of the provided pokemon.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    form (object)
// Return the name of the version group of the provided form as a string.
//
// Chain a rejected handler onto the above promise that takes one argument.
//    err (object)
// Return the provided error.
//
// Return the final promise from the chain.



// Export a function named getVersionGroupUrl that takes two arguments.
//    getJSON (function)
//    url (string)
//
// Invoke the getJSON function with the provided URL to send an HTTP GET request
// and return a pending promise. The promise will either be fulfilled with an
// object containing information about a Pokemon or be rejected with an error.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    pokemon (object)
// Return the promise from invoking the getJSON function with the URL of the
// first form of the provided pokemon.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    form (object)
// Return the url of the version group of the provided form as a string.
//
// Chain a rejected handler onto the above promise that takes one argument.
//    err (object)
// Return the provided error.
//
// Return the final promise from the chain.
