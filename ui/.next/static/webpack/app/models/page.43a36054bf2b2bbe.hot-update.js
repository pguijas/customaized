"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/models/page",{

/***/ "(app-pages-browser)/./components/RoundedBox.tsx":
/*!***********************************!*\
  !*** ./components/RoundedBox.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _RoundedBox_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RoundedBox.module.css */ \"(app-pages-browser)/./components/RoundedBox.module.css\");\n/* harmony import */ var _RoundedBox_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_RoundedBox_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_loading_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/loading.gif */ \"(app-pages-browser)/./public/loading.gif\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst RoundedBox = (param)=>{\n    let { status, name, imageUrl, children, onClick } = param;\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleClick = ()=>{\n        console.log(\"handling click\");\n        setIsOpen(true);\n        if (onClick) {\n            onClick();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_RoundedBox_module_css__WEBPACK_IMPORTED_MODULE_3___default().boxContainer),\n        onClick: handleClick,\n        children: [\n            imageUrl ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: imageUrl,\n                className: (_RoundedBox_module_css__WEBPACK_IMPORTED_MODULE_3___default().image),\n                alt: \"Image\"\n            }, void 0, false, {\n                fileName: \"/home/anxomm/Desktop/HackUDC2024/customaized/ui/components/RoundedBox.tsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, undefined) : children ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_RoundedBox_module_css__WEBPACK_IMPORTED_MODULE_3___default().content),\n                children: children\n            }, void 0, false, {\n                fileName: \"/home/anxomm/Desktop/HackUDC2024/customaized/ui/components/RoundedBox.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_RoundedBox_module_css__WEBPACK_IMPORTED_MODULE_3___default().content),\n                children: [\n                    status === \"training\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: _public_loading_gif__WEBPACK_IMPORTED_MODULE_2__[\"default\"].src,\n                        alt: \"Loading\"\n                    }, void 0, false, {\n                        fileName: \"/home/anxomm/Desktop/HackUDC2024/customaized/ui/components/RoundedBox.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_RoundedBox_module_css__WEBPACK_IMPORTED_MODULE_3___default().status),\n                        children: status\n                    }, void 0, false, {\n                        fileName: \"/home/anxomm/Desktop/HackUDC2024/customaized/ui/components/RoundedBox.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_RoundedBox_module_css__WEBPACK_IMPORTED_MODULE_3___default().name),\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"/home/anxomm/Desktop/HackUDC2024/customaized/ui/components/RoundedBox.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/anxomm/Desktop/HackUDC2024/customaized/ui/components/RoundedBox.tsx\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, undefined),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_RoundedBox_module_css__WEBPACK_IMPORTED_MODULE_3___default().popup),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"This is a popup!\"\n                    }, void 0, false, {\n                        fileName: \"/home/anxomm/Desktop/HackUDC2024/customaized/ui/components/RoundedBox.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setIsOpen(false),\n                        children: \"Close\"\n                    }, void 0, false, {\n                        fileName: \"/home/anxomm/Desktop/HackUDC2024/customaized/ui/components/RoundedBox.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/anxomm/Desktop/HackUDC2024/customaized/ui/components/RoundedBox.tsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/anxomm/Desktop/HackUDC2024/customaized/ui/components/RoundedBox.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RoundedBox, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n_c = RoundedBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RoundedBox);\nvar _c;\n$RefreshReg$(_c, \"RoundedBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUm91bmRlZEJveC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRW1EO0FBQ047QUFDSTtBQVVqRCxNQUFNSSxhQUF3QztRQUFDLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsT0FBTyxFQUFFOztJQUUxRixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQUM7SUFFckMsTUFBTVcsY0FBYztRQUNsQkMsUUFBUUMsR0FBRyxDQUFDO1FBQ1pILFVBQVU7UUFDVixJQUFJRixTQUFTO1lBQ1hBO1FBQ0Y7SUFDRjtJQUVBLHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFXZCw0RUFBbUI7UUFBRU8sU0FBU0c7O1lBQzNDTCx5QkFDQyw4REFBQ1c7Z0JBQUlDLEtBQUtaO2dCQUFVUyxXQUFXZCxxRUFBWTtnQkFBRW1CLEtBQUk7Ozs7OzRCQUMvQ2IseUJBRUosOERBQUNPO2dCQUFJQyxXQUFXZCx1RUFBYzswQkFBR007Ozs7OzBDQUkvQiw4REFBQ087Z0JBQUlDLFdBQVdkLHVFQUFjOztvQkFDM0JHLFdBQVcsMkJBQ1YsOERBQUNhO3dCQUFJQyxLQUFLaEIsMkRBQVlBLENBQUNnQixHQUFHO3dCQUFFRSxLQUFJOzs7OztrREFFaEMsOERBQUNOO3dCQUFJQyxXQUFXZCxzRUFBYTtrQ0FBR0c7Ozs7OztrQ0FFbEMsOERBQUNVO3dCQUFJQyxXQUFXZCxvRUFBVztrQ0FBR0k7Ozs7Ozs7Ozs7OztZQUtqQ0ksd0JBQ0MsOERBQUNLO2dCQUFJQyxXQUFXZCxxRUFBWTs7a0NBRTFCLDhEQUFDc0I7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0M7d0JBQU9oQixTQUFTLElBQU1FLFVBQVU7a0NBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCbkQ7R0EzRE1QO0tBQUFBO0FBNkROLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUm91bmRlZEJveC50c3g/MThkZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1JvdW5kZWRCb3gubW9kdWxlLmNzcyc7XG5pbXBvcnQgbG9hZGluZ0ltYWdlIGZyb20gJy4uL3B1YmxpYy9sb2FkaW5nLmdpZic7XG5cbmludGVyZmFjZSBSb3VuZGVkQm94UHJvcHMge1xuICBzdGF0dXM6IFJlYWN0Tm9kZTtcbiAgbmFtZTogUmVhY3ROb2RlO1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgaW1hZ2VVcmw/OiBzdHJpbmc7XG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkOyBcbn1cblxuY29uc3QgUm91bmRlZEJveDogUmVhY3QuRkM8Um91bmRlZEJveFByb3BzPiA9ICh7IHN0YXR1cywgbmFtZSwgaW1hZ2VVcmwsIGNoaWxkcmVuLCBvbkNsaWNrIH0pID0+IHtcbiAgXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJoYW5kbGluZyBjbGlja1wiKVxuICAgIHNldElzT3Blbih0cnVlKTtcbiAgICBpZiAob25DbGljaykge1xuICAgICAgb25DbGljaygpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm94Q29udGFpbmVyfSBvbkNsaWNrPXtoYW5kbGVDbGlja30+XG4gICAgICB7aW1hZ2VVcmwgPyAoXG4gICAgICAgIDxpbWcgc3JjPXtpbWFnZVVybH0gY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9IGFsdD1cIkltYWdlXCIgLz5cbiAgICAgICkgOiBjaGlsZHJlbiA/IChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT57Y2hpbGRyZW59PC9kaXY+XG4gICAgICApIDpcblxuICAgICAgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxuICAgICAgICAgIHtzdGF0dXMgPT09ICd0cmFpbmluZycgPyAoXG4gICAgICAgICAgICA8aW1nIHNyYz17bG9hZGluZ0ltYWdlLnNyY30gYWx0PVwiTG9hZGluZ1wiIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHVzfT57c3RhdHVzfTwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT57bmFtZX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7LyogUG9wdXAgKi99XG4gICAgICB7aXNPcGVuICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3B1cH0+XG4gICAgICAgICAgey8qIFBvcHVwIGNvbnRlbnQgKi99XG4gICAgICAgICAgPHA+VGhpcyBpcyBhIHBvcHVwITwvcD5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbihmYWxzZSl9PkNsb3NlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgICAvLyA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveENvbnRhaW5lcn0+XG4gICAgLy8gICB7aW1hZ2VVcmwgPyAoXG4gICAgLy8gICAgIDxpbWcgc3JjPXtpbWFnZVVybH0gY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9IGFsdD1cIkltYWdlXCIgLz5cbiAgICAvLyAgICkgOiAoXG4gICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XG4gICAgLy8gICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0dXN9PntzdGF0dXN9PC9kaXY+XG4gICAgLy8gICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT57bmFtZX08L2Rpdj5cbiAgICAvLyAgICAgPC9kaXY+XG4gICAgLy8gICApfVxuICAgIC8vIDwvZGl2PlxuICAgIC8vIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm94Q29udGFpbmVyfT5cbiAgICAvLyAgIHtpbWFnZVVybCA/IChcbiAgICAvLyAgICAgPGltZyBzcmM9e2ltYWdlVXJsfSBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0gYWx0PVwiSW1hZ2VcIiAvPlxuICAgIC8vICAgKSA6IChcbiAgICAvLyAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT57Y2hpbGRyZW59PC9kaXY+XG4gICAgLy8gICApfVxuICAgIC8vIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUm91bmRlZEJveDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwibG9hZGluZ0ltYWdlIiwiUm91bmRlZEJveCIsInN0YXR1cyIsIm5hbWUiLCJpbWFnZVVybCIsImNoaWxkcmVuIiwib25DbGljayIsImlzT3BlbiIsInNldElzT3BlbiIsImhhbmRsZUNsaWNrIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImJveENvbnRhaW5lciIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwiY29udGVudCIsInBvcHVwIiwicCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/RoundedBox.tsx\n"));

/***/ })

});