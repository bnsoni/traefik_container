/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

  module.exports = window["wp"]["element"];

  /***/ })
  
  /******/ 	});
  /************************************************************************/
  /******/ 	// The module cache
  /******/ 	var __webpack_module_cache__ = {};
  /******/ 	
  /******/ 	// The require function
  /******/ 	function __webpack_require__(moduleId) {
  /******/ 		// Check if module is in cache
  /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
  /******/ 		if (cachedModule !== undefined) {
  /******/ 			return cachedModule.exports;
  /******/ 		}
  /******/ 		// Create a new module (and put it into the cache)
  /******/ 		var module = __webpack_module_cache__[moduleId] = {
  /******/ 			// no module.id needed
  /******/ 			// no module.loaded needed
  /******/ 			exports: {}
  /******/ 		};
  /******/ 	
  /******/ 		// Execute the module function
  /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  /******/ 	
  /******/ 		// Return the exports of the module
  /******/ 		return module.exports;
  /******/ 	}
  /******/ 	
  /************************************************************************/
  /******/ 	/* webpack/runtime/compat get default export */
  /******/ 	!function() {
  /******/ 		// getDefaultExport function for compatibility with non-harmony modules
  /******/ 		__webpack_require__.n = function(module) {
  /******/ 			var getter = module && module.__esModule ?
  /******/ 				function() { return module['default']; } :
  /******/ 				function() { return module; };
  /******/ 			__webpack_require__.d(getter, { a: getter });
  /******/ 			return getter;
  /******/ 		};
  /******/ 	}();
  /******/ 	
  /******/ 	/* webpack/runtime/define property getters */
  /******/ 	!function() {
  /******/ 		// define getter functions for harmony exports
  /******/ 		__webpack_require__.d = function(exports, definition) {
  /******/ 			for(var key in definition) {
  /******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
  /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
  /******/ 				}
  /******/ 			}
  /******/ 		};
  /******/ 	}();
  /******/ 	
  /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
  /******/ 	!function() {
  /******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
  /******/ 	}();
  /******/ 	
  /******/ 	/* webpack/runtime/make namespace object */
  /******/ 	!function() {
  /******/ 		// define __esModule on exports
  /******/ 		__webpack_require__.r = function(exports) {
  /******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
  /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
  /******/ 			}
  /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
  /******/ 		};
  /******/ 	}();
  /******/ 	
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  !function() {
  /*!**********************!*\
    !*** ./src/index.js ***!
    \**********************/
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
  /* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
  
  const {
    registerBlockType
  } = wp.blocks;
  const {
    RichText,
    InspectorControls,
    ColorPalette
  } = wp.editor;
  const {
    PanelBody
  } = wp.components;
  registerBlockType('bnsgutengerg/testblock', {
    title: 'My Custom Block',
    description: 'A Blank new block',
    icon: 'smiley',
    category: 'text',
    attributes: {
      userinput: {
        type: "string"
      },
      wpurl: {
        type: "string"
      },
      clientid: {
        type: "string"
      },
      clientsecret: {
        type: "string"
      },
      apidata: {
        type: "string"
      }
    },
    edit: function (props) {
      //props.setAttributes({apidata: "loading"});
      async function componentGetApi() {
        const url = "http://localhost:9001/wp-json/ibl/api/interview";
        const response = await fetch(url);
        const data = await response.json();
        const greetingData = await data[0];
        console.log(greetingData['greeting']);
        props.setAttributes({
          apidata: greetingData['greeting']
        });
      } //componentGetApi();
  
  
      function updateUserinput() {
        props.setAttributes({
          userinput: event.target.value
        });
      }
  
      function updatewpurl() {
        props.setAttributes({
          wpurl: event.target.value
        });
      }
  
      function updateclientid() {
        props.setAttributes({
          clientid: event.target.value
        });
      }
  
      function updateclientsecret() {
        props.setAttributes({
          clientsecret: event.target.value
        });
      }
  
      async function sendGreeting() {
        const data = {
          "greeting": props.attributes.userinput
        };
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        };
        const posturl = props.attributes.wpurl + props.attributes.userinput.replace(/\s/g, '+'); //replace spaces with +
  
        const response = await fetch(posturl, options);
        console.log(response);
      }
  
      return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Provide a URL:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
        type: "text",
        placeholder: "Wordpress URL",
        value: props.attributes.wpurl,
        onChange: updatewpurl
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Provide a Client ID:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
        type: "text",
        placeholder: "Client ID",
        value: props.attributes.clientid,
        onChange: updateclientid
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Provide a Client Secret:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
        type: "text",
        placeholder: "Client Secret",
        value: props.attributes.clientsecret,
        onChange: updateclientsecret
      }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
        type: "text",
        placeholder: "UserInput",
        value: props.attributes.userinput,
        onChange: updateUserinput
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
        type: "text",
        placeholder: "Post onChange",
        value: props.attributes.apidata,
        onChange: sendGreeting
      }))];
    },
  
    save(props) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "This is the user input: ", props.attributes.userinput, ", ", props.attributes.wpurl, ", ", props.attributes.clientid, ", ", props.attributes.clientsecret);
    }
  
  });
  }();
  /******/ })()
  ;
  //# sourceMappingURL=index.js.map