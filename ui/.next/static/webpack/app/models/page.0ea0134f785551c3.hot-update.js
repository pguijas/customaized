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

/***/ "(app-pages-browser)/./components/PopupWindow.tsx":
/*!************************************!*\
  !*** ./components/PopupWindow.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PopupWindow_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PopupWindow.module.css */ \"(app-pages-browser)/./components/PopupWindow.module.css\");\n/* harmony import */ var _PopupWindow_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_PopupWindow_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n // Assuming you have a CSS module for styling\nconst PopupWindow = (param)=>{\n    let { onClose, onSubmit } = param;\n    _s();\n    const [input1Value, setInput1Value] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [imageFiles, setImageFiles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        // onSubmit(input1Value, input2Value);\n        console.log(\"Input 1:\", input1Value);\n        console.log(\"Selected Images:\", imageFiles);\n    };\n    const handleImageChange = (e)=>{\n        console.log(\"setting images\", e.target.files.length);\n        const files = Array.from(e.target.files);\n        setImageFiles(files);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_PopupWindow_module_css__WEBPACK_IMPORTED_MODULE_2___default().popup),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_PopupWindow_module_css__WEBPACK_IMPORTED_MODULE_2___default().popupContent),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_PopupWindow_module_css__WEBPACK_IMPORTED_MODULE_2___default().closeButton),\n                    onClick: onClose,\n                    children: \"X\"\n                }, void 0, false, {\n                    fileName: \"/home/anxomm/Desktop/HackUDC2024/customaized/ui/components/PopupWindow.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"Train a model\"\n                        }, void 0, false, {\n                            fileName: \"/home/anxomm/Desktop/HackUDC2024/customaized/ui/components/PopupWindow.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"input1\",\n                            children: \"Name\"\n                        }, void 0, false, {\n                            fileName: \"/home/anxomm/Desktop/HackUDC2024/customaized/ui/components/PopupWindow.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            id: \"input1\",\n                            type: \"text\",\n                            value: input1Value,\n                            onChange: (e)=>setInput1Value(e.target.value),\n                            placeholder: \"Name of your model\"\n                        }, void 0, false, {\n                            fileName: \"/home/anxomm/Desktop/HackUDC2024/customaized/ui/components/PopupWindow.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"images\",\n                            children: \"Upload Images:\"\n                        }, void 0, false, {\n                            fileName: \"/home/anxomm/Desktop/HackUDC2024/customaized/ui/components/PopupWindow.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            id: \"images\",\n                            type: \"file\",\n                            multiple: true,\n                            onChange: handleImageChange\n                        }, void 0, false, {\n                            fileName: \"/home/anxomm/Desktop/HackUDC2024/customaized/ui/components/PopupWindow.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/home/anxomm/Desktop/HackUDC2024/customaized/ui/components/PopupWindow.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/anxomm/Desktop/HackUDC2024/customaized/ui/components/PopupWindow.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/anxomm/Desktop/HackUDC2024/customaized/ui/components/PopupWindow.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/anxomm/Desktop/HackUDC2024/customaized/ui/components/PopupWindow.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PopupWindow, \"N/fO1LQ4O062wwcj08/UYmXDdSc=\");\n_c = PopupWindow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PopupWindow);\nvar _c;\n$RefreshReg$(_c, \"PopupWindow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUG9wdXBXaW5kb3cudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdDO0FBQ00sQ0FBQyw2Q0FBNkM7QUFFNUYsTUFBTUcsY0FBYztRQUFDLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFOztJQUN4QyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR04sK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDTyxZQUFZQyxjQUFjLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFFL0MsTUFBTVMsZUFBZSxDQUFDQztRQUNwQkEsRUFBRUMsY0FBYztRQUNoQixzQ0FBc0M7UUFDdENDLFFBQVFDLEdBQUcsQ0FBQyxZQUFZUjtRQUN4Qk8sUUFBUUMsR0FBRyxDQUFDLG9CQUFvQk47SUFDbEM7SUFFQSxNQUFNTyxvQkFBb0IsQ0FBQ0o7UUFDekJFLFFBQVFDLEdBQUcsQ0FBQyxrQkFBa0JILEVBQUVLLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNO1FBQ25ELE1BQU1ELFFBQVFFLE1BQU1DLElBQUksQ0FBQ1QsRUFBRUssTUFBTSxDQUFDQyxLQUFLO1FBQ3ZDUixjQUFjUTtJQUNsQjtJQUVFLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFXcEIsc0VBQVk7a0JBQzFCLDRFQUFDbUI7WUFBSUMsV0FBV3BCLDZFQUFtQjs7OEJBQ2pDLDhEQUFDdUI7b0JBQU9ILFdBQVdwQiw0RUFBa0I7b0JBQUV5QixTQUFTdkI7OEJBQVM7Ozs7Ozs4QkFFekQsOERBQUN3QjtvQkFBS3ZCLFVBQVVLOztzQ0FDaEIsOERBQUNtQjtzQ0FBRzs7Ozs7O3NDQUNGLDhEQUFDQzs0QkFBTUMsU0FBUTtzQ0FBUzs7Ozs7O3NDQUN4Qiw4REFBQ0M7NEJBQ0NDLElBQUc7NEJBQ0hDLE1BQUs7NEJBQ0xDLE9BQU83Qjs0QkFDUDhCLFVBQVUsQ0FBQ3pCLElBQU1KLGVBQWVJLEVBQUVLLE1BQU0sQ0FBQ21CLEtBQUs7NEJBQzlDRSxhQUFZOzs7Ozs7c0NBRWQsOERBQUNQOzRCQUFNQyxTQUFRO3NDQUFTOzs7Ozs7c0NBQ3hCLDhEQUFDQzs0QkFDQ0MsSUFBRzs0QkFDSEMsTUFBSzs0QkFDTEksUUFBUTs0QkFDUkYsVUFBVXJCOzs7Ozs7c0NBRVosOERBQUNVOzRCQUFPUyxNQUFLO3NDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtoQztHQTVDTS9CO0tBQUFBO0FBOENOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9wdXBXaW5kb3cudHN4P2E1ZjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1BvcHVwV2luZG93Lm1vZHVsZS5jc3MnOyAvLyBBc3N1bWluZyB5b3UgaGF2ZSBhIENTUyBtb2R1bGUgZm9yIHN0eWxpbmdcblxuY29uc3QgUG9wdXBXaW5kb3cgPSAoeyBvbkNsb3NlLCBvblN1Ym1pdCB9KSA9PiB7XG4gIGNvbnN0IFtpbnB1dDFWYWx1ZSwgc2V0SW5wdXQxVmFsdWVdID0gdXNlU3RhdGUoJycpOyAgIFxuICBjb25zdCBbaW1hZ2VGaWxlcywgc2V0SW1hZ2VGaWxlc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gb25TdWJtaXQoaW5wdXQxVmFsdWUsIGlucHV0MlZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyhcIklucHV0IDE6XCIsIGlucHV0MVZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyhcIlNlbGVjdGVkIEltYWdlczpcIiwgaW1hZ2VGaWxlcyk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlSW1hZ2VDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwic2V0dGluZyBpbWFnZXNcIiwgZS50YXJnZXQuZmlsZXMubGVuZ3RoKVxuICAgIGNvbnN0IGZpbGVzID0gQXJyYXkuZnJvbShlLnRhcmdldC5maWxlcyk7XG4gICAgc2V0SW1hZ2VGaWxlcyhmaWxlcyk7XG59O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3B1cH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvcHVwQ29udGVudH0+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2VCdXR0b259IG9uQ2xpY2s9e29uQ2xvc2V9Plg8L2J1dHRvbj5cbiAgICAgICAgXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8aDE+VHJhaW4gYSBtb2RlbDwvaDE+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnB1dDFcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPVwiaW5wdXQxXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dDFWYWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXQxVmFsdWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lIG9mIHlvdXIgbW9kZWxcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbWFnZXNcIj5VcGxvYWQgSW1hZ2VzOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD1cImltYWdlc1wiXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICBtdWx0aXBsZVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUltYWdlQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9wdXBXaW5kb3c7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIlBvcHVwV2luZG93Iiwib25DbG9zZSIsIm9uU3VibWl0IiwiaW5wdXQxVmFsdWUiLCJzZXRJbnB1dDFWYWx1ZSIsImltYWdlRmlsZXMiLCJzZXRJbWFnZUZpbGVzIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUltYWdlQ2hhbmdlIiwidGFyZ2V0IiwiZmlsZXMiLCJsZW5ndGgiLCJBcnJheSIsImZyb20iLCJkaXYiLCJjbGFzc05hbWUiLCJwb3B1cCIsInBvcHVwQ29udGVudCIsImJ1dHRvbiIsImNsb3NlQnV0dG9uIiwib25DbGljayIsImZvcm0iLCJoMSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwiaWQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwibXVsdGlwbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/PopupWindow.tsx\n"));

/***/ })

});