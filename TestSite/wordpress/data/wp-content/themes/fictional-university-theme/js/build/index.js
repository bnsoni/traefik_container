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
    },
    accesstoken: {
      type: "string"
    }
  },
  edit: function (props) {
    //props.setAttributes({apidata: "loading"});
    async function componentGetApi() {
      const url = props.attributes.wpurl;
      const accesstoken = props.attributes.accesstoken;
      const userinput = props.attributes.userinput;
      fetch(url + userinput.replace(/\s/g, '+')).then(response => response.json()).then(response => {
        console.log(response); // Do something with response.
      });
    }

    function showAlert() {
      alert("A test alert");
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

    function updateaccesstoken() {
      props.setAttributes({
        accesstoken: event.target.value
      });
    }

    async function sendGreeting() {
      const data = {
        "greeting": props.attributes.userinput
      };
      const accesstoken = props.attributes.accesstoken;
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accesstoken
        },
        body: JSON.stringify(data)
      };
      const posturl = props.attributes.wpurl + props.attributes.userinput.replace(/\s/g, '+'); //replace spaces with +

      const response = await fetch(posturl, options);
      console.log(response);
    }

    async function getGreeting() {
      const accesstoken = props.attributes.accesstoken;
      const options = {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + accesstoken
        }
      };
      const geturl = props.attributes.wpurl + props.attributes.userinput.replace(/\s/g, '+'); //replace spaces with +

      const response = await fetch(geturl, options);
      console.log(response.json());
    }

    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Provide a URL:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      placeholder: "Wordpress URL:",
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
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Provide a Token:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      placeholder: "Access Token",
      value: props.attributes.accesstoken,
      onChange: updateaccesstoken
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      placeholder: "UserInput",
      value: props.attributes.userinput,
      onChange: updateUserinput
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      type: "button",
      onClick: sendGreeting
    }, "Post a Greeting"))];
  },
  save: function (props) {
    return wp.element.createElement("div", {
      className: "gblock"
    }, wp.element.createElement("button", {
      style: {
        padding: '4px',
        border: '2px solid black'
      },
      class: 'clicker'
    }, "GET Greeting"), wp.element.createElement("br"), wp.element.createElement("textarea", {
      style: {
        height: 300,
        width: 300
      },
      class: 'apipanel'
    }, ""));
  }
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map