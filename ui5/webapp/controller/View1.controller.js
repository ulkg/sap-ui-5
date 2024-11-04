sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";
    return Controller.extend("ui5.controller.View1", {
        onButtonPress: function() {
           sap.m.MessageToast.show("Button clicked!");
        }
     });
});
