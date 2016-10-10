/**
 * Created by Sriram on 10/7/2016.
 */
(function() {
  angular.module('service')
    .service('DnDinputConfigsFactory', DnDinputConfigsFactory);


  function DnDinputConfigsFactory() {
    
    //mocked input stats
    var dndInputs = [
      {
        label: "Top",
        allowedTypes: [
          "top"
        ],
        max: 4,
        inputs: [
          {
            name: "First-Top",
            type: "top",
            pattern: "/^[a-z]+$/i",
            patternMessage: "Only Letters",
            placeholder: "firstname",
            classs:"col-md-12",
            inputType: "text",
            required: true,
            show: true,
            disabled: false
          },
          {
            name: "Second-Top",
            type: "top",
            classs:"col-md-12",
            inputType: "text",
            required: true,
            show: true,
            disabled: false
          },
          {
            name: "Third-Top",
            type: "top",
            classs:"col-md-12",
            inputType: "number",
            required: true,
            show: true,
            disabled: false
          },
          {
            name: "Fourth-Top",
            type: "top",
            classs:"col-md-12",
            inputType: "number",
            required: true,
            show: true,
            disabled: false
          }
        ]
      },
      {
        label: "Bottom",
        allowedTypes: [
          "bottom"
        ],
        max: 4,
        inputs: [
          {
            name: "First-Bottom",
            type: "bottom",
            classs:"col-md-12",
            inputType: "text",
            required: true,
            show: true,
            disabled: false
          },
          {
            name: "Second-Bottom",
            type: "bottom",
            classs:"col-md-12",
            inputType: "text",
            required: true,
            show: true,
            disabled: false
          },
          {
            name: "Third-Bottom",
            type: "bottom",
            classs:"col-md-12",
            inputType: "text",
            required: true,
            show: true,
            disabled: false
          }
        ]
      },
      {
        label: "Add-on",
        allowedTypes: [
          "top",
          "bottom"
        ],
        max: 6,
        inputs: [
          {
            name: "Addon-Top",
            type: "top",
            classs:"col-md-12",
            inputType: "text",
            required: true,
            show: true,
            disabled: false
          },
          {
            name: "Addon-Bottom",
            type: "bottom",
            classs:"col-md-12",
            inputType: "text",
            required: true,
            show: true,
            disabled: false
          },
          {
            name: "Addon-Unknown",
            type: "unknown",
            classs:"col-md-12",
            inputType: "text",
            required: true,
            show: true,
            disabled: false
          },
          {
            name: "Addon-Top",
            type: "top",
            classs:"col-md-12",
            inputType: "text",
            required: true,
            show: true,
            disabled: false
          },
          {
            name: "Addon-Bottom",
            type: "bottom",
            classs:"col-md-12",
            inputType: "text",
            required: true,
            show: true,
            disabled: false
          }
        ]
      }
    ];

    //work around to convert string regEx to normal regEx
    var REGEXP_STRING = /^\/(.+)\/([a-z0-9]*)$/;
    function parseRegExp(stringifiedRegExp) {
      var match = REGEXP_STRING.exec(stringifiedRegExp);
      return match && new RegExp(match[1], match[2]);
    }


    //to get converted RegEx inputs
    dndInputs.getConvertedPatternVal = function() {
      for(var j=0; j<dndInputs.length; j++){
        for(var i=0; i<dndInputs[j].inputs.length; i++){
          //convert only when pattern is available
          if(dndInputs[j].inputs[i].pattern){
            dndInputs[j].inputs[i].pattern = parseRegExp(dndInputs[j].inputs[i].pattern);
          }
        }
      }

      return dndInputs;
    }

    //to get inputs without any conversion of RegEx
    dndInputs.getVal = function() {
      return dndInputs;
    }

    //add inputs, if any
    dndInputs.addVal = function(val) {
      dndInputs.push(val);
    }

    //update the input stats
    dndInputs.updateVal = function(val) {
      dndInputs = val;
    }

    return dndInputs;
  }

})();
