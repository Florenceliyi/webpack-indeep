(function (modules) { // webpackBootstrap
    // 1.初始化一个缓存
    var installedModules = {};

    // 2.自己实现一个require方法
    function __webpack_require__(moduleId) {  //moduleId : ./src/index.js
        // 2.1判断缓存中有没有当前需要使用的模块
        if (installedModules[moduleId]) {
            //2.1.1如果有直接返回
            return installedModules[moduleId].exports;
        }
        // 2.2如果没有需要使用的模块，自己创建一个模块，并放到缓存中去
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        // 2.3执行模块对应的函数(入口模块 + 依赖模块)
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        // Flag the module as loaded
        module.l = true;
        // Return the exports of the module
        return module.exports;
    }

    // expose the modules object (__webpack_modules__)
    __webpack_require__.m = modules;
    // expose the module cache
    __webpack_require__.c = installedModules;
    // define getter function for harmony exports
    __webpack_require__.d = function (exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) {
            Object.defineProperty(exports, name, {enumerable: true, get: getter});
        }
    };
    // define __esModule on exports
    __webpack_require__.r = function (exports) {
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'});
        }
        Object.defineProperty(exports, '__esModule', {value: true});
    };
    // create a fake namespace object
    __webpack_require__.t = function (value, mode) {
        if (mode & 1) value = __webpack_require__(value);
        if (mode & 8) return value;
        if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, 'default', {enumerable: true, value: value});
        if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    // getDefaultExport function for compatibility with non-harmony modules
    __webpack_require__.n = function (module) {
        var getter = module && module.__esModule ?
            function getDefault() {
                return module['default'];
            } :
            function getModuleExports() {
                return module;
            };
        __webpack_require__.d(getter, 'a', getter);
        return getter;
    };
    // Object.prototype.hasOwnProperty.call
    __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    // __webpack_public_path__
    __webpack_require__.p = "";
    // 在这里调用我们自定义的require方法
    return __webpack_require__(__webpack_require__.s = "./src/index.js");
})
({
    
    "./src/index.js":  //key
        (function (module, exports, __webpack_require__) {  //value
            // const a = require('./test/a.js')
// const b = requrie('./test/b.js')
// const c = require('./c.js')
// function getSum(a, b){
//     return a + b
// }
// c()
// getSum(a ,b)
__webpack_require__("./src/index.less");

let str = 'hi, undefined~';
        }),
    
    "./src/index.less":  //key
        (function (module, exports, __webpack_require__) {  //value
            let style = document.createElement("style");
style.innerHTML = "html,\nbody {\n  width: 100%;\n  height: 100%;\n}\nhtml div,\nbody div {\n  width: 200px;\n  height: 200px;\n  background: #000;\n}\n";
document.head.appendChild(style);
        }),
    
});