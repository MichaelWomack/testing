/**
 * Created by MichaelWomack on 6/8/15.
 */

var states = [
    {
        "name": "Georgia",
        "code": "GA"
    },

    {
        "name": "Alabama",
        "code": "AL"
    },

    {
        "name": "North Carolina",
        "code": "NC"
    }
];

var products = [
    {
        "name": "MacBook",
        "code": 1400
    },

    {
        "name": "Leather Case",
        "code": 150
    },

    {
        "name": "Charger",
        "code": 45
    }
];

var jsObject = {

    populateState: function() {
        var $select = $('#selectState');
        for(var i = 0; i < states.length; i++){
            var name = states[i].name;
            $select.append('<option>' + name + '</option>');

        }
    },

    populateProducts: function() {
      var $prodList = $('#selectProd');
        for(var i = 0; i < products.length; i++){
            var name = products[i].name;
            var price = products[i].code;
            $prodList.append('<option>' + name + '</option>');


        }
    },

    updateTotal: function(quantity) {

    },

    init: function() {
        jsObject.populateState();
        jsObject.populateProducts();
    }
};

$(function() {
   jsObject.init();

    $('#quant').change(function() {
        alert($('#selectProd').val());
       jsObject.updateTotal($(this).val());

    });

    $('#selectProd').change(function() {
       alert($(this).val());
    });
});