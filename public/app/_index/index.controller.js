

angular.module('taffeta')
        .controller('indexCtrl', indexCtrl);

indexCtrl.$inject = ['$window', '$routeParams', 'backgroundsSvc', 'linksSvc', '$timeout'];

function indexCtrl ($window, $routeParams, backgroundsSvc, linksSvc, $timeout){
    var vm = this;

    vm.onMouseMove = onMouseMove;

    activate();

    function activate() {
        getLinks();
        $timeout(getBackground, 2000);
        vm.id = $routeParams.id;
        console.log(vm.id);

        
        // angular.element($window).bind('resize', function(){
        //     calculateWindowSize();
        //     calculatePanSize();
        // });
        // $(document).ready(function(){$('#pan').imagePanning()});
    }

    function getBackground() {
        backgroundsSvc.get({ id: vm.id }).$promise.then(function(data){
            vm.background = data;
            // $timeout(function(){
            //     calculateWindowSize();
            //     calculatePanSize();
            // });
        });
    }

    function getLinks() {
        linksSvc.query({ id: 2 }).$promise.then(function(data){
            vm.links = data;
        });
    }

    function calculateWindowSize() {
        vm.winWidth = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;

        vm.winHeight = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;
        console.log('win', vm.winWidth, vm.winHeight);
    }

    function calculatePanSize() {
        var pan = document.getElementById('pan');
        vm.panWidth = pan.scrollWidth;
        vm.panHeight = pan.scrollHeight;
        
        console.log('pan',pan);
        console.log('vm.panWidth',vm.panWidth);
        console.log('vm.panHeight',vm.panHeight);
    }

    function onMouseMove(event) {
        getMouseCoords(event);
        // $timeout.cancel(mouseTimer);
        // var mouseTimer = $timeout(function() {
            
            
        // });
    }

    function getMouseCoords (event){
        vm.xPos = (vm.panWidth - vm.winWidth) * (event.clientX / vm.winWidth);
        vm.yPos = (vm.panHeight - vm.winHeight) * (event.clientY / vm.winHeight);
        vm.test = (vm.panWidth - vm.winWidth) * (event.clientX / vm.winWidth) * 100 + '% ' + (vm.panHeight - vm.winHeight) * (event.clientY / vm.winHeight) + '%';
        // ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'

        // vm.xPos = (vm.panWidth - vm.winWidth) * (event.clientX / vm.winWidth);
        // vm.yPos = (vm.panHeight - vm.winHeight) * (event.clientY / vm.winHeight);
    }
}