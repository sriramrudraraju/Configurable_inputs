/**
 * Created by Sriram on 10/4/2016.
 */
(function() {
  angular.module('service')
    .service('inputConfigsFactory', inputConfigsFactory);


  function inputConfigsFactory() {
    var self = [
      {
        pattern: "/^[a-z]+$/i",
        patternMessage: "Only Letters",
        name: "first",
        placeholder: "firstname",
        classs:"col-md-12",
        type: "text",
        required: true,
        show: true,
        disabled: false
      },
      {
        name: "second",
        type: "number",
        classs:"col-xs-6",
        required: true,
        show: true,
        disabled: false
      },
      {
        name: "third",
        type: "number",
        classs:"col-xs-6",
        required: false,
        show: true,
        disabled: false
      },
      {
        name: "fourth",
        type: "number",
        classs:"col-xs-6",
        required: false,
        show: true,
        disabled: true
      }
    ];

    //work around to convert string regEx to normal regEx
    var REGEXP_STRING = /^\/(.+)\/([a-z0-9]*)$/;
    function parseRegExp(stringifiedRegExp) {
      var match = REGEXP_STRING.exec(stringifiedRegExp);
      return match && new RegExp(match[1], match[2]);
    }



  self.getConvertedPatternVal = function() {
      for(var i=0; i<self.length; i++){
        //convert only when pattern is available
        if(self[i].pattern){
          self[i].pattern = parseRegExp(self[i].pattern);
        }
      }
      return self;
    }

    self.getVal = function() {
      return self;
    }

    self.addVal = function(val) {
      self.push(val);
    }

    self.updateVal = function(val) {
      self = val;
    }

    return self;
  }

})();
