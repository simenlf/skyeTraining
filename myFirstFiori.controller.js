sap.ui.define([
	'sap/ui/core/mvc/Controller'
    ], function(Controller) {
    	"use strict";

    var controller = Controller.extend("skye.training.myFirstFiori", {
    	
        onInit: function(oEvent) {
            console.log("myFirstFiori - onInit");
        }
        
    });

    return controller;

});