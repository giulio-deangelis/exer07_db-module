/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
  "use strict";

  sap.ui.require([
    "exer07/exer07-ui/test/integration/AllJourneys"
  ], function () {
    QUnit.start();
  });
});