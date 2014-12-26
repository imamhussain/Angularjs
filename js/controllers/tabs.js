 angular.module('MyTabs', ['ui.bootstrap']);
 angular.module('MyTabs').controller('imamCtrl', function ($scope,   $modal, $log, $http) {
  
 $scope.groups = [
    {
      title: 'Angularjs Team',
      content: 'Azhar,Sufiyan,Imam hussain,Tauseef,Salman khan'
    },
    {
      title: 'Android Team',
      content: 'Tejasvi,Nagnath,Ateeque,Wajid,Sana'
    }
  ];

    $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  }; 


 $scope.alerts = [
    { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
    { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
  ];

 $scope.addAlert = function() {
    $scope.alerts.push({msg: 'Another alert!'});
  };

   $scope.singleModel = 1;

     var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: 'http://placekitten.com/' + newWidth + '/300',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }

  $scope.isCollapsed = false;

   $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

   $scope.status = {
    isopen: false
  };


 $scope.items = ['item1', 'item2', 'item3'];

  $scope.open = function (size) 
  {

    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
                items: function () 
                {
                return $scope.items;
                }
               }
    });

    modalInstance.result.then(function (selectedItem) 
    {
      $scope.selected = selectedItem;
    }, function () 
    {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.totalItems = 64;
  $scope.currentPage = 4;


  $scope.pageChanged = function() {
    $log.log('Page changed to: ' + $scope.currentPage);
  };

$scope.max = 200;
    $scope.random = function()
    { 
      {
      var value = Math.floor((Math.random() * 100) + 1);
      var type;

    if (value < 25) 
     {
      type = 'success';
     } else if (value < 50)
     {
      type = 'info';
     } else if (value < 75)
     {
      type = 'warning';

     } else 
     {
      type = 'danger';
     }

    $scope.showWarning = (type === 'danger' || type === 'warning');

    $scope.dynamic = value;
    $scope.type = type;
  };
  $scope.random();

  }

    $scope.mytime = new Date();

  $scope.hstep = 1;
  $scope.mstep = 1;

  $scope.options = 
  {
    hstep: [1, 2, 3],
    mstep: [1, 5, 10, 15, 25, 30]
  };

  $scope.ismeridian = true;
  $scope.toggleMode = function() {
    $scope.ismeridian = ! $scope.ismeridian;
  };



 $scope.max = 10;
  $scope.isReadonly = false;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };

  $scope.dynamicTooltip = 'Assalamu alaikum';
  $scope.dynamicTooltipText = 'Imam hussain';

  $scope.selected = undefined;
  $scope.getLocation = function(val) {
    return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: val,
        sensor: false
      }
    }).then(function(response){
      return response.data.results.map(function(item){
        return item.formatted_address;
      });
    });
  };

});





  angular.module('MyTabs').controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});