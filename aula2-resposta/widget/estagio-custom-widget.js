(function () {
  var component = {
    id: "8e23bba6-1017-4480-acfb-c2772dc12f98",
    name: "Estagio custom widget",
    icon: "aoc-computer",
    template: '<div">'+
    '<div class="container">'+
    '<div class = "title">Formulario</div>'+
    '<div class = "subtitle">Preencha os campos</div>'+
    '<div id="entrada">'+
    '<input type="text" name="nome" class="input" placeholder=" ">'+
    '<input type="text" name="celular" class="input" placeholder=" ">'+
    '<div class="checkboxs" ng-repeat= "vaga in vagas">'+
    '<input type="checkbox" id={{vaga}}>' +
    '<label class="checkboxfont">{{vaga}}</label>' +
    '</div>'+
    '<div class="checkboxs"ng-repeat= "linguagem in linguagens">'+
    '<input type="checkbox" id={{linguagem}}>' +
    '<label class="checkboxfont">{{linguagem}}</label>' +
    '</div>'+
    '<input type="button" value="submit" id="button" onclick="postInformations()">'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</html>'
  };

  component.ui = angular.module("8e23bba6-1017-4480-acfb-c2772dc12f98", ["core.services.WidgetAPI"]);
  component.ui.directive("estagioCustomWidget", widgetComponent);

  function widgetComponent(WidgetAPI, $http) {
    function widgetContainer(scope, element, params) {
      var returnData;
      var api = new WidgetAPI(params);
      
      api.onDataEvent("onContextDataEvent", function (data) {
        console.log("------------- ContextDataEvent");
        console.log(data);
      });

      api.onDataEvent("onInteractionEndedEvent", function (data) {
        postInformations();
      });

      api.onDataEvent("onInteractionEvent", function (data) {
        scope.aniCallID = data.originatingAddress;
        scope.ucid = data.contactId;
        if (uui === undefined || uui == null) {
          console.log("------------- ANI is empty!");
        } else {
          if (data.state == "ACTIVE" && !scope.interactionOnce) {
            getInformations();
            scope.interactionOnce = true;
          }
        }
      });

      api.onDataEvent("onCRMDataEvent", function (data) {
        scope.customer = data;
        console.log("------------- onCRMDataEvent--------------");
        console.log(data);
      });

      api.onDataEvent("onMediaDataEvent", function (data) {
        scope.media = data;
        console.log("------------- onMediaDataEvent--------------");
        console.log(data);
      });

      api.onDataEvent("onAgentStateEvent", function (data) {
        scope.agent = data;
        console.log("------------- onAgentStateEvent--------------");
        console.log(data);
      });

      api.onDataEvent("onMessageEvent", function (data) {
        scope.message = data;
        console.log("------------- onMessageEvent--------------");
        console.log(data);
      });

      api.onDataEvent("onNavigationEvent", function (data) {
        scope.navigation = data;
        console.log("------------- onNavigationEvent--------------");
        console.log(data);
      });

      api.onDataEvent("onLocaleUpdatedEvent", function (data) {
        scope.locale = data;
        console.log("------------- onLocaleUpdatedEvent--------------");
        console.log(data);
        api.sendNotification("info", "Widget: Locale was changed");
      });

      element.on("$destroy", function () {
        api.unregister();
      });
    }

    return {
      scope: {},
      replace: true,
      template: component.template,
      link: widgetContainer,
    };
  }
})();
