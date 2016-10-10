"use strict";!function(){angular.module("App",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngMaterial","ngMessages","ui.router","service","directives"]).config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/Create"),a.state("Create",{url:"/Create",templateUrl:"views/create.html",controller:"CreateCtrl"}).state("Inputs",{url:"/Inputs",templateUrl:"views/inputs.html",controller:"InputsCtrl"}).state("Modify",{url:"/Modify",templateUrl:"views/modify.html",controller:"ModifyCtrl"})}])}(),function(){function a(){return{restrict:"A",require:"ngModel",link:function(a,b,c,d){function e(a){return a}var f=c.customValidators;"true"==f&&(d.$validators.required=function(a){return a?!0:!1}),d.$parsers.push(e)}}}angular.module("directives",[]).directive("customValidators",a)}(),function(){function a(a,b){a.lol="lol",a.inputConfig={},toastr.options.closeMethod="fadeOut",toastr.options.closeDuration=300,toastr.options.closeEasing="swing",a.addInput=function(a){b.addVal({pattern:a.inputPattern,patternMessage:a.inputPatternMessage,name:a.inputName,type:a.inputType,classs:a.classs,required:a.requiredValue,show:a.showValue,disabled:a.disabledValue}),toastr.success("Input added to list")}}angular.module("App").controller("CreateCtrl",a),a.$inject=["$scope","inputConfigsFactory"]}(),function(){function a(a,b){a.inputFields=b.getVal(),a.$watch("inputFields",function(b,c){for(var d=0;d<b.length;d++){if(1==b[d].required&&0==b[d].show){toastr.warning("required fields need to be displayed"),a.inputFields=c;break}a.inputFields=b}},!0),a.applyChanges=function(a){b.updateVal(a)}}angular.module("App").controller("ModifyCtrl",a),a.$inject=["$scope","inputConfigsFactory"]}(),function(){function a(a,b){a.value=[],a.fields=b.getConvertedPatternVal()}angular.module("App").controller("InputsCtrl",a),a.$inject=["$scope","inputConfigsFactory"]}(),function(){function a(a,b){function c(){var c=b.defer();return a.get("http://mocker.egen.io/users").then(function(a){c.resolve(a.data)})["catch"](function(a){c.reject(a.data)}),c.promise}var d=this;d.getUsers=c}angular.module("service",[]).service("UserService",a),a.$inject=["$http","$q"]}(),function(){function a(){function a(a){var b=c.exec(a);return b&&new RegExp(b[1],b[2])}var b=[{pattern:"/^[a-z]+$/i",patternMessage:"Only Letters",name:"first",placeholder:"firstname",classs:"col-md-12",type:"text",required:!0,show:!0,disabled:!1},{name:"second",type:"number",classs:"col-xs-6",required:!0,show:!0,disabled:!1},{name:"third",type:"number",classs:"col-xs-6",required:!1,show:!0,disabled:!1},{name:"fourth",type:"number",classs:"col-xs-6",required:!1,show:!0,disabled:!0}],c=/^\/(.+)\/([a-z0-9]*)$/;return b.getConvertedPatternVal=function(){for(var c=0;c<b.length;c++)b[c].pattern&&(b[c].pattern=a(b[c].pattern));return b},b.getVal=function(){return b},b.addVal=function(a){b.push(a)},b.updateVal=function(a){b=a},b}angular.module("service").service("inputConfigsFactory",a)}(),angular.module("App").run(["$templateCache",function(a){a.put("views/create.html",'<div class="col-md-12"> <h1>Create input field</h1> <hr> </div> <div class="col-md-12"> <div class="col-md-6"> <div layout="column" ng-cloak="" class="inputdemoErrors"> <md-content layout-padding=""> <form name="projectForm"> <md-input-container class="md-block"> <label>Name</label> <input required name="inputName" ng-model="inputConfig.inputName"> <div ng-messages="projectForm.inputName.$error"> <div ng-message="required">This is required.</div> </div> </md-input-container> <md-input-container class="md-block"> <label>Pattern (RegEx)</label> <input name="inputPattern" ng-model="inputConfig.inputPattern"> </md-input-container> <md-input-container class="md-block"> <label>Pattern Message</label> <input name="inputPattern" ng-model="inputConfig.inputPatternMessage"> </md-input-container> <md-input-container class="md-block"> <label>Bootstrap class</label> <md-select name="type" ng-model="inputConfig.classs" required> <md-option value="col-md-1">col-md-1</md-option> <md-option value="col-md-2">col-md-2</md-option> <md-option value="col-md-3">col-md-3</md-option> <md-option value="col-md-4">col-md-4</md-option> <md-option value="col-md-5">col-md-5</md-option> <md-option value="col-md-6">col-md-6</md-option> <md-option value="col-md-7">col-md-7</md-option> <md-option value="col-md-8">col-md-8</md-option> <md-option value="col-md-9">col-md-9</md-option> <md-option value="col-md-10">col-md-10</md-option> <md-option value="col-md-11">col-md-11</md-option> <md-option value="col-md-12">col-md-12</md-option> </md-select> </md-input-container> <div layout-wrap="" layout-gt-sm="row"> <div flex-gt-sm="50"> <md-checkbox ng-model="inputConfig.requiredValue" aria-label="Checkbox 1"> Required </md-checkbox> <span style="font-size: 0.5em;font-family: cursive">* don\'t change this after selecting input type</span> </div> </div> <div layout-wrap="" layout-gt-sm="row"> <div flex-gt-sm="50"> <md-checkbox ng-model="inputConfig.showValue" ng-init="inputConfig.showValue = true" aria-label="Checkbox 2"> Show </md-checkbox> </div> </div> <div layout-wrap="" layout-gt-sm="row"> <div flex-gt-sm="50"> <md-checkbox ng-model="inputConfig.disabledValue" aria-label="Checkbox 3"> Disabled </md-checkbox> </div> </div> <md-input-container class="md-block"> <label>Input Type</label> <md-select name="type" ng-model="inputConfig.inputType" required> <md-option value="text">Text</md-option> <md-option value="number">Number</md-option> </md-select> </md-input-container> <div> <md-button class="md-raised" ng-click="addInput(inputConfig)" ng-disabled="projectForm.$invalid">Add this input</md-button> </div> </form> </md-content> </div> </div> <div class="col-md-6"> <!--preview side--> <h2>Preview</h2> <div ng-switch="inputConfig.inputType" ng-show="inputConfig.showValue"> <div ng-switch-when="text" class="{{inputConfig.classs}}"> <form name="form"> <div layout="row"> <md-input-container flex="100"> <label>{{inputConfig.inputName}}</label> <input type="{{inputConfig.inputType}}" ng-model="test" ng-required="{{ inputConfig.requiredValue }}" ng-disabled="inputConfig.disabledValue"> <div ng-messages="form.$error"> <div ng-message="required">This is required.</div> </div> </md-input-container> </div> </form> </div> <div ng-switch-when="number" class="{{inputConfig.classs}}"> <form name="form" ng-show="inputConfig.showValue"> <div layout="row"> <md-input-container flex="100"> <label>{{inputConfig.inputName}}</label> <input type="{{inputConfig.inputType}}" ng-model="test" ng-required="{{ inputConfig.requiredValue }}" ng-disabled="inputConfig.disabledValue"> <div ng-messages="form.$error"> <div ng-message="required">This is required.</div> </div> </md-input-container> </div> </form> </div> </div> </div> </div>'),a.put("views/inputs.html",'<div class="col-md-12"> <h1>Designed Input fields</h1> <hr> </div> <div class="col-md-12"> <div ng-repeat="field in fields"> <div ng-switch="field.type" ng-show="field.show"> <div ng-switch-when="text" class="{{field.classs}}"> <form name="form"> <div layout="row"> <md-input-container flex="100"> <label>{{field.name}}</label> <input type="{{field.type}}" ng-model="value[$index]" ng-required="field.required" ng-pattern="field.pattern" ng-disabled="field.disabled"> <div ng-messages="form.$error"> <div ng-message="required">This is required.</div> <div ng-message="pattern">{{field.patternMessage}}</div> </div> </md-input-container> </div> </form> </div> <div ng-switch-when="number" class="{{field.classs}}"> <form name="form"> <div layout="row"> <md-input-container flex="100"> <label>{{field.name}}</label> <input type="{{field.type}}" ng-model="value[$index]" ng-required="field.required" ng-disabled="field.disabled"> <div ng-messages="form.$error"> <div ng-message="required">This is required.</div> </div> </md-input-container> </div> </form> </div> </div> </div> </div>'),a.put("views/modify.html",'<div class="col-md-12"> <h1>Modify Input fields</h1> <hr> </div> <div class="col-md-12"> <table class="table"> <thead> <tr> <th>Name</th> <th>Display</th> <th>Required</th> <th>Disable</th> </tr> </thead> <tbody> <tr ng-repeat="field in inputFields"> <th scope="row">{{field.name}}</th> <td> <md-checkbox ng-model="field.show" aria-label="Checkbox 1"></md-checkbox> </td> <td> <md-checkbox ng-model="field.required" aria-label="Checkbox 1"></md-checkbox> </td> <td> <md-checkbox ng-model="field.disabled" aria-label="Checkbox 1"></md-checkbox> </td> </tr> </tbody> </table> <div> <md-button class="md-raised" ng-click="applyChanges(inputFields)">Apply Changes</md-button> </div> </div>')}]);