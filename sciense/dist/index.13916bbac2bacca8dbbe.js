/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 285:
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Slider = /*#__PURE__*/function () {
  function Slider(containerSelector) {
    _classCallCheck(this, Slider);
    this.container = document.querySelector(containerSelector);
    this.slides = this.container.querySelectorAll('.slide');
    this.prevBtn = this.container.querySelector('.slider__prev');
    this.nextBtn = this.container.querySelector('.slider__next');
    this.dotsContainer = this.container.querySelector('.slider__dots');
    this.currentSlide = 0;
    this.autoPlayInterval = null;
    this.init();
  }
  return _createClass(Slider, [{
    key: "init",
    value: function init() {
      // Создаем точки навигации
      this.createDots();

      // Добавляем обработчики событий
      this.addEventListeners();

      // Запускаем автоплей
      this.startAutoPlay();

      // Показываем первый слайд
      this.showSlide(this.currentSlide);
    }
  }, {
    key: "createDots",
    value: function createDots() {
      var _this = this;
      this.slides.forEach(function (_, index) {
        var dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', function () {
          return _this.goToSlide(index);
        });
        _this.dotsContainer.appendChild(dot);
      });
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this2 = this;
      this.prevBtn.addEventListener('click', function () {
        return _this2.prevSlide();
      });
      this.nextBtn.addEventListener('click', function () {
        return _this2.nextSlide();
      });

      // Останавливаем автоплей при наведении
      this.container.addEventListener('mouseenter', function () {
        return _this2.stopAutoPlay();
      });
      this.container.addEventListener('mouseleave', function () {
        return _this2.startAutoPlay();
      });

      // Добавляем поддержку клавиатуры
      document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') _this2.prevSlide();
        if (e.key === 'ArrowRight') _this2.nextSlide();
      });
    }
  }, {
    key: "showSlide",
    value: function showSlide(index) {
      // Скрываем все слайды
      this.slides.forEach(function (slide) {
        return slide.classList.remove('active');
      });

      // Убираем активный класс со всех точек
      this.dotsContainer.querySelectorAll('.dot').forEach(function (dot) {
        dot.classList.remove('active');
      });

      // Показываем нужный слайд
      this.slides[index].classList.add('active');

      // Активируем соответствующую точку
      this.dotsContainer.querySelectorAll('.dot')[index].classList.add('active');
      this.currentSlide = index;
    }
  }, {
    key: "nextSlide",
    value: function nextSlide() {
      var nextIndex = this.currentSlide + 1;
      if (nextIndex >= this.slides.length) {
        nextIndex = 0;
      }
      this.showSlide(nextIndex);
    }
  }, {
    key: "prevSlide",
    value: function prevSlide() {
      var prevIndex = this.currentSlide - 1;
      if (prevIndex < 0) {
        prevIndex = this.slides.length - 1;
      }
      this.showSlide(prevIndex);
    }
  }, {
    key: "goToSlide",
    value: function goToSlide(index) {
      this.showSlide(index);
    }
  }, {
    key: "startAutoPlay",
    value: function startAutoPlay() {
      var _this3 = this;
      this.stopAutoPlay();
      this.autoPlayInterval = setInterval(function () {
        _this3.nextSlide();
      }, 5000); // Смена каждые 5 секунд
    }
  }, {
    key: "stopAutoPlay",
    value: function stopAutoPlay() {
      if (this.autoPlayInterval) {
        clearInterval(this.autoPlayInterval);
        this.autoPlayInterval = null;
      }
    }
  }]);
}(); // Инициализация слайдера
document.addEventListener('DOMContentLoaded', function () {
  var slider = new Slider('.slider__container');
});

/***/ }),

