(function ($) {
  $.fn.spreadsheetLeonardo = function (options) {
    var settings = $.extend({}, options);
    var self = this;
    self.append('<div class="leonardo-plugin"></div>');
    var $leonardoPlugin = this.find('.leonardo-plugin');
    if (settings.style != undefined) {
      //$leonardoPlugin.css("width",'inherit' );
      $leonardoPlugin.css("height", settings.style.height);
      $leonardoPlugin.css("text-align", 'center');
    }


    setTimeout(function () {
      Leonardo.scripts.add($leonardoPlugin[0], settings.config, settings.correctData);
      $leonardoPlugin.on('resize', function () {
        var $btnContainer = self.find(".btn-container");
        if ($btnContainer.length) {
          $btnContainer.css({
            'width': $leonardoPlugin.find('.DLSLeonardo #grid').outerWidth()
          });
        }
      });
      $leonardoPlugin[0].addEventListener("keyup", function(e) {
        assessmentNotifier();
        // if(e.target && $(e.target).find(".readOnly").length === 0) {
        //   assessmentNotifier();
        // }
      }, true);
    }, 0);

    var assessmentNotifier = function () {
      if (settings.assessmentCallback) {
        settings.assessmentCallback({
          "configData": {
            "value": JSON.stringify(Leonardo.scripts.getData($leonardoPlugin[0])),
            "unit": ""
          }
        });
      }
    }


    var updateSheet = function (params) {
      if(params && params.configData) {
        Leonardo.scripts.updateData($leonardoPlugin[0], JSON.parse(params.configData.value));
      }
    }

    var markAnswers = function (params) {
      Leonardo.scripts.checkAnswer($leonardoPlugin[0], settings.correctData);
    }

    var resetAnswers = function (params) {
      Leonardo.scripts.reset($leonardoPlugin[0]);
    }

    var clearGrades = function (params) {
      Leonardo.scripts.tryAgain($leonardoPlugin[0]);
    }
    return {
      ref: this,
      updateSheet: updateSheet,
      markAnswers: markAnswers,
      resetAnswers: resetAnswers,
      clearGrades: clearGrades
    };
  };
}(jQuery));