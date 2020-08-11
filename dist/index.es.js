import OutsideClickHandler from 'react-outside-click-handler';
import styled, { css } from 'styled-components';
import React, { forwardRef, useState, useCallback, useImperativeHandle, useEffect } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var Overlay = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tposition: absolute;\n\tleft: 0vw;\n\twidth: 100%;\n\theight: 100vh;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tz-index: 2;\n\topacity: 0;\n\ttransition: ", "ms;\n\ttop: ", "px;\n\tbackground: ", ";\n\n\t", ";\n"], ["\n\tposition: absolute;\n\tleft: 0vw;\n\twidth: 100%;\n\theight: 100vh;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tz-index: 2;\n\topacity: 0;\n\ttransition: ", "ms;\n\ttop: ", "px;\n\tbackground: ", ";\n\n\t",
    ";\n"])), function (_a) {
    var transitionDuration = _a.transitionDuration;
    return transitionDuration;
}, function (_a) {
    var top = _a.top;
    return top;
}, function (_a) {
    var background = _a.background;
    return background || 'rgba(50, 50, 50, 0.3)';
}, function (_a) {
    var show = _a.show;
    return show && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\topacity: 1;\n\t\t"], ["\n\t\t\topacity: 1;\n\t\t"])));
});
var Modal = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n\ttransition-timing-function: ", ";\n\tmargin: 0;\n\tpadding: 0;\n\twidth: max-content;\n\theight: max-content;\n\tz-index: 3;\n\ttransition-duration: ", "ms;\n\ttransition-delay: ", "ms;\n\tbackground: transparent;\n\n\t", ";\n"], ["\n\ttransition-timing-function: ", ";\n\tmargin: 0;\n\tpadding: 0;\n\twidth: max-content;\n\theight: max-content;\n\tz-index: 3;\n\ttransition-duration: ", "ms;\n\ttransition-delay: ", "ms;\n\tbackground: transparent;\n\n\t",
    ";\n"])), function (_a) {
    var transition = _a.transition;
    return (transition === null || transition === void 0 ? void 0 : transition.timingFunction) || 'linear';
}, function (_a) {
    var transition = _a.transition;
    return (transition === null || transition === void 0 ? void 0 : transition.duration) || 300;
}, function (_a) {
    var transition = _a.transition;
    return ((transition === null || transition === void 0 ? void 0 : transition.duration) || 300) - 100;
}, function (_a) {
    var show = _a.show, transition = _a.transition;
    if (show) {
        return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t\t\t\ttransform: scale(1) translate(0, 0);\n\t\t\t"], ["\n\t\t\t\ttransform: scale(1) translate(0, 0);\n\t\t\t"])));
    }
    switch (transition === null || transition === void 0 ? void 0 : transition.type) {
        case 'fade':
            return css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\t\t\t\t\ttransform: scale(0);\n\t\t\t\t"], ["\n\t\t\t\t\ttransform: scale(0);\n\t\t\t\t"])));
        case 'slide':
            switch (transition === null || transition === void 0 ? void 0 : transition.direction) {
                case 'bottom-top':
                    return css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\t\t\t\t\t\t\ttransform: translate(0, calc(100vh + 200%));\n\t\t\t\t\t\t"], ["\n\t\t\t\t\t\t\ttransform: translate(0, calc(100vh + 200%));\n\t\t\t\t\t\t"])));
                case 'top-bottom':
                    return css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\t\t\t\t\t\t\ttransform: translate(0, calc(-100vh - 200%));\n\t\t\t\t\t\t"], ["\n\t\t\t\t\t\t\ttransform: translate(0, calc(-100vh - 200%));\n\t\t\t\t\t\t"])));
                case 'right-left':
                    return css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n\t\t\t\t\t\t\ttransform: translate(calc(100vw + 200%), 0);\n\t\t\t\t\t\t"], ["\n\t\t\t\t\t\t\ttransform: translate(calc(100vw + 200%), 0);\n\t\t\t\t\t\t"])));
                case 'left-right':
                    return css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n\t\t\t\t\t\t\ttransform: translate(calc(-100vw - 200%), 0);\n\t\t\t\t\t\t"], ["\n\t\t\t\t\t\t\ttransform: translate(calc(-100vw - 200%), 0);\n\t\t\t\t\t\t"])));
                default:
                    return null;
            }
        default:
            return null;
    }
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;

var Recdal = function (_a, ref) {
    var _b;
    var _c = _a.initialData, initialData = _c === void 0 ? {} : _c, _d = _a.defaultVisible, defaultVisible = _d === void 0 ? false : _d, _e = _a.closeOnOverlayClick, closeOnOverlayClick = _e === void 0 ? true : _e, rest = __rest(_a, ["initialData", "defaultVisible", "closeOnOverlayClick"]);
    var _f = useState(initialData), modalData = _f[0], setModalData = _f[1];
    var _g = useState(false), lockModal = _g[0], setLockModal = _g[1];
    var _h = useState(defaultVisible), showModal = _h[0], setShowModal = _h[1];
    var _j = useState(defaultVisible), isMounted = _j[0], setIsMounted = _j[1];
    var _k = useState(0), modalPosition = _k[0], setModalPosition = _k[1];
    var getData = useCallback(function (key) {
        if (key) {
            return modalData[key];
        }
        return modalData;
    }, [modalData]);
    var open = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!rest.awaitBeforeOpening) return [3 /*break*/, 3];
                    if (!rest.onOpen) return [3 /*break*/, 2];
                    return [4 /*yield*/, rest.onOpen()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (data) {
                        setModalData(data);
                    }
                    return [2 /*return*/, setShowModal(true)];
                case 3:
                    if (data) {
                        setModalData(data);
                    }
                    setShowModal(true);
                    if (!rest.onOpen) return [3 /*break*/, 5];
                    return [4 /*yield*/, rest.onOpen()];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var close = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (lockModal)
                        return [2 /*return*/];
                    if (!rest.awaitBeforeClosing) return [3 /*break*/, 3];
                    if (!rest.onClose) return [3 /*break*/, 2];
                    return [4 /*yield*/, rest.onClose()];
                case 1:
                    _b.sent();
                    _b.label = 2;
                case 2:
                    setIsMounted(false);
                    setModalData({});
                    setTimeout(function () {
                        setShowModal(false);
                    }, ((_a = rest === null || rest === void 0 ? void 0 : rest.transition) === null || _a === void 0 ? void 0 : _a.duration) || 400);
                    return [3 /*break*/, 4];
                case 3:
                    setIsMounted(false);
                    setModalData({});
                    new Promise(function (resolve, reject) {
                        var _a;
                        try {
                            setTimeout(function () {
                                resolve(setShowModal(false));
                            }, ((_a = rest === null || rest === void 0 ? void 0 : rest.transition) === null || _a === void 0 ? void 0 : _a.duration) || 400);
                        }
                        catch (error) {
                            reject(error);
                        }
                    }).then(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!rest.onClose) return [3 /*break*/, 2];
                                    return [4 /*yield*/, rest.onClose()];
                                case 1:
                                    _a.sent();
                                    _a.label = 2;
                                case 2: return [2 /*return*/];
                            }
                        });
                    }); });
                    _b.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var lock = useCallback(function () { return setLockModal(true); }, []);
    var unlock = useCallback(function () { return setLockModal(false); }, []);
    useImperativeHandle(ref, function () { return ({
        getData: getData,
        open: open,
        close: close,
        lock: lock,
        unlock: unlock,
    }); });
    useEffect(function () {
        var body = document.querySelector('body');
        setModalPosition(window.screenY);
        setIsMounted(showModal);
        showModal ? (body.style.overflow = 'hidden') : (body.style.overflow = 'auto');
    }, [showModal]);
    if (!showModal) {
        return null;
    }
    return (React.createElement(Overlay, __assign({}, rest.overlay, { show: isMounted, top: modalPosition, transitionDuration: (((_b = rest === null || rest === void 0 ? void 0 : rest.transition) === null || _b === void 0 ? void 0 : _b.duration) || 300) + 200 }),
        React.createElement(OutsideClickHandler, { onOutsideClick: function () {
                if (showModal && !lockModal && closeOnOverlayClick) {
                    close();
                }
            } },
            React.createElement(Modal, __assign({}, rest.modal, { transition: rest === null || rest === void 0 ? void 0 : rest.transition, show: isMounted }), rest.children))));
};
var Recdal$1 = forwardRef(Recdal);

export default Recdal$1;
//# sourceMappingURL=index.es.js.map
