(function() {
  'use strict';

  angular
    .module('app.admin')
    .controller('ContactInfoCtrl', ContactInfoCtrl);


  function ContactInfoCtrl($mdToast, $state, AppService) {
    var vm = this;

    vm.store = {
      address: '111 N. 11th St',
      city: 'Boise',
      state: 'Id',
      zip: '83702',
      email: 'hello@mealatron9000.com',
      phone: '208-331-1734'
    };

    vm.saveStoreInfo = saveStoreInfo;

    activate();

    ////////////////////////////////////

    function activate() {
      AppService.setNavTitle('CONTACT INFO');
      AppService.setNavActions({url: 'http://philmerrell.github.io/deliver-client/', title: 'View app'});
    }


    function saveStoreInfo(storeInfo) {
      $mdToast.show(
        $mdToast.simple()
          .textContent('Info saved')
          .position('bottom right')
          .hideDelay(3000)
      );

      $state.go('admin.settings');
    }
  }
})();