/***/ 378:
/***/ (() => {

function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Calendar = /*#__PURE__*/function () {
  function Calendar(containerSelector) {
    _classCallCheck(this, Calendar);
    this.container = document.querySelector(containerSelector);
    this.currentDate = new Date();
    this.selectedDate = new Date();
    this.events = new Map();
    this.init();
  }
  return _createClass(Calendar, [{
    key: "init",
    value: function init() {
      this.render();
      this.bindEvents();
      this.loadEvents();
    }
  }, {
    key: "render",
    value: function render() {
      var title = this.container.querySelector('.calendar-title');
      var daysContainer = this.container.querySelector('.calendar-days');

      // Устанавливаем заголовок
      title.textContent = this.getMonthYearString();

      // Очищаем контейнер дней
      daysContainer.innerHTML = '';

      // Получаем первый день месяца и количество дней
      var firstDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
      var lastDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0);
      var daysInMonth = lastDay.getDate();
      var startDay = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1; // Коррекция для понедельника

      // Создаем дни из предыдущего месяца
      var prevMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 0);
      var daysInPrevMonth = prevMonth.getDate();
      for (var i = startDay - 1; i >= 0; i--) {
        var day = this.createDay(daysInPrevMonth - i, true);
        daysContainer.appendChild(day);
      }

      // Создаем дни текущего месяца
      var today = new Date();
      for (var _i = 1; _i <= daysInMonth; _i++) {
        var _day = this.createDay(_i, false);

        // Проверяем, сегодня ли это
        if (this.currentDate.getMonth() === today.getMonth() && this.currentDate.getFullYear() === today.getFullYear() && _i === today.getDate()) {
          _day.classList.add('today');
        }

        // Проверяем, выбран ли день
        if (this.selectedDate && this.currentDate.getMonth() === this.selectedDate.getMonth() && this.currentDate.getFullYear() === this.selectedDate.getFullYear() && _i === this.selectedDate.getDate()) {
          _day.classList.add('selected');
        }
        daysContainer.appendChild(_day);
      }

      // Создаем дни следующего месяца
      var totalCells = 42; // 6 строк по 7 дней
      var remainingCells = totalCells - (startDay + daysInMonth);
      for (var _i2 = 1; _i2 <= remainingCells; _i2++) {
        var _day2 = this.createDay(_i2, true);
        daysContainer.appendChild(_day2);
      }
    }
  }, {
    key: "createDay",
    value: function createDay(dayNumber, isOtherMonth) {
      var _this = this;
      var day = document.createElement('div');
      day.className = 'day';
      day.textContent = dayNumber;
      if (isOtherMonth) {
        day.classList.add('other-month');
      } else {
        day.addEventListener('click', function () {
          _this.selectDay(dayNumber);
        });
      }
      return day;
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this2 = this;
      this.container.querySelector('.prev-month').addEventListener('click', function () {
        _this2.prevMonth();
      });
      this.container.querySelector('.next-month').addEventListener('click', function () {
        _this2.nextMonth();
      });
      this.container.querySelector('.today-btn').addEventListener('click', function () {
        _this2.goToToday();
      });
    }
  }, {
    key: "prevMonth",
    value: function prevMonth() {
      this.currentDate.setMonth(this.currentDate.getMonth() - 1);
      this.render();
    }
  }, {
    key: "nextMonth",
    value: function nextMonth() {
      this.currentDate.setMonth(this.currentDate.getMonth() + 1);
      this.render();
    }
  }, {
    key: "goToToday",
    value: function goToToday() {
      this.currentDate = new Date();
      this.selectedDate = new Date();
      this.render();
    }
  }, {
    key: "selectDay",
    value: function selectDay(day) {
      this.selectedDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), day);
      this.render();

      // Генерируем событие выбора даты
      this.triggerDateSelect();
    }
  }, {
    key: "getMonthYearString",
    value: function getMonthYearString() {
      var months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
      return "".concat(months[this.currentDate.getMonth()], " ").concat(this.currentDate.getFullYear());
    }
  }, {
    key: "getDateKey",
    value: function getDateKey(date) {
      return "".concat(date.getFullYear(), "-").concat(date.getMonth() + 1, "-").concat(date.getDate());
    }
  }, {
    key: "addEvent",
    value: function addEvent(date, event) {
      var dateKey = this.getDateKey(date);
      if (!this.events.has(dateKey)) {
        this.events.set(dateKey, []);
      }
      this.events.get(dateKey).push(event);
      this.saveEvents();
      this.render();
    }
  }, {
    key: "getEvents",
    value: function getEvents(date) {
      var dateKey = this.getDateKey(date);
      return this.events.get(dateKey) || [];
    }
  }, {
    key: "saveEvents",
    value: function saveEvents() {
      var eventsObj = Object.fromEntries(this.events);
      localStorage.setItem('calendarEvents', JSON.stringify(eventsObj));
    }
  }, {
    key: "loadEvents",
    value: function loadEvents() {
      var savedEvents = localStorage.getItem('calendarEvents');
      if (savedEvents) {
        this.events = new Map(Object.entries(JSON.parse(savedEvents)));
      }
    }
  }, {
    key: "triggerDateSelect",
    value: function triggerDateSelect() {
      var event = new CustomEvent('dateSelect', {
        detail: {
          date: this.selectedDate,
          events: this.getEvents(this.selectedDate)
        }
      });
      this.container.dispatchEvent(event);
    }
  }]);
}(); // Расширенная версия с событиями
var AdvancedCalendar = /*#__PURE__*/function (_Calendar) {
  function AdvancedCalendar(containerSelector) {
    var _this3;
    _classCallCheck(this, AdvancedCalendar);
    _this3 = _callSuper(this, AdvancedCalendar, [containerSelector]);
    _this3.createEventForm();
    return _this3;
  }
  _inherits(AdvancedCalendar, _Calendar);
  return _createClass(AdvancedCalendar, [{
    key: "addEventFromForm",
    value: function addEventFromForm() {
      var title = this.eventForm.querySelector('.event-title').value;
      var description = this.eventForm.querySelector('.event-description').value;
      if (title) {
        this.addEvent(this.selectedDate, {
          title: title,
          description: description,
          time: new Date().toLocaleTimeString()
        });

        // Очищаем форму
        this.eventForm.querySelector('.event-title').value = '';
        this.eventForm.querySelector('.event-description').value = '';
      }
    }
  }]);
}(Calendar); // Инициализация календаря
document.addEventListener('DOMContentLoaded', function () {
  var calendar = new AdvancedCalendar('.calendar-container');

  // Пример добавления обработчика выбора даты
  calendar.container.addEventListener('dateSelect', function (e) {
    console.log('Выбрана дата:', e.detail.date.toLocaleDateString());
    console.log('События:', e.detail.events);
  });

  // Добавляем несколько тестовых событий
  var testDate = new Date();
  testDate.setDate(testDate.getDate() + 2);
  calendar.addEvent(testDate, {
    title: 'Тестовое событие',
    description: 'Это тестовое событие для демонстрации',
    time: '10:00'
  });
});

