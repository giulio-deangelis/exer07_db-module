/* eslint-env es6 */

sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";

  return Controller.extend("exer07.exer07-ui.controller.Home", {
      
    onRowPress: function (ev) {
      // unnecessary because there's only one detailPage
      // this.byId("split").toDetail(this.createId("detail"));

      // for tables because the event originates directly from the source (the ColumnListItem)
      // const path = ev.getSource().getBindingContext("oDataModel").getPath();

      // for lists because the event originates from the List, but the binding is located in the StandardListItem
      const path = ev.getParameter("listItem").getBindingContext("oDataModel").getPath();

      this.byId("detail").scrollTo(0, 0);
      this.getView().bindElement({
        path: path,
        model: "oDataModel"
      });
    }
  });
});