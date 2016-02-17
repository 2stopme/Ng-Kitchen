(function() {
  'use strict';

  angular
    .module('ngKitchen')
    .directive('acmeSearch', acmeSearch);

  /** @ngInject */
  function acmeSearch() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/search/search.html',
      controller: SearchController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function SearchController() {
      var vm = this;


    }
  }

})();
