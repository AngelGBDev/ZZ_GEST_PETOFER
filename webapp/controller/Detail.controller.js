sap.ui.define([
	"ZZ_GEST_PETOFER/controller/BaseController",
	"sap/ui/core/mvc/Controller"
], function(BaseController) {
	"use strict";
	var that;
	var oModelJSON;
	
	return BaseController.extend("ZZ_GEST_PETOFER.controller.Detail", {
		handleRouteMatched: function (oEvent) {
			that.getView().getModel("JSON_MDL").setProperty("/HEAD", {
				Title: "Fr- PRUEBA FACTORÍA",
				Number: "7000000019",
				Autor: "SUSANA SONEIRA GARCIA",
				Creado: "15.06.2021",
				Fecha: "17.06.2021",
				Autorizador: "Autorizado automáticamente",
				Status: "Publicados",
				ValorPrevisto: "100000",
				Moneda: "EUR",
				Plazo: "22.06.2021"
			});
		},
		onInit: function () {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getTarget("Detail").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));
			that = this;
		},
		returnPress: function(){
			this.getRouter().navTo("home");
		}
	});
});