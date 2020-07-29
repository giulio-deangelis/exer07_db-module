/*global QUnit*/

sap.ui.define([
  "exer07/exer07-ui/controller/Home.controller"
], function (Controller) {
  "use strict";

  QUnit.module("Home Controller");

  QUnit.test("I should test the Home controller", function (assert) {
    var oAppController = new Controller();
    oAppController.onInit();
    assert.ok(oAppController);
  });

});