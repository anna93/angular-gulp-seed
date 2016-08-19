(function () {
    'use strict';

    angular
        .module('app.sample')
        .controller('SampleController',SampleController);

    SampleController.$inject = [];
    function SampleController() {
        var sm = this;
        sm.lava = 'this is comming from controller';
    }
})();
