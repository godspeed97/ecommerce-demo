(function () {

    angular.module('petStoreApp')
        .controller('petStoreCtrl', petStoreCtrl);

            function petStoreCtrl(shoppingCart, productsSvc) {

                var vm = this;

                vm.data = productsSvc.getProductsData();

                vm.sendOrder = function (shippingDetails) {
                    vm.data.orderId = Math.floor((Math.random() * 2000000) + 1000000);
                    shoppingCart.removeAllFromCart();
                }

            }

})();