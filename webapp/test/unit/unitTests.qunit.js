/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/swcc/scm/SSP_SCM/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});