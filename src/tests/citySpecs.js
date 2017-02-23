/**
 * Created by user on 22/01/2017.
 */

import assert from 'assert';
import City from '../models/City';

let city1;


describe('city', function() {

    beforeEach(function(){
        city1 = new City({name: "Caracas", coordinates: [10.50,-66.91],
        languages: ["ES"] ,country: "Venezuela", currency: ["BsF"]});

    });
    it('should have a name', function(){
        assert.equal("Caracas", city1.name);
    });
    it('should have a language', function(){
        assert.equal("ES", city1.languages[0]);
    });
    it('should have a currency', function(){
        assert.equal("BsF", city1.currency[0]);
    });
    it('should have coordinates', function(){
        assert.equal( 10.50 , city1.coordinates[0]);
        assert.equal( -66.91, city1.coordinates[1]);
    });
});


