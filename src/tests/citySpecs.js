/**
 * Created by user on 22/01/2017.
 */

var assert = require('assert');
var City = require('../models/City');

let city1;

describe('city', function() {

    beforeEach(function(){
        city1 = new City("Caracas", "Spanish", "Bolivar", {lat: 10.50, lng: -66.91})
    })
    it('should have a name', function(){
        assert.equal("Caracas", city1.name);
    });
    // it('should have a language', function(){
    //     assert.equal("Spanish", city1.language);
    // });
    // it('should have a currency', function(){
    //     assert.equal("Bolivar", city1.currency);
    // });
    // it('should have coordinates', function(){
    //     assert.equal( 10.50 , city1.coordinates.lat);
    //     assert.equal( -66.91, city1.coordinates.lng);
    // });
});
