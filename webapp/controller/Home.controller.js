sap.ui.define([
	"ZZ_GEST_PETOFER/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("ZZ_GEST_PETOFER.controller.Home", {
		onInit: function() {
			debugger
		},
		getServiceRelacionTaxGrupo: function() {
			var that = this;
			var ZCDS_F4_RELTAXGRU_CDS = this.getOwnerComponent().getModel("ZCDS_F4_RELTAXGRU_CDS");
			ZCDS_F4_RELTAXGRU_CDS.read("/ZCDS_F4_RELTAXGRU", {
				async: false,
				success: function(res) {
					// that.localmodel = new sap.ui.model.json.JSONModel(res.results);
					debugger

				},
				error: function(err) {
					debugger
				}
			});
		},
		onItemPress: function(){
			this.getRouter().navTo("Detail");
		}
	});
});