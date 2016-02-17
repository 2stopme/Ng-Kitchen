(function() {
  'use strict';

  angular
    .module('ngKitchen')
    .directive('acmeElementpreview', acmeElementpreview);

  /** @ngInject */
  function acmeElementpreview() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/elementpreview/elementpreview.html',
      controller: ElementpreviewController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function ElementpreviewController() {
      var vm = this;


    }
  }

})();
