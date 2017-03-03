angular.module('myday.controllers',[])
    .controller('PsalmController',PsalmController)
    .controller('SideMenuController',SideMenuController)
;
/**
 * Psalm Controller
 * @param $scope
 * @param PsalmsTree
 * @param Psalms
 * @param Salmos
 * @constructor
 */
function PsalmController($scope,PsalmsTree,Psalms, Salmos) {
    $scope.PsalmTree = PsalmsTree;
    $scope.category= {};
    $scope.chapter= {};
    $scope.psalm= -1;
    var Book = Psalms;

    $scope.toOpen = function (category) {
        if (category==$scope.category) {
            $scope.category= {};
        }
        else{
            $scope.category = category;
        }

    };

    $scope.isOpen = function (category) {
        return category.title==$scope.category.title;
    };

    $scope.showCategory=function () {

        return $scope.psalm==-1;
    };

    $scope.showPsalm=function () {
        return  $scope.psalm!=-1;
    };

    $scope.Reset=function () {
        $scope.psalm=-1;
        $scope.chapter={};
    };
    $scope.openPsalm = function (psalm) {
        if (psalm == $scope.psalm) {
            $scope.psalm=-1;
        }
        else{
            $scope.psalm = psalm;
            $scope.chapter = Book.chapters[$scope.psalm-1];
            $scope.chapter.verses = $scope.chapter.verses.map(function (el) {
                return Object.keys(el)[0] +"-" +  el[Object.keys(el)[0]];
            });

            $scope.versos = Salmos.chapters.filter(function (el) {
                return el.bib_capitulo==psalm;
            });
        }
    }
}
/**
 * SideMenu
 * @param $scope
 * @constructor
 */
function SideMenuController($scope){
    $scope.menu = [
        {
            icon:"home",
            title:"connors"
        },{
            icon:"light-up",
            title:"Photon"
        },{
            icon:"download",
            title:"Downloads"
        },{
            icon:"folder",
            title:"Documents"
        },{
            icon:"window",
            title:"Applications"
        },{
            icon:"signal",
            title:"AirDrop"
        },{
            icon:"monitor",
            title:"Desktop"
        }
    ];
    $scope.active ='home';
}