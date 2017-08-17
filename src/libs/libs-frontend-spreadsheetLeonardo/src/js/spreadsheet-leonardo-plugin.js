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

      if (settings.correctData) {
        self.append('<div class="btn-container mb-5"></div>');
        var $btnContainer = self.find(".btn-container");
        $btnContainer.append('<div class="float-left"><button type="button" id="reset-btn" class="btn mt-2 btn-primary btn-inverse">Reset</button></div>');
        var $resetBtn = $btnContainer.find("#reset-btn");
        $resetBtn.click(function () {
          Leonardo.scripts.reset($leonardoPlugin[0]);
        });
        $btnContainer.css({
          'width': $leonardoPlugin.find('.DLSLeonardo #grid').outerWidth(),
          'margin': "0 auto"
        });
        $btnContainer.append('<div class="text-right"><button type="button" id="cosmatt-check-answer" class="btn mt-2 mr-3 btn-primary btn-inverse">Check My Work</button></div>');

        var $checkAnsBtn = $btnContainer.find("#cosmatt-check-answer");
        $checkAnsBtn.click(function () {
          Leonardo.scripts.checkAnswer($leonardoPlugin[0], settings.correctData);
        });
      }

      $leonardoPlugin.on('resize', function () {
        var $btnContainer = self.find(".btn-container");
        if ($btnContainer.length) {
          $btnContainer.css({
            'width': $leonardoPlugin.find('.DLSLeonardo #grid').outerWidth()
          });
        }
      })
    }, 0);

    var assessmentNotifier = function () {
      if (settings.assessmentMode && settings.assessmentCallback) {
        settings.assessmentCallback({
          "configData": {
            "value": JSON.stringify(Leonardo.scripts.getData($leonardoPlugin[0])),
            "unit": ""
          }
        });
      }
    }


    var updateSheet = function (params) {
      Leonardo.scripts.updateData($leonardoPlugin[0], JSON.parse(params.configData.value));
    }

    var markAnswers = function (params) {
      Leonardo.scripts.checkAnswer($leonardoPlugin[0], settings.correctData);
    }

    setInterval(function(){
      assessmentNotifier();
    }, 3000);

    return {
      ref: this,
      updateSheet: updateSheet,
      markAnswers: markAnswers
    };
  };
}(jQuery));