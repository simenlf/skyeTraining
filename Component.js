sap.ui.define(['sap/ui/core/UIComponent'],
	function(UIComponent) {
	"use strict";

	var Component = UIComponent.extend("skye.training.Component", {

		metadata : {
			rootView : "skye.training.myFirstFiori",
			dependencies : {
				libs : [
					"sap.m"
				]
			},
			config : {
				sample : {
					stretch : true,
					files : [
						"myFirstFiori.view.xml",
						"myFirstFiori.controller.js"
					]
				}
			}
		}
	});


	return Component;

});