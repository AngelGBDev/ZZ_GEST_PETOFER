sap.ui.define([
	"ZZ_GEST_PETOFER/controller/BaseController",
	"sap/ui/core/mvc/Controller"
], function(BaseController) {
	"use strict";

	return BaseController.extend("ZZ_GEST_PETOFER.controller.Detalle", {
		onInit: function(){
			debugger
		},
		returnPress: function(){
			this.getRouter().navTo("home");
		}
	});
});