/***/ }),

/***/ 813:
/***/ (() => {

var triggerElement1 = document.querySelector('.slider__arrow-btn1');
var targetElement1 = document.querySelector('.slider__arrow1');
var newClass1 = 'slider__arrow-white1'; // Имя класса, который будем добавлять
triggerElement1.addEventListener('mouseover', function () {
  targetElement1.classList.add(newClass1); // Добавляем класс
});
triggerElement1.addEventListener('mouseout', function () {
  targetElement1.classList.remove(newClass1); // Удаляем класс
});
var triggerElement2 = document.querySelector('.slider__arrow-btn2');
var targetElement2 = document.querySelector('.slider__arrow2');
var newClass2 = 'slider__arrow-white2'; // Имя класса, который будем добавлять
triggerElement2.addEventListener('mouseover', function () {
  targetElement2.classList.add(newClass2); // Добавляем класс
});
triggerElement2.addEventListener('mouseout', function () {
  targetElement2.classList.remove(newClass2); // Удаляем класс
});

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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _scripts_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(813);
/* harmony import */ var _scripts_main_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_main_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(285);
/* harmony import */ var _scripts_slider_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_slider_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_calendar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(378);
/* harmony import */ var _scripts_calendar_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_calendar_js__WEBPACK_IMPORTED_MODULE_2__);










})();

/******/ })()
;