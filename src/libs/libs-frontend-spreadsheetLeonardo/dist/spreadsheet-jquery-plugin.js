/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//import { NumberFormatter } from "../../../number-formatter/src/NumberFormatter/NumberFormatter";
//import { INumberFormatterOptions } from "../../../number-formatter/src/NumberFormatter/INumberFormatterOptions";
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
        var numberFormatter = new Cosmatt.NumberFormatter(settings.numberFormatterOptions || {});
        var eventHandlers = { beforeValueRender: numberFormatter.format.bind(numberFormatter) };
        window.setTimeout(function () {
            Leonardo.scripts.add($leonardoPlugin[0], settings.config, settings.correctData, eventHandlers);
            $leonardoPlugin.on('resize', function () {
                var $btnContainer = self.find(".btn-container");
                if ($btnContainer.length) {
                    $btnContainer.css({
                        'width': $leonardoPlugin.find('.DLSLeonardo #grid').outerWidth()
                    });
                }
            });
            $leonardoPlugin[0].addEventListener("keyup", function (e) {
                assessmentNotifier();
            }, true);
            $leonardoPlugin[0].addEventListener("mouseup", function (e) {
                assessmentNotifier();
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
        };
        var updateSheet = function (params) {
            if (params && params.configData) {
                Leonardo.scripts.updateData($leonardoPlugin[0], JSON.parse(params.configData.value));
            }
        };
        var markAnswers = function (params) {
            Leonardo.scripts.checkAnswer($leonardoPlugin[0], settings.correctData);
        };
        var resetAnswers = function (params) {
            Leonardo.scripts.reset($leonardoPlugin[0]);
        };
        var clearGrades = function (params) {
            Leonardo.scripts.tryAgain($leonardoPlugin[0]);
        };
        return {
            ref: this,
            updateSheet: updateSheet,
            markAnswers: markAnswers,
            resetAnswers: resetAnswers,
            clearGrades: clearGrades
        };
    };
}(jQuery));


/***/ })
/******/ ]);