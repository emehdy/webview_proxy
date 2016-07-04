app.config(function($stateProvider, $urlRouterProvider) {
   
  $urlRouterProvider.otherwise("/home");
   
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "pages/home.html"
    })
    .state('bootstrap', {
      url: "/bootstrap",
      templateUrl: "pages/bootstrap.html"
    })
   
   .state('uib-tabs', {
      url: "/uib-tabs",
      templateUrl: "pages/uib-tabs.html"
    })
   .state('uib-modal', {
      url: "/uib-modal",
      templateUrl: "pages/uib-modal.html"
    })
   

   
   
});