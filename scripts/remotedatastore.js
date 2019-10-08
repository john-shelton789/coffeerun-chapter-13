(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function RemoteDataStore(url) {
    if (!url) {
      throw new Error('No remote URL supplied.');
    }
    this.serverUrl = url;
  }

  RemoteDataStore.prototype.add = function(key, val) {
    //code will go here
    $.post(this.serverUrl, val, function(serverResponse) {
      console.log(serverResponse);
    });
  };

  RemoteDataStore.prototype.getAll = function(cb) {
    $.get(this.serverUrl, function(serverResponse) {
      console.log(serverResponse);
      cb(serverResponse);
    });
  };

  RemoteDataStore.prototype.get = function(key, cb) {
    $.get(this.serverUrl + '/' + key, function(serverResponse) {
      console.log(serverResponse);
      cb(serverResponse);
    });
  };

  RemoteDataStore.prototype.remove = function(key) {
    var IDArray = [];

    //get the IDs of every item in the array with the email of the person ordering
    $.get(this.serverUrl + '?emailAddress=' + key, function(serverResponse) {
      console.log(serverResponse);
      serverResponse.forEach(function(element) {
        IDArray.push(element.id);
        console.log("ID is set to " + element.id);
      })
      //delete the entries when the order is delivered
      IDArray.forEach(function(element) {
        $.ajax('http://localhost:2403/coffeeorders' + '/' + element, {
          type: 'DELETE'
        });
      })
    });




  };

  App.RemoteDataStore = RemoteDataStore;
  window.App = App;
})(window);
