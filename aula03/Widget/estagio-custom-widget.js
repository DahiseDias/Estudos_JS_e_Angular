(function () {
  var component = {
    id: "1a564781-c837-4745-a539-44b41fcc1dfb",
    name: "Estagio custom widget",
    icon: "aoc-computer",
    template: '<div>' +
    '<div class="form">' +
    '<div class="title">Welcome</div>' +
    '<div class="subtitle">Submit your informations!</div>' +
    '<div class="input-container ic1">' +
    '<input id="fullname" class="input" type="text" placeholder=" " />' +
    '<div class="cut"></div>' +
    '<label for="fullname" class="placeholder">Full Name</label>' +
    '</div>' +
    '<div class="input-container ic2">' +
    '<input id="cellphone" class="input" type="text" placeholder=" " />' +
    '<div class="cut"></div>' +
    '<label for="cellphone" class="placeholder">Cell Phone</label>' +
    '</div>' +
    '<div class="subtitleMessage">Choose your language:</div>' +
    '<div id="languagesdiv" class="input-container ic3" ng-repeat="language in Languages">' + 
    '<input type="checkbox" id={{language}}>' +
    '<label class="checkboxfont">{{language}}</label>' +
    '<br></br>' +
    '</div>' +
    '<div class="input-container ic4">' +
    '<button type="text" onclick="postInformations()" class="submit">Submit</button>' +
    '</div>' +
    '</div>' +
    '</div>',
  };

  component.ui = angular.module("1a564781-c837-4745-a539-44b41fcc1dfb", ["core.services.WidgetAPI"]);
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
            getInformations()
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
