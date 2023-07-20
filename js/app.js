(() => {
    var __webpack_modules__ = {
        529: module => {
            /*! choices.js v10.2.0 | © 2022 Josh Johnson | https://github.com/jshjohnson/Choices#readme */
            (function webpackUniversalModuleDefinition(root, factory) {
                if (true) module.exports = factory();
            })(window, (function() {
                return function() {
                    "use strict";
                    var __webpack_modules__ = {
                        282: function(__unused_webpack_module, exports, __nested_webpack_require_632__) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.clearChoices = exports.activateChoices = exports.filterChoices = exports.addChoice = void 0;
                            var constants_1 = __nested_webpack_require_632__(883);
                            var addChoice = function(_a) {
                                var value = _a.value, label = _a.label, id = _a.id, groupId = _a.groupId, disabled = _a.disabled, elementId = _a.elementId, customProperties = _a.customProperties, placeholder = _a.placeholder, keyCode = _a.keyCode;
                                return {
                                    type: constants_1.ACTION_TYPES.ADD_CHOICE,
                                    value,
                                    label,
                                    id,
                                    groupId,
                                    disabled,
                                    elementId,
                                    customProperties,
                                    placeholder,
                                    keyCode
                                };
                            };
                            exports.addChoice = addChoice;
                            var filterChoices = function(results) {
                                return {
                                    type: constants_1.ACTION_TYPES.FILTER_CHOICES,
                                    results
                                };
                            };
                            exports.filterChoices = filterChoices;
                            var activateChoices = function(active) {
                                if (active === void 0) active = true;
                                return {
                                    type: constants_1.ACTION_TYPES.ACTIVATE_CHOICES,
                                    active
                                };
                            };
                            exports.activateChoices = activateChoices;
                            var clearChoices = function() {
                                return {
                                    type: constants_1.ACTION_TYPES.CLEAR_CHOICES
                                };
                            };
                            exports.clearChoices = clearChoices;
                        },
                        783: function(__unused_webpack_module, exports, __nested_webpack_require_2068__) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.addGroup = void 0;
                            var constants_1 = __nested_webpack_require_2068__(883);
                            var addGroup = function(_a) {
                                var value = _a.value, id = _a.id, active = _a.active, disabled = _a.disabled;
                                return {
                                    type: constants_1.ACTION_TYPES.ADD_GROUP,
                                    value,
                                    id,
                                    active,
                                    disabled
                                };
                            };
                            exports.addGroup = addGroup;
                        },
                        464: function(__unused_webpack_module, exports, __nested_webpack_require_2595__) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.highlightItem = exports.removeItem = exports.addItem = void 0;
                            var constants_1 = __nested_webpack_require_2595__(883);
                            var addItem = function(_a) {
                                var value = _a.value, label = _a.label, id = _a.id, choiceId = _a.choiceId, groupId = _a.groupId, customProperties = _a.customProperties, placeholder = _a.placeholder, keyCode = _a.keyCode;
                                return {
                                    type: constants_1.ACTION_TYPES.ADD_ITEM,
                                    value,
                                    label,
                                    id,
                                    choiceId,
                                    groupId,
                                    customProperties,
                                    placeholder,
                                    keyCode
                                };
                            };
                            exports.addItem = addItem;
                            var removeItem = function(id, choiceId) {
                                return {
                                    type: constants_1.ACTION_TYPES.REMOVE_ITEM,
                                    id,
                                    choiceId
                                };
                            };
                            exports.removeItem = removeItem;
                            var highlightItem = function(id, highlighted) {
                                return {
                                    type: constants_1.ACTION_TYPES.HIGHLIGHT_ITEM,
                                    id,
                                    highlighted
                                };
                            };
                            exports.highlightItem = highlightItem;
                        },
                        137: function(__unused_webpack_module, exports, __nested_webpack_require_3779__) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.setIsLoading = exports.resetTo = exports.clearAll = void 0;
                            var constants_1 = __nested_webpack_require_3779__(883);
                            var clearAll = function() {
                                return {
                                    type: constants_1.ACTION_TYPES.CLEAR_ALL
                                };
                            };
                            exports.clearAll = clearAll;
                            var resetTo = function(state) {
                                return {
                                    type: constants_1.ACTION_TYPES.RESET_TO,
                                    state
                                };
                            };
                            exports.resetTo = resetTo;
                            var setIsLoading = function(isLoading) {
                                return {
                                    type: constants_1.ACTION_TYPES.SET_IS_LOADING,
                                    isLoading
                                };
                            };
                            exports.setIsLoading = setIsLoading;
                        },
                        373: function(__unused_webpack_module, exports, __nested_webpack_require_4494__) {
                            var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
                                if (pack || arguments.length === 2) for (var ar, i = 0, l = from.length; i < l; i++) if (ar || !(i in from)) {
                                    if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                                    ar[i] = from[i];
                                }
                                return to.concat(ar || Array.prototype.slice.call(from));
                            };
                            var __importDefault = this && this.__importDefault || function(mod) {
                                return mod && mod.__esModule ? mod : {
                                    default: mod
                                };
                            };
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var deepmerge_1 = __importDefault(__nested_webpack_require_4494__(996));
                            var fuse_js_1 = __importDefault(__nested_webpack_require_4494__(221));
                            var choices_1 = __nested_webpack_require_4494__(282);
                            var groups_1 = __nested_webpack_require_4494__(783);
                            var items_1 = __nested_webpack_require_4494__(464);
                            var misc_1 = __nested_webpack_require_4494__(137);
                            var components_1 = __nested_webpack_require_4494__(520);
                            var constants_1 = __nested_webpack_require_4494__(883);
                            var defaults_1 = __nested_webpack_require_4494__(789);
                            var utils_1 = __nested_webpack_require_4494__(799);
                            var reducers_1 = __nested_webpack_require_4494__(655);
                            var store_1 = __importDefault(__nested_webpack_require_4494__(744));
                            var templates_1 = __importDefault(__nested_webpack_require_4494__(686));
                            var IS_IE11 = "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style;
                            var USER_DEFAULTS = {};
                            var Choices = function() {
                                function Choices(element, userConfig) {
                                    if (element === void 0) element = "[data-choice]";
                                    if (userConfig === void 0) userConfig = {};
                                    var _this = this;
                                    if (userConfig.allowHTML === void 0) console.warn("Deprecation warning: allowHTML will default to false in a future release. To render HTML in Choices, you will need to set it to true. Setting allowHTML will suppress this message.");
                                    this.config = deepmerge_1.default.all([ defaults_1.DEFAULT_CONFIG, Choices.defaults.options, userConfig ], {
                                        arrayMerge: function(_, sourceArray) {
                                            return __spreadArray([], sourceArray, true);
                                        }
                                    });
                                    var invalidConfigOptions = (0, utils_1.diff)(this.config, defaults_1.DEFAULT_CONFIG);
                                    if (invalidConfigOptions.length) console.warn("Unknown config option(s) passed", invalidConfigOptions.join(", "));
                                    var passedElement = typeof element === "string" ? document.querySelector(element) : element;
                                    if (!(passedElement instanceof HTMLInputElement || passedElement instanceof HTMLSelectElement)) throw TypeError("Expected one of the following types text|select-one|select-multiple");
                                    this._isTextElement = passedElement.type === constants_1.TEXT_TYPE;
                                    this._isSelectOneElement = passedElement.type === constants_1.SELECT_ONE_TYPE;
                                    this._isSelectMultipleElement = passedElement.type === constants_1.SELECT_MULTIPLE_TYPE;
                                    this._isSelectElement = this._isSelectOneElement || this._isSelectMultipleElement;
                                    this.config.searchEnabled = this._isSelectMultipleElement || this.config.searchEnabled;
                                    if (![ "auto", "always" ].includes("".concat(this.config.renderSelectedChoices))) this.config.renderSelectedChoices = "auto";
                                    if (userConfig.addItemFilter && typeof userConfig.addItemFilter !== "function") {
                                        var re = userConfig.addItemFilter instanceof RegExp ? userConfig.addItemFilter : new RegExp(userConfig.addItemFilter);
                                        this.config.addItemFilter = re.test.bind(re);
                                    }
                                    if (this._isTextElement) this.passedElement = new components_1.WrappedInput({
                                        element: passedElement,
                                        classNames: this.config.classNames,
                                        delimiter: this.config.delimiter
                                    }); else this.passedElement = new components_1.WrappedSelect({
                                        element: passedElement,
                                        classNames: this.config.classNames,
                                        template: function(data) {
                                            return _this._templates.option(data);
                                        }
                                    });
                                    this.initialised = false;
                                    this._store = new store_1.default;
                                    this._initialState = reducers_1.defaultState;
                                    this._currentState = reducers_1.defaultState;
                                    this._prevState = reducers_1.defaultState;
                                    this._currentValue = "";
                                    this._canSearch = !!this.config.searchEnabled;
                                    this._isScrollingOnIe = false;
                                    this._highlightPosition = 0;
                                    this._wasTap = true;
                                    this._placeholderValue = this._generatePlaceholderValue();
                                    this._baseId = (0, utils_1.generateId)(this.passedElement.element, "choices-");
                                    this._direction = this.passedElement.dir;
                                    if (!this._direction) {
                                        var elementDirection = window.getComputedStyle(this.passedElement.element).direction;
                                        var documentDirection = window.getComputedStyle(document.documentElement).direction;
                                        if (elementDirection !== documentDirection) this._direction = elementDirection;
                                    }
                                    this._idNames = {
                                        itemChoice: "item-choice"
                                    };
                                    if (this._isSelectElement) {
                                        this._presetGroups = this.passedElement.optionGroups;
                                        this._presetOptions = this.passedElement.options;
                                    }
                                    this._presetChoices = this.config.choices;
                                    this._presetItems = this.config.items;
                                    if (this.passedElement.value && this._isTextElement) {
                                        var splitValues = this.passedElement.value.split(this.config.delimiter);
                                        this._presetItems = this._presetItems.concat(splitValues);
                                    }
                                    if (this.passedElement.options) this.passedElement.options.forEach((function(option) {
                                        _this._presetChoices.push({
                                            value: option.value,
                                            label: option.innerHTML,
                                            selected: !!option.selected,
                                            disabled: option.disabled || option.parentNode.disabled,
                                            placeholder: option.value === "" || option.hasAttribute("placeholder"),
                                            customProperties: (0, utils_1.parseCustomProperties)(option.dataset.customProperties)
                                        });
                                    }));
                                    this._render = this._render.bind(this);
                                    this._onFocus = this._onFocus.bind(this);
                                    this._onBlur = this._onBlur.bind(this);
                                    this._onKeyUp = this._onKeyUp.bind(this);
                                    this._onKeyDown = this._onKeyDown.bind(this);
                                    this._onClick = this._onClick.bind(this);
                                    this._onTouchMove = this._onTouchMove.bind(this);
                                    this._onTouchEnd = this._onTouchEnd.bind(this);
                                    this._onMouseDown = this._onMouseDown.bind(this);
                                    this._onMouseOver = this._onMouseOver.bind(this);
                                    this._onFormReset = this._onFormReset.bind(this);
                                    this._onSelectKey = this._onSelectKey.bind(this);
                                    this._onEnterKey = this._onEnterKey.bind(this);
                                    this._onEscapeKey = this._onEscapeKey.bind(this);
                                    this._onDirectionKey = this._onDirectionKey.bind(this);
                                    this._onDeleteKey = this._onDeleteKey.bind(this);
                                    if (this.passedElement.isActive) {
                                        if (!this.config.silent) console.warn("Trying to initialise Choices on element already initialised", {
                                            element
                                        });
                                        this.initialised = true;
                                        return;
                                    }
                                    this.init();
                                }
                                Object.defineProperty(Choices, "defaults", {
                                    get: function() {
                                        return Object.preventExtensions({
                                            get options() {
                                                return USER_DEFAULTS;
                                            },
                                            get templates() {
                                                return templates_1.default;
                                            }
                                        });
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Choices.prototype.init = function() {
                                    if (this.initialised) return;
                                    this._createTemplates();
                                    this._createElements();
                                    this._createStructure();
                                    this._store.subscribe(this._render);
                                    this._render();
                                    this._addEventListeners();
                                    var shouldDisable = !this.config.addItems || this.passedElement.element.hasAttribute("disabled");
                                    if (shouldDisable) this.disable();
                                    this.initialised = true;
                                    var callbackOnInit = this.config.callbackOnInit;
                                    if (callbackOnInit && typeof callbackOnInit === "function") callbackOnInit.call(this);
                                };
                                Choices.prototype.destroy = function() {
                                    if (!this.initialised) return;
                                    this._removeEventListeners();
                                    this.passedElement.reveal();
                                    this.containerOuter.unwrap(this.passedElement.element);
                                    this.clearStore();
                                    if (this._isSelectElement) this.passedElement.options = this._presetOptions;
                                    this._templates = templates_1.default;
                                    this.initialised = false;
                                };
                                Choices.prototype.enable = function() {
                                    if (this.passedElement.isDisabled) this.passedElement.enable();
                                    if (this.containerOuter.isDisabled) {
                                        this._addEventListeners();
                                        this.input.enable();
                                        this.containerOuter.enable();
                                    }
                                    return this;
                                };
                                Choices.prototype.disable = function() {
                                    if (!this.passedElement.isDisabled) this.passedElement.disable();
                                    if (!this.containerOuter.isDisabled) {
                                        this._removeEventListeners();
                                        this.input.disable();
                                        this.containerOuter.disable();
                                    }
                                    return this;
                                };
                                Choices.prototype.highlightItem = function(item, runEvent) {
                                    if (runEvent === void 0) runEvent = true;
                                    if (!item || !item.id) return this;
                                    var id = item.id, _a = item.groupId, groupId = _a === void 0 ? -1 : _a, _b = item.value, value = _b === void 0 ? "" : _b, _c = item.label, label = _c === void 0 ? "" : _c;
                                    var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
                                    this._store.dispatch((0, items_1.highlightItem)(id, true));
                                    if (runEvent) this.passedElement.triggerEvent(constants_1.EVENTS.highlightItem, {
                                        id,
                                        value,
                                        label,
                                        groupValue: group && group.value ? group.value : null
                                    });
                                    return this;
                                };
                                Choices.prototype.unhighlightItem = function(item) {
                                    if (!item || !item.id) return this;
                                    var id = item.id, _a = item.groupId, groupId = _a === void 0 ? -1 : _a, _b = item.value, value = _b === void 0 ? "" : _b, _c = item.label, label = _c === void 0 ? "" : _c;
                                    var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
                                    this._store.dispatch((0, items_1.highlightItem)(id, false));
                                    this.passedElement.triggerEvent(constants_1.EVENTS.highlightItem, {
                                        id,
                                        value,
                                        label,
                                        groupValue: group && group.value ? group.value : null
                                    });
                                    return this;
                                };
                                Choices.prototype.highlightAll = function() {
                                    var _this = this;
                                    this._store.items.forEach((function(item) {
                                        return _this.highlightItem(item);
                                    }));
                                    return this;
                                };
                                Choices.prototype.unhighlightAll = function() {
                                    var _this = this;
                                    this._store.items.forEach((function(item) {
                                        return _this.unhighlightItem(item);
                                    }));
                                    return this;
                                };
                                Choices.prototype.removeActiveItemsByValue = function(value) {
                                    var _this = this;
                                    this._store.activeItems.filter((function(item) {
                                        return item.value === value;
                                    })).forEach((function(item) {
                                        return _this._removeItem(item);
                                    }));
                                    return this;
                                };
                                Choices.prototype.removeActiveItems = function(excludedId) {
                                    var _this = this;
                                    this._store.activeItems.filter((function(_a) {
                                        var id = _a.id;
                                        return id !== excludedId;
                                    })).forEach((function(item) {
                                        return _this._removeItem(item);
                                    }));
                                    return this;
                                };
                                Choices.prototype.removeHighlightedItems = function(runEvent) {
                                    var _this = this;
                                    if (runEvent === void 0) runEvent = false;
                                    this._store.highlightedActiveItems.forEach((function(item) {
                                        _this._removeItem(item);
                                        if (runEvent) _this._triggerChange(item.value);
                                    }));
                                    return this;
                                };
                                Choices.prototype.showDropdown = function(preventInputFocus) {
                                    var _this = this;
                                    if (this.dropdown.isActive) return this;
                                    requestAnimationFrame((function() {
                                        _this.dropdown.show();
                                        _this.containerOuter.open(_this.dropdown.distanceFromTopWindow);
                                        if (!preventInputFocus && _this._canSearch) _this.input.focus();
                                        _this.passedElement.triggerEvent(constants_1.EVENTS.showDropdown, {});
                                    }));
                                    return this;
                                };
                                Choices.prototype.hideDropdown = function(preventInputBlur) {
                                    var _this = this;
                                    if (!this.dropdown.isActive) return this;
                                    requestAnimationFrame((function() {
                                        _this.dropdown.hide();
                                        _this.containerOuter.close();
                                        if (!preventInputBlur && _this._canSearch) {
                                            _this.input.removeActiveDescendant();
                                            _this.input.blur();
                                        }
                                        _this.passedElement.triggerEvent(constants_1.EVENTS.hideDropdown, {});
                                    }));
                                    return this;
                                };
                                Choices.prototype.getValue = function(valueOnly) {
                                    if (valueOnly === void 0) valueOnly = false;
                                    var values = this._store.activeItems.reduce((function(selectedItems, item) {
                                        var itemValue = valueOnly ? item.value : item;
                                        selectedItems.push(itemValue);
                                        return selectedItems;
                                    }), []);
                                    return this._isSelectOneElement ? values[0] : values;
                                };
                                Choices.prototype.setValue = function(items) {
                                    var _this = this;
                                    if (!this.initialised) return this;
                                    items.forEach((function(value) {
                                        return _this._setChoiceOrItem(value);
                                    }));
                                    return this;
                                };
                                Choices.prototype.setChoiceByValue = function(value) {
                                    var _this = this;
                                    if (!this.initialised || this._isTextElement) return this;
                                    var choiceValue = Array.isArray(value) ? value : [ value ];
                                    choiceValue.forEach((function(val) {
                                        return _this._findAndSelectChoiceByValue(val);
                                    }));
                                    return this;
                                };
                                Choices.prototype.setChoices = function(choicesArrayOrFetcher, value, label, replaceChoices) {
                                    var _this = this;
                                    if (choicesArrayOrFetcher === void 0) choicesArrayOrFetcher = [];
                                    if (value === void 0) value = "value";
                                    if (label === void 0) label = "label";
                                    if (replaceChoices === void 0) replaceChoices = false;
                                    if (!this.initialised) throw new ReferenceError("setChoices was called on a non-initialized instance of Choices");
                                    if (!this._isSelectElement) throw new TypeError("setChoices can't be used with INPUT based Choices");
                                    if (typeof value !== "string" || !value) throw new TypeError("value parameter must be a name of 'value' field in passed objects");
                                    if (replaceChoices) this.clearChoices();
                                    if (typeof choicesArrayOrFetcher === "function") {
                                        var fetcher_1 = choicesArrayOrFetcher(this);
                                        if (typeof Promise === "function" && fetcher_1 instanceof Promise) return new Promise((function(resolve) {
                                            return requestAnimationFrame(resolve);
                                        })).then((function() {
                                            return _this._handleLoadingState(true);
                                        })).then((function() {
                                            return fetcher_1;
                                        })).then((function(data) {
                                            return _this.setChoices(data, value, label, replaceChoices);
                                        })).catch((function(err) {
                                            if (!_this.config.silent) console.error(err);
                                        })).then((function() {
                                            return _this._handleLoadingState(false);
                                        })).then((function() {
                                            return _this;
                                        }));
                                        if (!Array.isArray(fetcher_1)) throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: ".concat(typeof fetcher_1));
                                        return this.setChoices(fetcher_1, value, label, false);
                                    }
                                    if (!Array.isArray(choicesArrayOrFetcher)) throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");
                                    this.containerOuter.removeLoadingState();
                                    this._startLoading();
                                    choicesArrayOrFetcher.forEach((function(groupOrChoice) {
                                        if (groupOrChoice.choices) _this._addGroup({
                                            id: groupOrChoice.id ? parseInt("".concat(groupOrChoice.id), 10) : null,
                                            group: groupOrChoice,
                                            valueKey: value,
                                            labelKey: label
                                        }); else {
                                            var choice = groupOrChoice;
                                            _this._addChoice({
                                                value: choice[value],
                                                label: choice[label],
                                                isSelected: !!choice.selected,
                                                isDisabled: !!choice.disabled,
                                                placeholder: !!choice.placeholder,
                                                customProperties: choice.customProperties
                                            });
                                        }
                                    }));
                                    this._stopLoading();
                                    return this;
                                };
                                Choices.prototype.clearChoices = function() {
                                    this._store.dispatch((0, choices_1.clearChoices)());
                                    return this;
                                };
                                Choices.prototype.clearStore = function() {
                                    this._store.dispatch((0, misc_1.clearAll)());
                                    return this;
                                };
                                Choices.prototype.clearInput = function() {
                                    var shouldSetInputWidth = !this._isSelectOneElement;
                                    this.input.clear(shouldSetInputWidth);
                                    if (!this._isTextElement && this._canSearch) {
                                        this._isSearching = false;
                                        this._store.dispatch((0, choices_1.activateChoices)(true));
                                    }
                                    return this;
                                };
                                Choices.prototype._render = function() {
                                    if (this._store.isLoading()) return;
                                    this._currentState = this._store.state;
                                    var stateChanged = this._currentState.choices !== this._prevState.choices || this._currentState.groups !== this._prevState.groups || this._currentState.items !== this._prevState.items;
                                    var shouldRenderChoices = this._isSelectElement;
                                    var shouldRenderItems = this._currentState.items !== this._prevState.items;
                                    if (!stateChanged) return;
                                    if (shouldRenderChoices) this._renderChoices();
                                    if (shouldRenderItems) this._renderItems();
                                    this._prevState = this._currentState;
                                };
                                Choices.prototype._renderChoices = function() {
                                    var _this = this;
                                    var _a = this._store, activeGroups = _a.activeGroups, activeChoices = _a.activeChoices;
                                    var choiceListFragment = document.createDocumentFragment();
                                    this.choiceList.clear();
                                    if (this.config.resetScrollPosition) requestAnimationFrame((function() {
                                        return _this.choiceList.scrollToTop();
                                    }));
                                    if (activeGroups.length >= 1 && !this._isSearching) {
                                        var activePlaceholders = activeChoices.filter((function(activeChoice) {
                                            return activeChoice.placeholder === true && activeChoice.groupId === -1;
                                        }));
                                        if (activePlaceholders.length >= 1) choiceListFragment = this._createChoicesFragment(activePlaceholders, choiceListFragment);
                                        choiceListFragment = this._createGroupsFragment(activeGroups, activeChoices, choiceListFragment);
                                    } else if (activeChoices.length >= 1) choiceListFragment = this._createChoicesFragment(activeChoices, choiceListFragment);
                                    if (choiceListFragment.childNodes && choiceListFragment.childNodes.length > 0) {
                                        var activeItems = this._store.activeItems;
                                        var canAddItem = this._canAddItem(activeItems, this.input.value);
                                        if (canAddItem.response) {
                                            this.choiceList.append(choiceListFragment);
                                            this._highlightChoice();
                                        } else {
                                            var notice = this._getTemplate("notice", canAddItem.notice);
                                            this.choiceList.append(notice);
                                        }
                                    } else {
                                        var dropdownItem = void 0;
                                        notice = void 0;
                                        if (this._isSearching) {
                                            notice = typeof this.config.noResultsText === "function" ? this.config.noResultsText() : this.config.noResultsText;
                                            dropdownItem = this._getTemplate("notice", notice, "no-results");
                                        } else {
                                            notice = typeof this.config.noChoicesText === "function" ? this.config.noChoicesText() : this.config.noChoicesText;
                                            dropdownItem = this._getTemplate("notice", notice, "no-choices");
                                        }
                                        this.choiceList.append(dropdownItem);
                                    }
                                };
                                Choices.prototype._renderItems = function() {
                                    var activeItems = this._store.activeItems || [];
                                    this.itemList.clear();
                                    var itemListFragment = this._createItemsFragment(activeItems);
                                    if (itemListFragment.childNodes) this.itemList.append(itemListFragment);
                                };
                                Choices.prototype._createGroupsFragment = function(groups, choices, fragment) {
                                    var _this = this;
                                    if (fragment === void 0) fragment = document.createDocumentFragment();
                                    var getGroupChoices = function(group) {
                                        return choices.filter((function(choice) {
                                            if (_this._isSelectOneElement) return choice.groupId === group.id;
                                            return choice.groupId === group.id && (_this.config.renderSelectedChoices === "always" || !choice.selected);
                                        }));
                                    };
                                    if (this.config.shouldSort) groups.sort(this.config.sorter);
                                    groups.forEach((function(group) {
                                        var groupChoices = getGroupChoices(group);
                                        if (groupChoices.length >= 1) {
                                            var dropdownGroup = _this._getTemplate("choiceGroup", group);
                                            fragment.appendChild(dropdownGroup);
                                            _this._createChoicesFragment(groupChoices, fragment, true);
                                        }
                                    }));
                                    return fragment;
                                };
                                Choices.prototype._createChoicesFragment = function(choices, fragment, withinGroup) {
                                    var _this = this;
                                    if (fragment === void 0) fragment = document.createDocumentFragment();
                                    if (withinGroup === void 0) withinGroup = false;
                                    var _a = this.config, renderSelectedChoices = _a.renderSelectedChoices, searchResultLimit = _a.searchResultLimit, renderChoiceLimit = _a.renderChoiceLimit;
                                    var filter = this._isSearching ? utils_1.sortByScore : this.config.sorter;
                                    var appendChoice = function(choice) {
                                        var shouldRender = renderSelectedChoices === "auto" ? _this._isSelectOneElement || !choice.selected : true;
                                        if (shouldRender) {
                                            var dropdownItem = _this._getTemplate("choice", choice, _this.config.itemSelectText);
                                            fragment.appendChild(dropdownItem);
                                        }
                                    };
                                    var rendererableChoices = choices;
                                    if (renderSelectedChoices === "auto" && !this._isSelectOneElement) rendererableChoices = choices.filter((function(choice) {
                                        return !choice.selected;
                                    }));
                                    var _b = rendererableChoices.reduce((function(acc, choice) {
                                        if (choice.placeholder) acc.placeholderChoices.push(choice); else acc.normalChoices.push(choice);
                                        return acc;
                                    }), {
                                        placeholderChoices: [],
                                        normalChoices: []
                                    }), placeholderChoices = _b.placeholderChoices, normalChoices = _b.normalChoices;
                                    if (this.config.shouldSort || this._isSearching) normalChoices.sort(filter);
                                    var choiceLimit = rendererableChoices.length;
                                    var sortedChoices = this._isSelectOneElement ? __spreadArray(__spreadArray([], placeholderChoices, true), normalChoices, true) : normalChoices;
                                    if (this._isSearching) choiceLimit = searchResultLimit; else if (renderChoiceLimit && renderChoiceLimit > 0 && !withinGroup) choiceLimit = renderChoiceLimit;
                                    for (var i = 0; i < choiceLimit; i += 1) if (sortedChoices[i]) appendChoice(sortedChoices[i]);
                                    return fragment;
                                };
                                Choices.prototype._createItemsFragment = function(items, fragment) {
                                    var _this = this;
                                    if (fragment === void 0) fragment = document.createDocumentFragment();
                                    var _a = this.config, shouldSortItems = _a.shouldSortItems, sorter = _a.sorter, removeItemButton = _a.removeItemButton;
                                    if (shouldSortItems && !this._isSelectOneElement) items.sort(sorter);
                                    if (this._isTextElement) this.passedElement.value = items.map((function(_a) {
                                        var value = _a.value;
                                        return value;
                                    })).join(this.config.delimiter); else this.passedElement.options = items;
                                    var addItemToFragment = function(item) {
                                        var listItem = _this._getTemplate("item", item, removeItemButton);
                                        fragment.appendChild(listItem);
                                    };
                                    items.forEach(addItemToFragment);
                                    return fragment;
                                };
                                Choices.prototype._triggerChange = function(value) {
                                    if (value === void 0 || value === null) return;
                                    this.passedElement.triggerEvent(constants_1.EVENTS.change, {
                                        value
                                    });
                                };
                                Choices.prototype._selectPlaceholderChoice = function(placeholderChoice) {
                                    this._addItem({
                                        value: placeholderChoice.value,
                                        label: placeholderChoice.label,
                                        choiceId: placeholderChoice.id,
                                        groupId: placeholderChoice.groupId,
                                        placeholder: placeholderChoice.placeholder
                                    });
                                    this._triggerChange(placeholderChoice.value);
                                };
                                Choices.prototype._handleButtonAction = function(activeItems, element) {
                                    if (!activeItems || !element || !this.config.removeItems || !this.config.removeItemButton) return;
                                    var itemId = element.parentNode && element.parentNode.dataset.id;
                                    var itemToRemove = itemId && activeItems.find((function(item) {
                                        return item.id === parseInt(itemId, 10);
                                    }));
                                    if (!itemToRemove) return;
                                    this._removeItem(itemToRemove);
                                    this._triggerChange(itemToRemove.value);
                                    if (this._isSelectOneElement && this._store.placeholderChoice) this._selectPlaceholderChoice(this._store.placeholderChoice);
                                };
                                Choices.prototype._handleItemAction = function(activeItems, element, hasShiftKey) {
                                    var _this = this;
                                    if (hasShiftKey === void 0) hasShiftKey = false;
                                    if (!activeItems || !element || !this.config.removeItems || this._isSelectOneElement) return;
                                    var passedId = element.dataset.id;
                                    activeItems.forEach((function(item) {
                                        if (item.id === parseInt("".concat(passedId), 10) && !item.highlighted) _this.highlightItem(item); else if (!hasShiftKey && item.highlighted) _this.unhighlightItem(item);
                                    }));
                                    this.input.focus();
                                };
                                Choices.prototype._handleChoiceAction = function(activeItems, element) {
                                    if (!activeItems || !element) return;
                                    var id = element.dataset.id;
                                    var choice = id && this._store.getChoiceById(id);
                                    if (!choice) return;
                                    var passedKeyCode = activeItems[0] && activeItems[0].keyCode ? activeItems[0].keyCode : void 0;
                                    var hasActiveDropdown = this.dropdown.isActive;
                                    choice.keyCode = passedKeyCode;
                                    this.passedElement.triggerEvent(constants_1.EVENTS.choice, {
                                        choice
                                    });
                                    if (!choice.selected && !choice.disabled) {
                                        var canAddItem = this._canAddItem(activeItems, choice.value);
                                        if (canAddItem.response) {
                                            this._addItem({
                                                value: choice.value,
                                                label: choice.label,
                                                choiceId: choice.id,
                                                groupId: choice.groupId,
                                                customProperties: choice.customProperties,
                                                placeholder: choice.placeholder,
                                                keyCode: choice.keyCode
                                            });
                                            this._triggerChange(choice.value);
                                        }
                                    }
                                    this.clearInput();
                                    if (hasActiveDropdown && this._isSelectOneElement) {
                                        this.hideDropdown(true);
                                        this.containerOuter.focus();
                                    }
                                };
                                Choices.prototype._handleBackspace = function(activeItems) {
                                    if (!this.config.removeItems || !activeItems) return;
                                    var lastItem = activeItems[activeItems.length - 1];
                                    var hasHighlightedItems = activeItems.some((function(item) {
                                        return item.highlighted;
                                    }));
                                    if (this.config.editItems && !hasHighlightedItems && lastItem) {
                                        this.input.value = lastItem.value;
                                        this.input.setWidth();
                                        this._removeItem(lastItem);
                                        this._triggerChange(lastItem.value);
                                    } else {
                                        if (!hasHighlightedItems) this.highlightItem(lastItem, false);
                                        this.removeHighlightedItems(true);
                                    }
                                };
                                Choices.prototype._startLoading = function() {
                                    this._store.dispatch((0, misc_1.setIsLoading)(true));
                                };
                                Choices.prototype._stopLoading = function() {
                                    this._store.dispatch((0, misc_1.setIsLoading)(false));
                                };
                                Choices.prototype._handleLoadingState = function(setLoading) {
                                    if (setLoading === void 0) setLoading = true;
                                    var placeholderItem = this.itemList.getChild(".".concat(this.config.classNames.placeholder));
                                    if (setLoading) {
                                        this.disable();
                                        this.containerOuter.addLoadingState();
                                        if (this._isSelectOneElement) if (!placeholderItem) {
                                            placeholderItem = this._getTemplate("placeholder", this.config.loadingText);
                                            if (placeholderItem) this.itemList.append(placeholderItem);
                                        } else placeholderItem.innerHTML = this.config.loadingText; else this.input.placeholder = this.config.loadingText;
                                    } else {
                                        this.enable();
                                        this.containerOuter.removeLoadingState();
                                        if (this._isSelectOneElement) {
                                            if (placeholderItem) placeholderItem.innerHTML = this._placeholderValue || "";
                                        } else this.input.placeholder = this._placeholderValue || "";
                                    }
                                };
                                Choices.prototype._handleSearch = function(value) {
                                    if (!this.input.isFocussed) return;
                                    var choices = this._store.choices;
                                    var _a = this.config, searchFloor = _a.searchFloor, searchChoices = _a.searchChoices;
                                    var hasUnactiveChoices = choices.some((function(option) {
                                        return !option.active;
                                    }));
                                    if (value !== null && typeof value !== "undefined" && value.length >= searchFloor) {
                                        var resultCount = searchChoices ? this._searchChoices(value) : 0;
                                        this.passedElement.triggerEvent(constants_1.EVENTS.search, {
                                            value,
                                            resultCount
                                        });
                                    } else if (hasUnactiveChoices) {
                                        this._isSearching = false;
                                        this._store.dispatch((0, choices_1.activateChoices)(true));
                                    }
                                };
                                Choices.prototype._canAddItem = function(activeItems, value) {
                                    var canAddItem = true;
                                    var notice = typeof this.config.addItemText === "function" ? this.config.addItemText(value) : this.config.addItemText;
                                    if (!this._isSelectOneElement) {
                                        var isDuplicateValue = (0, utils_1.existsInArray)(activeItems, value);
                                        if (this.config.maxItemCount > 0 && this.config.maxItemCount <= activeItems.length) {
                                            canAddItem = false;
                                            notice = typeof this.config.maxItemText === "function" ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText;
                                        }
                                        if (!this.config.duplicateItemsAllowed && isDuplicateValue && canAddItem) {
                                            canAddItem = false;
                                            notice = typeof this.config.uniqueItemText === "function" ? this.config.uniqueItemText(value) : this.config.uniqueItemText;
                                        }
                                        if (this._isTextElement && this.config.addItems && canAddItem && typeof this.config.addItemFilter === "function" && !this.config.addItemFilter(value)) {
                                            canAddItem = false;
                                            notice = typeof this.config.customAddItemText === "function" ? this.config.customAddItemText(value) : this.config.customAddItemText;
                                        }
                                    }
                                    return {
                                        response: canAddItem,
                                        notice
                                    };
                                };
                                Choices.prototype._searchChoices = function(value) {
                                    var newValue = typeof value === "string" ? value.trim() : value;
                                    var currentValue = typeof this._currentValue === "string" ? this._currentValue.trim() : this._currentValue;
                                    if (newValue.length < 1 && newValue === "".concat(currentValue, " ")) return 0;
                                    var haystack = this._store.searchableChoices;
                                    var needle = newValue;
                                    var options = Object.assign(this.config.fuseOptions, {
                                        keys: __spreadArray([], this.config.searchFields, true),
                                        includeMatches: true
                                    });
                                    var fuse = new fuse_js_1.default(haystack, options);
                                    var results = fuse.search(needle);
                                    this._currentValue = newValue;
                                    this._highlightPosition = 0;
                                    this._isSearching = true;
                                    this._store.dispatch((0, choices_1.filterChoices)(results));
                                    return results.length;
                                };
                                Choices.prototype._addEventListeners = function() {
                                    var documentElement = document.documentElement;
                                    documentElement.addEventListener("touchend", this._onTouchEnd, true);
                                    this.containerOuter.element.addEventListener("keydown", this._onKeyDown, true);
                                    this.containerOuter.element.addEventListener("mousedown", this._onMouseDown, true);
                                    documentElement.addEventListener("click", this._onClick, {
                                        passive: true
                                    });
                                    documentElement.addEventListener("touchmove", this._onTouchMove, {
                                        passive: true
                                    });
                                    this.dropdown.element.addEventListener("mouseover", this._onMouseOver, {
                                        passive: true
                                    });
                                    if (this._isSelectOneElement) {
                                        this.containerOuter.element.addEventListener("focus", this._onFocus, {
                                            passive: true
                                        });
                                        this.containerOuter.element.addEventListener("blur", this._onBlur, {
                                            passive: true
                                        });
                                    }
                                    this.input.element.addEventListener("keyup", this._onKeyUp, {
                                        passive: true
                                    });
                                    this.input.element.addEventListener("focus", this._onFocus, {
                                        passive: true
                                    });
                                    this.input.element.addEventListener("blur", this._onBlur, {
                                        passive: true
                                    });
                                    if (this.input.element.form) this.input.element.form.addEventListener("reset", this._onFormReset, {
                                        passive: true
                                    });
                                    this.input.addEventListeners();
                                };
                                Choices.prototype._removeEventListeners = function() {
                                    var documentElement = document.documentElement;
                                    documentElement.removeEventListener("touchend", this._onTouchEnd, true);
                                    this.containerOuter.element.removeEventListener("keydown", this._onKeyDown, true);
                                    this.containerOuter.element.removeEventListener("mousedown", this._onMouseDown, true);
                                    documentElement.removeEventListener("click", this._onClick);
                                    documentElement.removeEventListener("touchmove", this._onTouchMove);
                                    this.dropdown.element.removeEventListener("mouseover", this._onMouseOver);
                                    if (this._isSelectOneElement) {
                                        this.containerOuter.element.removeEventListener("focus", this._onFocus);
                                        this.containerOuter.element.removeEventListener("blur", this._onBlur);
                                    }
                                    this.input.element.removeEventListener("keyup", this._onKeyUp);
                                    this.input.element.removeEventListener("focus", this._onFocus);
                                    this.input.element.removeEventListener("blur", this._onBlur);
                                    if (this.input.element.form) this.input.element.form.removeEventListener("reset", this._onFormReset);
                                    this.input.removeEventListeners();
                                };
                                Choices.prototype._onKeyDown = function(event) {
                                    var keyCode = event.keyCode;
                                    var activeItems = this._store.activeItems;
                                    var hasFocusedInput = this.input.isFocussed;
                                    var hasActiveDropdown = this.dropdown.isActive;
                                    var hasItems = this.itemList.hasChildren();
                                    var keyString = String.fromCharCode(keyCode);
                                    var wasPrintableChar = /[^\x00-\x1F]/.test(keyString);
                                    var BACK_KEY = constants_1.KEY_CODES.BACK_KEY, DELETE_KEY = constants_1.KEY_CODES.DELETE_KEY, ENTER_KEY = constants_1.KEY_CODES.ENTER_KEY, A_KEY = constants_1.KEY_CODES.A_KEY, ESC_KEY = constants_1.KEY_CODES.ESC_KEY, UP_KEY = constants_1.KEY_CODES.UP_KEY, DOWN_KEY = constants_1.KEY_CODES.DOWN_KEY, PAGE_UP_KEY = constants_1.KEY_CODES.PAGE_UP_KEY, PAGE_DOWN_KEY = constants_1.KEY_CODES.PAGE_DOWN_KEY;
                                    if (!this._isTextElement && !hasActiveDropdown && wasPrintableChar) {
                                        this.showDropdown();
                                        if (!this.input.isFocussed) this.input.value += event.key.toLowerCase();
                                    }
                                    switch (keyCode) {
                                      case A_KEY:
                                        return this._onSelectKey(event, hasItems);

                                      case ENTER_KEY:
                                        return this._onEnterKey(event, activeItems, hasActiveDropdown);

                                      case ESC_KEY:
                                        return this._onEscapeKey(hasActiveDropdown);

                                      case UP_KEY:
                                      case PAGE_UP_KEY:
                                      case DOWN_KEY:
                                      case PAGE_DOWN_KEY:
                                        return this._onDirectionKey(event, hasActiveDropdown);

                                      case DELETE_KEY:
                                      case BACK_KEY:
                                        return this._onDeleteKey(event, activeItems, hasFocusedInput);

                                      default:
                                    }
                                };
                                Choices.prototype._onKeyUp = function(_a) {
                                    var target = _a.target, keyCode = _a.keyCode;
                                    var value = this.input.value;
                                    var activeItems = this._store.activeItems;
                                    var canAddItem = this._canAddItem(activeItems, value);
                                    var backKey = constants_1.KEY_CODES.BACK_KEY, deleteKey = constants_1.KEY_CODES.DELETE_KEY;
                                    if (this._isTextElement) {
                                        var canShowDropdownNotice = canAddItem.notice && value;
                                        if (canShowDropdownNotice) {
                                            var dropdownItem = this._getTemplate("notice", canAddItem.notice);
                                            this.dropdown.element.innerHTML = dropdownItem.outerHTML;
                                            this.showDropdown(true);
                                        } else this.hideDropdown(true);
                                    } else {
                                        var wasRemovalKeyCode = keyCode === backKey || keyCode === deleteKey;
                                        var userHasRemovedValue = wasRemovalKeyCode && target && !target.value;
                                        var canReactivateChoices = !this._isTextElement && this._isSearching;
                                        var canSearch = this._canSearch && canAddItem.response;
                                        if (userHasRemovedValue && canReactivateChoices) {
                                            this._isSearching = false;
                                            this._store.dispatch((0, choices_1.activateChoices)(true));
                                        } else if (canSearch) this._handleSearch(this.input.rawValue);
                                    }
                                    this._canSearch = this.config.searchEnabled;
                                };
                                Choices.prototype._onSelectKey = function(event, hasItems) {
                                    var ctrlKey = event.ctrlKey, metaKey = event.metaKey;
                                    var hasCtrlDownKeyPressed = ctrlKey || metaKey;
                                    if (hasCtrlDownKeyPressed && hasItems) {
                                        this._canSearch = false;
                                        var shouldHightlightAll = this.config.removeItems && !this.input.value && this.input.element === document.activeElement;
                                        if (shouldHightlightAll) this.highlightAll();
                                    }
                                };
                                Choices.prototype._onEnterKey = function(event, activeItems, hasActiveDropdown) {
                                    var target = event.target;
                                    var enterKey = constants_1.KEY_CODES.ENTER_KEY;
                                    var targetWasButton = target && target.hasAttribute("data-button");
                                    if (this._isTextElement && target && target.value) {
                                        var value = this.input.value;
                                        var canAddItem = this._canAddItem(activeItems, value);
                                        if (canAddItem.response) {
                                            this.hideDropdown(true);
                                            this._addItem({
                                                value
                                            });
                                            this._triggerChange(value);
                                            this.clearInput();
                                        }
                                    }
                                    if (targetWasButton) {
                                        this._handleButtonAction(activeItems, target);
                                        event.preventDefault();
                                    }
                                    if (hasActiveDropdown) {
                                        var highlightedChoice = this.dropdown.getChild(".".concat(this.config.classNames.highlightedState));
                                        if (highlightedChoice) {
                                            if (activeItems[0]) activeItems[0].keyCode = enterKey;
                                            this._handleChoiceAction(activeItems, highlightedChoice);
                                        }
                                        event.preventDefault();
                                    } else if (this._isSelectOneElement) {
                                        this.showDropdown();
                                        event.preventDefault();
                                    }
                                };
                                Choices.prototype._onEscapeKey = function(hasActiveDropdown) {
                                    if (hasActiveDropdown) {
                                        this.hideDropdown(true);
                                        this.containerOuter.focus();
                                    }
                                };
                                Choices.prototype._onDirectionKey = function(event, hasActiveDropdown) {
                                    var keyCode = event.keyCode, metaKey = event.metaKey;
                                    var downKey = constants_1.KEY_CODES.DOWN_KEY, pageUpKey = constants_1.KEY_CODES.PAGE_UP_KEY, pageDownKey = constants_1.KEY_CODES.PAGE_DOWN_KEY;
                                    if (hasActiveDropdown || this._isSelectOneElement) {
                                        this.showDropdown();
                                        this._canSearch = false;
                                        var directionInt = keyCode === downKey || keyCode === pageDownKey ? 1 : -1;
                                        var skipKey = metaKey || keyCode === pageDownKey || keyCode === pageUpKey;
                                        var selectableChoiceIdentifier = "[data-choice-selectable]";
                                        var nextEl = void 0;
                                        if (skipKey) if (directionInt > 0) nextEl = this.dropdown.element.querySelector("".concat(selectableChoiceIdentifier, ":last-of-type")); else nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier); else {
                                            var currentEl = this.dropdown.element.querySelector(".".concat(this.config.classNames.highlightedState));
                                            if (currentEl) nextEl = (0, utils_1.getAdjacentEl)(currentEl, selectableChoiceIdentifier, directionInt); else nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
                                        }
                                        if (nextEl) {
                                            if (!(0, utils_1.isScrolledIntoView)(nextEl, this.choiceList.element, directionInt)) this.choiceList.scrollToChildElement(nextEl, directionInt);
                                            this._highlightChoice(nextEl);
                                        }
                                        event.preventDefault();
                                    }
                                };
                                Choices.prototype._onDeleteKey = function(event, activeItems, hasFocusedInput) {
                                    var target = event.target;
                                    if (!this._isSelectOneElement && !target.value && hasFocusedInput) {
                                        this._handleBackspace(activeItems);
                                        event.preventDefault();
                                    }
                                };
                                Choices.prototype._onTouchMove = function() {
                                    if (this._wasTap) this._wasTap = false;
                                };
                                Choices.prototype._onTouchEnd = function(event) {
                                    var target = (event || event.touches[0]).target;
                                    var touchWasWithinContainer = this._wasTap && this.containerOuter.element.contains(target);
                                    if (touchWasWithinContainer) {
                                        var containerWasExactTarget = target === this.containerOuter.element || target === this.containerInner.element;
                                        if (containerWasExactTarget) if (this._isTextElement) this.input.focus(); else if (this._isSelectMultipleElement) this.showDropdown();
                                        event.stopPropagation();
                                    }
                                    this._wasTap = true;
                                };
                                Choices.prototype._onMouseDown = function(event) {
                                    var target = event.target;
                                    if (!(target instanceof HTMLElement)) return;
                                    if (IS_IE11 && this.choiceList.element.contains(target)) {
                                        var firstChoice = this.choiceList.element.firstElementChild;
                                        var isOnScrollbar = this._direction === "ltr" ? event.offsetX >= firstChoice.offsetWidth : event.offsetX < firstChoice.offsetLeft;
                                        this._isScrollingOnIe = isOnScrollbar;
                                    }
                                    if (target === this.input.element) return;
                                    var item = target.closest("[data-button],[data-item],[data-choice]");
                                    if (item instanceof HTMLElement) {
                                        var hasShiftKey = event.shiftKey;
                                        var activeItems = this._store.activeItems;
                                        var dataset = item.dataset;
                                        if ("button" in dataset) this._handleButtonAction(activeItems, item); else if ("item" in dataset) this._handleItemAction(activeItems, item, hasShiftKey); else if ("choice" in dataset) this._handleChoiceAction(activeItems, item);
                                    }
                                    event.preventDefault();
                                };
                                Choices.prototype._onMouseOver = function(_a) {
                                    var target = _a.target;
                                    if (target instanceof HTMLElement && "choice" in target.dataset) this._highlightChoice(target);
                                };
                                Choices.prototype._onClick = function(_a) {
                                    var target = _a.target;
                                    var clickWasWithinContainer = this.containerOuter.element.contains(target);
                                    if (clickWasWithinContainer) {
                                        if (!this.dropdown.isActive && !this.containerOuter.isDisabled) if (this._isTextElement) {
                                            if (document.activeElement !== this.input.element) this.input.focus();
                                        } else {
                                            this.showDropdown();
                                            this.containerOuter.focus();
                                        } else if (this._isSelectOneElement && target !== this.input.element && !this.dropdown.element.contains(target)) this.hideDropdown();
                                    } else {
                                        var hasHighlightedItems = this._store.highlightedActiveItems.length > 0;
                                        if (hasHighlightedItems) this.unhighlightAll();
                                        this.containerOuter.removeFocusState();
                                        this.hideDropdown(true);
                                    }
                                };
                                Choices.prototype._onFocus = function(_a) {
                                    var _b;
                                    var _this = this;
                                    var target = _a.target;
                                    var focusWasWithinContainer = target && this.containerOuter.element.contains(target);
                                    if (!focusWasWithinContainer) return;
                                    var focusActions = (_b = {}, _b[constants_1.TEXT_TYPE] = function() {
                                        if (target === _this.input.element) _this.containerOuter.addFocusState();
                                    }, _b[constants_1.SELECT_ONE_TYPE] = function() {
                                        _this.containerOuter.addFocusState();
                                        if (target === _this.input.element) _this.showDropdown(true);
                                    }, _b[constants_1.SELECT_MULTIPLE_TYPE] = function() {
                                        if (target === _this.input.element) {
                                            _this.showDropdown(true);
                                            _this.containerOuter.addFocusState();
                                        }
                                    }, _b);
                                    focusActions[this.passedElement.element.type]();
                                };
                                Choices.prototype._onBlur = function(_a) {
                                    var _b;
                                    var _this = this;
                                    var target = _a.target;
                                    var blurWasWithinContainer = target && this.containerOuter.element.contains(target);
                                    if (blurWasWithinContainer && !this._isScrollingOnIe) {
                                        var activeItems = this._store.activeItems;
                                        var hasHighlightedItems_1 = activeItems.some((function(item) {
                                            return item.highlighted;
                                        }));
                                        var blurActions = (_b = {}, _b[constants_1.TEXT_TYPE] = function() {
                                            if (target === _this.input.element) {
                                                _this.containerOuter.removeFocusState();
                                                if (hasHighlightedItems_1) _this.unhighlightAll();
                                                _this.hideDropdown(true);
                                            }
                                        }, _b[constants_1.SELECT_ONE_TYPE] = function() {
                                            _this.containerOuter.removeFocusState();
                                            if (target === _this.input.element || target === _this.containerOuter.element && !_this._canSearch) _this.hideDropdown(true);
                                        }, _b[constants_1.SELECT_MULTIPLE_TYPE] = function() {
                                            if (target === _this.input.element) {
                                                _this.containerOuter.removeFocusState();
                                                _this.hideDropdown(true);
                                                if (hasHighlightedItems_1) _this.unhighlightAll();
                                            }
                                        }, _b);
                                        blurActions[this.passedElement.element.type]();
                                    } else {
                                        this._isScrollingOnIe = false;
                                        this.input.element.focus();
                                    }
                                };
                                Choices.prototype._onFormReset = function() {
                                    this._store.dispatch((0, misc_1.resetTo)(this._initialState));
                                };
                                Choices.prototype._highlightChoice = function(el) {
                                    var _this = this;
                                    if (el === void 0) el = null;
                                    var choices = Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]"));
                                    if (!choices.length) return;
                                    var passedEl = el;
                                    var highlightedChoices = Array.from(this.dropdown.element.querySelectorAll(".".concat(this.config.classNames.highlightedState)));
                                    highlightedChoices.forEach((function(choice) {
                                        choice.classList.remove(_this.config.classNames.highlightedState);
                                        choice.setAttribute("aria-selected", "false");
                                    }));
                                    if (passedEl) this._highlightPosition = choices.indexOf(passedEl); else {
                                        if (choices.length > this._highlightPosition) passedEl = choices[this._highlightPosition]; else passedEl = choices[choices.length - 1];
                                        if (!passedEl) passedEl = choices[0];
                                    }
                                    passedEl.classList.add(this.config.classNames.highlightedState);
                                    passedEl.setAttribute("aria-selected", "true");
                                    this.passedElement.triggerEvent(constants_1.EVENTS.highlightChoice, {
                                        el: passedEl
                                    });
                                    if (this.dropdown.isActive) {
                                        this.input.setActiveDescendant(passedEl.id);
                                        this.containerOuter.setActiveDescendant(passedEl.id);
                                    }
                                };
                                Choices.prototype._addItem = function(_a) {
                                    var value = _a.value, _b = _a.label, label = _b === void 0 ? null : _b, _c = _a.choiceId, choiceId = _c === void 0 ? -1 : _c, _d = _a.groupId, groupId = _d === void 0 ? -1 : _d, _e = _a.customProperties, customProperties = _e === void 0 ? {} : _e, _f = _a.placeholder, placeholder = _f === void 0 ? false : _f, _g = _a.keyCode, keyCode = _g === void 0 ? -1 : _g;
                                    var passedValue = typeof value === "string" ? value.trim() : value;
                                    var items = this._store.items;
                                    var passedLabel = label || passedValue;
                                    var passedOptionId = choiceId || -1;
                                    var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
                                    var id = items ? items.length + 1 : 1;
                                    if (this.config.prependValue) passedValue = this.config.prependValue + passedValue.toString();
                                    if (this.config.appendValue) passedValue += this.config.appendValue.toString();
                                    this._store.dispatch((0, items_1.addItem)({
                                        value: passedValue,
                                        label: passedLabel,
                                        id,
                                        choiceId: passedOptionId,
                                        groupId,
                                        customProperties,
                                        placeholder,
                                        keyCode
                                    }));
                                    if (this._isSelectOneElement) this.removeActiveItems(id);
                                    this.passedElement.triggerEvent(constants_1.EVENTS.addItem, {
                                        id,
                                        value: passedValue,
                                        label: passedLabel,
                                        customProperties,
                                        groupValue: group && group.value ? group.value : null,
                                        keyCode
                                    });
                                };
                                Choices.prototype._removeItem = function(item) {
                                    var id = item.id, value = item.value, label = item.label, customProperties = item.customProperties, choiceId = item.choiceId, groupId = item.groupId;
                                    var group = groupId && groupId >= 0 ? this._store.getGroupById(groupId) : null;
                                    if (!id || !choiceId) return;
                                    this._store.dispatch((0, items_1.removeItem)(id, choiceId));
                                    this.passedElement.triggerEvent(constants_1.EVENTS.removeItem, {
                                        id,
                                        value,
                                        label,
                                        customProperties,
                                        groupValue: group && group.value ? group.value : null
                                    });
                                };
                                Choices.prototype._addChoice = function(_a) {
                                    var value = _a.value, _b = _a.label, label = _b === void 0 ? null : _b, _c = _a.isSelected, isSelected = _c === void 0 ? false : _c, _d = _a.isDisabled, isDisabled = _d === void 0 ? false : _d, _e = _a.groupId, groupId = _e === void 0 ? -1 : _e, _f = _a.customProperties, customProperties = _f === void 0 ? {} : _f, _g = _a.placeholder, placeholder = _g === void 0 ? false : _g, _h = _a.keyCode, keyCode = _h === void 0 ? -1 : _h;
                                    if (typeof value === "undefined" || value === null) return;
                                    var choices = this._store.choices;
                                    var choiceLabel = label || value;
                                    var choiceId = choices ? choices.length + 1 : 1;
                                    var choiceElementId = "".concat(this._baseId, "-").concat(this._idNames.itemChoice, "-").concat(choiceId);
                                    this._store.dispatch((0, choices_1.addChoice)({
                                        id: choiceId,
                                        groupId,
                                        elementId: choiceElementId,
                                        value,
                                        label: choiceLabel,
                                        disabled: isDisabled,
                                        customProperties,
                                        placeholder,
                                        keyCode
                                    }));
                                    if (isSelected) this._addItem({
                                        value,
                                        label: choiceLabel,
                                        choiceId,
                                        customProperties,
                                        placeholder,
                                        keyCode
                                    });
                                };
                                Choices.prototype._addGroup = function(_a) {
                                    var _this = this;
                                    var group = _a.group, id = _a.id, _b = _a.valueKey, valueKey = _b === void 0 ? "value" : _b, _c = _a.labelKey, labelKey = _c === void 0 ? "label" : _c;
                                    var groupChoices = (0, utils_1.isType)("Object", group) ? group.choices : Array.from(group.getElementsByTagName("OPTION"));
                                    var groupId = id || Math.floor((new Date).valueOf() * Math.random());
                                    var isDisabled = group.disabled ? group.disabled : false;
                                    if (groupChoices) {
                                        this._store.dispatch((0, groups_1.addGroup)({
                                            value: group.label,
                                            id: groupId,
                                            active: true,
                                            disabled: isDisabled
                                        }));
                                        var addGroupChoices = function(choice) {
                                            var isOptDisabled = choice.disabled || choice.parentNode && choice.parentNode.disabled;
                                            _this._addChoice({
                                                value: choice[valueKey],
                                                label: (0, utils_1.isType)("Object", choice) ? choice[labelKey] : choice.innerHTML,
                                                isSelected: choice.selected,
                                                isDisabled: isOptDisabled,
                                                groupId,
                                                customProperties: choice.customProperties,
                                                placeholder: choice.placeholder
                                            });
                                        };
                                        groupChoices.forEach(addGroupChoices);
                                    } else this._store.dispatch((0, groups_1.addGroup)({
                                        value: group.label,
                                        id: group.id,
                                        active: false,
                                        disabled: group.disabled
                                    }));
                                };
                                Choices.prototype._getTemplate = function(template) {
                                    var _a;
                                    var args = [];
                                    for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
                                    return (_a = this._templates[template]).call.apply(_a, __spreadArray([ this, this.config ], args, false));
                                };
                                Choices.prototype._createTemplates = function() {
                                    var callbackOnCreateTemplates = this.config.callbackOnCreateTemplates;
                                    var userTemplates = {};
                                    if (callbackOnCreateTemplates && typeof callbackOnCreateTemplates === "function") userTemplates = callbackOnCreateTemplates.call(this, utils_1.strToEl);
                                    this._templates = (0, deepmerge_1.default)(templates_1.default, userTemplates);
                                };
                                Choices.prototype._createElements = function() {
                                    this.containerOuter = new components_1.Container({
                                        element: this._getTemplate("containerOuter", this._direction, this._isSelectElement, this._isSelectOneElement, this.config.searchEnabled, this.passedElement.element.type, this.config.labelId),
                                        classNames: this.config.classNames,
                                        type: this.passedElement.element.type,
                                        position: this.config.position
                                    });
                                    this.containerInner = new components_1.Container({
                                        element: this._getTemplate("containerInner"),
                                        classNames: this.config.classNames,
                                        type: this.passedElement.element.type,
                                        position: this.config.position
                                    });
                                    this.input = new components_1.Input({
                                        element: this._getTemplate("input", this._placeholderValue),
                                        classNames: this.config.classNames,
                                        type: this.passedElement.element.type,
                                        preventPaste: !this.config.paste
                                    });
                                    this.choiceList = new components_1.List({
                                        element: this._getTemplate("choiceList", this._isSelectOneElement)
                                    });
                                    this.itemList = new components_1.List({
                                        element: this._getTemplate("itemList", this._isSelectOneElement)
                                    });
                                    this.dropdown = new components_1.Dropdown({
                                        element: this._getTemplate("dropdown"),
                                        classNames: this.config.classNames,
                                        type: this.passedElement.element.type
                                    });
                                };
                                Choices.prototype._createStructure = function() {
                                    this.passedElement.conceal();
                                    this.containerInner.wrap(this.passedElement.element);
                                    this.containerOuter.wrap(this.containerInner.element);
                                    if (this._isSelectOneElement) this.input.placeholder = this.config.searchPlaceholderValue || ""; else if (this._placeholderValue) {
                                        this.input.placeholder = this._placeholderValue;
                                        this.input.setWidth();
                                    }
                                    this.containerOuter.element.appendChild(this.containerInner.element);
                                    this.containerOuter.element.appendChild(this.dropdown.element);
                                    this.containerInner.element.appendChild(this.itemList.element);
                                    if (!this._isTextElement) this.dropdown.element.appendChild(this.choiceList.element);
                                    if (!this._isSelectOneElement) this.containerInner.element.appendChild(this.input.element); else if (this.config.searchEnabled) this.dropdown.element.insertBefore(this.input.element, this.dropdown.element.firstChild);
                                    if (this._isSelectElement) {
                                        this._highlightPosition = 0;
                                        this._isSearching = false;
                                        this._startLoading();
                                        if (this._presetGroups.length) this._addPredefinedGroups(this._presetGroups); else this._addPredefinedChoices(this._presetChoices);
                                        this._stopLoading();
                                    }
                                    if (this._isTextElement) this._addPredefinedItems(this._presetItems);
                                };
                                Choices.prototype._addPredefinedGroups = function(groups) {
                                    var _this = this;
                                    var placeholderChoice = this.passedElement.placeholderOption;
                                    if (placeholderChoice && placeholderChoice.parentNode && placeholderChoice.parentNode.tagName === "SELECT") this._addChoice({
                                        value: placeholderChoice.value,
                                        label: placeholderChoice.innerHTML,
                                        isSelected: placeholderChoice.selected,
                                        isDisabled: placeholderChoice.disabled,
                                        placeholder: true
                                    });
                                    groups.forEach((function(group) {
                                        return _this._addGroup({
                                            group,
                                            id: group.id || null
                                        });
                                    }));
                                };
                                Choices.prototype._addPredefinedChoices = function(choices) {
                                    var _this = this;
                                    if (this.config.shouldSort) choices.sort(this.config.sorter);
                                    var hasSelectedChoice = choices.some((function(choice) {
                                        return choice.selected;
                                    }));
                                    var firstEnabledChoiceIndex = choices.findIndex((function(choice) {
                                        return choice.disabled === void 0 || !choice.disabled;
                                    }));
                                    choices.forEach((function(choice, index) {
                                        var _a = choice.value, value = _a === void 0 ? "" : _a, label = choice.label, customProperties = choice.customProperties, placeholder = choice.placeholder;
                                        if (_this._isSelectElement) if (choice.choices) _this._addGroup({
                                            group: choice,
                                            id: choice.id || null
                                        }); else {
                                            var shouldPreselect = _this._isSelectOneElement && !hasSelectedChoice && index === firstEnabledChoiceIndex;
                                            var isSelected = shouldPreselect ? true : choice.selected;
                                            var isDisabled = choice.disabled;
                                            _this._addChoice({
                                                value,
                                                label,
                                                isSelected: !!isSelected,
                                                isDisabled: !!isDisabled,
                                                placeholder: !!placeholder,
                                                customProperties
                                            });
                                        } else _this._addChoice({
                                            value,
                                            label,
                                            isSelected: !!choice.selected,
                                            isDisabled: !!choice.disabled,
                                            placeholder: !!choice.placeholder,
                                            customProperties
                                        });
                                    }));
                                };
                                Choices.prototype._addPredefinedItems = function(items) {
                                    var _this = this;
                                    items.forEach((function(item) {
                                        if (typeof item === "object" && item.value) _this._addItem({
                                            value: item.value,
                                            label: item.label,
                                            choiceId: item.id,
                                            customProperties: item.customProperties,
                                            placeholder: item.placeholder
                                        });
                                        if (typeof item === "string") _this._addItem({
                                            value: item
                                        });
                                    }));
                                };
                                Choices.prototype._setChoiceOrItem = function(item) {
                                    var _this = this;
                                    var itemType = (0, utils_1.getType)(item).toLowerCase();
                                    var handleType = {
                                        object: function() {
                                            if (!item.value) return;
                                            if (!_this._isTextElement) _this._addChoice({
                                                value: item.value,
                                                label: item.label,
                                                isSelected: true,
                                                isDisabled: false,
                                                customProperties: item.customProperties,
                                                placeholder: item.placeholder
                                            }); else _this._addItem({
                                                value: item.value,
                                                label: item.label,
                                                choiceId: item.id,
                                                customProperties: item.customProperties,
                                                placeholder: item.placeholder
                                            });
                                        },
                                        string: function() {
                                            if (!_this._isTextElement) _this._addChoice({
                                                value: item,
                                                label: item,
                                                isSelected: true,
                                                isDisabled: false
                                            }); else _this._addItem({
                                                value: item
                                            });
                                        }
                                    };
                                    handleType[itemType]();
                                };
                                Choices.prototype._findAndSelectChoiceByValue = function(value) {
                                    var _this = this;
                                    var choices = this._store.choices;
                                    var foundChoice = choices.find((function(choice) {
                                        return _this.config.valueComparer(choice.value, value);
                                    }));
                                    if (foundChoice && !foundChoice.selected) this._addItem({
                                        value: foundChoice.value,
                                        label: foundChoice.label,
                                        choiceId: foundChoice.id,
                                        groupId: foundChoice.groupId,
                                        customProperties: foundChoice.customProperties,
                                        placeholder: foundChoice.placeholder,
                                        keyCode: foundChoice.keyCode
                                    });
                                };
                                Choices.prototype._generatePlaceholderValue = function() {
                                    if (this._isSelectElement && this.passedElement.placeholderOption) {
                                        var placeholderOption = this.passedElement.placeholderOption;
                                        return placeholderOption ? placeholderOption.text : null;
                                    }
                                    var _a = this.config, placeholder = _a.placeholder, placeholderValue = _a.placeholderValue;
                                    var dataset = this.passedElement.element.dataset;
                                    if (placeholder) {
                                        if (placeholderValue) return placeholderValue;
                                        if (dataset.placeholder) return dataset.placeholder;
                                    }
                                    return null;
                                };
                                return Choices;
                            }();
                            exports["default"] = Choices;
                        },
                        613: function(__unused_webpack_module, exports, __nested_webpack_require_74916__) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var utils_1 = __nested_webpack_require_74916__(799);
                            var constants_1 = __nested_webpack_require_74916__(883);
                            var Container = function() {
                                function Container(_a) {
                                    var element = _a.element, type = _a.type, classNames = _a.classNames, position = _a.position;
                                    this.element = element;
                                    this.classNames = classNames;
                                    this.type = type;
                                    this.position = position;
                                    this.isOpen = false;
                                    this.isFlipped = false;
                                    this.isFocussed = false;
                                    this.isDisabled = false;
                                    this.isLoading = false;
                                    this._onFocus = this._onFocus.bind(this);
                                    this._onBlur = this._onBlur.bind(this);
                                }
                                Container.prototype.addEventListeners = function() {
                                    this.element.addEventListener("focus", this._onFocus);
                                    this.element.addEventListener("blur", this._onBlur);
                                };
                                Container.prototype.removeEventListeners = function() {
                                    this.element.removeEventListener("focus", this._onFocus);
                                    this.element.removeEventListener("blur", this._onBlur);
                                };
                                Container.prototype.shouldFlip = function(dropdownPos) {
                                    if (typeof dropdownPos !== "number") return false;
                                    var shouldFlip = false;
                                    if (this.position === "auto") shouldFlip = !window.matchMedia("(min-height: ".concat(dropdownPos + 1, "px)")).matches; else if (this.position === "top") shouldFlip = true;
                                    return shouldFlip;
                                };
                                Container.prototype.setActiveDescendant = function(activeDescendantID) {
                                    this.element.setAttribute("aria-activedescendant", activeDescendantID);
                                };
                                Container.prototype.removeActiveDescendant = function() {
                                    this.element.removeAttribute("aria-activedescendant");
                                };
                                Container.prototype.open = function(dropdownPos) {
                                    this.element.classList.add(this.classNames.openState);
                                    this.element.setAttribute("aria-expanded", "true");
                                    this.isOpen = true;
                                    if (this.shouldFlip(dropdownPos)) {
                                        this.element.classList.add(this.classNames.flippedState);
                                        this.isFlipped = true;
                                    }
                                };
                                Container.prototype.close = function() {
                                    this.element.classList.remove(this.classNames.openState);
                                    this.element.setAttribute("aria-expanded", "false");
                                    this.removeActiveDescendant();
                                    this.isOpen = false;
                                    if (this.isFlipped) {
                                        this.element.classList.remove(this.classNames.flippedState);
                                        this.isFlipped = false;
                                    }
                                };
                                Container.prototype.focus = function() {
                                    if (!this.isFocussed) this.element.focus();
                                };
                                Container.prototype.addFocusState = function() {
                                    this.element.classList.add(this.classNames.focusState);
                                };
                                Container.prototype.removeFocusState = function() {
                                    this.element.classList.remove(this.classNames.focusState);
                                };
                                Container.prototype.enable = function() {
                                    this.element.classList.remove(this.classNames.disabledState);
                                    this.element.removeAttribute("aria-disabled");
                                    if (this.type === constants_1.SELECT_ONE_TYPE) this.element.setAttribute("tabindex", "0");
                                    this.isDisabled = false;
                                };
                                Container.prototype.disable = function() {
                                    this.element.classList.add(this.classNames.disabledState);
                                    this.element.setAttribute("aria-disabled", "true");
                                    if (this.type === constants_1.SELECT_ONE_TYPE) this.element.setAttribute("tabindex", "-1");
                                    this.isDisabled = true;
                                };
                                Container.prototype.wrap = function(element) {
                                    (0, utils_1.wrap)(element, this.element);
                                };
                                Container.prototype.unwrap = function(element) {
                                    if (this.element.parentNode) {
                                        this.element.parentNode.insertBefore(element, this.element);
                                        this.element.parentNode.removeChild(this.element);
                                    }
                                };
                                Container.prototype.addLoadingState = function() {
                                    this.element.classList.add(this.classNames.loadingState);
                                    this.element.setAttribute("aria-busy", "true");
                                    this.isLoading = true;
                                };
                                Container.prototype.removeLoadingState = function() {
                                    this.element.classList.remove(this.classNames.loadingState);
                                    this.element.removeAttribute("aria-busy");
                                    this.isLoading = false;
                                };
                                Container.prototype._onFocus = function() {
                                    this.isFocussed = true;
                                };
                                Container.prototype._onBlur = function() {
                                    this.isFocussed = false;
                                };
                                return Container;
                            }();
                            exports["default"] = Container;
                        },
                        217: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var Dropdown = function() {
                                function Dropdown(_a) {
                                    var element = _a.element, type = _a.type, classNames = _a.classNames;
                                    this.element = element;
                                    this.classNames = classNames;
                                    this.type = type;
                                    this.isActive = false;
                                }
                                Object.defineProperty(Dropdown.prototype, "distanceFromTopWindow", {
                                    get: function() {
                                        return this.element.getBoundingClientRect().bottom;
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Dropdown.prototype.getChild = function(selector) {
                                    return this.element.querySelector(selector);
                                };
                                Dropdown.prototype.show = function() {
                                    this.element.classList.add(this.classNames.activeState);
                                    this.element.setAttribute("aria-expanded", "true");
                                    this.isActive = true;
                                    return this;
                                };
                                Dropdown.prototype.hide = function() {
                                    this.element.classList.remove(this.classNames.activeState);
                                    this.element.setAttribute("aria-expanded", "false");
                                    this.isActive = false;
                                    return this;
                                };
                                return Dropdown;
                            }();
                            exports["default"] = Dropdown;
                        },
                        520: function(__unused_webpack_module, exports, __nested_webpack_require_81090__) {
                            var __importDefault = this && this.__importDefault || function(mod) {
                                return mod && mod.__esModule ? mod : {
                                    default: mod
                                };
                            };
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.WrappedSelect = exports.WrappedInput = exports.List = exports.Input = exports.Container = exports.Dropdown = void 0;
                            var dropdown_1 = __importDefault(__nested_webpack_require_81090__(217));
                            exports.Dropdown = dropdown_1.default;
                            var container_1 = __importDefault(__nested_webpack_require_81090__(613));
                            exports.Container = container_1.default;
                            var input_1 = __importDefault(__nested_webpack_require_81090__(11));
                            exports.Input = input_1.default;
                            var list_1 = __importDefault(__nested_webpack_require_81090__(624));
                            exports.List = list_1.default;
                            var wrapped_input_1 = __importDefault(__nested_webpack_require_81090__(541));
                            exports.WrappedInput = wrapped_input_1.default;
                            var wrapped_select_1 = __importDefault(__nested_webpack_require_81090__(982));
                            exports.WrappedSelect = wrapped_select_1.default;
                        },
                        11: function(__unused_webpack_module, exports, __nested_webpack_require_82125__) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var utils_1 = __nested_webpack_require_82125__(799);
                            var constants_1 = __nested_webpack_require_82125__(883);
                            var Input = function() {
                                function Input(_a) {
                                    var element = _a.element, type = _a.type, classNames = _a.classNames, preventPaste = _a.preventPaste;
                                    this.element = element;
                                    this.type = type;
                                    this.classNames = classNames;
                                    this.preventPaste = preventPaste;
                                    this.isFocussed = this.element.isEqualNode(document.activeElement);
                                    this.isDisabled = element.disabled;
                                    this._onPaste = this._onPaste.bind(this);
                                    this._onInput = this._onInput.bind(this);
                                    this._onFocus = this._onFocus.bind(this);
                                    this._onBlur = this._onBlur.bind(this);
                                }
                                Object.defineProperty(Input.prototype, "placeholder", {
                                    set: function(placeholder) {
                                        this.element.placeholder = placeholder;
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Input.prototype, "value", {
                                    get: function() {
                                        return (0, utils_1.sanitise)(this.element.value);
                                    },
                                    set: function(value) {
                                        this.element.value = value;
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Input.prototype, "rawValue", {
                                    get: function() {
                                        return this.element.value;
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Input.prototype.addEventListeners = function() {
                                    this.element.addEventListener("paste", this._onPaste);
                                    this.element.addEventListener("input", this._onInput, {
                                        passive: true
                                    });
                                    this.element.addEventListener("focus", this._onFocus, {
                                        passive: true
                                    });
                                    this.element.addEventListener("blur", this._onBlur, {
                                        passive: true
                                    });
                                };
                                Input.prototype.removeEventListeners = function() {
                                    this.element.removeEventListener("input", this._onInput);
                                    this.element.removeEventListener("paste", this._onPaste);
                                    this.element.removeEventListener("focus", this._onFocus);
                                    this.element.removeEventListener("blur", this._onBlur);
                                };
                                Input.prototype.enable = function() {
                                    this.element.removeAttribute("disabled");
                                    this.isDisabled = false;
                                };
                                Input.prototype.disable = function() {
                                    this.element.setAttribute("disabled", "");
                                    this.isDisabled = true;
                                };
                                Input.prototype.focus = function() {
                                    if (!this.isFocussed) this.element.focus();
                                };
                                Input.prototype.blur = function() {
                                    if (this.isFocussed) this.element.blur();
                                };
                                Input.prototype.clear = function(setWidth) {
                                    if (setWidth === void 0) setWidth = true;
                                    if (this.element.value) this.element.value = "";
                                    if (setWidth) this.setWidth();
                                    return this;
                                };
                                Input.prototype.setWidth = function() {
                                    var _a = this.element, style = _a.style, value = _a.value, placeholder = _a.placeholder;
                                    style.minWidth = "".concat(placeholder.length + 1, "ch");
                                    style.width = "".concat(value.length + 1, "ch");
                                };
                                Input.prototype.setActiveDescendant = function(activeDescendantID) {
                                    this.element.setAttribute("aria-activedescendant", activeDescendantID);
                                };
                                Input.prototype.removeActiveDescendant = function() {
                                    this.element.removeAttribute("aria-activedescendant");
                                };
                                Input.prototype._onInput = function() {
                                    if (this.type !== constants_1.SELECT_ONE_TYPE) this.setWidth();
                                };
                                Input.prototype._onPaste = function(event) {
                                    if (this.preventPaste) event.preventDefault();
                                };
                                Input.prototype._onFocus = function() {
                                    this.isFocussed = true;
                                };
                                Input.prototype._onBlur = function() {
                                    this.isFocussed = false;
                                };
                                return Input;
                            }();
                            exports["default"] = Input;
                        },
                        624: function(__unused_webpack_module, exports, __nested_webpack_require_86127__) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var constants_1 = __nested_webpack_require_86127__(883);
                            var List = function() {
                                function List(_a) {
                                    var element = _a.element;
                                    this.element = element;
                                    this.scrollPos = this.element.scrollTop;
                                    this.height = this.element.offsetHeight;
                                }
                                List.prototype.clear = function() {
                                    this.element.innerHTML = "";
                                };
                                List.prototype.append = function(node) {
                                    this.element.appendChild(node);
                                };
                                List.prototype.getChild = function(selector) {
                                    return this.element.querySelector(selector);
                                };
                                List.prototype.hasChildren = function() {
                                    return this.element.hasChildNodes();
                                };
                                List.prototype.scrollToTop = function() {
                                    this.element.scrollTop = 0;
                                };
                                List.prototype.scrollToChildElement = function(element, direction) {
                                    var _this = this;
                                    if (!element) return;
                                    var listHeight = this.element.offsetHeight;
                                    var listScrollPosition = this.element.scrollTop + listHeight;
                                    var elementHeight = element.offsetHeight;
                                    var elementPos = element.offsetTop + elementHeight;
                                    var destination = direction > 0 ? this.element.scrollTop + elementPos - listScrollPosition : element.offsetTop;
                                    requestAnimationFrame((function() {
                                        _this._animateScroll(destination, direction);
                                    }));
                                };
                                List.prototype._scrollDown = function(scrollPos, strength, destination) {
                                    var easing = (destination - scrollPos) / strength;
                                    var distance = easing > 1 ? easing : 1;
                                    this.element.scrollTop = scrollPos + distance;
                                };
                                List.prototype._scrollUp = function(scrollPos, strength, destination) {
                                    var easing = (scrollPos - destination) / strength;
                                    var distance = easing > 1 ? easing : 1;
                                    this.element.scrollTop = scrollPos - distance;
                                };
                                List.prototype._animateScroll = function(destination, direction) {
                                    var _this = this;
                                    var strength = constants_1.SCROLLING_SPEED;
                                    var choiceListScrollTop = this.element.scrollTop;
                                    var continueAnimation = false;
                                    if (direction > 0) {
                                        this._scrollDown(choiceListScrollTop, strength, destination);
                                        if (choiceListScrollTop < destination) continueAnimation = true;
                                    } else {
                                        this._scrollUp(choiceListScrollTop, strength, destination);
                                        if (choiceListScrollTop > destination) continueAnimation = true;
                                    }
                                    if (continueAnimation) requestAnimationFrame((function() {
                                        _this._animateScroll(destination, direction);
                                    }));
                                };
                                return List;
                            }();
                            exports["default"] = List;
                        },
                        730: function(__unused_webpack_module, exports, __nested_webpack_require_88948__) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var utils_1 = __nested_webpack_require_88948__(799);
                            var WrappedElement = function() {
                                function WrappedElement(_a) {
                                    var element = _a.element, classNames = _a.classNames;
                                    this.element = element;
                                    this.classNames = classNames;
                                    if (!(element instanceof HTMLInputElement) && !(element instanceof HTMLSelectElement)) throw new TypeError("Invalid element passed");
                                    this.isDisabled = false;
                                }
                                Object.defineProperty(WrappedElement.prototype, "isActive", {
                                    get: function() {
                                        return this.element.dataset.choice === "active";
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(WrappedElement.prototype, "dir", {
                                    get: function() {
                                        return this.element.dir;
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(WrappedElement.prototype, "value", {
                                    get: function() {
                                        return this.element.value;
                                    },
                                    set: function(value) {
                                        this.element.value = value;
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                WrappedElement.prototype.conceal = function() {
                                    this.element.classList.add(this.classNames.input);
                                    this.element.hidden = true;
                                    this.element.tabIndex = -1;
                                    var origStyle = this.element.getAttribute("style");
                                    if (origStyle) this.element.setAttribute("data-choice-orig-style", origStyle);
                                    this.element.setAttribute("data-choice", "active");
                                };
                                WrappedElement.prototype.reveal = function() {
                                    this.element.classList.remove(this.classNames.input);
                                    this.element.hidden = false;
                                    this.element.removeAttribute("tabindex");
                                    var origStyle = this.element.getAttribute("data-choice-orig-style");
                                    if (origStyle) {
                                        this.element.removeAttribute("data-choice-orig-style");
                                        this.element.setAttribute("style", origStyle);
                                    } else this.element.removeAttribute("style");
                                    this.element.removeAttribute("data-choice");
                                    this.element.value = this.element.value;
                                };
                                WrappedElement.prototype.enable = function() {
                                    this.element.removeAttribute("disabled");
                                    this.element.disabled = false;
                                    this.isDisabled = false;
                                };
                                WrappedElement.prototype.disable = function() {
                                    this.element.setAttribute("disabled", "");
                                    this.element.disabled = true;
                                    this.isDisabled = true;
                                };
                                WrappedElement.prototype.triggerEvent = function(eventType, data) {
                                    (0, utils_1.dispatchEvent)(this.element, eventType, data);
                                };
                                return WrappedElement;
                            }();
                            exports["default"] = WrappedElement;
                        },
                        541: function(__unused_webpack_module, exports, __nested_webpack_require_92021__) {
                            var __extends = this && this.__extends || function() {
                                var extendStatics = function(d, b) {
                                    extendStatics = Object.setPrototypeOf || {
                                        __proto__: []
                                    } instanceof Array && function(d, b) {
                                        d.__proto__ = b;
                                    } || function(d, b) {
                                        for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                                    };
                                    return extendStatics(d, b);
                                };
                                return function(d, b) {
                                    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                                    extendStatics(d, b);
                                    function __() {
                                        this.constructor = d;
                                    }
                                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
                                };
                            }();
                            var __importDefault = this && this.__importDefault || function(mod) {
                                return mod && mod.__esModule ? mod : {
                                    default: mod
                                };
                            };
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var wrapped_element_1 = __importDefault(__nested_webpack_require_92021__(730));
                            var WrappedInput = function(_super) {
                                __extends(WrappedInput, _super);
                                function WrappedInput(_a) {
                                    var element = _a.element, classNames = _a.classNames, delimiter = _a.delimiter;
                                    var _this = _super.call(this, {
                                        element,
                                        classNames
                                    }) || this;
                                    _this.delimiter = delimiter;
                                    return _this;
                                }
                                Object.defineProperty(WrappedInput.prototype, "value", {
                                    get: function() {
                                        return this.element.value;
                                    },
                                    set: function(value) {
                                        this.element.setAttribute("value", value);
                                        this.element.value = value;
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                return WrappedInput;
                            }(wrapped_element_1.default);
                            exports["default"] = WrappedInput;
                        },
                        982: function(__unused_webpack_module, exports, __nested_webpack_require_93875__) {
                            var __extends = this && this.__extends || function() {
                                var extendStatics = function(d, b) {
                                    extendStatics = Object.setPrototypeOf || {
                                        __proto__: []
                                    } instanceof Array && function(d, b) {
                                        d.__proto__ = b;
                                    } || function(d, b) {
                                        for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                                    };
                                    return extendStatics(d, b);
                                };
                                return function(d, b) {
                                    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                                    extendStatics(d, b);
                                    function __() {
                                        this.constructor = d;
                                    }
                                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
                                };
                            }();
                            var __importDefault = this && this.__importDefault || function(mod) {
                                return mod && mod.__esModule ? mod : {
                                    default: mod
                                };
                            };
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var wrapped_element_1 = __importDefault(__nested_webpack_require_93875__(730));
                            var WrappedSelect = function(_super) {
                                __extends(WrappedSelect, _super);
                                function WrappedSelect(_a) {
                                    var element = _a.element, classNames = _a.classNames, template = _a.template;
                                    var _this = _super.call(this, {
                                        element,
                                        classNames
                                    }) || this;
                                    _this.template = template;
                                    return _this;
                                }
                                Object.defineProperty(WrappedSelect.prototype, "placeholderOption", {
                                    get: function() {
                                        return this.element.querySelector('option[value=""]') || this.element.querySelector("option[placeholder]");
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(WrappedSelect.prototype, "optionGroups", {
                                    get: function() {
                                        return Array.from(this.element.getElementsByTagName("OPTGROUP"));
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(WrappedSelect.prototype, "options", {
                                    get: function() {
                                        return Array.from(this.element.options);
                                    },
                                    set: function(options) {
                                        var _this = this;
                                        var fragment = document.createDocumentFragment();
                                        var addOptionToFragment = function(data) {
                                            var option = _this.template(data);
                                            fragment.appendChild(option);
                                        };
                                        options.forEach((function(optionData) {
                                            return addOptionToFragment(optionData);
                                        }));
                                        this.appendDocFragment(fragment);
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                WrappedSelect.prototype.appendDocFragment = function(fragment) {
                                    this.element.innerHTML = "";
                                    this.element.appendChild(fragment);
                                };
                                return WrappedSelect;
                            }(wrapped_element_1.default);
                            exports["default"] = WrappedSelect;
                        },
                        883: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.SCROLLING_SPEED = exports.SELECT_MULTIPLE_TYPE = exports.SELECT_ONE_TYPE = exports.TEXT_TYPE = exports.KEY_CODES = exports.ACTION_TYPES = exports.EVENTS = void 0;
                            exports.EVENTS = {
                                showDropdown: "showDropdown",
                                hideDropdown: "hideDropdown",
                                change: "change",
                                choice: "choice",
                                search: "search",
                                addItem: "addItem",
                                removeItem: "removeItem",
                                highlightItem: "highlightItem",
                                highlightChoice: "highlightChoice",
                                unhighlightItem: "unhighlightItem"
                            };
                            exports.ACTION_TYPES = {
                                ADD_CHOICE: "ADD_CHOICE",
                                FILTER_CHOICES: "FILTER_CHOICES",
                                ACTIVATE_CHOICES: "ACTIVATE_CHOICES",
                                CLEAR_CHOICES: "CLEAR_CHOICES",
                                ADD_GROUP: "ADD_GROUP",
                                ADD_ITEM: "ADD_ITEM",
                                REMOVE_ITEM: "REMOVE_ITEM",
                                HIGHLIGHT_ITEM: "HIGHLIGHT_ITEM",
                                CLEAR_ALL: "CLEAR_ALL",
                                RESET_TO: "RESET_TO",
                                SET_IS_LOADING: "SET_IS_LOADING"
                            };
                            exports.KEY_CODES = {
                                BACK_KEY: 46,
                                DELETE_KEY: 8,
                                ENTER_KEY: 13,
                                A_KEY: 65,
                                ESC_KEY: 27,
                                UP_KEY: 38,
                                DOWN_KEY: 40,
                                PAGE_UP_KEY: 33,
                                PAGE_DOWN_KEY: 34
                            };
                            exports.TEXT_TYPE = "text";
                            exports.SELECT_ONE_TYPE = "select-one";
                            exports.SELECT_MULTIPLE_TYPE = "select-multiple";
                            exports.SCROLLING_SPEED = 4;
                        },
                        789: function(__unused_webpack_module, exports, __nested_webpack_require_98200__) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.DEFAULT_CONFIG = exports.DEFAULT_CLASSNAMES = void 0;
                            var utils_1 = __nested_webpack_require_98200__(799);
                            exports.DEFAULT_CLASSNAMES = {
                                containerOuter: "choices",
                                containerInner: "choices__inner",
                                input: "choices__input",
                                inputCloned: "choices__input--cloned",
                                list: "choices__list",
                                listItems: "choices__list--multiple",
                                listSingle: "choices__list--single",
                                listDropdown: "choices__list--dropdown",
                                item: "choices__item",
                                itemSelectable: "choices__item--selectable",
                                itemDisabled: "choices__item--disabled",
                                itemChoice: "choices__item--choice",
                                placeholder: "choices__placeholder",
                                group: "choices__group",
                                groupHeading: "choices__heading",
                                button: "choices__button",
                                activeState: "is-active",
                                focusState: "is-focused",
                                openState: "is-open",
                                disabledState: "is-disabled",
                                highlightedState: "is-highlighted",
                                selectedState: "is-selected",
                                flippedState: "is-flipped",
                                loadingState: "is-loading",
                                noResults: "has-no-results",
                                noChoices: "has-no-choices"
                            };
                            exports.DEFAULT_CONFIG = {
                                items: [],
                                choices: [],
                                silent: false,
                                renderChoiceLimit: -1,
                                maxItemCount: -1,
                                addItems: true,
                                addItemFilter: null,
                                removeItems: true,
                                removeItemButton: false,
                                editItems: false,
                                allowHTML: true,
                                duplicateItemsAllowed: true,
                                delimiter: ",",
                                paste: true,
                                searchEnabled: true,
                                searchChoices: true,
                                searchFloor: 1,
                                searchResultLimit: 4,
                                searchFields: [ "label", "value" ],
                                position: "auto",
                                resetScrollPosition: true,
                                shouldSort: true,
                                shouldSortItems: false,
                                sorter: utils_1.sortByAlpha,
                                placeholder: true,
                                placeholderValue: null,
                                searchPlaceholderValue: null,
                                prependValue: null,
                                appendValue: null,
                                renderSelectedChoices: "auto",
                                loadingText: "Loading...",
                                noResultsText: "No results found",
                                noChoicesText: "No choices to choose from",
                                itemSelectText: "Press to select",
                                uniqueItemText: "Only unique values can be added",
                                customAddItemText: "Only values matching specific conditions can be added",
                                addItemText: function(value) {
                                    return 'Press Enter to add <b>"'.concat((0, utils_1.sanitise)(value), '"</b>');
                                },
                                maxItemText: function(maxItemCount) {
                                    return "Only ".concat(maxItemCount, " values can be added");
                                },
                                valueComparer: function(value1, value2) {
                                    return value1 === value2;
                                },
                                fuseOptions: {
                                    includeScore: true
                                },
                                labelId: "",
                                callbackOnInit: null,
                                callbackOnCreateTemplates: null,
                                classNames: exports.DEFAULT_CLASSNAMES
                            };
                        },
                        18: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        978: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        948: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        359: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        285: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        533: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        187: function(__unused_webpack_module, exports, __nested_webpack_require_101824__) {
                            var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
                                if (k2 === void 0) k2 = k;
                                var desc = Object.getOwnPropertyDescriptor(m, k);
                                if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
                                    enumerable: true,
                                    get: function() {
                                        return m[k];
                                    }
                                };
                                Object.defineProperty(o, k2, desc);
                            } : function(o, m, k, k2) {
                                if (k2 === void 0) k2 = k;
                                o[k2] = m[k];
                            });
                            var __exportStar = this && this.__exportStar || function(m, exports) {
                                for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
                            };
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            __exportStar(__nested_webpack_require_101824__(18), exports);
                            __exportStar(__nested_webpack_require_101824__(978), exports);
                            __exportStar(__nested_webpack_require_101824__(948), exports);
                            __exportStar(__nested_webpack_require_101824__(359), exports);
                            __exportStar(__nested_webpack_require_101824__(285), exports);
                            __exportStar(__nested_webpack_require_101824__(533), exports);
                            __exportStar(__nested_webpack_require_101824__(287), exports);
                            __exportStar(__nested_webpack_require_101824__(132), exports);
                            __exportStar(__nested_webpack_require_101824__(837), exports);
                            __exportStar(__nested_webpack_require_101824__(598), exports);
                            __exportStar(__nested_webpack_require_101824__(369), exports);
                            __exportStar(__nested_webpack_require_101824__(37), exports);
                            __exportStar(__nested_webpack_require_101824__(47), exports);
                            __exportStar(__nested_webpack_require_101824__(923), exports);
                            __exportStar(__nested_webpack_require_101824__(876), exports);
                        },
                        287: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        132: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        837: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        598: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        37: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        369: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        47: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        923: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        876: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        799: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.parseCustomProperties = exports.diff = exports.cloneObject = exports.existsInArray = exports.dispatchEvent = exports.sortByScore = exports.sortByAlpha = exports.strToEl = exports.sanitise = exports.isScrolledIntoView = exports.getAdjacentEl = exports.wrap = exports.isType = exports.getType = exports.generateId = exports.generateChars = exports.getRandomNumber = void 0;
                            var getRandomNumber = function(min, max) {
                                return Math.floor(Math.random() * (max - min) + min);
                            };
                            exports.getRandomNumber = getRandomNumber;
                            var generateChars = function(length) {
                                return Array.from({
                                    length
                                }, (function() {
                                    return (0, exports.getRandomNumber)(0, 36).toString(36);
                                })).join("");
                            };
                            exports.generateChars = generateChars;
                            var generateId = function(element, prefix) {
                                var id = element.id || element.name && "".concat(element.name, "-").concat((0, exports.generateChars)(2)) || (0, 
                                exports.generateChars)(4);
                                id = id.replace(/(:|\.|\[|\]|,)/g, "");
                                id = "".concat(prefix, "-").concat(id);
                                return id;
                            };
                            exports.generateId = generateId;
                            var getType = function(obj) {
                                return Object.prototype.toString.call(obj).slice(8, -1);
                            };
                            exports.getType = getType;
                            var isType = function(type, obj) {
                                return obj !== void 0 && obj !== null && (0, exports.getType)(obj) === type;
                            };
                            exports.isType = isType;
                            var wrap = function(element, wrapper) {
                                if (wrapper === void 0) wrapper = document.createElement("div");
                                if (element.parentNode) if (element.nextSibling) element.parentNode.insertBefore(wrapper, element.nextSibling); else element.parentNode.appendChild(wrapper);
                                return wrapper.appendChild(element);
                            };
                            exports.wrap = wrap;
                            var getAdjacentEl = function(startEl, selector, direction) {
                                if (direction === void 0) direction = 1;
                                var prop = "".concat(direction > 0 ? "next" : "previous", "ElementSibling");
                                var sibling = startEl[prop];
                                while (sibling) {
                                    if (sibling.matches(selector)) return sibling;
                                    sibling = sibling[prop];
                                }
                                return sibling;
                            };
                            exports.getAdjacentEl = getAdjacentEl;
                            var isScrolledIntoView = function(element, parent, direction) {
                                if (direction === void 0) direction = 1;
                                if (!element) return false;
                                var isVisible;
                                if (direction > 0) isVisible = parent.scrollTop + parent.offsetHeight >= element.offsetTop + element.offsetHeight; else isVisible = element.offsetTop >= parent.scrollTop;
                                return isVisible;
                            };
                            exports.isScrolledIntoView = isScrolledIntoView;
                            var sanitise = function(value) {
                                if (typeof value !== "string") return value;
                                return value.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
                            };
                            exports.sanitise = sanitise;
                            exports.strToEl = function() {
                                var tmpEl = document.createElement("div");
                                return function(str) {
                                    var cleanedInput = str.trim();
                                    tmpEl.innerHTML = cleanedInput;
                                    var firldChild = tmpEl.children[0];
                                    while (tmpEl.firstChild) tmpEl.removeChild(tmpEl.firstChild);
                                    return firldChild;
                                };
                            }();
                            var sortByAlpha = function(_a, _b) {
                                var value = _a.value, _c = _a.label, label = _c === void 0 ? value : _c;
                                var value2 = _b.value, _d = _b.label, label2 = _d === void 0 ? value2 : _d;
                                return label.localeCompare(label2, [], {
                                    sensitivity: "base",
                                    ignorePunctuation: true,
                                    numeric: true
                                });
                            };
                            exports.sortByAlpha = sortByAlpha;
                            var sortByScore = function(a, b) {
                                var _a = a.score, scoreA = _a === void 0 ? 0 : _a;
                                var _b = b.score, scoreB = _b === void 0 ? 0 : _b;
                                return scoreA - scoreB;
                            };
                            exports.sortByScore = sortByScore;
                            var dispatchEvent = function(element, type, customArgs) {
                                if (customArgs === void 0) customArgs = null;
                                var event = new CustomEvent(type, {
                                    detail: customArgs,
                                    bubbles: true,
                                    cancelable: true
                                });
                                return element.dispatchEvent(event);
                            };
                            exports.dispatchEvent = dispatchEvent;
                            var existsInArray = function(array, value, key) {
                                if (key === void 0) key = "value";
                                return array.some((function(item) {
                                    if (typeof value === "string") return item[key] === value.trim();
                                    return item[key] === value;
                                }));
                            };
                            exports.existsInArray = existsInArray;
                            var cloneObject = function(obj) {
                                return JSON.parse(JSON.stringify(obj));
                            };
                            exports.cloneObject = cloneObject;
                            var diff = function(a, b) {
                                var aKeys = Object.keys(a).sort();
                                var bKeys = Object.keys(b).sort();
                                return aKeys.filter((function(i) {
                                    return bKeys.indexOf(i) < 0;
                                }));
                            };
                            exports.diff = diff;
                            var parseCustomProperties = function(customProperties) {
                                if (typeof customProperties !== "undefined") try {
                                    return JSON.parse(customProperties);
                                } catch (e) {
                                    return customProperties;
                                }
                                return {};
                            };
                            exports.parseCustomProperties = parseCustomProperties;
                        },
                        273: function(__unused_webpack_module, exports) {
                            var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
                                if (pack || arguments.length === 2) for (var ar, i = 0, l = from.length; i < l; i++) if (ar || !(i in from)) {
                                    if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                                    ar[i] = from[i];
                                }
                                return to.concat(ar || Array.prototype.slice.call(from));
                            };
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.defaultState = void 0;
                            exports.defaultState = [];
                            function choices(state, action) {
                                if (state === void 0) state = exports.defaultState;
                                if (action === void 0) action = {};
                                switch (action.type) {
                                  case "ADD_CHOICE":
                                    var addChoiceAction = action;
                                    var choice = {
                                        id: addChoiceAction.id,
                                        elementId: addChoiceAction.elementId,
                                        groupId: addChoiceAction.groupId,
                                        value: addChoiceAction.value,
                                        label: addChoiceAction.label || addChoiceAction.value,
                                        disabled: addChoiceAction.disabled || false,
                                        selected: false,
                                        active: true,
                                        score: 9999,
                                        customProperties: addChoiceAction.customProperties,
                                        placeholder: addChoiceAction.placeholder || false
                                    };
                                    return __spreadArray(__spreadArray([], state, true), [ choice ], false);

                                  case "ADD_ITEM":
                                    var addItemAction_1 = action;
                                    if (addItemAction_1.choiceId > -1) return state.map((function(obj) {
                                        var choice = obj;
                                        if (choice.id === parseInt("".concat(addItemAction_1.choiceId), 10)) choice.selected = true;
                                        return choice;
                                    }));
                                    return state;

                                  case "REMOVE_ITEM":
                                    var removeItemAction_1 = action;
                                    if (removeItemAction_1.choiceId && removeItemAction_1.choiceId > -1) return state.map((function(obj) {
                                        var choice = obj;
                                        if (choice.id === parseInt("".concat(removeItemAction_1.choiceId), 10)) choice.selected = false;
                                        return choice;
                                    }));
                                    return state;

                                  case "FILTER_CHOICES":
                                    var filterChoicesAction_1 = action;
                                    return state.map((function(obj) {
                                        var choice = obj;
                                        choice.active = filterChoicesAction_1.results.some((function(_a) {
                                            var item = _a.item, score = _a.score;
                                            if (item.id === choice.id) {
                                                choice.score = score;
                                                return true;
                                            }
                                            return false;
                                        }));
                                        return choice;
                                    }));

                                  case "ACTIVATE_CHOICES":
                                    var activateChoicesAction_1 = action;
                                    return state.map((function(obj) {
                                        var choice = obj;
                                        choice.active = activateChoicesAction_1.active;
                                        return choice;
                                    }));

                                  case "CLEAR_CHOICES":
                                    return exports.defaultState;

                                  default:
                                    return state;
                                }
                            }
                            exports["default"] = choices;
                        },
                        871: function(__unused_webpack_module, exports) {
                            var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
                                if (pack || arguments.length === 2) for (var ar, i = 0, l = from.length; i < l; i++) if (ar || !(i in from)) {
                                    if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                                    ar[i] = from[i];
                                }
                                return to.concat(ar || Array.prototype.slice.call(from));
                            };
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.defaultState = void 0;
                            exports.defaultState = [];
                            function groups(state, action) {
                                if (state === void 0) state = exports.defaultState;
                                if (action === void 0) action = {};
                                switch (action.type) {
                                  case "ADD_GROUP":
                                    var addGroupAction = action;
                                    return __spreadArray(__spreadArray([], state, true), [ {
                                        id: addGroupAction.id,
                                        value: addGroupAction.value,
                                        active: addGroupAction.active,
                                        disabled: addGroupAction.disabled
                                    } ], false);

                                  case "CLEAR_CHOICES":
                                    return [];

                                  default:
                                    return state;
                                }
                            }
                            exports["default"] = groups;
                        },
                        655: function(__unused_webpack_module, exports, __nested_webpack_require_114916__) {
                            var __importDefault = this && this.__importDefault || function(mod) {
                                return mod && mod.__esModule ? mod : {
                                    default: mod
                                };
                            };
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.defaultState = void 0;
                            var redux_1 = __nested_webpack_require_114916__(791);
                            var items_1 = __importDefault(__nested_webpack_require_114916__(52));
                            var groups_1 = __importDefault(__nested_webpack_require_114916__(871));
                            var choices_1 = __importDefault(__nested_webpack_require_114916__(273));
                            var loading_1 = __importDefault(__nested_webpack_require_114916__(502));
                            var utils_1 = __nested_webpack_require_114916__(799);
                            exports.defaultState = {
                                groups: [],
                                items: [],
                                choices: [],
                                loading: false
                            };
                            var appReducer = (0, redux_1.combineReducers)({
                                items: items_1.default,
                                groups: groups_1.default,
                                choices: choices_1.default,
                                loading: loading_1.default
                            });
                            var rootReducer = function(passedState, action) {
                                var state = passedState;
                                if (action.type === "CLEAR_ALL") state = exports.defaultState; else if (action.type === "RESET_TO") return (0, 
                                utils_1.cloneObject)(action.state);
                                return appReducer(state, action);
                            };
                            exports["default"] = rootReducer;
                        },
                        52: function(__unused_webpack_module, exports) {
                            var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
                                if (pack || arguments.length === 2) for (var ar, i = 0, l = from.length; i < l; i++) if (ar || !(i in from)) {
                                    if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                                    ar[i] = from[i];
                                }
                                return to.concat(ar || Array.prototype.slice.call(from));
                            };
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.defaultState = void 0;
                            exports.defaultState = [];
                            function items(state, action) {
                                if (state === void 0) state = exports.defaultState;
                                if (action === void 0) action = {};
                                switch (action.type) {
                                  case "ADD_ITEM":
                                    var addItemAction = action;
                                    var newState = __spreadArray(__spreadArray([], state, true), [ {
                                        id: addItemAction.id,
                                        choiceId: addItemAction.choiceId,
                                        groupId: addItemAction.groupId,
                                        value: addItemAction.value,
                                        label: addItemAction.label,
                                        active: true,
                                        highlighted: false,
                                        customProperties: addItemAction.customProperties,
                                        placeholder: addItemAction.placeholder || false,
                                        keyCode: null
                                    } ], false);
                                    return newState.map((function(obj) {
                                        var item = obj;
                                        item.highlighted = false;
                                        return item;
                                    }));

                                  case "REMOVE_ITEM":
                                    return state.map((function(obj) {
                                        var item = obj;
                                        if (item.id === action.id) item.active = false;
                                        return item;
                                    }));

                                  case "HIGHLIGHT_ITEM":
                                    var highlightItemAction_1 = action;
                                    return state.map((function(obj) {
                                        var item = obj;
                                        if (item.id === highlightItemAction_1.id) item.highlighted = highlightItemAction_1.highlighted;
                                        return item;
                                    }));

                                  default:
                                    return state;
                                }
                            }
                            exports["default"] = items;
                        },
                        502: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.defaultState = void 0;
                            exports.defaultState = false;
                            var general = function(state, action) {
                                if (state === void 0) state = exports.defaultState;
                                if (action === void 0) action = {};
                                switch (action.type) {
                                  case "SET_IS_LOADING":
                                    return action.isLoading;

                                  default:
                                    return state;
                                }
                            };
                            exports["default"] = general;
                        },
                        744: function(__unused_webpack_module, exports, __nested_webpack_require_119022__) {
                            var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
                                if (pack || arguments.length === 2) for (var ar, i = 0, l = from.length; i < l; i++) if (ar || !(i in from)) {
                                    if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                                    ar[i] = from[i];
                                }
                                return to.concat(ar || Array.prototype.slice.call(from));
                            };
                            var __importDefault = this && this.__importDefault || function(mod) {
                                return mod && mod.__esModule ? mod : {
                                    default: mod
                                };
                            };
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var redux_1 = __nested_webpack_require_119022__(791);
                            var index_1 = __importDefault(__nested_webpack_require_119022__(655));
                            var Store = function() {
                                function Store() {
                                    this._store = (0, redux_1.createStore)(index_1.default, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
                                }
                                Store.prototype.subscribe = function(onChange) {
                                    this._store.subscribe(onChange);
                                };
                                Store.prototype.dispatch = function(action) {
                                    this._store.dispatch(action);
                                };
                                Object.defineProperty(Store.prototype, "state", {
                                    get: function() {
                                        return this._store.getState();
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Store.prototype, "items", {
                                    get: function() {
                                        return this.state.items;
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Store.prototype, "activeItems", {
                                    get: function() {
                                        return this.items.filter((function(item) {
                                            return item.active === true;
                                        }));
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Store.prototype, "highlightedActiveItems", {
                                    get: function() {
                                        return this.items.filter((function(item) {
                                            return item.active && item.highlighted;
                                        }));
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Store.prototype, "choices", {
                                    get: function() {
                                        return this.state.choices;
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Store.prototype, "activeChoices", {
                                    get: function() {
                                        return this.choices.filter((function(choice) {
                                            return choice.active === true;
                                        }));
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Store.prototype, "selectableChoices", {
                                    get: function() {
                                        return this.choices.filter((function(choice) {
                                            return choice.disabled !== true;
                                        }));
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Store.prototype, "searchableChoices", {
                                    get: function() {
                                        return this.selectableChoices.filter((function(choice) {
                                            return choice.placeholder !== true;
                                        }));
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Store.prototype, "placeholderChoice", {
                                    get: function() {
                                        return __spreadArray([], this.choices, true).reverse().find((function(choice) {
                                            return choice.placeholder === true;
                                        }));
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Store.prototype, "groups", {
                                    get: function() {
                                        return this.state.groups;
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Store.prototype, "activeGroups", {
                                    get: function() {
                                        var _a = this, groups = _a.groups, choices = _a.choices;
                                        return groups.filter((function(group) {
                                            var isActive = group.active === true && group.disabled === false;
                                            var hasActiveOptions = choices.some((function(choice) {
                                                return choice.active === true && choice.disabled === false;
                                            }));
                                            return isActive && hasActiveOptions;
                                        }), []);
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Store.prototype.isLoading = function() {
                                    return this.state.loading;
                                };
                                Store.prototype.getChoiceById = function(id) {
                                    return this.activeChoices.find((function(choice) {
                                        return choice.id === parseInt(id, 10);
                                    }));
                                };
                                Store.prototype.getGroupById = function(id) {
                                    return this.groups.find((function(group) {
                                        return group.id === id;
                                    }));
                                };
                                return Store;
                            }();
                            exports["default"] = Store;
                        },
                        686: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var templates = {
                                containerOuter: function(_a, dir, isSelectElement, isSelectOneElement, searchEnabled, passedElementType, labelId) {
                                    var containerOuter = _a.classNames.containerOuter;
                                    var div = Object.assign(document.createElement("div"), {
                                        className: containerOuter
                                    });
                                    div.dataset.type = passedElementType;
                                    if (dir) div.dir = dir;
                                    if (isSelectOneElement) div.tabIndex = 0;
                                    if (isSelectElement) {
                                        div.setAttribute("role", searchEnabled ? "combobox" : "listbox");
                                        if (searchEnabled) div.setAttribute("aria-autocomplete", "list");
                                    }
                                    div.setAttribute("aria-haspopup", "true");
                                    div.setAttribute("aria-expanded", "false");
                                    if (labelId) div.setAttribute("aria-labelledby", labelId);
                                    return div;
                                },
                                containerInner: function(_a) {
                                    var containerInner = _a.classNames.containerInner;
                                    return Object.assign(document.createElement("div"), {
                                        className: containerInner
                                    });
                                },
                                itemList: function(_a, isSelectOneElement) {
                                    var _b = _a.classNames, list = _b.list, listSingle = _b.listSingle, listItems = _b.listItems;
                                    return Object.assign(document.createElement("div"), {
                                        className: "".concat(list, " ").concat(isSelectOneElement ? listSingle : listItems)
                                    });
                                },
                                placeholder: function(_a, value) {
                                    var _b;
                                    var allowHTML = _a.allowHTML, placeholder = _a.classNames.placeholder;
                                    return Object.assign(document.createElement("div"), (_b = {
                                        className: placeholder
                                    }, _b[allowHTML ? "innerHTML" : "innerText"] = value, _b));
                                },
                                item: function(_a, _b, removeItemButton) {
                                    var _c, _d;
                                    var allowHTML = _a.allowHTML, _e = _a.classNames, item = _e.item, button = _e.button, highlightedState = _e.highlightedState, itemSelectable = _e.itemSelectable, placeholder = _e.placeholder;
                                    var id = _b.id, value = _b.value, label = _b.label, customProperties = _b.customProperties, active = _b.active, disabled = _b.disabled, highlighted = _b.highlighted, isPlaceholder = _b.placeholder;
                                    var div = Object.assign(document.createElement("div"), (_c = {
                                        className: item
                                    }, _c[allowHTML ? "innerHTML" : "innerText"] = label, _c));
                                    Object.assign(div.dataset, {
                                        item: "",
                                        id,
                                        value,
                                        customProperties
                                    });
                                    if (active) div.setAttribute("aria-selected", "true");
                                    if (disabled) div.setAttribute("aria-disabled", "true");
                                    if (isPlaceholder) div.classList.add(placeholder);
                                    div.classList.add(highlighted ? highlightedState : itemSelectable);
                                    if (removeItemButton) {
                                        if (disabled) div.classList.remove(itemSelectable);
                                        div.dataset.deletable = "";
                                        var REMOVE_ITEM_TEXT = "Remove item";
                                        var removeButton = Object.assign(document.createElement("button"), (_d = {
                                            type: "button",
                                            className: button
                                        }, _d[allowHTML ? "innerHTML" : "innerText"] = REMOVE_ITEM_TEXT, _d));
                                        removeButton.setAttribute("aria-label", "".concat(REMOVE_ITEM_TEXT, ": '").concat(value, "'"));
                                        removeButton.dataset.button = "";
                                        div.appendChild(removeButton);
                                    }
                                    return div;
                                },
                                choiceList: function(_a, isSelectOneElement) {
                                    var list = _a.classNames.list;
                                    var div = Object.assign(document.createElement("div"), {
                                        className: list
                                    });
                                    if (!isSelectOneElement) div.setAttribute("aria-multiselectable", "true");
                                    div.setAttribute("role", "listbox");
                                    return div;
                                },
                                choiceGroup: function(_a, _b) {
                                    var _c;
                                    var allowHTML = _a.allowHTML, _d = _a.classNames, group = _d.group, groupHeading = _d.groupHeading, itemDisabled = _d.itemDisabled;
                                    var id = _b.id, value = _b.value, disabled = _b.disabled;
                                    var div = Object.assign(document.createElement("div"), {
                                        className: "".concat(group, " ").concat(disabled ? itemDisabled : "")
                                    });
                                    div.setAttribute("role", "group");
                                    Object.assign(div.dataset, {
                                        group: "",
                                        id,
                                        value
                                    });
                                    if (disabled) div.setAttribute("aria-disabled", "true");
                                    div.appendChild(Object.assign(document.createElement("div"), (_c = {
                                        className: groupHeading
                                    }, _c[allowHTML ? "innerHTML" : "innerText"] = value, _c)));
                                    return div;
                                },
                                choice: function(_a, _b, selectText) {
                                    var _c;
                                    var allowHTML = _a.allowHTML, _d = _a.classNames, item = _d.item, itemChoice = _d.itemChoice, itemSelectable = _d.itemSelectable, selectedState = _d.selectedState, itemDisabled = _d.itemDisabled, placeholder = _d.placeholder;
                                    var id = _b.id, value = _b.value, label = _b.label, groupId = _b.groupId, elementId = _b.elementId, isDisabled = _b.disabled, isSelected = _b.selected, isPlaceholder = _b.placeholder;
                                    var div = Object.assign(document.createElement("div"), (_c = {
                                        id: elementId
                                    }, _c[allowHTML ? "innerHTML" : "innerText"] = label, _c.className = "".concat(item, " ").concat(itemChoice), 
                                    _c));
                                    if (isSelected) div.classList.add(selectedState);
                                    if (isPlaceholder) div.classList.add(placeholder);
                                    div.setAttribute("role", groupId && groupId > 0 ? "treeitem" : "option");
                                    Object.assign(div.dataset, {
                                        choice: "",
                                        id,
                                        value,
                                        selectText
                                    });
                                    if (isDisabled) {
                                        div.classList.add(itemDisabled);
                                        div.dataset.choiceDisabled = "";
                                        div.setAttribute("aria-disabled", "true");
                                    } else {
                                        div.classList.add(itemSelectable);
                                        div.dataset.choiceSelectable = "";
                                    }
                                    return div;
                                },
                                input: function(_a, placeholderValue) {
                                    var _b = _a.classNames, input = _b.input, inputCloned = _b.inputCloned;
                                    var inp = Object.assign(document.createElement("input"), {
                                        type: "search",
                                        name: "search_terms",
                                        className: "".concat(input, " ").concat(inputCloned),
                                        autocomplete: "off",
                                        autocapitalize: "off",
                                        spellcheck: false
                                    });
                                    inp.setAttribute("role", "textbox");
                                    inp.setAttribute("aria-autocomplete", "list");
                                    inp.setAttribute("aria-label", placeholderValue);
                                    return inp;
                                },
                                dropdown: function(_a) {
                                    var _b = _a.classNames, list = _b.list, listDropdown = _b.listDropdown;
                                    var div = document.createElement("div");
                                    div.classList.add(list, listDropdown);
                                    div.setAttribute("aria-expanded", "false");
                                    return div;
                                },
                                notice: function(_a, innerText, type) {
                                    var _b;
                                    var allowHTML = _a.allowHTML, _c = _a.classNames, item = _c.item, itemChoice = _c.itemChoice, noResults = _c.noResults, noChoices = _c.noChoices;
                                    if (type === void 0) type = "";
                                    var classes = [ item, itemChoice ];
                                    if (type === "no-choices") classes.push(noChoices); else if (type === "no-results") classes.push(noResults);
                                    return Object.assign(document.createElement("div"), (_b = {}, _b[allowHTML ? "innerHTML" : "innerText"] = innerText, 
                                    _b.className = classes.join(" "), _b));
                                },
                                option: function(_a) {
                                    var label = _a.label, value = _a.value, customProperties = _a.customProperties, active = _a.active, disabled = _a.disabled;
                                    var opt = new Option(label, value, false, active);
                                    if (customProperties) opt.dataset.customProperties = "".concat(customProperties);
                                    opt.disabled = !!disabled;
                                    return opt;
                                }
                            };
                            exports["default"] = templates;
                        },
                        996: function(module) {
                            var isMergeableObject = function isMergeableObject(value) {
                                return isNonNullObject(value) && !isSpecial(value);
                            };
                            function isNonNullObject(value) {
                                return !!value && typeof value === "object";
                            }
                            function isSpecial(value) {
                                var stringValue = Object.prototype.toString.call(value);
                                return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
                            }
                            var canUseSymbol = typeof Symbol === "function" && Symbol.for;
                            var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
                            function isReactElement(value) {
                                return value.$$typeof === REACT_ELEMENT_TYPE;
                            }
                            function emptyTarget(val) {
                                return Array.isArray(val) ? [] : {};
                            }
                            function cloneUnlessOtherwiseSpecified(value, options) {
                                return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
                            }
                            function defaultArrayMerge(target, source, options) {
                                return target.concat(source).map((function(element) {
                                    return cloneUnlessOtherwiseSpecified(element, options);
                                }));
                            }
                            function getMergeFunction(key, options) {
                                if (!options.customMerge) return deepmerge;
                                var customMerge = options.customMerge(key);
                                return typeof customMerge === "function" ? customMerge : deepmerge;
                            }
                            function getEnumerableOwnPropertySymbols(target) {
                                return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter((function(symbol) {
                                    return target.propertyIsEnumerable(symbol);
                                })) : [];
                            }
                            function getKeys(target) {
                                return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
                            }
                            function propertyIsOnObject(object, property) {
                                try {
                                    return property in object;
                                } catch (_) {
                                    return false;
                                }
                            }
                            function propertyIsUnsafe(target, key) {
                                return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
                            }
                            function mergeObject(target, source, options) {
                                var destination = {};
                                if (options.isMergeableObject(target)) getKeys(target).forEach((function(key) {
                                    destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
                                }));
                                getKeys(source).forEach((function(key) {
                                    if (propertyIsUnsafe(target, key)) return;
                                    if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) destination[key] = getMergeFunction(key, options)(target[key], source[key], options); else destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
                                }));
                                return destination;
                            }
                            function deepmerge(target, source, options) {
                                options = options || {};
                                options.arrayMerge = options.arrayMerge || defaultArrayMerge;
                                options.isMergeableObject = options.isMergeableObject || isMergeableObject;
                                options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
                                var sourceIsArray = Array.isArray(source);
                                var targetIsArray = Array.isArray(target);
                                var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
                                if (!sourceAndTargetTypesMatch) return cloneUnlessOtherwiseSpecified(source, options); else if (sourceIsArray) return options.arrayMerge(target, source, options); else return mergeObject(target, source, options);
                            }
                            deepmerge.all = function deepmergeAll(array, options) {
                                if (!Array.isArray(array)) throw new Error("first argument should be an array");
                                return array.reduce((function(prev, next) {
                                    return deepmerge(prev, next, options);
                                }), {});
                            };
                            var deepmerge_1 = deepmerge;
                            module.exports = deepmerge_1;
                        },
                        221: function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_136441__) {
                            __nested_webpack_require_136441__.r(__nested_webpack_exports__);
                            __nested_webpack_require_136441__.d(__nested_webpack_exports__, {
                                default: function() {
                                    return Fuse;
                                }
                            });
                            function isArray(value) {
                                return !Array.isArray ? getTag(value) === "[object Array]" : Array.isArray(value);
                            }
                            const INFINITY = 1 / 0;
                            function baseToString(value) {
                                if (typeof value == "string") return value;
                                let result = value + "";
                                return result == "0" && 1 / value == -INFINITY ? "-0" : result;
                            }
                            function toString(value) {
                                return value == null ? "" : baseToString(value);
                            }
                            function isString(value) {
                                return typeof value === "string";
                            }
                            function isNumber(value) {
                                return typeof value === "number";
                            }
                            function isBoolean(value) {
                                return value === true || value === false || isObjectLike(value) && getTag(value) == "[object Boolean]";
                            }
                            function isObject(value) {
                                return typeof value === "object";
                            }
                            function isObjectLike(value) {
                                return isObject(value) && value !== null;
                            }
                            function isDefined(value) {
                                return value !== void 0 && value !== null;
                            }
                            function isBlank(value) {
                                return !value.trim().length;
                            }
                            function getTag(value) {
                                return value == null ? value === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(value);
                            }
                            const INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
                            const LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = key => `Invalid value for key ${key}`;
                            const PATTERN_LENGTH_TOO_LARGE = max => `Pattern length exceeds max of ${max}.`;
                            const MISSING_KEY_PROPERTY = name => `Missing ${name} property in key`;
                            const INVALID_KEY_WEIGHT_VALUE = key => `Property 'weight' in key '${key}' must be a positive integer`;
                            const hasOwn = Object.prototype.hasOwnProperty;
                            class KeyStore {
                                constructor(keys) {
                                    this._keys = [];
                                    this._keyMap = {};
                                    let totalWeight = 0;
                                    keys.forEach((key => {
                                        let obj = createKey(key);
                                        totalWeight += obj.weight;
                                        this._keys.push(obj);
                                        this._keyMap[obj.id] = obj;
                                        totalWeight += obj.weight;
                                    }));
                                    this._keys.forEach((key => {
                                        key.weight /= totalWeight;
                                    }));
                                }
                                get(keyId) {
                                    return this._keyMap[keyId];
                                }
                                keys() {
                                    return this._keys;
                                }
                                toJSON() {
                                    return JSON.stringify(this._keys);
                                }
                            }
                            function createKey(key) {
                                let path = null;
                                let id = null;
                                let src = null;
                                let weight = 1;
                                let getFn = null;
                                if (isString(key) || isArray(key)) {
                                    src = key;
                                    path = createKeyPath(key);
                                    id = createKeyId(key);
                                } else {
                                    if (!hasOwn.call(key, "name")) throw new Error(MISSING_KEY_PROPERTY("name"));
                                    const name = key.name;
                                    src = name;
                                    if (hasOwn.call(key, "weight")) {
                                        weight = key.weight;
                                        if (weight <= 0) throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
                                    }
                                    path = createKeyPath(name);
                                    id = createKeyId(name);
                                    getFn = key.getFn;
                                }
                                return {
                                    path,
                                    id,
                                    weight,
                                    src,
                                    getFn
                                };
                            }
                            function createKeyPath(key) {
                                return isArray(key) ? key : key.split(".");
                            }
                            function createKeyId(key) {
                                return isArray(key) ? key.join(".") : key;
                            }
                            function get(obj, path) {
                                let list = [];
                                let arr = false;
                                const deepGet = (obj, path, index) => {
                                    if (!isDefined(obj)) return;
                                    if (!path[index]) list.push(obj); else {
                                        let key = path[index];
                                        const value = obj[key];
                                        if (!isDefined(value)) return;
                                        if (index === path.length - 1 && (isString(value) || isNumber(value) || isBoolean(value))) list.push(toString(value)); else if (isArray(value)) {
                                            arr = true;
                                            for (let i = 0, len = value.length; i < len; i += 1) deepGet(value[i], path, index + 1);
                                        } else if (path.length) deepGet(value, path, index + 1);
                                    }
                                };
                                deepGet(obj, isString(path) ? path.split(".") : path, 0);
                                return arr ? list : list[0];
                            }
                            const MatchOptions = {
                                includeMatches: false,
                                findAllMatches: false,
                                minMatchCharLength: 1
                            };
                            const BasicOptions = {
                                isCaseSensitive: false,
                                includeScore: false,
                                keys: [],
                                shouldSort: true,
                                sortFn: (a, b) => a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1
                            };
                            const FuzzyOptions = {
                                location: 0,
                                threshold: .6,
                                distance: 100
                            };
                            const AdvancedOptions = {
                                useExtendedSearch: false,
                                getFn: get,
                                ignoreLocation: false,
                                ignoreFieldNorm: false,
                                fieldNormWeight: 1
                            };
                            var Config = {
                                ...BasicOptions,
                                ...MatchOptions,
                                ...FuzzyOptions,
                                ...AdvancedOptions
                            };
                            const SPACE = /[^ ]+/g;
                            function norm(weight = 1, mantissa = 3) {
                                const cache = new Map;
                                const m = Math.pow(10, mantissa);
                                return {
                                    get(value) {
                                        const numTokens = value.match(SPACE).length;
                                        if (cache.has(numTokens)) return cache.get(numTokens);
                                        const norm = 1 / Math.pow(numTokens, .5 * weight);
                                        const n = parseFloat(Math.round(norm * m) / m);
                                        cache.set(numTokens, n);
                                        return n;
                                    },
                                    clear() {
                                        cache.clear();
                                    }
                                };
                            }
                            class FuseIndex {
                                constructor({getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight} = {}) {
                                    this.norm = norm(fieldNormWeight, 3);
                                    this.getFn = getFn;
                                    this.isCreated = false;
                                    this.setIndexRecords();
                                }
                                setSources(docs = []) {
                                    this.docs = docs;
                                }
                                setIndexRecords(records = []) {
                                    this.records = records;
                                }
                                setKeys(keys = []) {
                                    this.keys = keys;
                                    this._keysMap = {};
                                    keys.forEach(((key, idx) => {
                                        this._keysMap[key.id] = idx;
                                    }));
                                }
                                create() {
                                    if (this.isCreated || !this.docs.length) return;
                                    this.isCreated = true;
                                    if (isString(this.docs[0])) this.docs.forEach(((doc, docIndex) => {
                                        this._addString(doc, docIndex);
                                    })); else this.docs.forEach(((doc, docIndex) => {
                                        this._addObject(doc, docIndex);
                                    }));
                                    this.norm.clear();
                                }
                                add(doc) {
                                    const idx = this.size();
                                    if (isString(doc)) this._addString(doc, idx); else this._addObject(doc, idx);
                                }
                                removeAt(idx) {
                                    this.records.splice(idx, 1);
                                    for (let i = idx, len = this.size(); i < len; i += 1) this.records[i].i -= 1;
                                }
                                getValueForItemAtKeyId(item, keyId) {
                                    return item[this._keysMap[keyId]];
                                }
                                size() {
                                    return this.records.length;
                                }
                                _addString(doc, docIndex) {
                                    if (!isDefined(doc) || isBlank(doc)) return;
                                    let record = {
                                        v: doc,
                                        i: docIndex,
                                        n: this.norm.get(doc)
                                    };
                                    this.records.push(record);
                                }
                                _addObject(doc, docIndex) {
                                    let record = {
                                        i: docIndex,
                                        $: {}
                                    };
                                    this.keys.forEach(((key, keyIndex) => {
                                        let value = key.getFn ? key.getFn(doc) : this.getFn(doc, key.path);
                                        if (!isDefined(value)) return;
                                        if (isArray(value)) {
                                            let subRecords = [];
                                            const stack = [ {
                                                nestedArrIndex: -1,
                                                value
                                            } ];
                                            while (stack.length) {
                                                const {nestedArrIndex, value} = stack.pop();
                                                if (!isDefined(value)) continue;
                                                if (isString(value) && !isBlank(value)) {
                                                    let subRecord = {
                                                        v: value,
                                                        i: nestedArrIndex,
                                                        n: this.norm.get(value)
                                                    };
                                                    subRecords.push(subRecord);
                                                } else if (isArray(value)) value.forEach(((item, k) => {
                                                    stack.push({
                                                        nestedArrIndex: k,
                                                        value: item
                                                    });
                                                }));
                                            }
                                            record.$[keyIndex] = subRecords;
                                        } else if (isString(value) && !isBlank(value)) {
                                            let subRecord = {
                                                v: value,
                                                n: this.norm.get(value)
                                            };
                                            record.$[keyIndex] = subRecord;
                                        }
                                    }));
                                    this.records.push(record);
                                }
                                toJSON() {
                                    return {
                                        keys: this.keys,
                                        records: this.records
                                    };
                                }
                            }
                            function createIndex(keys, docs, {getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight} = {}) {
                                const myIndex = new FuseIndex({
                                    getFn,
                                    fieldNormWeight
                                });
                                myIndex.setKeys(keys.map(createKey));
                                myIndex.setSources(docs);
                                myIndex.create();
                                return myIndex;
                            }
                            function parseIndex(data, {getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight} = {}) {
                                const {keys, records} = data;
                                const myIndex = new FuseIndex({
                                    getFn,
                                    fieldNormWeight
                                });
                                myIndex.setKeys(keys);
                                myIndex.setIndexRecords(records);
                                return myIndex;
                            }
                            function computeScore$1(pattern, {errors = 0, currentLocation = 0, expectedLocation = 0, distance = Config.distance, ignoreLocation = Config.ignoreLocation} = {}) {
                                const accuracy = errors / pattern.length;
                                if (ignoreLocation) return accuracy;
                                const proximity = Math.abs(expectedLocation - currentLocation);
                                if (!distance) return proximity ? 1 : accuracy;
                                return accuracy + proximity / distance;
                            }
                            function convertMaskToIndices(matchmask = [], minMatchCharLength = Config.minMatchCharLength) {
                                let indices = [];
                                let start = -1;
                                let end = -1;
                                let i = 0;
                                for (let len = matchmask.length; i < len; i += 1) {
                                    let match = matchmask[i];
                                    if (match && start === -1) start = i; else if (!match && start !== -1) {
                                        end = i - 1;
                                        if (end - start + 1 >= minMatchCharLength) indices.push([ start, end ]);
                                        start = -1;
                                    }
                                }
                                if (matchmask[i - 1] && i - start >= minMatchCharLength) indices.push([ start, i - 1 ]);
                                return indices;
                            }
                            const MAX_BITS = 32;
                            function search(text, pattern, patternAlphabet, {location = Config.location, distance = Config.distance, threshold = Config.threshold, findAllMatches = Config.findAllMatches, minMatchCharLength = Config.minMatchCharLength, includeMatches = Config.includeMatches, ignoreLocation = Config.ignoreLocation} = {}) {
                                if (pattern.length > MAX_BITS) throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
                                const patternLen = pattern.length;
                                const textLen = text.length;
                                const expectedLocation = Math.max(0, Math.min(location, textLen));
                                let currentThreshold = threshold;
                                let bestLocation = expectedLocation;
                                const computeMatches = minMatchCharLength > 1 || includeMatches;
                                const matchMask = computeMatches ? Array(textLen) : [];
                                let index;
                                while ((index = text.indexOf(pattern, bestLocation)) > -1) {
                                    let score = computeScore$1(pattern, {
                                        currentLocation: index,
                                        expectedLocation,
                                        distance,
                                        ignoreLocation
                                    });
                                    currentThreshold = Math.min(score, currentThreshold);
                                    bestLocation = index + patternLen;
                                    if (computeMatches) {
                                        let i = 0;
                                        while (i < patternLen) {
                                            matchMask[index + i] = 1;
                                            i += 1;
                                        }
                                    }
                                }
                                bestLocation = -1;
                                let lastBitArr = [];
                                let finalScore = 1;
                                let binMax = patternLen + textLen;
                                const mask = 1 << patternLen - 1;
                                for (let i = 0; i < patternLen; i += 1) {
                                    let binMin = 0;
                                    let binMid = binMax;
                                    while (binMin < binMid) {
                                        const score = computeScore$1(pattern, {
                                            errors: i,
                                            currentLocation: expectedLocation + binMid,
                                            expectedLocation,
                                            distance,
                                            ignoreLocation
                                        });
                                        if (score <= currentThreshold) binMin = binMid; else binMax = binMid;
                                        binMid = Math.floor((binMax - binMin) / 2 + binMin);
                                    }
                                    binMax = binMid;
                                    let start = Math.max(1, expectedLocation - binMid + 1);
                                    let finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;
                                    let bitArr = Array(finish + 2);
                                    bitArr[finish + 1] = (1 << i) - 1;
                                    for (let j = finish; j >= start; j -= 1) {
                                        let currentLocation = j - 1;
                                        let charMatch = patternAlphabet[text.charAt(currentLocation)];
                                        if (computeMatches) matchMask[currentLocation] = +!!charMatch;
                                        bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;
                                        if (i) bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
                                        if (bitArr[j] & mask) {
                                            finalScore = computeScore$1(pattern, {
                                                errors: i,
                                                currentLocation,
                                                expectedLocation,
                                                distance,
                                                ignoreLocation
                                            });
                                            if (finalScore <= currentThreshold) {
                                                currentThreshold = finalScore;
                                                bestLocation = currentLocation;
                                                if (bestLocation <= expectedLocation) break;
                                                start = Math.max(1, 2 * expectedLocation - bestLocation);
                                            }
                                        }
                                    }
                                    const score = computeScore$1(pattern, {
                                        errors: i + 1,
                                        currentLocation: expectedLocation,
                                        expectedLocation,
                                        distance,
                                        ignoreLocation
                                    });
                                    if (score > currentThreshold) break;
                                    lastBitArr = bitArr;
                                }
                                const result = {
                                    isMatch: bestLocation >= 0,
                                    score: Math.max(.001, finalScore)
                                };
                                if (computeMatches) {
                                    const indices = convertMaskToIndices(matchMask, minMatchCharLength);
                                    if (!indices.length) result.isMatch = false; else if (includeMatches) result.indices = indices;
                                }
                                return result;
                            }
                            function createPatternAlphabet(pattern) {
                                let mask = {};
                                for (let i = 0, len = pattern.length; i < len; i += 1) {
                                    const char = pattern.charAt(i);
                                    mask[char] = (mask[char] || 0) | 1 << len - i - 1;
                                }
                                return mask;
                            }
                            class BitapSearch {
                                constructor(pattern, {location = Config.location, threshold = Config.threshold, distance = Config.distance, includeMatches = Config.includeMatches, findAllMatches = Config.findAllMatches, minMatchCharLength = Config.minMatchCharLength, isCaseSensitive = Config.isCaseSensitive, ignoreLocation = Config.ignoreLocation} = {}) {
                                    this.options = {
                                        location,
                                        threshold,
                                        distance,
                                        includeMatches,
                                        findAllMatches,
                                        minMatchCharLength,
                                        isCaseSensitive,
                                        ignoreLocation
                                    };
                                    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
                                    this.chunks = [];
                                    if (!this.pattern.length) return;
                                    const addChunk = (pattern, startIndex) => {
                                        this.chunks.push({
                                            pattern,
                                            alphabet: createPatternAlphabet(pattern),
                                            startIndex
                                        });
                                    };
                                    const len = this.pattern.length;
                                    if (len > MAX_BITS) {
                                        let i = 0;
                                        const remainder = len % MAX_BITS;
                                        const end = len - remainder;
                                        while (i < end) {
                                            addChunk(this.pattern.substr(i, MAX_BITS), i);
                                            i += MAX_BITS;
                                        }
                                        if (remainder) {
                                            const startIndex = len - MAX_BITS;
                                            addChunk(this.pattern.substr(startIndex), startIndex);
                                        }
                                    } else addChunk(this.pattern, 0);
                                }
                                searchIn(text) {
                                    const {isCaseSensitive, includeMatches} = this.options;
                                    if (!isCaseSensitive) text = text.toLowerCase();
                                    if (this.pattern === text) {
                                        let result = {
                                            isMatch: true,
                                            score: 0
                                        };
                                        if (includeMatches) result.indices = [ [ 0, text.length - 1 ] ];
                                        return result;
                                    }
                                    const {location, distance, threshold, findAllMatches, minMatchCharLength, ignoreLocation} = this.options;
                                    let allIndices = [];
                                    let totalScore = 0;
                                    let hasMatches = false;
                                    this.chunks.forEach((({pattern, alphabet, startIndex}) => {
                                        const {isMatch, score, indices} = search(text, pattern, alphabet, {
                                            location: location + startIndex,
                                            distance,
                                            threshold,
                                            findAllMatches,
                                            minMatchCharLength,
                                            includeMatches,
                                            ignoreLocation
                                        });
                                        if (isMatch) hasMatches = true;
                                        totalScore += score;
                                        if (isMatch && indices) allIndices = [ ...allIndices, ...indices ];
                                    }));
                                    let result = {
                                        isMatch: hasMatches,
                                        score: hasMatches ? totalScore / this.chunks.length : 1
                                    };
                                    if (hasMatches && includeMatches) result.indices = allIndices;
                                    return result;
                                }
                            }
                            class BaseMatch {
                                constructor(pattern) {
                                    this.pattern = pattern;
                                }
                                static isMultiMatch(pattern) {
                                    return getMatch(pattern, this.multiRegex);
                                }
                                static isSingleMatch(pattern) {
                                    return getMatch(pattern, this.singleRegex);
                                }
                                search() {}
                            }
                            function getMatch(pattern, exp) {
                                const matches = pattern.match(exp);
                                return matches ? matches[1] : null;
                            }
                            class ExactMatch extends BaseMatch {
                                constructor(pattern) {
                                    super(pattern);
                                }
                                static get type() {
                                    return "exact";
                                }
                                static get multiRegex() {
                                    return /^="(.*)"$/;
                                }
                                static get singleRegex() {
                                    return /^=(.*)$/;
                                }
                                search(text) {
                                    const isMatch = text === this.pattern;
                                    return {
                                        isMatch,
                                        score: isMatch ? 0 : 1,
                                        indices: [ 0, this.pattern.length - 1 ]
                                    };
                                }
                            }
                            class InverseExactMatch extends BaseMatch {
                                constructor(pattern) {
                                    super(pattern);
                                }
                                static get type() {
                                    return "inverse-exact";
                                }
                                static get multiRegex() {
                                    return /^!"(.*)"$/;
                                }
                                static get singleRegex() {
                                    return /^!(.*)$/;
                                }
                                search(text) {
                                    const index = text.indexOf(this.pattern);
                                    const isMatch = index === -1;
                                    return {
                                        isMatch,
                                        score: isMatch ? 0 : 1,
                                        indices: [ 0, text.length - 1 ]
                                    };
                                }
                            }
                            class PrefixExactMatch extends BaseMatch {
                                constructor(pattern) {
                                    super(pattern);
                                }
                                static get type() {
                                    return "prefix-exact";
                                }
                                static get multiRegex() {
                                    return /^\^"(.*)"$/;
                                }
                                static get singleRegex() {
                                    return /^\^(.*)$/;
                                }
                                search(text) {
                                    const isMatch = text.startsWith(this.pattern);
                                    return {
                                        isMatch,
                                        score: isMatch ? 0 : 1,
                                        indices: [ 0, this.pattern.length - 1 ]
                                    };
                                }
                            }
                            class InversePrefixExactMatch extends BaseMatch {
                                constructor(pattern) {
                                    super(pattern);
                                }
                                static get type() {
                                    return "inverse-prefix-exact";
                                }
                                static get multiRegex() {
                                    return /^!\^"(.*)"$/;
                                }
                                static get singleRegex() {
                                    return /^!\^(.*)$/;
                                }
                                search(text) {
                                    const isMatch = !text.startsWith(this.pattern);
                                    return {
                                        isMatch,
                                        score: isMatch ? 0 : 1,
                                        indices: [ 0, text.length - 1 ]
                                    };
                                }
                            }
                            class SuffixExactMatch extends BaseMatch {
                                constructor(pattern) {
                                    super(pattern);
                                }
                                static get type() {
                                    return "suffix-exact";
                                }
                                static get multiRegex() {
                                    return /^"(.*)"\$$/;
                                }
                                static get singleRegex() {
                                    return /^(.*)\$$/;
                                }
                                search(text) {
                                    const isMatch = text.endsWith(this.pattern);
                                    return {
                                        isMatch,
                                        score: isMatch ? 0 : 1,
                                        indices: [ text.length - this.pattern.length, text.length - 1 ]
                                    };
                                }
                            }
                            class InverseSuffixExactMatch extends BaseMatch {
                                constructor(pattern) {
                                    super(pattern);
                                }
                                static get type() {
                                    return "inverse-suffix-exact";
                                }
                                static get multiRegex() {
                                    return /^!"(.*)"\$$/;
                                }
                                static get singleRegex() {
                                    return /^!(.*)\$$/;
                                }
                                search(text) {
                                    const isMatch = !text.endsWith(this.pattern);
                                    return {
                                        isMatch,
                                        score: isMatch ? 0 : 1,
                                        indices: [ 0, text.length - 1 ]
                                    };
                                }
                            }
                            class FuzzyMatch extends BaseMatch {
                                constructor(pattern, {location = Config.location, threshold = Config.threshold, distance = Config.distance, includeMatches = Config.includeMatches, findAllMatches = Config.findAllMatches, minMatchCharLength = Config.minMatchCharLength, isCaseSensitive = Config.isCaseSensitive, ignoreLocation = Config.ignoreLocation} = {}) {
                                    super(pattern);
                                    this._bitapSearch = new BitapSearch(pattern, {
                                        location,
                                        threshold,
                                        distance,
                                        includeMatches,
                                        findAllMatches,
                                        minMatchCharLength,
                                        isCaseSensitive,
                                        ignoreLocation
                                    });
                                }
                                static get type() {
                                    return "fuzzy";
                                }
                                static get multiRegex() {
                                    return /^"(.*)"$/;
                                }
                                static get singleRegex() {
                                    return /^(.*)$/;
                                }
                                search(text) {
                                    return this._bitapSearch.searchIn(text);
                                }
                            }
                            class IncludeMatch extends BaseMatch {
                                constructor(pattern) {
                                    super(pattern);
                                }
                                static get type() {
                                    return "include";
                                }
                                static get multiRegex() {
                                    return /^'"(.*)"$/;
                                }
                                static get singleRegex() {
                                    return /^'(.*)$/;
                                }
                                search(text) {
                                    let location = 0;
                                    let index;
                                    const indices = [];
                                    const patternLen = this.pattern.length;
                                    while ((index = text.indexOf(this.pattern, location)) > -1) {
                                        location = index + patternLen;
                                        indices.push([ index, location - 1 ]);
                                    }
                                    const isMatch = !!indices.length;
                                    return {
                                        isMatch,
                                        score: isMatch ? 0 : 1,
                                        indices
                                    };
                                }
                            }
                            const searchers = [ ExactMatch, IncludeMatch, PrefixExactMatch, InversePrefixExactMatch, InverseSuffixExactMatch, SuffixExactMatch, InverseExactMatch, FuzzyMatch ];
                            const searchersLen = searchers.length;
                            const SPACE_RE = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
                            const OR_TOKEN = "|";
                            function parseQuery(pattern, options = {}) {
                                return pattern.split(OR_TOKEN).map((item => {
                                    let query = item.trim().split(SPACE_RE).filter((item => item && !!item.trim()));
                                    let results = [];
                                    for (let i = 0, len = query.length; i < len; i += 1) {
                                        const queryItem = query[i];
                                        let found = false;
                                        let idx = -1;
                                        while (!found && ++idx < searchersLen) {
                                            const searcher = searchers[idx];
                                            let token = searcher.isMultiMatch(queryItem);
                                            if (token) {
                                                results.push(new searcher(token, options));
                                                found = true;
                                            }
                                        }
                                        if (found) continue;
                                        idx = -1;
                                        while (++idx < searchersLen) {
                                            const searcher = searchers[idx];
                                            let token = searcher.isSingleMatch(queryItem);
                                            if (token) {
                                                results.push(new searcher(token, options));
                                                break;
                                            }
                                        }
                                    }
                                    return results;
                                }));
                            }
                            const MultiMatchSet = new Set([ FuzzyMatch.type, IncludeMatch.type ]);
                            class ExtendedSearch {
                                constructor(pattern, {isCaseSensitive = Config.isCaseSensitive, includeMatches = Config.includeMatches, minMatchCharLength = Config.minMatchCharLength, ignoreLocation = Config.ignoreLocation, findAllMatches = Config.findAllMatches, location = Config.location, threshold = Config.threshold, distance = Config.distance} = {}) {
                                    this.query = null;
                                    this.options = {
                                        isCaseSensitive,
                                        includeMatches,
                                        minMatchCharLength,
                                        findAllMatches,
                                        ignoreLocation,
                                        location,
                                        threshold,
                                        distance
                                    };
                                    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
                                    this.query = parseQuery(this.pattern, this.options);
                                }
                                static condition(_, options) {
                                    return options.useExtendedSearch;
                                }
                                searchIn(text) {
                                    const query = this.query;
                                    if (!query) return {
                                        isMatch: false,
                                        score: 1
                                    };
                                    const {includeMatches, isCaseSensitive} = this.options;
                                    text = isCaseSensitive ? text : text.toLowerCase();
                                    let numMatches = 0;
                                    let allIndices = [];
                                    let totalScore = 0;
                                    for (let i = 0, qLen = query.length; i < qLen; i += 1) {
                                        const searchers = query[i];
                                        allIndices.length = 0;
                                        numMatches = 0;
                                        for (let j = 0, pLen = searchers.length; j < pLen; j += 1) {
                                            const searcher = searchers[j];
                                            const {isMatch, indices, score} = searcher.search(text);
                                            if (isMatch) {
                                                numMatches += 1;
                                                totalScore += score;
                                                if (includeMatches) {
                                                    const type = searcher.constructor.type;
                                                    if (MultiMatchSet.has(type)) allIndices = [ ...allIndices, ...indices ]; else allIndices.push(indices);
                                                }
                                            } else {
                                                totalScore = 0;
                                                numMatches = 0;
                                                allIndices.length = 0;
                                                break;
                                            }
                                        }
                                        if (numMatches) {
                                            let result = {
                                                isMatch: true,
                                                score: totalScore / numMatches
                                            };
                                            if (includeMatches) result.indices = allIndices;
                                            return result;
                                        }
                                    }
                                    return {
                                        isMatch: false,
                                        score: 1
                                    };
                                }
                            }
                            const registeredSearchers = [];
                            function register(...args) {
                                registeredSearchers.push(...args);
                            }
                            function createSearcher(pattern, options) {
                                for (let i = 0, len = registeredSearchers.length; i < len; i += 1) {
                                    let searcherClass = registeredSearchers[i];
                                    if (searcherClass.condition(pattern, options)) return new searcherClass(pattern, options);
                                }
                                return new BitapSearch(pattern, options);
                            }
                            const LogicalOperator = {
                                AND: "$and",
                                OR: "$or"
                            };
                            const KeyType = {
                                PATH: "$path",
                                PATTERN: "$val"
                            };
                            const isExpression = query => !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
                            const isPath = query => !!query[KeyType.PATH];
                            const isLeaf = query => !isArray(query) && isObject(query) && !isExpression(query);
                            const convertToExplicit = query => ({
                                [LogicalOperator.AND]: Object.keys(query).map((key => ({
                                    [key]: query[key]
                                })))
                            });
                            function parse(query, options, {auto = true} = {}) {
                                const next = query => {
                                    let keys = Object.keys(query);
                                    const isQueryPath = isPath(query);
                                    if (!isQueryPath && keys.length > 1 && !isExpression(query)) return next(convertToExplicit(query));
                                    if (isLeaf(query)) {
                                        const key = isQueryPath ? query[KeyType.PATH] : keys[0];
                                        const pattern = isQueryPath ? query[KeyType.PATTERN] : query[key];
                                        if (!isString(pattern)) throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
                                        const obj = {
                                            keyId: createKeyId(key),
                                            pattern
                                        };
                                        if (auto) obj.searcher = createSearcher(pattern, options);
                                        return obj;
                                    }
                                    let node = {
                                        children: [],
                                        operator: keys[0]
                                    };
                                    keys.forEach((key => {
                                        const value = query[key];
                                        if (isArray(value)) value.forEach((item => {
                                            node.children.push(next(item));
                                        }));
                                    }));
                                    return node;
                                };
                                if (!isExpression(query)) query = convertToExplicit(query);
                                return next(query);
                            }
                            function computeScore(results, {ignoreFieldNorm = Config.ignoreFieldNorm}) {
                                results.forEach((result => {
                                    let totalScore = 1;
                                    result.matches.forEach((({key, norm, score}) => {
                                        const weight = key ? key.weight : null;
                                        totalScore *= Math.pow(score === 0 && weight ? Number.EPSILON : score, (weight || 1) * (ignoreFieldNorm ? 1 : norm));
                                    }));
                                    result.score = totalScore;
                                }));
                            }
                            function transformMatches(result, data) {
                                const matches = result.matches;
                                data.matches = [];
                                if (!isDefined(matches)) return;
                                matches.forEach((match => {
                                    if (!isDefined(match.indices) || !match.indices.length) return;
                                    const {indices, value} = match;
                                    let obj = {
                                        indices,
                                        value
                                    };
                                    if (match.key) obj.key = match.key.src;
                                    if (match.idx > -1) obj.refIndex = match.idx;
                                    data.matches.push(obj);
                                }));
                            }
                            function transformScore(result, data) {
                                data.score = result.score;
                            }
                            function format(results, docs, {includeMatches = Config.includeMatches, includeScore = Config.includeScore} = {}) {
                                const transformers = [];
                                if (includeMatches) transformers.push(transformMatches);
                                if (includeScore) transformers.push(transformScore);
                                return results.map((result => {
                                    const {idx} = result;
                                    const data = {
                                        item: docs[idx],
                                        refIndex: idx
                                    };
                                    if (transformers.length) transformers.forEach((transformer => {
                                        transformer(result, data);
                                    }));
                                    return data;
                                }));
                            }
                            class Fuse {
                                constructor(docs, options = {}, index) {
                                    this.options = {
                                        ...Config,
                                        ...options
                                    };
                                    if (this.options.useExtendedSearch && !true) ;
                                    this._keyStore = new KeyStore(this.options.keys);
                                    this.setCollection(docs, index);
                                }
                                setCollection(docs, index) {
                                    this._docs = docs;
                                    if (index && !(index instanceof FuseIndex)) throw new Error(INCORRECT_INDEX_TYPE);
                                    this._myIndex = index || createIndex(this.options.keys, this._docs, {
                                        getFn: this.options.getFn,
                                        fieldNormWeight: this.options.fieldNormWeight
                                    });
                                }
                                add(doc) {
                                    if (!isDefined(doc)) return;
                                    this._docs.push(doc);
                                    this._myIndex.add(doc);
                                }
                                remove(predicate = (() => false)) {
                                    const results = [];
                                    for (let i = 0, len = this._docs.length; i < len; i += 1) {
                                        const doc = this._docs[i];
                                        if (predicate(doc, i)) {
                                            this.removeAt(i);
                                            i -= 1;
                                            len -= 1;
                                            results.push(doc);
                                        }
                                    }
                                    return results;
                                }
                                removeAt(idx) {
                                    this._docs.splice(idx, 1);
                                    this._myIndex.removeAt(idx);
                                }
                                getIndex() {
                                    return this._myIndex;
                                }
                                search(query, {limit = -1} = {}) {
                                    const {includeMatches, includeScore, shouldSort, sortFn, ignoreFieldNorm} = this.options;
                                    let results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
                                    computeScore(results, {
                                        ignoreFieldNorm
                                    });
                                    if (shouldSort) results.sort(sortFn);
                                    if (isNumber(limit) && limit > -1) results = results.slice(0, limit);
                                    return format(results, this._docs, {
                                        includeMatches,
                                        includeScore
                                    });
                                }
                                _searchStringList(query) {
                                    const searcher = createSearcher(query, this.options);
                                    const {records} = this._myIndex;
                                    const results = [];
                                    records.forEach((({v: text, i: idx, n: norm}) => {
                                        if (!isDefined(text)) return;
                                        const {isMatch, score, indices} = searcher.searchIn(text);
                                        if (isMatch) results.push({
                                            item: text,
                                            idx,
                                            matches: [ {
                                                score,
                                                value: text,
                                                norm,
                                                indices
                                            } ]
                                        });
                                    }));
                                    return results;
                                }
                                _searchLogical(query) {
                                    const expression = parse(query, this.options);
                                    const evaluate = (node, item, idx) => {
                                        if (!node.children) {
                                            const {keyId, searcher} = node;
                                            const matches = this._findMatches({
                                                key: this._keyStore.get(keyId),
                                                value: this._myIndex.getValueForItemAtKeyId(item, keyId),
                                                searcher
                                            });
                                            if (matches && matches.length) return [ {
                                                idx,
                                                item,
                                                matches
                                            } ];
                                            return [];
                                        }
                                        const res = [];
                                        for (let i = 0, len = node.children.length; i < len; i += 1) {
                                            const child = node.children[i];
                                            const result = evaluate(child, item, idx);
                                            if (result.length) res.push(...result); else if (node.operator === LogicalOperator.AND) return [];
                                        }
                                        return res;
                                    };
                                    const records = this._myIndex.records;
                                    const resultMap = {};
                                    const results = [];
                                    records.forEach((({$: item, i: idx}) => {
                                        if (isDefined(item)) {
                                            let expResults = evaluate(expression, item, idx);
                                            if (expResults.length) {
                                                if (!resultMap[idx]) {
                                                    resultMap[idx] = {
                                                        idx,
                                                        item,
                                                        matches: []
                                                    };
                                                    results.push(resultMap[idx]);
                                                }
                                                expResults.forEach((({matches}) => {
                                                    resultMap[idx].matches.push(...matches);
                                                }));
                                            }
                                        }
                                    }));
                                    return results;
                                }
                                _searchObjectList(query) {
                                    const searcher = createSearcher(query, this.options);
                                    const {keys, records} = this._myIndex;
                                    const results = [];
                                    records.forEach((({$: item, i: idx}) => {
                                        if (!isDefined(item)) return;
                                        let matches = [];
                                        keys.forEach(((key, keyIndex) => {
                                            matches.push(...this._findMatches({
                                                key,
                                                value: item[keyIndex],
                                                searcher
                                            }));
                                        }));
                                        if (matches.length) results.push({
                                            idx,
                                            item,
                                            matches
                                        });
                                    }));
                                    return results;
                                }
                                _findMatches({key, value, searcher}) {
                                    if (!isDefined(value)) return [];
                                    let matches = [];
                                    if (isArray(value)) value.forEach((({v: text, i: idx, n: norm}) => {
                                        if (!isDefined(text)) return;
                                        const {isMatch, score, indices} = searcher.searchIn(text);
                                        if (isMatch) matches.push({
                                            score,
                                            key,
                                            value: text,
                                            idx,
                                            norm,
                                            indices
                                        });
                                    })); else {
                                        const {v: text, n: norm} = value;
                                        const {isMatch, score, indices} = searcher.searchIn(text);
                                        if (isMatch) matches.push({
                                            score,
                                            key,
                                            value: text,
                                            norm,
                                            indices
                                        });
                                    }
                                    return matches;
                                }
                            }
                            Fuse.version = "6.6.2";
                            Fuse.createIndex = createIndex;
                            Fuse.parseIndex = parseIndex;
                            Fuse.config = Config;
                            Fuse.parseQuery = parse;
                            register(ExtendedSearch);
                        },
                        791: function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_177999__) {
                            __nested_webpack_require_177999__.r(__nested_webpack_exports__);
                            __nested_webpack_require_177999__.d(__nested_webpack_exports__, {
                                __DO_NOT_USE__ActionTypes: function() {
                                    return ActionTypes;
                                },
                                applyMiddleware: function() {
                                    return applyMiddleware;
                                },
                                bindActionCreators: function() {
                                    return bindActionCreators;
                                },
                                combineReducers: function() {
                                    return combineReducers;
                                },
                                compose: function() {
                                    return compose;
                                },
                                createStore: function() {
                                    return createStore;
                                },
                                legacy_createStore: function() {
                                    return legacy_createStore;
                                }
                            });
                            function _typeof(obj) {
                                "@babel/helpers - typeof";
                                return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                                    return typeof obj;
                                } : function(obj) {
                                    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                }, _typeof(obj);
                            }
                            function _toPrimitive(input, hint) {
                                if (_typeof(input) !== "object" || input === null) return input;
                                var prim = input[Symbol.toPrimitive];
                                if (prim !== void 0) {
                                    var res = prim.call(input, hint || "default");
                                    if (_typeof(res) !== "object") return res;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return (hint === "string" ? String : Number)(input);
                            }
                            function _toPropertyKey(arg) {
                                var key = _toPrimitive(arg, "string");
                                return _typeof(key) === "symbol" ? key : String(key);
                            }
                            function _defineProperty(obj, key, value) {
                                key = _toPropertyKey(key);
                                if (key in obj) Object.defineProperty(obj, key, {
                                    value,
                                    enumerable: true,
                                    configurable: true,
                                    writable: true
                                }); else obj[key] = value;
                                return obj;
                            }
                            function ownKeys(object, enumerableOnly) {
                                var keys = Object.keys(object);
                                if (Object.getOwnPropertySymbols) {
                                    var symbols = Object.getOwnPropertySymbols(object);
                                    enumerableOnly && (symbols = symbols.filter((function(sym) {
                                        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                                    }))), keys.push.apply(keys, symbols);
                                }
                                return keys;
                            }
                            function _objectSpread2(target) {
                                for (var i = 1; i < arguments.length; i++) {
                                    var source = null != arguments[i] ? arguments[i] : {};
                                    i % 2 ? ownKeys(Object(source), !0).forEach((function(key) {
                                        _defineProperty(target, key, source[key]);
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach((function(key) {
                                        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                                    }));
                                }
                                return target;
                            }
                            function formatProdErrorMessage(code) {
                                return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + "use the non-minified dev environment for full errors. ";
                            }
                            var $$observable = function() {
                                return typeof Symbol === "function" && Symbol.observable || "@@observable";
                            }();
                            var randomString = function randomString() {
                                return Math.random().toString(36).substring(7).split("").join(".");
                            };
                            var ActionTypes = {
                                INIT: "@@redux/INIT" + randomString(),
                                REPLACE: "@@redux/REPLACE" + randomString(),
                                PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
                                    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
                                }
                            };
                            function isPlainObject(obj) {
                                if (typeof obj !== "object" || obj === null) return false;
                                var proto = obj;
                                while (Object.getPrototypeOf(proto) !== null) proto = Object.getPrototypeOf(proto);
                                return Object.getPrototypeOf(obj) === proto;
                            }
                            function createStore(reducer, preloadedState, enhancer) {
                                var _ref2;
                                if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") throw new Error(true ? formatProdErrorMessage(0) : 0);
                                if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
                                    enhancer = preloadedState;
                                    preloadedState = void 0;
                                }
                                if (typeof enhancer !== "undefined") {
                                    if (typeof enhancer !== "function") throw new Error(true ? formatProdErrorMessage(1) : 0);
                                    return enhancer(createStore)(reducer, preloadedState);
                                }
                                if (typeof reducer !== "function") throw new Error(true ? formatProdErrorMessage(2) : 0);
                                var currentReducer = reducer;
                                var currentState = preloadedState;
                                var currentListeners = [];
                                var nextListeners = currentListeners;
                                var isDispatching = false;
                                function ensureCanMutateNextListeners() {
                                    if (nextListeners === currentListeners) nextListeners = currentListeners.slice();
                                }
                                function getState() {
                                    if (isDispatching) throw new Error(true ? formatProdErrorMessage(3) : 0);
                                    return currentState;
                                }
                                function subscribe(listener) {
                                    if (typeof listener !== "function") throw new Error(true ? formatProdErrorMessage(4) : 0);
                                    if (isDispatching) throw new Error(true ? formatProdErrorMessage(5) : 0);
                                    var isSubscribed = true;
                                    ensureCanMutateNextListeners();
                                    nextListeners.push(listener);
                                    return function unsubscribe() {
                                        if (!isSubscribed) return;
                                        if (isDispatching) throw new Error(true ? formatProdErrorMessage(6) : 0);
                                        isSubscribed = false;
                                        ensureCanMutateNextListeners();
                                        var index = nextListeners.indexOf(listener);
                                        nextListeners.splice(index, 1);
                                        currentListeners = null;
                                    };
                                }
                                function dispatch(action) {
                                    if (!isPlainObject(action)) throw new Error(true ? formatProdErrorMessage(7) : 0);
                                    if (typeof action.type === "undefined") throw new Error(true ? formatProdErrorMessage(8) : 0);
                                    if (isDispatching) throw new Error(true ? formatProdErrorMessage(9) : 0);
                                    try {
                                        isDispatching = true;
                                        currentState = currentReducer(currentState, action);
                                    } finally {
                                        isDispatching = false;
                                    }
                                    var listeners = currentListeners = nextListeners;
                                    for (var i = 0; i < listeners.length; i++) {
                                        var listener = listeners[i];
                                        listener();
                                    }
                                    return action;
                                }
                                function replaceReducer(nextReducer) {
                                    if (typeof nextReducer !== "function") throw new Error(true ? formatProdErrorMessage(10) : 0);
                                    currentReducer = nextReducer;
                                    dispatch({
                                        type: ActionTypes.REPLACE
                                    });
                                }
                                function observable() {
                                    var _ref;
                                    var outerSubscribe = subscribe;
                                    return _ref = {
                                        subscribe: function subscribe(observer) {
                                            if (typeof observer !== "object" || observer === null) throw new Error(true ? formatProdErrorMessage(11) : 0);
                                            function observeState() {
                                                if (observer.next) observer.next(getState());
                                            }
                                            observeState();
                                            var unsubscribe = outerSubscribe(observeState);
                                            return {
                                                unsubscribe
                                            };
                                        }
                                    }, _ref[$$observable] = function() {
                                        return this;
                                    }, _ref;
                                }
                                dispatch({
                                    type: ActionTypes.INIT
                                });
                                return _ref2 = {
                                    dispatch,
                                    subscribe,
                                    getState,
                                    replaceReducer
                                }, _ref2[$$observable] = observable, _ref2;
                            }
                            var legacy_createStore = createStore;
                            function assertReducerShape(reducers) {
                                Object.keys(reducers).forEach((function(key) {
                                    var reducer = reducers[key];
                                    var initialState = reducer(void 0, {
                                        type: ActionTypes.INIT
                                    });
                                    if (typeof initialState === "undefined") throw new Error(true ? formatProdErrorMessage(12) : 0);
                                    if (typeof reducer(void 0, {
                                        type: ActionTypes.PROBE_UNKNOWN_ACTION()
                                    }) === "undefined") throw new Error(true ? formatProdErrorMessage(13) : 0);
                                }));
                            }
                            function combineReducers(reducers) {
                                var reducerKeys = Object.keys(reducers);
                                var finalReducers = {};
                                for (var i = 0; i < reducerKeys.length; i++) {
                                    var key = reducerKeys[i];
                                    if (false) ;
                                    if (typeof reducers[key] === "function") finalReducers[key] = reducers[key];
                                }
                                var finalReducerKeys = Object.keys(finalReducers);
                                if (false) ;
                                var shapeAssertionError;
                                try {
                                    assertReducerShape(finalReducers);
                                } catch (e) {
                                    shapeAssertionError = e;
                                }
                                return function combination(state, action) {
                                    if (state === void 0) state = {};
                                    if (shapeAssertionError) throw shapeAssertionError;
                                    if (false) ;
                                    var hasChanged = false;
                                    var nextState = {};
                                    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
                                        var _key = finalReducerKeys[_i];
                                        var reducer = finalReducers[_key];
                                        var previousStateForKey = state[_key];
                                        var nextStateForKey = reducer(previousStateForKey, action);
                                        if (typeof nextStateForKey === "undefined") {
                                            action && action.type;
                                            throw new Error(true ? formatProdErrorMessage(14) : 0);
                                        }
                                        nextState[_key] = nextStateForKey;
                                        hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
                                    }
                                    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
                                    return hasChanged ? nextState : state;
                                };
                            }
                            function bindActionCreator(actionCreator, dispatch) {
                                return function() {
                                    return dispatch(actionCreator.apply(this, arguments));
                                };
                            }
                            function bindActionCreators(actionCreators, dispatch) {
                                if (typeof actionCreators === "function") return bindActionCreator(actionCreators, dispatch);
                                if (typeof actionCreators !== "object" || actionCreators === null) throw new Error(true ? formatProdErrorMessage(16) : 0);
                                var boundActionCreators = {};
                                for (var key in actionCreators) {
                                    var actionCreator = actionCreators[key];
                                    if (typeof actionCreator === "function") boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
                                }
                                return boundActionCreators;
                            }
                            function compose() {
                                for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) funcs[_key] = arguments[_key];
                                if (funcs.length === 0) return function(arg) {
                                    return arg;
                                };
                                if (funcs.length === 1) return funcs[0];
                                return funcs.reduce((function(a, b) {
                                    return function() {
                                        return a(b.apply(void 0, arguments));
                                    };
                                }));
                            }
                            function applyMiddleware() {
                                for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) middlewares[_key] = arguments[_key];
                                return function(createStore) {
                                    return function() {
                                        var store = createStore.apply(void 0, arguments);
                                        var _dispatch = function dispatch() {
                                            throw new Error(true ? formatProdErrorMessage(15) : 0);
                                        };
                                        var middlewareAPI = {
                                            getState: store.getState,
                                            dispatch: function dispatch() {
                                                return _dispatch.apply(void 0, arguments);
                                            }
                                        };
                                        var chain = middlewares.map((function(middleware) {
                                            return middleware(middlewareAPI);
                                        }));
                                        _dispatch = compose.apply(void 0, chain)(store.dispatch);
                                        return _objectSpread2(_objectSpread2({}, store), {}, {
                                            dispatch: _dispatch
                                        });
                                    };
                                };
                            }
                            if (false) ;
                        }
                    };
                    var __webpack_module_cache__ = {};
                    function __nested_webpack_require_204296__(moduleId) {
                        var cachedModule = __webpack_module_cache__[moduleId];
                        if (cachedModule !== void 0) return cachedModule.exports;
                        var module = __webpack_module_cache__[moduleId] = {
                            exports: {}
                        };
                        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_204296__);
                        return module.exports;
                    }
                    !function() {
                        __nested_webpack_require_204296__.n = function(module) {
                            var getter = module && module.__esModule ? function() {
                                return module["default"];
                            } : function() {
                                return module;
                            };
                            __nested_webpack_require_204296__.d(getter, {
                                a: getter
                            });
                            return getter;
                        };
                    }();
                    !function() {
                        __nested_webpack_require_204296__.d = function(exports, definition) {
                            for (var key in definition) if (__nested_webpack_require_204296__.o(definition, key) && !__nested_webpack_require_204296__.o(exports, key)) Object.defineProperty(exports, key, {
                                enumerable: true,
                                get: definition[key]
                            });
                        };
                    }();
                    !function() {
                        __nested_webpack_require_204296__.o = function(obj, prop) {
                            return Object.prototype.hasOwnProperty.call(obj, prop);
                        };
                    }();
                    !function() {
                        __nested_webpack_require_204296__.r = function(exports) {
                            if (typeof Symbol !== "undefined" && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
                                value: "Module"
                            });
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        };
                    }();
                    var __nested_webpack_exports__ = {};
                    !function() {
                        var _scripts_choices__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_204296__(373);
                        var _scripts_choices__WEBPACK_IMPORTED_MODULE_0___default = __nested_webpack_require_204296__.n(_scripts_choices__WEBPACK_IMPORTED_MODULE_0__);
                        __nested_webpack_require_204296__(187);
                        __nested_webpack_require_204296__(883);
                        __nested_webpack_require_204296__(789);
                        __nested_webpack_require_204296__(686);
                        __nested_webpack_exports__["default"] = _scripts_choices__WEBPACK_IMPORTED_MODULE_0___default();
                    }();
                    __nested_webpack_exports__ = __nested_webpack_exports__["default"];
                    return __nested_webpack_exports__;
                }();
            }));
        },
        152: function(module) {
            /*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
            (function webpackUniversalModuleDefinition(root, factory) {
                if (true) module.exports = factory();
            })(0, (function() {
                return function() {
                    var __webpack_modules__ = {
                        686: function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_623__) {
                            "use strict";
                            __nested_webpack_require_623__.d(__nested_webpack_exports__, {
                                default: function() {
                                    return clipboard;
                                }
                            });
                            var tiny_emitter = __nested_webpack_require_623__(279);
                            var tiny_emitter_default = __nested_webpack_require_623__.n(tiny_emitter);
                            var listen = __nested_webpack_require_623__(370);
                            var listen_default = __nested_webpack_require_623__.n(listen);
                            var src_select = __nested_webpack_require_623__(817);
                            var select_default = __nested_webpack_require_623__.n(src_select);
                            function command(type) {
                                try {
                                    return document.execCommand(type);
                                } catch (err) {
                                    return false;
                                }
                            }
                            var ClipboardActionCut = function ClipboardActionCut(target) {
                                var selectedText = select_default()(target);
                                command("cut");
                                return selectedText;
                            };
                            var actions_cut = ClipboardActionCut;
                            function createFakeElement(value) {
                                var isRTL = document.documentElement.getAttribute("dir") === "rtl";
                                var fakeElement = document.createElement("textarea");
                                fakeElement.style.fontSize = "12pt";
                                fakeElement.style.border = "0";
                                fakeElement.style.padding = "0";
                                fakeElement.style.margin = "0";
                                fakeElement.style.position = "absolute";
                                fakeElement.style[isRTL ? "right" : "left"] = "-9999px";
                                var yPosition = window.pageYOffset || document.documentElement.scrollTop;
                                fakeElement.style.top = "".concat(yPosition, "px");
                                fakeElement.setAttribute("readonly", "");
                                fakeElement.value = value;
                                return fakeElement;
                            }
                            var fakeCopyAction = function fakeCopyAction(value, options) {
                                var fakeElement = createFakeElement(value);
                                options.container.appendChild(fakeElement);
                                var selectedText = select_default()(fakeElement);
                                command("copy");
                                fakeElement.remove();
                                return selectedText;
                            };
                            var ClipboardActionCopy = function ClipboardActionCopy(target) {
                                var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                                    container: document.body
                                };
                                var selectedText = "";
                                if (typeof target === "string") selectedText = fakeCopyAction(target, options); else if (target instanceof HTMLInputElement && ![ "text", "search", "url", "tel", "password" ].includes(target === null || target === void 0 ? void 0 : target.type)) selectedText = fakeCopyAction(target.value, options); else {
                                    selectedText = select_default()(target);
                                    command("copy");
                                }
                                return selectedText;
                            };
                            var actions_copy = ClipboardActionCopy;
                            function _typeof(obj) {
                                "@babel/helpers - typeof";
                                if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
                                    return typeof obj;
                                }; else _typeof = function _typeof(obj) {
                                    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                };
                                return _typeof(obj);
                            }
                            var ClipboardActionDefault = function ClipboardActionDefault() {
                                var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                                var _options$action = options.action, action = _options$action === void 0 ? "copy" : _options$action, container = options.container, target = options.target, text = options.text;
                                if (action !== "copy" && action !== "cut") throw new Error('Invalid "action" value, use either "copy" or "cut"');
                                if (target !== void 0) if (target && _typeof(target) === "object" && target.nodeType === 1) {
                                    if (action === "copy" && target.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                    if (action === "cut" && (target.hasAttribute("readonly") || target.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                } else throw new Error('Invalid "target" value, use a valid Element');
                                if (text) return actions_copy(text, {
                                    container
                                });
                                if (target) return action === "cut" ? actions_cut(target) : actions_copy(target, {
                                    container
                                });
                            };
                            var actions_default = ClipboardActionDefault;
                            function clipboard_typeof(obj) {
                                "@babel/helpers - typeof";
                                if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") clipboard_typeof = function _typeof(obj) {
                                    return typeof obj;
                                }; else clipboard_typeof = function _typeof(obj) {
                                    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                };
                                return clipboard_typeof(obj);
                            }
                            function _classCallCheck(instance, Constructor) {
                                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                            }
                            function _defineProperties(target, props) {
                                for (var i = 0; i < props.length; i++) {
                                    var descriptor = props[i];
                                    descriptor.enumerable = descriptor.enumerable || false;
                                    descriptor.configurable = true;
                                    if ("value" in descriptor) descriptor.writable = true;
                                    Object.defineProperty(target, descriptor.key, descriptor);
                                }
                            }
                            function _createClass(Constructor, protoProps, staticProps) {
                                if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                                if (staticProps) _defineProperties(Constructor, staticProps);
                                return Constructor;
                            }
                            function _inherits(subClass, superClass) {
                                if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
                                subClass.prototype = Object.create(superClass && superClass.prototype, {
                                    constructor: {
                                        value: subClass,
                                        writable: true,
                                        configurable: true
                                    }
                                });
                                if (superClass) _setPrototypeOf(subClass, superClass);
                            }
                            function _setPrototypeOf(o, p) {
                                _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                                    o.__proto__ = p;
                                    return o;
                                };
                                return _setPrototypeOf(o, p);
                            }
                            function _createSuper(Derived) {
                                var hasNativeReflectConstruct = _isNativeReflectConstruct();
                                return function _createSuperInternal() {
                                    var result, Super = _getPrototypeOf(Derived);
                                    if (hasNativeReflectConstruct) {
                                        var NewTarget = _getPrototypeOf(this).constructor;
                                        result = Reflect.construct(Super, arguments, NewTarget);
                                    } else result = Super.apply(this, arguments);
                                    return _possibleConstructorReturn(this, result);
                                };
                            }
                            function _possibleConstructorReturn(self, call) {
                                if (call && (clipboard_typeof(call) === "object" || typeof call === "function")) return call;
                                return _assertThisInitialized(self);
                            }
                            function _assertThisInitialized(self) {
                                if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return self;
                            }
                            function _isNativeReflectConstruct() {
                                if (typeof Reflect === "undefined" || !Reflect.construct) return false;
                                if (Reflect.construct.sham) return false;
                                if (typeof Proxy === "function") return true;
                                try {
                                    Date.prototype.toString.call(Reflect.construct(Date, [], (function() {})));
                                    return true;
                                } catch (e) {
                                    return false;
                                }
                            }
                            function _getPrototypeOf(o) {
                                _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                                    return o.__proto__ || Object.getPrototypeOf(o);
                                };
                                return _getPrototypeOf(o);
                            }
                            function getAttributeValue(suffix, element) {
                                var attribute = "data-clipboard-".concat(suffix);
                                if (!element.hasAttribute(attribute)) return;
                                return element.getAttribute(attribute);
                            }
                            var Clipboard = function(_Emitter) {
                                _inherits(Clipboard, _Emitter);
                                var _super = _createSuper(Clipboard);
                                function Clipboard(trigger, options) {
                                    var _this;
                                    _classCallCheck(this, Clipboard);
                                    _this = _super.call(this);
                                    _this.resolveOptions(options);
                                    _this.listenClick(trigger);
                                    return _this;
                                }
                                _createClass(Clipboard, [ {
                                    key: "resolveOptions",
                                    value: function resolveOptions() {
                                        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                                        this.action = typeof options.action === "function" ? options.action : this.defaultAction;
                                        this.target = typeof options.target === "function" ? options.target : this.defaultTarget;
                                        this.text = typeof options.text === "function" ? options.text : this.defaultText;
                                        this.container = clipboard_typeof(options.container) === "object" ? options.container : document.body;
                                    }
                                }, {
                                    key: "listenClick",
                                    value: function listenClick(trigger) {
                                        var _this2 = this;
                                        this.listener = listen_default()(trigger, "click", (function(e) {
                                            return _this2.onClick(e);
                                        }));
                                    }
                                }, {
                                    key: "onClick",
                                    value: function onClick(e) {
                                        var trigger = e.delegateTarget || e.currentTarget;
                                        var action = this.action(trigger) || "copy";
                                        var text = actions_default({
                                            action,
                                            container: this.container,
                                            target: this.target(trigger),
                                            text: this.text(trigger)
                                        });
                                        this.emit(text ? "success" : "error", {
                                            action,
                                            text,
                                            trigger,
                                            clearSelection: function clearSelection() {
                                                if (trigger) trigger.focus();
                                                window.getSelection().removeAllRanges();
                                            }
                                        });
                                    }
                                }, {
                                    key: "defaultAction",
                                    value: function defaultAction(trigger) {
                                        return getAttributeValue("action", trigger);
                                    }
                                }, {
                                    key: "defaultTarget",
                                    value: function defaultTarget(trigger) {
                                        var selector = getAttributeValue("target", trigger);
                                        if (selector) return document.querySelector(selector);
                                    }
                                }, {
                                    key: "defaultText",
                                    value: function defaultText(trigger) {
                                        return getAttributeValue("text", trigger);
                                    }
                                }, {
                                    key: "destroy",
                                    value: function destroy() {
                                        this.listener.destroy();
                                    }
                                } ], [ {
                                    key: "copy",
                                    value: function copy(target) {
                                        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                                            container: document.body
                                        };
                                        return actions_copy(target, options);
                                    }
                                }, {
                                    key: "cut",
                                    value: function cut(target) {
                                        return actions_cut(target);
                                    }
                                }, {
                                    key: "isSupported",
                                    value: function isSupported() {
                                        var action = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [ "copy", "cut" ];
                                        var actions = typeof action === "string" ? [ action ] : action;
                                        var support = !!document.queryCommandSupported;
                                        actions.forEach((function(action) {
                                            support = support && !!document.queryCommandSupported(action);
                                        }));
                                        return support;
                                    }
                                } ]);
                                return Clipboard;
                            }(tiny_emitter_default());
                            var clipboard = Clipboard;
                        },
                        828: function(module) {
                            var DOCUMENT_NODE_TYPE = 9;
                            if (typeof Element !== "undefined" && !Element.prototype.matches) {
                                var proto = Element.prototype;
                                proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
                            }
                            function closest(element, selector) {
                                while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
                                    if (typeof element.matches === "function" && element.matches(selector)) return element;
                                    element = element.parentNode;
                                }
                            }
                            module.exports = closest;
                        },
                        438: function(module, __unused_webpack_exports, __nested_webpack_require_15749__) {
                            var closest = __nested_webpack_require_15749__(828);
                            function _delegate(element, selector, type, callback, useCapture) {
                                var listenerFn = listener.apply(this, arguments);
                                element.addEventListener(type, listenerFn, useCapture);
                                return {
                                    destroy: function() {
                                        element.removeEventListener(type, listenerFn, useCapture);
                                    }
                                };
                            }
                            function delegate(elements, selector, type, callback, useCapture) {
                                if (typeof elements.addEventListener === "function") return _delegate.apply(null, arguments);
                                if (typeof type === "function") return _delegate.bind(null, document).apply(null, arguments);
                                if (typeof elements === "string") elements = document.querySelectorAll(elements);
                                return Array.prototype.map.call(elements, (function(element) {
                                    return _delegate(element, selector, type, callback, useCapture);
                                }));
                            }
                            function listener(element, selector, type, callback) {
                                return function(e) {
                                    e.delegateTarget = closest(e.target, selector);
                                    if (e.delegateTarget) callback.call(element, e);
                                };
                            }
                            module.exports = delegate;
                        },
                        879: function(__unused_webpack_module, exports) {
                            exports.node = function(value) {
                                return value !== void 0 && value instanceof HTMLElement && value.nodeType === 1;
                            };
                            exports.nodeList = function(value) {
                                var type = Object.prototype.toString.call(value);
                                return value !== void 0 && (type === "[object NodeList]" || type === "[object HTMLCollection]") && "length" in value && (value.length === 0 || exports.node(value[0]));
                            };
                            exports.string = function(value) {
                                return typeof value === "string" || value instanceof String;
                            };
                            exports.fn = function(value) {
                                var type = Object.prototype.toString.call(value);
                                return type === "[object Function]";
                            };
                        },
                        370: function(module, __unused_webpack_exports, __nested_webpack_require_19113__) {
                            var is = __nested_webpack_require_19113__(879);
                            var delegate = __nested_webpack_require_19113__(438);
                            function listen(target, type, callback) {
                                if (!target && !type && !callback) throw new Error("Missing required arguments");
                                if (!is.string(type)) throw new TypeError("Second argument must be a String");
                                if (!is.fn(callback)) throw new TypeError("Third argument must be a Function");
                                if (is.node(target)) return listenNode(target, type, callback); else if (is.nodeList(target)) return listenNodeList(target, type, callback); else if (is.string(target)) return listenSelector(target, type, callback); else throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                            }
                            function listenNode(node, type, callback) {
                                node.addEventListener(type, callback);
                                return {
                                    destroy: function() {
                                        node.removeEventListener(type, callback);
                                    }
                                };
                            }
                            function listenNodeList(nodeList, type, callback) {
                                Array.prototype.forEach.call(nodeList, (function(node) {
                                    node.addEventListener(type, callback);
                                }));
                                return {
                                    destroy: function() {
                                        Array.prototype.forEach.call(nodeList, (function(node) {
                                            node.removeEventListener(type, callback);
                                        }));
                                    }
                                };
                            }
                            function listenSelector(selector, type, callback) {
                                return delegate(document.body, selector, type, callback);
                            }
                            module.exports = listen;
                        },
                        817: function(module) {
                            function select(element) {
                                var selectedText;
                                if (element.nodeName === "SELECT") {
                                    element.focus();
                                    selectedText = element.value;
                                } else if (element.nodeName === "INPUT" || element.nodeName === "TEXTAREA") {
                                    var isReadOnly = element.hasAttribute("readonly");
                                    if (!isReadOnly) element.setAttribute("readonly", "");
                                    element.select();
                                    element.setSelectionRange(0, element.value.length);
                                    if (!isReadOnly) element.removeAttribute("readonly");
                                    selectedText = element.value;
                                } else {
                                    if (element.hasAttribute("contenteditable")) element.focus();
                                    var selection = window.getSelection();
                                    var range = document.createRange();
                                    range.selectNodeContents(element);
                                    selection.removeAllRanges();
                                    selection.addRange(range);
                                    selectedText = selection.toString();
                                }
                                return selectedText;
                            }
                            module.exports = select;
                        },
                        279: function(module) {
                            function E() {}
                            E.prototype = {
                                on: function(name, callback, ctx) {
                                    var e = this.e || (this.e = {});
                                    (e[name] || (e[name] = [])).push({
                                        fn: callback,
                                        ctx
                                    });
                                    return this;
                                },
                                once: function(name, callback, ctx) {
                                    var self = this;
                                    function listener() {
                                        self.off(name, listener);
                                        callback.apply(ctx, arguments);
                                    }
                                    listener._ = callback;
                                    return this.on(name, listener, ctx);
                                },
                                emit: function(name) {
                                    var data = [].slice.call(arguments, 1);
                                    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
                                    var i = 0;
                                    var len = evtArr.length;
                                    for (i; i < len; i++) evtArr[i].fn.apply(evtArr[i].ctx, data);
                                    return this;
                                },
                                off: function(name, callback) {
                                    var e = this.e || (this.e = {});
                                    var evts = e[name];
                                    var liveEvents = [];
                                    if (evts && callback) for (var i = 0, len = evts.length; i < len; i++) if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
                                    liveEvents.length ? e[name] = liveEvents : delete e[name];
                                    return this;
                                }
                            };
                            module.exports = E;
                            module.exports.TinyEmitter = E;
                        }
                    };
                    var __webpack_module_cache__ = {};
                    function __nested_webpack_require_24495__(moduleId) {
                        if (__webpack_module_cache__[moduleId]) return __webpack_module_cache__[moduleId].exports;
                        var module = __webpack_module_cache__[moduleId] = {
                            exports: {}
                        };
                        __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_24495__);
                        return module.exports;
                    }
                    !function() {
                        __nested_webpack_require_24495__.n = function(module) {
                            var getter = module && module.__esModule ? function() {
                                return module["default"];
                            } : function() {
                                return module;
                            };
                            __nested_webpack_require_24495__.d(getter, {
                                a: getter
                            });
                            return getter;
                        };
                    }();
                    !function() {
                        __nested_webpack_require_24495__.d = function(exports, definition) {
                            for (var key in definition) if (__nested_webpack_require_24495__.o(definition, key) && !__nested_webpack_require_24495__.o(exports, key)) Object.defineProperty(exports, key, {
                                enumerable: true,
                                get: definition[key]
                            });
                        };
                    }();
                    !function() {
                        __nested_webpack_require_24495__.o = function(obj, prop) {
                            return Object.prototype.hasOwnProperty.call(obj, prop);
                        };
                    }();
                    return __nested_webpack_require_24495__(686);
                }().default;
            }));
        },
        895: () => {
            "use strict";
            if (typeof Object.assign !== "function") Object.assign = function(target) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
                if (!target) throw TypeError("Cannot convert undefined or null to object");
                var _loop_1 = function(source) {
                    if (source) Object.keys(source).forEach((function(key) {
                        return target[key] = source[key];
                    }));
                };
                for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
                    var source = args_1[_a];
                    _loop_1(source);
                }
                return target;
            };
        },
        592: function(module) {
            (function(global, factory) {
                true ? module.exports = factory() : 0;
            })(0, (function() {
                "use strict";
                /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */                var __assign = function() {
                    __assign = Object.assign || function __assign(t) {
                        for (var s, i = 1, n = arguments.length; i < n; i++) {
                            s = arguments[i];
                            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                        }
                        return t;
                    };
                    return __assign.apply(this, arguments);
                };
                var monthToStr = function(monthNumber, shorthand, locale) {
                    return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
                };
                function clearNode(node) {
                    while (node.firstChild) node.removeChild(node.firstChild);
                }
                function getEventTarget(event) {
                    try {
                        if (typeof event.composedPath === "function") {
                            var path = event.composedPath();
                            return path[0];
                        }
                        return event.target;
                    } catch (error) {
                        return event.target;
                    }
                }
                var defaultConfig = {
                    shorthand: false,
                    dateFormat: "F Y",
                    altFormat: "F Y",
                    theme: "light"
                };
                function monthSelectPlugin(pluginConfig) {
                    var config = __assign(__assign({}, defaultConfig), pluginConfig);
                    return function(fp) {
                        fp.config.dateFormat = config.dateFormat;
                        fp.config.altFormat = config.altFormat;
                        var self = {
                            monthsContainer: null
                        };
                        function clearUnnecessaryDOMElements() {
                            if (!fp.rContainer) return;
                            clearNode(fp.rContainer);
                            for (var index = 0; index < fp.monthElements.length; index++) {
                                var element = fp.monthElements[index];
                                if (!element.parentNode) continue;
                                element.parentNode.removeChild(element);
                            }
                        }
                        function build() {
                            if (!fp.rContainer) return;
                            self.monthsContainer = fp._createElement("div", "flatpickr-monthSelect-months");
                            self.monthsContainer.tabIndex = -1;
                            buildMonths();
                            fp.rContainer.appendChild(self.monthsContainer);
                            fp.calendarContainer.classList.add("flatpickr-monthSelect-theme-" + config.theme);
                        }
                        function buildMonths() {
                            if (!self.monthsContainer) return;
                            clearNode(self.monthsContainer);
                            var frag = document.createDocumentFragment();
                            for (var i = 0; i < 12; i++) {
                                var month = fp.createDay("flatpickr-monthSelect-month", new Date(fp.currentYear, i), 0, i);
                                if (month.dateObj.getMonth() === (new Date).getMonth() && month.dateObj.getFullYear() === (new Date).getFullYear()) month.classList.add("today");
                                month.textContent = monthToStr(i, config.shorthand, fp.l10n);
                                month.addEventListener("click", selectMonth);
                                frag.appendChild(month);
                            }
                            self.monthsContainer.appendChild(frag);
                            if (fp.config.minDate && fp.currentYear === fp.config.minDate.getFullYear()) fp.prevMonthNav.classList.add("flatpickr-disabled"); else fp.prevMonthNav.classList.remove("flatpickr-disabled");
                            if (fp.config.maxDate && fp.currentYear === fp.config.maxDate.getFullYear()) fp.nextMonthNav.classList.add("flatpickr-disabled"); else fp.nextMonthNav.classList.remove("flatpickr-disabled");
                        }
                        function bindEvents() {
                            fp._bind(fp.prevMonthNav, "click", (function(e) {
                                e.preventDefault();
                                e.stopPropagation();
                                fp.changeYear(fp.currentYear - 1);
                                selectYear();
                                buildMonths();
                            }));
                            fp._bind(fp.nextMonthNav, "click", (function(e) {
                                e.preventDefault();
                                e.stopPropagation();
                                fp.changeYear(fp.currentYear + 1);
                                selectYear();
                                buildMonths();
                            }));
                            fp._bind(self.monthsContainer, "mouseover", (function(e) {
                                if (fp.config.mode === "range") fp.onMouseOver(getEventTarget(e), "flatpickr-monthSelect-month");
                            }));
                        }
                        function setCurrentlySelected() {
                            if (!fp.rContainer) return;
                            if (!fp.selectedDates.length) return;
                            var currentlySelected = fp.rContainer.querySelectorAll(".flatpickr-monthSelect-month.selected");
                            for (var index = 0; index < currentlySelected.length; index++) currentlySelected[index].classList.remove("selected");
                            var targetMonth = fp.selectedDates[0].getMonth();
                            var month = fp.rContainer.querySelector(".flatpickr-monthSelect-month:nth-child(" + (targetMonth + 1) + ")");
                            if (month) month.classList.add("selected");
                        }
                        function selectYear() {
                            var selectedDate = fp.selectedDates[0];
                            if (selectedDate) {
                                selectedDate = new Date(selectedDate);
                                selectedDate.setFullYear(fp.currentYear);
                                if (fp.config.minDate && selectedDate < fp.config.minDate) selectedDate = fp.config.minDate;
                                if (fp.config.maxDate && selectedDate > fp.config.maxDate) selectedDate = fp.config.maxDate;
                                fp.currentYear = selectedDate.getFullYear();
                            }
                            fp.currentYearElement.value = String(fp.currentYear);
                            if (fp.rContainer) {
                                var months = fp.rContainer.querySelectorAll(".flatpickr-monthSelect-month");
                                months.forEach((function(month) {
                                    month.dateObj.setFullYear(fp.currentYear);
                                    if (fp.config.minDate && month.dateObj < fp.config.minDate || fp.config.maxDate && month.dateObj > fp.config.maxDate) month.classList.add("flatpickr-disabled"); else month.classList.remove("flatpickr-disabled");
                                }));
                            }
                            setCurrentlySelected();
                        }
                        function selectMonth(e) {
                            e.preventDefault();
                            e.stopPropagation();
                            var eventTarget = getEventTarget(e);
                            if (!(eventTarget instanceof Element)) return;
                            if (eventTarget.classList.contains("flatpickr-disabled")) return;
                            if (eventTarget.classList.contains("notAllowed")) return;
                            setMonth(eventTarget.dateObj);
                            if (fp.config.closeOnSelect) {
                                var single = fp.config.mode === "single";
                                var range = fp.config.mode === "range" && fp.selectedDates.length === 2;
                                if (single || range) fp.close();
                            }
                        }
                        function setMonth(date) {
                            var selectedDate = new Date(fp.currentYear, date.getMonth(), date.getDate());
                            var selectedDates = [];
                            switch (fp.config.mode) {
                              case "single":
                                selectedDates = [ selectedDate ];
                                break;

                              case "multiple":
                                selectedDates.push(selectedDate);
                                break;

                              case "range":
                                if (fp.selectedDates.length === 2) selectedDates = [ selectedDate ]; else {
                                    selectedDates = fp.selectedDates.concat([ selectedDate ]);
                                    selectedDates.sort((function(a, b) {
                                        return a.getTime() - b.getTime();
                                    }));
                                }
                                break;
                            }
                            fp.setDate(selectedDates, true);
                            setCurrentlySelected();
                        }
                        var shifts = {
                            37: -1,
                            39: 1,
                            40: 3,
                            38: -3
                        };
                        function onKeyDown(_, __, ___, e) {
                            var shouldMove = shifts[e.keyCode] !== void 0;
                            if (!shouldMove && e.keyCode !== 13) return;
                            if (!fp.rContainer || !self.monthsContainer) return;
                            var currentlySelected = fp.rContainer.querySelector(".flatpickr-monthSelect-month.selected");
                            var index = Array.prototype.indexOf.call(self.monthsContainer.children, document.activeElement);
                            if (index === -1) {
                                var target = currentlySelected || self.monthsContainer.firstElementChild;
                                target.focus();
                                index = target.$i;
                            }
                            if (shouldMove) self.monthsContainer.children[(12 + index + shifts[e.keyCode]) % 12].focus(); else if (e.keyCode === 13 && self.monthsContainer.contains(document.activeElement)) setMonth(document.activeElement.dateObj);
                        }
                        function closeHook() {
                            var _a;
                            if (((_a = fp.config) === null || _a === void 0 ? void 0 : _a.mode) === "range" && fp.selectedDates.length === 1) fp.clear(false);
                            if (!fp.selectedDates.length) buildMonths();
                        }
                        function stubCurrentMonth() {
                            config._stubbedCurrentMonth = fp._initialDate.getMonth();
                            fp._initialDate.setMonth(config._stubbedCurrentMonth);
                            fp.currentMonth = config._stubbedCurrentMonth;
                        }
                        function unstubCurrentMonth() {
                            if (!config._stubbedCurrentMonth) return;
                            fp._initialDate.setMonth(config._stubbedCurrentMonth);
                            fp.currentMonth = config._stubbedCurrentMonth;
                            delete config._stubbedCurrentMonth;
                        }
                        function destroyPluginInstance() {
                            if (self.monthsContainer !== null) {
                                var months = self.monthsContainer.querySelectorAll(".flatpickr-monthSelect-month");
                                for (var index = 0; index < months.length; index++) months[index].removeEventListener("click", selectMonth);
                            }
                        }
                        return {
                            onParseConfig: function() {
                                fp.config.enableTime = false;
                            },
                            onValueUpdate: setCurrentlySelected,
                            onKeyDown,
                            onReady: [ stubCurrentMonth, clearUnnecessaryDOMElements, build, bindEvents, setCurrentlySelected, function() {
                                fp.config.onClose.push(closeHook);
                                fp.loadedPlugins.push("monthSelect");
                            } ],
                            onDestroy: [ unstubCurrentMonth, destroyPluginInstance, function() {
                                fp.config.onClose = fp.config.onClose.filter((function(hook) {
                                    return hook !== closeHook;
                                }));
                            } ]
                        };
                    };
                }
                return monthSelectPlugin;
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        let bodyLockStatus = true;
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter((function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            }));
            if (media.length) {
                const breakpointsArray = [];
                media.forEach((item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                }));
                let mdQueries = breakpointsArray.map((function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                }));
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach((breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter((function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        }));
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    }));
                    return mdQueriesArray;
                }
            }
        }
        function uniqArray(array) {
            return array.filter((function(item, index, self) {
                return self.indexOf(item) === index;
            }));
        }
        function getHash() {
            if (location.hash) return location.hash.replace("#", "");
        }
        function setHash(hash) {
            hash = hash ? `#${hash}` : window.location.href.split("#")[0];
            history.pushState("", "", hash);
        }
        function spollers() {
            const spollersArray = document.querySelectorAll("[data-spollers]");
            if (spollersArray.length > 0) {
                document.addEventListener("click", setSpollerAction);
                const spollersRegular = Array.from(spollersArray).filter((function(item, index, self) {
                    return !item.dataset.spollers.split(",")[0];
                }));
                if (spollersRegular.length) initSpollers(spollersRegular);
                let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
                function initSpollers(spollersArray, matchMedia = false) {
                    spollersArray.forEach((spollersBlock => {
                        spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                        if (matchMedia.matches || !matchMedia) {
                            spollersBlock.classList.add("_spoller-init");
                            initSpollerBody(spollersBlock);
                        } else {
                            spollersBlock.classList.remove("_spoller-init");
                            initSpollerBody(spollersBlock, false);
                        }
                    }));
                }
                function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                    let spollerItems = spollersBlock.querySelectorAll("details");
                    if (spollerItems.length) {
                        spollerItems = Array.from(spollerItems).filter((item => item.closest("[data-spollers]") === spollersBlock));
                        spollerItems.forEach((spollerItem => {
                            let spollerTitle = spollerItem.querySelector("summary");
                            if (hideSpollerBody) {
                                spollerTitle.removeAttribute("tabindex");
                                if (!spollerItem.hasAttribute("data-open")) {
                                    spollerItem.open = false;
                                    spollerTitle.nextElementSibling.hidden = true;
                                } else {
                                    spollerTitle.classList.add("_spoller-active");
                                    spollerItem.open = true;
                                }
                            } else {
                                spollerTitle.setAttribute("tabindex", "-1");
                                spollerTitle.classList.remove("_spoller-active");
                                spollerItem.open = true;
                                spollerTitle.nextElementSibling.hidden = false;
                            }
                        }));
                    }
                }
                function setSpollerAction(e) {
                    const el = e.target;
                    if (el.closest("summary") && el.closest("[data-spollers]")) {
                        if (el.closest("[data-spollers]").classList.contains("_spoller-init")) {
                            const spollerTitle = el.closest("summary");
                            const spollerBlock = spollerTitle.closest("details");
                            const spollersBlock = spollerTitle.closest("[data-spollers]");
                            const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                            const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                            if (!spollersBlock.querySelectorAll("._slide").length) {
                                if (oneSpoller && !spollerBlock.open) hideSpollersBody(spollersBlock);
                                spollerTitle.classList.toggle("_spoller-active");
                                _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                                !spollerBlock.open ? spollerBlock.open = true : setTimeout((() => {
                                    spollerBlock.open = false;
                                }), spollerSpeed);
                            }
                        }
                        e.preventDefault();
                    }
                    if (!el.closest("[data-spollers]")) {
                        const spollersClose = document.querySelectorAll("[data-spoller-close]");
                        if (spollersClose.length) spollersClose.forEach((spollerClose => {
                            const spollersBlock = spollerClose.closest("[data-spollers]");
                            const spollerCloseBlock = spollerClose.parentNode;
                            if (spollersBlock.classList.contains("_spoller-init")) {
                                const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                                spollerClose.classList.remove("_spoller-active");
                                _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                                setTimeout((() => {
                                    spollerCloseBlock.open = false;
                                }), spollerSpeed);
                            }
                        }));
                    }
                }
                function hideSpollersBody(spollersBlock) {
                    const spollerActiveBlock = spollersBlock.querySelector("details[open]");
                    if (spollerActiveBlock && !spollersBlock.querySelectorAll("._slide").length) {
                        const spollerActiveTitle = spollerActiveBlock.querySelector("summary");
                        const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                        spollerActiveTitle.classList.remove("_spoller-active");
                        _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                        setTimeout((() => {
                            spollerActiveBlock.open = false;
                        }), spollerSpeed);
                    }
                }
            }
        }
        function tabs() {
            const tabs = document.querySelectorAll("[data-tabs]");
            let tabsActiveHash = [];
            if (tabs.length > 0) {
                const hash = getHash();
                if (hash && hash.startsWith("tab-")) tabsActiveHash = hash.replace("tab-", "").split("-");
                tabs.forEach(((tabsBlock, index) => {
                    tabsBlock.classList.add("_tab-init");
                    tabsBlock.setAttribute("data-tabs-index", index);
                    tabsBlock.addEventListener("click", setTabsAction);
                    initTabs(tabsBlock);
                }));
                let mdQueriesArray = dataMediaQueries(tabs, "tabs");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
            }
            function setTitlePosition(tabsMediaArray, matchMedia) {
                tabsMediaArray.forEach((tabsMediaItem => {
                    tabsMediaItem = tabsMediaItem.item;
                    let tabsTitles = tabsMediaItem.querySelector("[data-tabs-titles]");
                    let tabsTitleItems = tabsMediaItem.querySelectorAll("[data-tabs-title]");
                    let tabsContent = tabsMediaItem.querySelector("[data-tabs-body]");
                    let tabsContentItems = tabsMediaItem.querySelectorAll("[data-tabs-item]");
                    tabsTitleItems = Array.from(tabsTitleItems).filter((item => item.closest("[data-tabs]") === tabsMediaItem));
                    tabsContentItems = Array.from(tabsContentItems).filter((item => item.closest("[data-tabs]") === tabsMediaItem));
                    tabsContentItems.forEach(((tabsContentItem, index) => {
                        if (matchMedia.matches) {
                            tabsContent.append(tabsTitleItems[index]);
                            tabsContent.append(tabsContentItem);
                            tabsMediaItem.classList.add("_tab-spoller");
                        } else {
                            tabsTitles.append(tabsTitleItems[index]);
                            tabsMediaItem.classList.remove("_tab-spoller");
                        }
                    }));
                }));
            }
            function initTabs(tabsBlock) {
                let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-titles]>*");
                let tabsContent = tabsBlock.querySelectorAll("[data-tabs-body]>*");
                const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
                const tabsActiveHashBlock = tabsActiveHash[0] == tabsBlockIndex;
                if (tabsActiveHashBlock) {
                    const tabsActiveTitle = tabsBlock.querySelector("[data-tabs-titles]>._tab-active");
                    tabsActiveTitle ? tabsActiveTitle.classList.remove("_tab-active") : null;
                }
                if (tabsContent.length) {
                    tabsContent = Array.from(tabsContent).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    if (tabsBlock.closest("[data-tabs-spoilers]")) tabsTitles = Array.from(tabsBlock.querySelectorAll("button")); else tabsTitles = Array.from(tabsTitles).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsContent.forEach(((tabsContentItem, index) => {
                        tabsTitles[index].setAttribute("data-tabs-title", "");
                        tabsContentItem.setAttribute("data-tabs-item", "");
                        if (tabsActiveHashBlock && index == tabsActiveHash[1]) tabsTitles[index].classList.add("_tab-active");
                        tabsContentItem.hidden = !tabsTitles[index].classList.contains("_tab-active");
                    }));
                }
            }
            function setTabsStatus(tabsBlock) {
                let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-title]");
                let tabsContent = tabsBlock.querySelectorAll("[data-tabs-item]");
                const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
                function isTabsAnamate(tabsBlock) {
                    if (tabsBlock.hasAttribute("data-tabs-animate")) return tabsBlock.dataset.tabsAnimate > 0 ? Number(tabsBlock.dataset.tabsAnimate) : 500;
                }
                const tabsBlockAnimate = isTabsAnamate(tabsBlock);
                if (tabsContent.length > 0) {
                    const isHash = tabsBlock.hasAttribute("data-tabs-hash");
                    tabsContent = Array.from(tabsContent).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsTitles = Array.from(tabsTitles).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsContent.forEach(((tabsContentItem, index) => {
                        if (tabsTitles[index].classList.contains("_tab-active")) {
                            if (tabsBlockAnimate) _slideDown(tabsContentItem, tabsBlockAnimate); else tabsContentItem.hidden = false;
                            if (isHash && !tabsContentItem.closest(".popup")) setHash(`tab-${tabsBlockIndex}-${index}`);
                        } else if (tabsBlockAnimate) _slideUp(tabsContentItem, tabsBlockAnimate); else tabsContentItem.hidden = true;
                    }));
                }
            }
            function setTabsAction(e) {
                const el = e.target;
                if (el.closest("[data-tabs-title]")) {
                    const tabTitle = el.closest("[data-tabs-title]");
                    const tabsBlock = tabTitle.closest("[data-tabs]");
                    if (tabTitle.closest("[data-tab-skip]")) return;
                    if (!tabTitle.classList.contains("_tab-active") && !tabsBlock.querySelector("._slide")) {
                        let tabActiveTitle = tabsBlock.querySelectorAll("[data-tabs-title]._tab-active");
                        tabActiveTitle.length ? tabActiveTitle = Array.from(tabActiveTitle).filter((item => item.closest("[data-tabs]") === tabsBlock)) : null;
                        tabActiveTitle.length ? tabActiveTitle[0].classList.remove("_tab-active") : null;
                        tabTitle.classList.add("_tab-active");
                        setTabsStatus(tabsBlock);
                    }
                }
            }
        }
        function showMore() {
            window.addEventListener("load", (function(e) {
                const showMoreBlocks = document.querySelectorAll("[data-showmore]");
                let showMoreBlocksRegular;
                let mdQueriesArray;
                if (showMoreBlocks.length) {
                    showMoreBlocksRegular = Array.from(showMoreBlocks).filter((function(item, index, self) {
                        return !item.dataset.showmoreMedia;
                    }));
                    showMoreBlocksRegular.length ? initItems(showMoreBlocksRegular) : null;
                    document.addEventListener("click", showMoreActions);
                    window.addEventListener("resize", showMoreActions);
                    mdQueriesArray = dataMediaQueries(showMoreBlocks, "showmoreMedia");
                    if (mdQueriesArray && mdQueriesArray.length) {
                        mdQueriesArray.forEach((mdQueriesItem => {
                            mdQueriesItem.matchMedia.addEventListener("change", (function() {
                                initItems(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                            }));
                        }));
                        initItemsMedia(mdQueriesArray);
                    }
                }
                function initItemsMedia(mdQueriesArray) {
                    mdQueriesArray.forEach((mdQueriesItem => {
                        initItems(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                }
                function initItems(showMoreBlocks, matchMedia) {
                    showMoreBlocks.forEach((showMoreBlock => {
                        initItem(showMoreBlock, matchMedia);
                    }));
                }
                function initItem(showMoreBlock, matchMedia = false) {
                    showMoreBlock = matchMedia ? showMoreBlock.item : showMoreBlock;
                    let showMoreContent = showMoreBlock.querySelectorAll("[data-showmore-content]");
                    let showMoreButton = showMoreBlock.querySelectorAll("[data-showmore-button]");
                    showMoreContent = Array.from(showMoreContent).filter((item => item.closest("[data-showmore]") === showMoreBlock))[0];
                    showMoreButton = Array.from(showMoreButton).filter((item => item.closest("[data-showmore]") === showMoreBlock))[0];
                    const hiddenHeight = getHeight(showMoreBlock, showMoreContent);
                    if (matchMedia.matches || !matchMedia) if (hiddenHeight < getOriginalHeight(showMoreContent)) {
                        _slideUp(showMoreContent, 0, showMoreBlock.classList.contains("_showmore-active") ? getOriginalHeight(showMoreContent) : hiddenHeight);
                        showMoreButton.hidden = false;
                    } else {
                        _slideDown(showMoreContent, 0, hiddenHeight);
                        showMoreButton.hidden = true;
                    } else {
                        _slideDown(showMoreContent, 0, hiddenHeight);
                        showMoreButton.hidden = true;
                    }
                }
                function getHeight(showMoreBlock, showMoreContent) {
                    let hiddenHeight = 0;
                    const showMoreType = showMoreBlock.dataset.showmore ? showMoreBlock.dataset.showmore : "size";
                    const rowGap = parseFloat(getComputedStyle(showMoreContent).rowGap) ? parseFloat(getComputedStyle(showMoreContent).rowGap) : 0;
                    if (showMoreType === "items") {
                        const showMoreTypeValue = showMoreContent.dataset.showmoreContent ? showMoreContent.dataset.showmoreContent : 3;
                        const showMoreItems = showMoreContent.children;
                        for (let index = 1; index < showMoreItems.length; index++) {
                            const showMoreItem = showMoreItems[index - 1];
                            const marginTop = parseFloat(getComputedStyle(showMoreItem).marginTop) ? parseFloat(getComputedStyle(showMoreItem).marginTop) : 0;
                            const marginBottom = parseFloat(getComputedStyle(showMoreItem).marginBottom) ? parseFloat(getComputedStyle(showMoreItem).marginBottom) : 0;
                            hiddenHeight += showMoreItem.offsetHeight + marginTop;
                            if (index == showMoreTypeValue) break;
                            hiddenHeight += marginBottom;
                        }
                        rowGap ? hiddenHeight += (showMoreTypeValue - 1) * rowGap : null;
                    } else {
                        const showMoreTypeValue = showMoreContent.dataset.showmoreContent ? showMoreContent.dataset.showmoreContent : 150;
                        hiddenHeight = showMoreTypeValue;
                    }
                    return hiddenHeight;
                }
                function getOriginalHeight(showMoreContent) {
                    let parentHidden;
                    let hiddenHeight = showMoreContent.offsetHeight;
                    showMoreContent.style.removeProperty("height");
                    if (showMoreContent.closest(`[hidden]`)) {
                        parentHidden = showMoreContent.closest(`[hidden]`);
                        parentHidden.hidden = false;
                    }
                    let originalHeight = showMoreContent.offsetHeight;
                    parentHidden ? parentHidden.hidden = true : null;
                    showMoreContent.style.height = `${hiddenHeight}px`;
                    return originalHeight;
                }
                function showMoreActions(e) {
                    const targetEvent = e.target;
                    const targetType = e.type;
                    if (targetType === "click") {
                        if (targetEvent.closest("[data-showmore-button]")) {
                            const showMoreButton = targetEvent.closest("[data-showmore-button]");
                            const showMoreBlock = showMoreButton.closest("[data-showmore]");
                            const showMoreContent = showMoreBlock.querySelector("[data-showmore-content]");
                            const showMoreSpeed = showMoreBlock.dataset.showmoreButton ? showMoreBlock.dataset.showmoreButton : "500";
                            const hiddenHeight = getHeight(showMoreBlock, showMoreContent);
                            if (!showMoreContent.classList.contains("_slide")) {
                                showMoreBlock.classList.contains("_showmore-active") ? _slideUp(showMoreContent, showMoreSpeed, hiddenHeight) : _slideDown(showMoreContent, showMoreSpeed, hiddenHeight);
                                showMoreBlock.classList.toggle("_showmore-active");
                            }
                        }
                    } else if (targetType === "resize") {
                        showMoreBlocksRegular && showMoreBlocksRegular.length ? initItems(showMoreBlocksRegular) : null;
                        mdQueriesArray && mdQueriesArray.length ? initItemsMedia(mdQueriesArray) : null;
                    }
                }
            }));
        }
        function animOnScroll() {
            const animItems = document.querySelectorAll("._anim-item");
            if (animItems.length > 0) {
                window.addEventListener("scroll", animOnScroll);
                function animOnScroll() {
                    for (let i = 0; i < animItems.length; i++) {
                        const animItem = animItems[i], animItemHeight = animItem.offsetHeight, animItemOffset = offset(animItem).top, animStart = 4;
                        let animItemPoint = window.innerHeight - animItemHeight / animStart;
                        if (animItemHeight > window.innerHeight) animItemPoint = window.innerHeight - window.innerHeight / animStart;
                        if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) animItem.classList.add("_anim"); else if (!animItem.classList.contains("_anim-no-hide")) animItem.classList.remove("_anim");
                    }
                }
                function offset(el) {
                    const rect = el.getBoundingClientRect();
                    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    return {
                        top: rect.top + scrollTop,
                        left: rect.left + scrollLeft
                    };
                }
                animOnScroll();
            }
        }
        let gotoBlock_gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
            const targetBlockElement = document.querySelector(targetBlock);
            if (targetBlockElement) {
                let headerItem = "";
                let headerItemHeight = 0;
                if (noHeader) {
                    headerItem = ".header";
                    headerItemHeight = document.querySelector(headerItem).offsetHeight;
                }
                let options = {
                    speedAsDuration: true,
                    speed,
                    header: headerItem,
                    offset: offsetTop,
                    easing: "easeOutQuad"
                };
                document.documentElement.classList.contains("menu-open") ? menuClose() : null;
                if (typeof SmoothScroll !== "undefined") (new SmoothScroll).animateScroll(targetBlockElement, "", options); else {
                    let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
                    targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
                    targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
                    window.scrollTo({
                        top: targetBlockElementPosition,
                        behavior: "smooth"
                    });
                }
            }
        };
        let addWindowScrollEvent = false;
        function pageNavigation() {
            document.addEventListener("click", pageNavigationAction);
            document.addEventListener("watcherCallback", pageNavigationAction);
            function pageNavigationAction(e) {
                if (e.type === "click") {
                    const targetElement = e.target;
                    if (targetElement.closest("[data-goto]")) {
                        const gotoLink = targetElement.closest("[data-goto]");
                        const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : "";
                        const noHeader = gotoLink.hasAttribute("data-goto-header") ? true : false;
                        const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 500;
                        const offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
                        gotoBlock_gotoBlock(gotoLinkSelector, noHeader, gotoSpeed, offsetTop);
                        e.preventDefault();
                    }
                } else if (e.type === "watcherCallback" && e.detail) {
                    const entry = e.detail.entry;
                    const targetElement = entry.target;
                    if (targetElement.dataset.watch === "navigator") {
                        document.querySelector(`[data-goto]._navigator-active`);
                        let navigatorCurrentItem;
                        if (targetElement.id && document.querySelector(`[data-goto="#${targetElement.id}"]`)) navigatorCurrentItem = document.querySelector(`[data-goto="#${targetElement.id}"]`); else if (targetElement.classList.length) for (let index = 0; index < targetElement.classList.length; index++) {
                            const element = targetElement.classList[index];
                            if (document.querySelector(`[data-goto=".${element}"]`)) {
                                navigatorCurrentItem = document.querySelector(`[data-goto=".${element}"]`);
                                break;
                            }
                        }
                        if (entry.isIntersecting) navigatorCurrentItem ? navigatorCurrentItem.classList.add("_navigator-active") : null; else navigatorCurrentItem ? navigatorCurrentItem.classList.remove("_navigator-active") : null;
                    }
                }
            }
            if (getHash()) {
                let goToHash;
                if (document.querySelector(`#${getHash()}`)) goToHash = `#${getHash()}`; else if (document.querySelector(`.${getHash()}`)) goToHash = `.${getHash()}`;
                goToHash ? gotoBlock_gotoBlock(goToHash, true, 500, 20) : null;
            }
        }
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        const techModule = {};
        class Popup {
            constructor(options) {
                let config = {
                    logging: true,
                    init: true,
                    attributeOpenButton: "data-popup",
                    attributeCloseButton: "data-close",
                    fixElementSelector: "[data-lp]",
                    youtubeAttribute: "data-popup-youtube",
                    youtubePlaceAttribute: "data-popup-youtube-place",
                    setAutoplayYoutube: true,
                    classes: {
                        popup: "popup",
                        popupContent: "popup__content",
                        popupActive: "popup_show",
                        bodyActive: "popup-show"
                    },
                    focusCatch: true,
                    closeEsc: true,
                    bodyLock: true,
                    hashSettings: {
                        location: true,
                        goHash: true
                    },
                    on: {
                        beforeOpen: function() {},
                        afterOpen: function() {},
                        beforeClose: function() {},
                        afterClose: function() {}
                    }
                };
                this.youTubeCode;
                this.isOpen = false;
                this.targetOpen = {
                    selector: false,
                    element: false
                };
                this.previousOpen = {
                    selector: false,
                    element: false
                };
                this.lastClosed = {
                    selector: false,
                    element: false
                };
                this._dataValue = false;
                this.hash = false;
                this._reopen = false;
                this._selectorOpen = false;
                this.lastFocusEl = false;
                this._focusEl = [ "a[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "button:not([disabled]):not([aria-hidden])", "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "area[href]", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])' ];
                this.options = {
                    ...config,
                    ...options,
                    classes: {
                        ...config.classes,
                        ...options?.classes
                    },
                    hashSettings: {
                        ...config.hashSettings,
                        ...options?.hashSettings
                    },
                    on: {
                        ...config.on,
                        ...options?.on
                    }
                };
                this.bodyLock = false;
                this.options.init ? this.initPopups() : null;
            }
            initPopups() {
                this.eventsPopup();
            }
            eventsPopup() {
                document.addEventListener("click", function(e) {
                    const buttonOpen = e.target.closest(`[${this.options.attributeOpenButton}]`);
                    if (buttonOpen) {
                        e.preventDefault();
                        this._dataValue = buttonOpen.getAttribute(this.options.attributeOpenButton) ? buttonOpen.getAttribute(this.options.attributeOpenButton) : "error";
                        this.youTubeCode = buttonOpen.getAttribute(this.options.youtubeAttribute) ? buttonOpen.getAttribute(this.options.youtubeAttribute) : null;
                        if (this._dataValue !== "error") {
                            if (!this.isOpen) this.lastFocusEl = buttonOpen;
                            this.targetOpen.selector = `${this._dataValue}`;
                            this._selectorOpen = true;
                            this.open();
                            return;
                        }
                        return;
                    }
                    const buttonClose = e.target.closest(`[${this.options.attributeCloseButton}]`);
                    if (buttonClose || !e.target.closest(`.${this.options.classes.popupContent}`) && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                }.bind(this));
                document.addEventListener("keydown", function(e) {
                    if (this.options.closeEsc && e.which == 27 && e.code === "Escape" && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                    if (this.options.focusCatch && e.which == 9 && this.isOpen) {
                        this._focusCatch(e);
                        return;
                    }
                }.bind(this));
                if (this.options.hashSettings.goHash) {
                    window.addEventListener("hashchange", function() {
                        if (window.location.hash) this._openToHash(); else this.close(this.targetOpen.selector);
                    }.bind(this));
                    window.addEventListener("load", function() {
                        if (window.location.hash) this._openToHash();
                    }.bind(this));
                }
            }
            open(selectorValue) {
                if (bodyLockStatus) {
                    this.bodyLock = document.documentElement.classList.contains("lock") && !this.isOpen ? true : false;
                    if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") {
                        this.targetOpen.selector = selectorValue;
                        this._selectorOpen = true;
                    }
                    if (this.isOpen) {
                        this._reopen = true;
                        this.close();
                    }
                    if (!this._selectorOpen) this.targetOpen.selector = this.lastClosed.selector;
                    if (!this._reopen) this.previousActiveElement = document.activeElement;
                    this.targetOpen.element = document.querySelector(this.targetOpen.selector);
                    if (this.targetOpen.element) {
                        if (this.youTubeCode) {
                            const codeVideo = this.youTubeCode;
                            const urlVideo = `https://www.youtube.com/embed/${codeVideo}?rel=0&showinfo=0&autoplay=1`;
                            const iframe = document.createElement("iframe");
                            iframe.setAttribute("allowfullscreen", "");
                            const autoplay = this.options.setAutoplayYoutube ? "autoplay;" : "";
                            iframe.setAttribute("allow", `${autoplay}; encrypted-media`);
                            iframe.setAttribute("src", urlVideo);
                            if (!this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) {
                                this.targetOpen.element.querySelector(".popup__text").setAttribute(`${this.options.youtubePlaceAttribute}`, "");
                            }
                            this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).appendChild(iframe);
                        }
                        if (this.options.hashSettings.location) {
                            this._getHash();
                            this._setHash();
                        }
                        this.options.on.beforeOpen(this);
                        document.dispatchEvent(new CustomEvent("beforePopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.targetOpen.element.classList.add(this.options.classes.popupActive);
                        document.documentElement.classList.add(this.options.classes.bodyActive);
                        if (!this._reopen) !this.bodyLock ? bodyLock() : null; else this._reopen = false;
                        this.targetOpen.element.setAttribute("aria-hidden", "false");
                        this.previousOpen.selector = this.targetOpen.selector;
                        this.previousOpen.element = this.targetOpen.element;
                        this._selectorOpen = false;
                        this.isOpen = true;
                        setTimeout((() => {
                            this._focusTrap();
                        }), 50);
                        this.options.on.afterOpen(this);
                        document.dispatchEvent(new CustomEvent("afterPopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                    }
                }
            }
            close(selectorValue) {
                if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") this.previousOpen.selector = selectorValue;
                if (!this.isOpen || !bodyLockStatus) return;
                this.options.on.beforeClose(this);
                document.dispatchEvent(new CustomEvent("beforePopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                if (this.youTubeCode) if (this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).innerHTML = "";
                this.previousOpen.element.classList.remove(this.options.classes.popupActive);
                this.previousOpen.element.setAttribute("aria-hidden", "true");
                if (!this._reopen) {
                    document.documentElement.classList.remove(this.options.classes.bodyActive);
                    !this.bodyLock ? bodyUnlock() : null;
                    this.isOpen = false;
                }
                this._removeHash();
                if (this._selectorOpen) {
                    this.lastClosed.selector = this.previousOpen.selector;
                    this.lastClosed.element = this.previousOpen.element;
                }
                this.options.on.afterClose(this);
                document.dispatchEvent(new CustomEvent("afterPopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                setTimeout((() => {
                    this._focusTrap();
                }), 50);
            }
            _getHash() {
                if (this.options.hashSettings.location) this.hash = this.targetOpen.selector.includes("#") ? this.targetOpen.selector : this.targetOpen.selector.replace(".", "#");
            }
            _openToHash() {
                let classInHash = document.querySelector(`.${window.location.hash.replace("#", "")}`) ? `.${window.location.hash.replace("#", "")}` : document.querySelector(`${window.location.hash}`) ? `${window.location.hash}` : null;
                const buttons = document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) ? document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) : document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash.replace(".", "#")}"]`);
                this.youTubeCode = buttons.getAttribute(this.options.youtubeAttribute) ? buttons.getAttribute(this.options.youtubeAttribute) : null;
                if (buttons && classInHash) this.open(classInHash);
            }
            _setHash() {
                history.pushState("", "", this.hash);
            }
            _removeHash() {
                history.pushState("", "", window.location.href.split("#")[0]);
            }
            _focusCatch(e) {
                const focusable = this.targetOpen.element.querySelectorAll(this._focusEl);
                const focusArray = Array.prototype.slice.call(focusable);
                const focusedIndex = focusArray.indexOf(document.activeElement);
                if (e.shiftKey && focusedIndex === 0) {
                    focusArray[focusArray.length - 1].focus();
                    e.preventDefault();
                }
                if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
                    focusArray[0].focus();
                    e.preventDefault();
                }
            }
            _focusTrap() {
                const focusable = this.previousOpen.element.querySelectorAll(this._focusEl);
                if (!this.isOpen && this.lastFocusEl) this.lastFocusEl.focus(); else focusable[0].focus();
            }
        }
        techModule.popup = new Popup({});
        class MousePRLX {
            constructor(props, data = null) {
                let defaultConfig = {
                    init: true,
                    logging: true
                };
                this.config = Object.assign(defaultConfig, props);
                if (this.config.init) {
                    const paralaxMouse = document.querySelectorAll("[data-prlx-mouse]");
                    if (paralaxMouse.length) this.paralaxMouseInit(paralaxMouse);
                }
            }
            paralaxMouseInit(paralaxMouse) {
                paralaxMouse.forEach((el => {
                    const paralaxMouseWrapper = el.closest("[data-prlx-mouse-wrapper]");
                    const paramСoefficientX = el.dataset.prlxCx ? +el.dataset.prlxCx : 100;
                    const paramСoefficientY = el.dataset.prlxCy ? +el.dataset.prlxCy : 100;
                    const directionX = el.hasAttribute("data-prlx-dxr") ? -1 : 1;
                    const directionY = el.hasAttribute("data-prlx-dyr") ? -1 : 1;
                    const paramAnimation = el.dataset.prlxA ? +el.dataset.prlxA : 50;
                    let positionX = 0, positionY = 0;
                    let coordXprocent = 0, coordYprocent = 0;
                    setMouseParallaxStyle();
                    if (paralaxMouseWrapper) mouseMoveParalax(paralaxMouseWrapper); else mouseMoveParalax();
                    function setMouseParallaxStyle() {
                        const distX = coordXprocent - positionX;
                        const distY = coordYprocent - positionY;
                        positionX += distX * paramAnimation / 1e3;
                        positionY += distY * paramAnimation / 1e3;
                        el.style.cssText = `transform: translate3D(${directionX * positionX / (paramСoefficientX / 10)}%,${directionY * positionY / (paramСoefficientY / 10)}%,0);`;
                        requestAnimationFrame(setMouseParallaxStyle);
                    }
                    function mouseMoveParalax(wrapper = window) {
                        wrapper.addEventListener("mousemove", (function(e) {
                            const offsetTop = el.getBoundingClientRect().top + window.scrollY;
                            if (offsetTop >= window.scrollY || offsetTop + el.offsetHeight >= window.scrollY) {
                                const parallaxWidth = window.innerWidth;
                                const parallaxHeight = window.innerHeight;
                                const coordX = e.clientX - parallaxWidth / 2;
                                const coordY = e.clientY - parallaxHeight / 2;
                                coordXprocent = coordX / parallaxWidth * 100;
                                coordYprocent = coordY / parallaxHeight * 100;
                            }
                        }));
                    }
                }));
            }
        }
        techModule.mousePrlx = new MousePRLX({});
        function formFieldsInit(options = {
            viewPass: false,
            autoHeight: false
        }) {
            document.body.addEventListener("focusin", (function(e) {
                const targetElement = e.target;
                if (targetElement.tagName === "INPUT" || targetElement.tagName === "TEXTAREA") {
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.add("_form-focus");
                        targetElement.parentElement.classList.add("_form-focus");
                    }
                    formValidate.removeError(targetElement);
                    targetElement.hasAttribute("data-validate") ? formValidate.removeError(targetElement) : null;
                }
            }));
            document.body.addEventListener("focusout", (function(e) {
                const targetElement = e.target;
                if (targetElement.tagName === "INPUT" || targetElement.tagName === "TEXTAREA") {
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.remove("_form-focus");
                        targetElement.parentElement.classList.remove("_form-focus");
                    }
                    targetElement.hasAttribute("data-validate") ? formValidate.validateInput(targetElement) : null;
                }
            }));
            if (options.viewPass) document.addEventListener("click", (function(e) {
                let targetElement = e.target;
                if (targetElement.closest('[class*="__viewpass"]')) {
                    let inputType = targetElement.classList.contains("_viewpass-active") ? "password" : "text";
                    targetElement.parentElement.querySelector("input").setAttribute("type", inputType);
                    targetElement.classList.toggle("_viewpass-active");
                }
            }));
            if (options.autoHeight) {
                const textareas = document.querySelectorAll("textarea[data-autoheight]");
                if (textareas.length) {
                    textareas.forEach((textarea => {
                        const startHeight = textarea.hasAttribute("data-autoheight-min") ? Number(textarea.dataset.autoheightMin) : Number(textarea.offsetHeight);
                        const maxHeight = textarea.hasAttribute("data-autoheight-max") ? Number(textarea.dataset.autoheightMax) : 1 / 0;
                        setHeight(textarea, Math.min(startHeight, maxHeight));
                        textarea.addEventListener("input", (() => {
                            if (textarea.scrollHeight > startHeight) {
                                textarea.style.height = `auto`;
                                setHeight(textarea, Math.min(Math.max(textarea.scrollHeight, startHeight), maxHeight));
                            }
                        }));
                    }));
                    function setHeight(textarea, height) {
                        textarea.style.height = `${height}px`;
                    }
                }
            }
        }
        let formValidate = {
            getErrors(form) {
                let error = 0;
                let formRequiredItems = form.querySelectorAll("*[data-required]");
                if (formRequiredItems.length) formRequiredItems.forEach((formRequiredItem => {
                    if ((formRequiredItem.offsetParent !== null || formRequiredItem.tagName === "SELECT") && !formRequiredItem.disabled) error += this.validateInput(formRequiredItem);
                }));
                return error;
            },
            validateInput(formRequiredItem) {
                let error = 0;
                if (formRequiredItem.dataset.required === "email") {
                    formRequiredItem.value = formRequiredItem.value.replace(" ", "");
                    if (this.emailTest(formRequiredItem)) {
                        this.addError(formRequiredItem);
                        error++;
                    } else this.removeError(formRequiredItem);
                } else if (formRequiredItem.type === "checkbox" && !formRequiredItem.checked) {
                    this.addError(formRequiredItem);
                    error++;
                } else if (!formRequiredItem.value.trim()) {
                    this.addError(formRequiredItem);
                    error++;
                } else this.removeError(formRequiredItem);
                return error;
            },
            addError(formRequiredItem) {
                formRequiredItem.classList.add("_form-error");
                formRequiredItem.parentElement.classList.add("_form-error");
                let inputError = formRequiredItem.parentElement.querySelector(".form__error");
                if (inputError) formRequiredItem.parentElement.removeChild(inputError);
                if (formRequiredItem.dataset.error) formRequiredItem.parentElement.insertAdjacentHTML("beforeend", `<div class="form__error">${formRequiredItem.dataset.error}</div>`);
            },
            removeError(formRequiredItem) {
                formRequiredItem.classList.remove("_form-error");
                formRequiredItem.parentElement.classList.remove("_form-error");
                if (formRequiredItem.parentElement.querySelector(".form__error")) formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector(".form__error"));
            },
            formClean(form) {
                form.reset();
                setTimeout((() => {
                    let inputs = form.querySelectorAll("input,textarea");
                    for (let index = 0; index < inputs.length; index++) {
                        const el = inputs[index];
                        el.parentElement.classList.remove("_form-focus");
                        el.classList.remove("_form-focus");
                        formValidate.removeError(el);
                    }
                    let checkboxes = form.querySelectorAll(".checkbox__input");
                    if (checkboxes.length > 0) for (let index = 0; index < checkboxes.length; index++) {
                        const checkbox = checkboxes[index];
                        checkbox.checked = false;
                    }
                    if (flsModules.select) {
                        let selects = form.querySelectorAll(".select");
                        if (selects.length) for (let index = 0; index < selects.length; index++) {
                            const select = selects[index].querySelector("select");
                            flsModules.select.selectBuild(select);
                        }
                    }
                }), 0);
            },
            emailTest(formRequiredItem) {
                return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
            }
        };
        function DynamicAdapt(type) {
            this.type = type;
        }
        DynamicAdapt.prototype.init = function() {
            const _this = this;
            this.оbjects = [];
            this.daClassname = "_dynamic_adapt_";
            this.nodes = document.querySelectorAll("[data-da]");
            for (let i = 0; i < this.nodes.length; i++) {
                const node = this.nodes[i];
                const data = node.dataset.da.trim();
                const dataArray = data.split(",");
                const оbject = {};
                оbject.element = node;
                оbject.parent = node.parentNode;
                оbject.destination = document.querySelector(dataArray[0].trim());
                оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
                оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.оbjects.push(оbject);
            }
            this.arraySort(this.оbjects);
            this.mediaQueries = Array.prototype.map.call(this.оbjects, (function(item) {
                return "(" + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
            }), this);
            this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, (function(item, index, self) {
                return Array.prototype.indexOf.call(self, item) === index;
            }));
            for (let i = 0; i < this.mediaQueries.length; i++) {
                const media = this.mediaQueries[i];
                const mediaSplit = String.prototype.split.call(media, ",");
                const matchMedia = window.matchMedia(mediaSplit[0]);
                const mediaBreakpoint = mediaSplit[1];
                const оbjectsFilter = Array.prototype.filter.call(this.оbjects, (function(item) {
                    return item.breakpoint === mediaBreakpoint;
                }));
                matchMedia.addListener((function() {
                    _this.mediaHandler(matchMedia, оbjectsFilter);
                }));
                this.mediaHandler(matchMedia, оbjectsFilter);
            }
        };
        DynamicAdapt.prototype.mediaHandler = function(matchMedia, оbjects) {
            if (matchMedia.matches) for (let i = 0; i < оbjects.length; i++) {
                const оbject = оbjects[i];
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.moveTo(оbject.place, оbject.element, оbject.destination);
            } else for (let i = 0; i < оbjects.length; i++) {
                const оbject = оbjects[i];
                if (оbject.element.classList.contains(this.daClassname)) this.moveBack(оbject.parent, оbject.element, оbject.index);
            }
        };
        DynamicAdapt.prototype.moveTo = function(place, element, destination) {
            element.classList.add(this.daClassname);
            if (place === "last" || place >= destination.children.length) {
                destination.insertAdjacentElement("beforeend", element);
                return;
            }
            if (place === "first") {
                destination.insertAdjacentElement("afterbegin", element);
                return;
            }
            destination.children[place].insertAdjacentElement("beforebegin", element);
        };
        DynamicAdapt.prototype.moveBack = function(parent, element, index) {
            element.classList.remove(this.daClassname);
            if (parent.children[index] !== void 0) parent.children[index].insertAdjacentElement("beforebegin", element); else parent.insertAdjacentElement("beforeend", element);
        };
        DynamicAdapt.prototype.indexInParent = function(parent, element) {
            const array = Array.prototype.slice.call(parent.children);
            return Array.prototype.indexOf.call(array, element);
        };
        DynamicAdapt.prototype.arraySort = function(arr) {
            if (this.type === "min") Array.prototype.sort.call(arr, (function(a, b) {
                if (a.breakpoint === b.breakpoint) {
                    if (a.place === b.place) return 0;
                    if (a.place === "first" || b.place === "last") return -1;
                    if (a.place === "last" || b.place === "first") return 1;
                    return a.place - b.place;
                }
                return a.breakpoint - b.breakpoint;
            })); else {
                Array.prototype.sort.call(arr, (function(a, b) {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) return 0;
                        if (a.place === "first" || b.place === "last") return 1;
                        if (a.place === "last" || b.place === "first") return -1;
                        return b.place - a.place;
                    }
                    return b.breakpoint - a.breakpoint;
                }));
                return;
            }
        };
        const da = new DynamicAdapt("max");
        da.init();
        function getWindow(node) {
            if (node == null) return window;
            if (node.toString() !== "[object Window]") {
                var ownerDocument = node.ownerDocument;
                return ownerDocument ? ownerDocument.defaultView || window : window;
            }
            return node;
        }
        function isElement(node) {
            var OwnElement = getWindow(node).Element;
            return node instanceof OwnElement || node instanceof Element;
        }
        function isHTMLElement(node) {
            var OwnElement = getWindow(node).HTMLElement;
            return node instanceof OwnElement || node instanceof HTMLElement;
        }
        function isShadowRoot(node) {
            if (typeof ShadowRoot === "undefined") return false;
            var OwnElement = getWindow(node).ShadowRoot;
            return node instanceof OwnElement || node instanceof ShadowRoot;
        }
        var math_max = Math.max;
        var math_min = Math.min;
        var round = Math.round;
        function getUAString() {
            var uaData = navigator.userAgentData;
            if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) return uaData.brands.map((function(item) {
                return item.brand + "/" + item.version;
            })).join(" ");
            return navigator.userAgent;
        }
        function isLayoutViewport() {
            return !/^((?!chrome|android).)*safari/i.test(getUAString());
        }
        function getBoundingClientRect(element, includeScale, isFixedStrategy) {
            if (includeScale === void 0) includeScale = false;
            if (isFixedStrategy === void 0) isFixedStrategy = false;
            var clientRect = element.getBoundingClientRect();
            var scaleX = 1;
            var scaleY = 1;
            if (includeScale && isHTMLElement(element)) {
                scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
                scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
            }
            var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
            var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
            var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
            var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
            var width = clientRect.width / scaleX;
            var height = clientRect.height / scaleY;
            return {
                width,
                height,
                top: y,
                right: x + width,
                bottom: y + height,
                left: x,
                x,
                y
            };
        }
        function getWindowScroll(node) {
            var win = getWindow(node);
            var scrollLeft = win.pageXOffset;
            var scrollTop = win.pageYOffset;
            return {
                scrollLeft,
                scrollTop
            };
        }
        function getHTMLElementScroll(element) {
            return {
                scrollLeft: element.scrollLeft,
                scrollTop: element.scrollTop
            };
        }
        function getNodeScroll(node) {
            if (node === getWindow(node) || !isHTMLElement(node)) return getWindowScroll(node); else return getHTMLElementScroll(node);
        }
        function getNodeName(element) {
            return element ? (element.nodeName || "").toLowerCase() : null;
        }
        function getDocumentElement(element) {
            return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
        }
        function getWindowScrollBarX(element) {
            return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
        }
        function getComputedStyle_getComputedStyle(element) {
            return getWindow(element).getComputedStyle(element);
        }
        function isScrollParent(element) {
            var _getComputedStyle = getComputedStyle_getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
            return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
        }
        function isElementScaled(element) {
            var rect = element.getBoundingClientRect();
            var scaleX = round(rect.width) / element.offsetWidth || 1;
            var scaleY = round(rect.height) / element.offsetHeight || 1;
            return scaleX !== 1 || scaleY !== 1;
        }
        function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
            if (isFixed === void 0) isFixed = false;
            var isOffsetParentAnElement = isHTMLElement(offsetParent);
            var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
            var documentElement = getDocumentElement(offsetParent);
            var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
            var scroll = {
                scrollLeft: 0,
                scrollTop: 0
            };
            var offsets = {
                x: 0,
                y: 0
            };
            if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
                if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) scroll = getNodeScroll(offsetParent);
                if (isHTMLElement(offsetParent)) {
                    offsets = getBoundingClientRect(offsetParent, true);
                    offsets.x += offsetParent.clientLeft;
                    offsets.y += offsetParent.clientTop;
                } else if (documentElement) offsets.x = getWindowScrollBarX(documentElement);
            }
            return {
                x: rect.left + scroll.scrollLeft - offsets.x,
                y: rect.top + scroll.scrollTop - offsets.y,
                width: rect.width,
                height: rect.height
            };
        }
        function getLayoutRect(element) {
            var clientRect = getBoundingClientRect(element);
            var width = element.offsetWidth;
            var height = element.offsetHeight;
            if (Math.abs(clientRect.width - width) <= 1) width = clientRect.width;
            if (Math.abs(clientRect.height - height) <= 1) height = clientRect.height;
            return {
                x: element.offsetLeft,
                y: element.offsetTop,
                width,
                height
            };
        }
        function getParentNode(element) {
            if (getNodeName(element) === "html") return element;
            return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
        }
        function getScrollParent(node) {
            if ([ "html", "body", "#document" ].indexOf(getNodeName(node)) >= 0) return node.ownerDocument.body;
            if (isHTMLElement(node) && isScrollParent(node)) return node;
            return getScrollParent(getParentNode(node));
        }
        function listScrollParents(element, list) {
            var _element$ownerDocumen;
            if (list === void 0) list = [];
            var scrollParent = getScrollParent(element);
            var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
            var win = getWindow(scrollParent);
            var target = isBody ? [ win ].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
            var updatedList = list.concat(target);
            return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
        }
        function isTableElement(element) {
            return [ "table", "td", "th" ].indexOf(getNodeName(element)) >= 0;
        }
        function getTrueOffsetParent(element) {
            if (!isHTMLElement(element) || getComputedStyle_getComputedStyle(element).position === "fixed") return null;
            return element.offsetParent;
        }
        function getContainingBlock(element) {
            var isFirefox = /firefox/i.test(getUAString());
            var isIE = /Trident/i.test(getUAString());
            if (isIE && isHTMLElement(element)) {
                var elementCss = getComputedStyle_getComputedStyle(element);
                if (elementCss.position === "fixed") return null;
            }
            var currentNode = getParentNode(element);
            if (isShadowRoot(currentNode)) currentNode = currentNode.host;
            while (isHTMLElement(currentNode) && [ "html", "body" ].indexOf(getNodeName(currentNode)) < 0) {
                var css = getComputedStyle_getComputedStyle(currentNode);
                if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || [ "transform", "perspective" ].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") return currentNode; else currentNode = currentNode.parentNode;
            }
            return null;
        }
        function getOffsetParent(element) {
            var window = getWindow(element);
            var offsetParent = getTrueOffsetParent(element);
            while (offsetParent && isTableElement(offsetParent) && getComputedStyle_getComputedStyle(offsetParent).position === "static") offsetParent = getTrueOffsetParent(offsetParent);
            if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle_getComputedStyle(offsetParent).position === "static")) return window;
            return offsetParent || getContainingBlock(element) || window;
        }
        var enums_top = "top";
        var bottom = "bottom";
        var right = "right";
        var left = "left";
        var auto = "auto";
        var basePlacements = [ enums_top, bottom, right, left ];
        var start = "start";
        var end = "end";
        var clippingParents = "clippingParents";
        var viewport = "viewport";
        var popper = "popper";
        var reference = "reference";
        var variationPlacements = basePlacements.reduce((function(acc, placement) {
            return acc.concat([ placement + "-" + start, placement + "-" + end ]);
        }), []);
        var enums_placements = [].concat(basePlacements, [ auto ]).reduce((function(acc, placement) {
            return acc.concat([ placement, placement + "-" + start, placement + "-" + end ]);
        }), []);
        var beforeRead = "beforeRead";
        var read = "read";
        var afterRead = "afterRead";
        var beforeMain = "beforeMain";
        var main = "main";
        var afterMain = "afterMain";
        var beforeWrite = "beforeWrite";
        var write = "write";
        var afterWrite = "afterWrite";
        var modifierPhases = [ beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite ];
        function order(modifiers) {
            var map = new Map;
            var visited = new Set;
            var result = [];
            modifiers.forEach((function(modifier) {
                map.set(modifier.name, modifier);
            }));
            function sort(modifier) {
                visited.add(modifier.name);
                var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
                requires.forEach((function(dep) {
                    if (!visited.has(dep)) {
                        var depModifier = map.get(dep);
                        if (depModifier) sort(depModifier);
                    }
                }));
                result.push(modifier);
            }
            modifiers.forEach((function(modifier) {
                if (!visited.has(modifier.name)) sort(modifier);
            }));
            return result;
        }
        function orderModifiers(modifiers) {
            var orderedModifiers = order(modifiers);
            return modifierPhases.reduce((function(acc, phase) {
                return acc.concat(orderedModifiers.filter((function(modifier) {
                    return modifier.phase === phase;
                })));
            }), []);
        }
        function debounce(fn) {
            var pending;
            return function() {
                if (!pending) pending = new Promise((function(resolve) {
                    Promise.resolve().then((function() {
                        pending = void 0;
                        resolve(fn());
                    }));
                }));
                return pending;
            };
        }
        function mergeByName(modifiers) {
            var merged = modifiers.reduce((function(merged, current) {
                var existing = merged[current.name];
                merged[current.name] = existing ? Object.assign({}, existing, current, {
                    options: Object.assign({}, existing.options, current.options),
                    data: Object.assign({}, existing.data, current.data)
                }) : current;
                return merged;
            }), {});
            return Object.keys(merged).map((function(key) {
                return merged[key];
            }));
        }
        var DEFAULT_OPTIONS = {
            placement: "bottom",
            modifiers: [],
            strategy: "absolute"
        };
        function areValidElements() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
            return !args.some((function(element) {
                return !(element && typeof element.getBoundingClientRect === "function");
            }));
        }
        function popperGenerator(generatorOptions) {
            if (generatorOptions === void 0) generatorOptions = {};
            var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
            return function createPopper(reference, popper, options) {
                if (options === void 0) options = defaultOptions;
                var state = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
                    modifiersData: {},
                    elements: {
                        reference,
                        popper
                    },
                    attributes: {},
                    styles: {}
                };
                var effectCleanupFns = [];
                var isDestroyed = false;
                var instance = {
                    state,
                    setOptions: function setOptions(setOptionsAction) {
                        var options = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
                        cleanupModifierEffects();
                        state.options = Object.assign({}, defaultOptions, state.options, options);
                        state.scrollParents = {
                            reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
                            popper: listScrollParents(popper)
                        };
                        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers)));
                        state.orderedModifiers = orderedModifiers.filter((function(m) {
                            return m.enabled;
                        }));
                        runModifierEffects();
                        return instance.update();
                    },
                    forceUpdate: function forceUpdate() {
                        if (isDestroyed) return;
                        var _state$elements = state.elements, reference = _state$elements.reference, popper = _state$elements.popper;
                        if (!areValidElements(reference, popper)) return;
                        state.rects = {
                            reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === "fixed"),
                            popper: getLayoutRect(popper)
                        };
                        state.reset = false;
                        state.placement = state.options.placement;
                        state.orderedModifiers.forEach((function(modifier) {
                            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
                        }));
                        for (var index = 0; index < state.orderedModifiers.length; index++) {
                            if (state.reset === true) {
                                state.reset = false;
                                index = -1;
                                continue;
                            }
                            var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
                            if (typeof fn === "function") state = fn({
                                state,
                                options: _options,
                                name,
                                instance
                            }) || state;
                        }
                    },
                    update: debounce((function() {
                        return new Promise((function(resolve) {
                            instance.forceUpdate();
                            resolve(state);
                        }));
                    })),
                    destroy: function destroy() {
                        cleanupModifierEffects();
                        isDestroyed = true;
                    }
                };
                if (!areValidElements(reference, popper)) return instance;
                instance.setOptions(options).then((function(state) {
                    if (!isDestroyed && options.onFirstUpdate) options.onFirstUpdate(state);
                }));
                function runModifierEffects() {
                    state.orderedModifiers.forEach((function(_ref) {
                        var name = _ref.name, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options, effect = _ref.effect;
                        if (typeof effect === "function") {
                            var cleanupFn = effect({
                                state,
                                name,
                                instance,
                                options
                            });
                            var noopFn = function noopFn() {};
                            effectCleanupFns.push(cleanupFn || noopFn);
                        }
                    }));
                }
                function cleanupModifierEffects() {
                    effectCleanupFns.forEach((function(fn) {
                        return fn();
                    }));
                    effectCleanupFns = [];
                }
                return instance;
            };
        }
        null && popperGenerator();
        var passive = {
            passive: true
        };
        function effect(_ref) {
            var state = _ref.state, instance = _ref.instance, options = _ref.options;
            var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
            var window = getWindow(state.elements.popper);
            var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
            if (scroll) scrollParents.forEach((function(scrollParent) {
                scrollParent.addEventListener("scroll", instance.update, passive);
            }));
            if (resize) window.addEventListener("resize", instance.update, passive);
            return function() {
                if (scroll) scrollParents.forEach((function(scrollParent) {
                    scrollParent.removeEventListener("scroll", instance.update, passive);
                }));
                if (resize) window.removeEventListener("resize", instance.update, passive);
            };
        }
        const eventListeners = {
            name: "eventListeners",
            enabled: true,
            phase: "write",
            fn: function fn() {},
            effect,
            data: {}
        };
        function getBasePlacement(placement) {
            return placement.split("-")[0];
        }
        function getVariation(placement) {
            return placement.split("-")[1];
        }
        function getMainAxisFromPlacement(placement) {
            return [ "top", "bottom" ].indexOf(placement) >= 0 ? "x" : "y";
        }
        function computeOffsets(_ref) {
            var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
            var basePlacement = placement ? getBasePlacement(placement) : null;
            var variation = placement ? getVariation(placement) : null;
            var commonX = reference.x + reference.width / 2 - element.width / 2;
            var commonY = reference.y + reference.height / 2 - element.height / 2;
            var offsets;
            switch (basePlacement) {
              case enums_top:
                offsets = {
                    x: commonX,
                    y: reference.y - element.height
                };
                break;

              case bottom:
                offsets = {
                    x: commonX,
                    y: reference.y + reference.height
                };
                break;

              case right:
                offsets = {
                    x: reference.x + reference.width,
                    y: commonY
                };
                break;

              case left:
                offsets = {
                    x: reference.x - element.width,
                    y: commonY
                };
                break;

              default:
                offsets = {
                    x: reference.x,
                    y: reference.y
                };
            }
            var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
            if (mainAxis != null) {
                var len = mainAxis === "y" ? "height" : "width";
                switch (variation) {
                  case start:
                    offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
                    break;

                  case end:
                    offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
                    break;

                  default:
                }
            }
            return offsets;
        }
        function popperOffsets(_ref) {
            var state = _ref.state, name = _ref.name;
            state.modifiersData[name] = computeOffsets({
                reference: state.rects.reference,
                element: state.rects.popper,
                strategy: "absolute",
                placement: state.placement
            });
        }
        const modifiers_popperOffsets = {
            name: "popperOffsets",
            enabled: true,
            phase: "read",
            fn: popperOffsets,
            data: {}
        };
        var unsetSides = {
            top: "auto",
            right: "auto",
            bottom: "auto",
            left: "auto"
        };
        function roundOffsetsByDPR(_ref, win) {
            var x = _ref.x, y = _ref.y;
            var dpr = win.devicePixelRatio || 1;
            return {
                x: round(x * dpr) / dpr || 0,
                y: round(y * dpr) / dpr || 0
            };
        }
        function mapToStyles(_ref2) {
            var _Object$assign2;
            var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
            var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
            var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
                x,
                y
            }) : {
                x,
                y
            };
            x = _ref3.x;
            y = _ref3.y;
            var hasX = offsets.hasOwnProperty("x");
            var hasY = offsets.hasOwnProperty("y");
            var sideX = left;
            var sideY = enums_top;
            var win = window;
            if (adaptive) {
                var offsetParent = getOffsetParent(popper);
                var heightProp = "clientHeight";
                var widthProp = "clientWidth";
                if (offsetParent === getWindow(popper)) {
                    offsetParent = getDocumentElement(popper);
                    if (getComputedStyle_getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
                        heightProp = "scrollHeight";
                        widthProp = "scrollWidth";
                    }
                }
                offsetParent;
                if (placement === enums_top || (placement === left || placement === right) && variation === end) {
                    sideY = bottom;
                    var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
                    y -= offsetY - popperRect.height;
                    y *= gpuAcceleration ? 1 : -1;
                }
                if (placement === left || (placement === enums_top || placement === bottom) && variation === end) {
                    sideX = right;
                    var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
                    x -= offsetX - popperRect.width;
                    x *= gpuAcceleration ? 1 : -1;
                }
            }
            var commonStyles = Object.assign({
                position
            }, adaptive && unsetSides);
            var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
                x,
                y
            }, getWindow(popper)) : {
                x,
                y
            };
            x = _ref4.x;
            y = _ref4.y;
            if (gpuAcceleration) {
                var _Object$assign;
                return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", 
                _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", 
                _Object$assign));
            }
            return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", 
            _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
        }
        function computeStyles(_ref5) {
            var state = _ref5.state, options = _ref5.options;
            var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
            var commonStyles = {
                placement: getBasePlacement(state.placement),
                variation: getVariation(state.placement),
                popper: state.elements.popper,
                popperRect: state.rects.popper,
                gpuAcceleration,
                isFixed: state.options.strategy === "fixed"
            };
            if (state.modifiersData.popperOffsets != null) state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
                offsets: state.modifiersData.popperOffsets,
                position: state.options.strategy,
                adaptive,
                roundOffsets
            })));
            if (state.modifiersData.arrow != null) state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
                offsets: state.modifiersData.arrow,
                position: "absolute",
                adaptive: false,
                roundOffsets
            })));
            state.attributes.popper = Object.assign({}, state.attributes.popper, {
                "data-popper-placement": state.placement
            });
        }
        const modifiers_computeStyles = {
            name: "computeStyles",
            enabled: true,
            phase: "beforeWrite",
            fn: computeStyles,
            data: {}
        };
        function applyStyles(_ref) {
            var state = _ref.state;
            Object.keys(state.elements).forEach((function(name) {
                var style = state.styles[name] || {};
                var attributes = state.attributes[name] || {};
                var element = state.elements[name];
                if (!isHTMLElement(element) || !getNodeName(element)) return;
                Object.assign(element.style, style);
                Object.keys(attributes).forEach((function(name) {
                    var value = attributes[name];
                    if (value === false) element.removeAttribute(name); else element.setAttribute(name, value === true ? "" : value);
                }));
            }));
        }
        function applyStyles_effect(_ref2) {
            var state = _ref2.state;
            var initialStyles = {
                popper: {
                    position: state.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
            Object.assign(state.elements.popper.style, initialStyles.popper);
            state.styles = initialStyles;
            if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
            return function() {
                Object.keys(state.elements).forEach((function(name) {
                    var element = state.elements[name];
                    var attributes = state.attributes[name] || {};
                    var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
                    var style = styleProperties.reduce((function(style, property) {
                        style[property] = "";
                        return style;
                    }), {});
                    if (!isHTMLElement(element) || !getNodeName(element)) return;
                    Object.assign(element.style, style);
                    Object.keys(attributes).forEach((function(attribute) {
                        element.removeAttribute(attribute);
                    }));
                }));
            };
        }
        const modifiers_applyStyles = {
            name: "applyStyles",
            enabled: true,
            phase: "write",
            fn: applyStyles,
            effect: applyStyles_effect,
            requires: [ "computeStyles" ]
        };
        function distanceAndSkiddingToXY(placement, rects, offset) {
            var basePlacement = getBasePlacement(placement);
            var invertDistance = [ left, enums_top ].indexOf(basePlacement) >= 0 ? -1 : 1;
            var _ref = typeof offset === "function" ? offset(Object.assign({}, rects, {
                placement
            })) : offset, skidding = _ref[0], distance = _ref[1];
            skidding = skidding || 0;
            distance = (distance || 0) * invertDistance;
            return [ left, right ].indexOf(basePlacement) >= 0 ? {
                x: distance,
                y: skidding
            } : {
                x: skidding,
                y: distance
            };
        }
        function offset(_ref2) {
            var state = _ref2.state, options = _ref2.options, name = _ref2.name;
            var _options$offset = options.offset, offset = _options$offset === void 0 ? [ 0, 0 ] : _options$offset;
            var data = enums_placements.reduce((function(acc, placement) {
                acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
                return acc;
            }), {});
            var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
            if (state.modifiersData.popperOffsets != null) {
                state.modifiersData.popperOffsets.x += x;
                state.modifiersData.popperOffsets.y += y;
            }
            state.modifiersData[name] = data;
        }
        const modifiers_offset = {
            name: "offset",
            enabled: true,
            phase: "main",
            requires: [ "popperOffsets" ],
            fn: offset
        };
        var hash = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        function getOppositePlacement(placement) {
            return placement.replace(/left|right|bottom|top/g, (function(matched) {
                return hash[matched];
            }));
        }
        var getOppositeVariationPlacement_hash = {
            start: "end",
            end: "start"
        };
        function getOppositeVariationPlacement(placement) {
            return placement.replace(/start|end/g, (function(matched) {
                return getOppositeVariationPlacement_hash[matched];
            }));
        }
        function getViewportRect(element, strategy) {
            var win = getWindow(element);
            var html = getDocumentElement(element);
            var visualViewport = win.visualViewport;
            var width = html.clientWidth;
            var height = html.clientHeight;
            var x = 0;
            var y = 0;
            if (visualViewport) {
                width = visualViewport.width;
                height = visualViewport.height;
                var layoutViewport = isLayoutViewport();
                if (layoutViewport || !layoutViewport && strategy === "fixed") {
                    x = visualViewport.offsetLeft;
                    y = visualViewport.offsetTop;
                }
            }
            return {
                width,
                height,
                x: x + getWindowScrollBarX(element),
                y
            };
        }
        function getDocumentRect(element) {
            var _element$ownerDocumen;
            var html = getDocumentElement(element);
            var winScroll = getWindowScroll(element);
            var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
            var width = math_max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
            var height = math_max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
            var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
            var y = -winScroll.scrollTop;
            if (getComputedStyle_getComputedStyle(body || html).direction === "rtl") x += math_max(html.clientWidth, body ? body.clientWidth : 0) - width;
            return {
                width,
                height,
                x,
                y
            };
        }
        function contains(parent, child) {
            var rootNode = child.getRootNode && child.getRootNode();
            if (parent.contains(child)) return true; else if (rootNode && isShadowRoot(rootNode)) {
                var next = child;
                do {
                    if (next && parent.isSameNode(next)) return true;
                    next = next.parentNode || next.host;
                } while (next);
            }
            return false;
        }
        function rectToClientRect(rect) {
            return Object.assign({}, rect, {
                left: rect.x,
                top: rect.y,
                right: rect.x + rect.width,
                bottom: rect.y + rect.height
            });
        }
        function getInnerBoundingClientRect(element, strategy) {
            var rect = getBoundingClientRect(element, false, strategy === "fixed");
            rect.top = rect.top + element.clientTop;
            rect.left = rect.left + element.clientLeft;
            rect.bottom = rect.top + element.clientHeight;
            rect.right = rect.left + element.clientWidth;
            rect.width = element.clientWidth;
            rect.height = element.clientHeight;
            rect.x = rect.left;
            rect.y = rect.top;
            return rect;
        }
        function getClientRectFromMixedType(element, clippingParent, strategy) {
            return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
        }
        function getClippingParents(element) {
            var clippingParents = listScrollParents(getParentNode(element));
            var canEscapeClipping = [ "absolute", "fixed" ].indexOf(getComputedStyle_getComputedStyle(element).position) >= 0;
            var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
            if (!isElement(clipperElement)) return [];
            return clippingParents.filter((function(clippingParent) {
                return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
            }));
        }
        function getClippingRect(element, boundary, rootBoundary, strategy) {
            var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
            var clippingParents = [].concat(mainClippingParents, [ rootBoundary ]);
            var firstClippingParent = clippingParents[0];
            var clippingRect = clippingParents.reduce((function(accRect, clippingParent) {
                var rect = getClientRectFromMixedType(element, clippingParent, strategy);
                accRect.top = math_max(rect.top, accRect.top);
                accRect.right = math_min(rect.right, accRect.right);
                accRect.bottom = math_min(rect.bottom, accRect.bottom);
                accRect.left = math_max(rect.left, accRect.left);
                return accRect;
            }), getClientRectFromMixedType(element, firstClippingParent, strategy));
            clippingRect.width = clippingRect.right - clippingRect.left;
            clippingRect.height = clippingRect.bottom - clippingRect.top;
            clippingRect.x = clippingRect.left;
            clippingRect.y = clippingRect.top;
            return clippingRect;
        }
        function getFreshSideObject() {
            return {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            };
        }
        function mergePaddingObject(paddingObject) {
            return Object.assign({}, getFreshSideObject(), paddingObject);
        }
        function expandToHashMap(value, keys) {
            return keys.reduce((function(hashMap, key) {
                hashMap[key] = value;
                return hashMap;
            }), {});
        }
        function detectOverflow(state, options) {
            if (options === void 0) options = {};
            var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
            var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
            var altContext = elementContext === popper ? reference : popper;
            var popperRect = state.rects.popper;
            var element = state.elements[altBoundary ? altContext : elementContext];
            var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
            var referenceClientRect = getBoundingClientRect(state.elements.reference);
            var popperOffsets = computeOffsets({
                reference: referenceClientRect,
                element: popperRect,
                strategy: "absolute",
                placement
            });
            var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
            var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
            var overflowOffsets = {
                top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
                bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
                left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
                right: elementClientRect.right - clippingClientRect.right + paddingObject.right
            };
            var offsetData = state.modifiersData.offset;
            if (elementContext === popper && offsetData) {
                var offset = offsetData[placement];
                Object.keys(overflowOffsets).forEach((function(key) {
                    var multiply = [ right, bottom ].indexOf(key) >= 0 ? 1 : -1;
                    var axis = [ enums_top, bottom ].indexOf(key) >= 0 ? "y" : "x";
                    overflowOffsets[key] += offset[axis] * multiply;
                }));
            }
            return overflowOffsets;
        }
        function computeAutoPlacement(state, options) {
            if (options === void 0) options = {};
            var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? enums_placements : _options$allowedAutoP;
            var variation = getVariation(placement);
            var placements = variation ? flipVariations ? variationPlacements : variationPlacements.filter((function(placement) {
                return getVariation(placement) === variation;
            })) : basePlacements;
            var allowedPlacements = placements.filter((function(placement) {
                return allowedAutoPlacements.indexOf(placement) >= 0;
            }));
            if (allowedPlacements.length === 0) allowedPlacements = placements;
            var overflows = allowedPlacements.reduce((function(acc, placement) {
                acc[placement] = detectOverflow(state, {
                    placement,
                    boundary,
                    rootBoundary,
                    padding
                })[getBasePlacement(placement)];
                return acc;
            }), {});
            return Object.keys(overflows).sort((function(a, b) {
                return overflows[a] - overflows[b];
            }));
        }
        function getExpandedFallbackPlacements(placement) {
            if (getBasePlacement(placement) === auto) return [];
            var oppositePlacement = getOppositePlacement(placement);
            return [ getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement) ];
        }
        function flip(_ref) {
            var state = _ref.state, options = _ref.options, name = _ref.name;
            if (state.modifiersData[name]._skip) return;
            var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
            var preferredPlacement = state.options.placement;
            var basePlacement = getBasePlacement(preferredPlacement);
            var isBasePlacement = basePlacement === preferredPlacement;
            var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [ getOppositePlacement(preferredPlacement) ] : getExpandedFallbackPlacements(preferredPlacement));
            var placements = [ preferredPlacement ].concat(fallbackPlacements).reduce((function(acc, placement) {
                return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
                    placement,
                    boundary,
                    rootBoundary,
                    padding,
                    flipVariations,
                    allowedAutoPlacements
                }) : placement);
            }), []);
            var referenceRect = state.rects.reference;
            var popperRect = state.rects.popper;
            var checksMap = new Map;
            var makeFallbackChecks = true;
            var firstFittingPlacement = placements[0];
            for (var i = 0; i < placements.length; i++) {
                var placement = placements[i];
                var _basePlacement = getBasePlacement(placement);
                var isStartVariation = getVariation(placement) === start;
                var isVertical = [ enums_top, bottom ].indexOf(_basePlacement) >= 0;
                var len = isVertical ? "width" : "height";
                var overflow = detectOverflow(state, {
                    placement,
                    boundary,
                    rootBoundary,
                    altBoundary,
                    padding
                });
                var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : enums_top;
                if (referenceRect[len] > popperRect[len]) mainVariationSide = getOppositePlacement(mainVariationSide);
                var altVariationSide = getOppositePlacement(mainVariationSide);
                var checks = [];
                if (checkMainAxis) checks.push(overflow[_basePlacement] <= 0);
                if (checkAltAxis) checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
                if (checks.every((function(check) {
                    return check;
                }))) {
                    firstFittingPlacement = placement;
                    makeFallbackChecks = false;
                    break;
                }
                checksMap.set(placement, checks);
            }
            if (makeFallbackChecks) {
                var numberOfChecks = flipVariations ? 3 : 1;
                var _loop = function _loop(_i) {
                    var fittingPlacement = placements.find((function(placement) {
                        var checks = checksMap.get(placement);
                        if (checks) return checks.slice(0, _i).every((function(check) {
                            return check;
                        }));
                    }));
                    if (fittingPlacement) {
                        firstFittingPlacement = fittingPlacement;
                        return "break";
                    }
                };
                for (var _i = numberOfChecks; _i > 0; _i--) {
                    var _ret = _loop(_i);
                    if (_ret === "break") break;
                }
            }
            if (state.placement !== firstFittingPlacement) {
                state.modifiersData[name]._skip = true;
                state.placement = firstFittingPlacement;
                state.reset = true;
            }
        }
        const modifiers_flip = {
            name: "flip",
            enabled: true,
            phase: "main",
            fn: flip,
            requiresIfExists: [ "offset" ],
            data: {
                _skip: false
            }
        };
        function getAltAxis(axis) {
            return axis === "x" ? "y" : "x";
        }
        function within(min, value, max) {
            return math_max(min, math_min(value, max));
        }
        function withinMaxClamp(min, value, max) {
            var v = within(min, value, max);
            return v > max ? max : v;
        }
        function preventOverflow(_ref) {
            var state = _ref.state, options = _ref.options, name = _ref.name;
            var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
            var overflow = detectOverflow(state, {
                boundary,
                rootBoundary,
                padding,
                altBoundary
            });
            var basePlacement = getBasePlacement(state.placement);
            var variation = getVariation(state.placement);
            var isBasePlacement = !variation;
            var mainAxis = getMainAxisFromPlacement(basePlacement);
            var altAxis = getAltAxis(mainAxis);
            var popperOffsets = state.modifiersData.popperOffsets;
            var referenceRect = state.rects.reference;
            var popperRect = state.rects.popper;
            var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
                placement: state.placement
            })) : tetherOffset;
            var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
                mainAxis: tetherOffsetValue,
                altAxis: tetherOffsetValue
            } : Object.assign({
                mainAxis: 0,
                altAxis: 0
            }, tetherOffsetValue);
            var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
            var data = {
                x: 0,
                y: 0
            };
            if (!popperOffsets) return;
            if (checkMainAxis) {
                var _offsetModifierState$;
                var mainSide = mainAxis === "y" ? enums_top : left;
                var altSide = mainAxis === "y" ? bottom : right;
                var len = mainAxis === "y" ? "height" : "width";
                var offset = popperOffsets[mainAxis];
                var min = offset + overflow[mainSide];
                var max = offset - overflow[altSide];
                var additive = tether ? -popperRect[len] / 2 : 0;
                var minLen = variation === start ? referenceRect[len] : popperRect[len];
                var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
                var arrowElement = state.elements.arrow;
                var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
                    width: 0,
                    height: 0
                };
                var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
                var arrowPaddingMin = arrowPaddingObject[mainSide];
                var arrowPaddingMax = arrowPaddingObject[altSide];
                var arrowLen = within(0, referenceRect[len], arrowRect[len]);
                var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
                var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
                var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
                var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
                var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
                var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
                var tetherMax = offset + maxOffset - offsetModifierValue;
                var preventedOffset = within(tether ? math_min(min, tetherMin) : min, offset, tether ? math_max(max, tetherMax) : max);
                popperOffsets[mainAxis] = preventedOffset;
                data[mainAxis] = preventedOffset - offset;
            }
            if (checkAltAxis) {
                var _offsetModifierState$2;
                var _mainSide = mainAxis === "x" ? enums_top : left;
                var _altSide = mainAxis === "x" ? bottom : right;
                var _offset = popperOffsets[altAxis];
                var _len = altAxis === "y" ? "height" : "width";
                var _min = _offset + overflow[_mainSide];
                var _max = _offset - overflow[_altSide];
                var isOriginSide = [ enums_top, left ].indexOf(basePlacement) !== -1;
                var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
                var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
                var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
                var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
                popperOffsets[altAxis] = _preventedOffset;
                data[altAxis] = _preventedOffset - _offset;
            }
            state.modifiersData[name] = data;
        }
        const modifiers_preventOverflow = {
            name: "preventOverflow",
            enabled: true,
            phase: "main",
            fn: preventOverflow,
            requiresIfExists: [ "offset" ]
        };
        var toPaddingObject = function toPaddingObject(padding, state) {
            padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
                placement: state.placement
            })) : padding;
            return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
        };
        function arrow(_ref) {
            var _state$modifiersData$;
            var state = _ref.state, name = _ref.name, options = _ref.options;
            var arrowElement = state.elements.arrow;
            var popperOffsets = state.modifiersData.popperOffsets;
            var basePlacement = getBasePlacement(state.placement);
            var axis = getMainAxisFromPlacement(basePlacement);
            var isVertical = [ left, right ].indexOf(basePlacement) >= 0;
            var len = isVertical ? "height" : "width";
            if (!arrowElement || !popperOffsets) return;
            var paddingObject = toPaddingObject(options.padding, state);
            var arrowRect = getLayoutRect(arrowElement);
            var minProp = axis === "y" ? enums_top : left;
            var maxProp = axis === "y" ? bottom : right;
            var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
            var startDiff = popperOffsets[axis] - state.rects.reference[axis];
            var arrowOffsetParent = getOffsetParent(arrowElement);
            var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
            var centerToReference = endDiff / 2 - startDiff / 2;
            var min = paddingObject[minProp];
            var max = clientSize - arrowRect[len] - paddingObject[maxProp];
            var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
            var offset = within(min, center, max);
            var axisProp = axis;
            state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, 
            _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
        }
        function arrow_effect(_ref2) {
            var state = _ref2.state, options = _ref2.options;
            var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
            if (arrowElement == null) return;
            if (typeof arrowElement === "string") {
                arrowElement = state.elements.popper.querySelector(arrowElement);
                if (!arrowElement) return;
            }
            if (!contains(state.elements.popper, arrowElement)) return;
            state.elements.arrow = arrowElement;
        }
        const modifiers_arrow = {
            name: "arrow",
            enabled: true,
            phase: "main",
            fn: arrow,
            effect: arrow_effect,
            requires: [ "popperOffsets" ],
            requiresIfExists: [ "preventOverflow" ]
        };
        function getSideOffsets(overflow, rect, preventedOffsets) {
            if (preventedOffsets === void 0) preventedOffsets = {
                x: 0,
                y: 0
            };
            return {
                top: overflow.top - rect.height - preventedOffsets.y,
                right: overflow.right - rect.width + preventedOffsets.x,
                bottom: overflow.bottom - rect.height + preventedOffsets.y,
                left: overflow.left - rect.width - preventedOffsets.x
            };
        }
        function isAnySideFullyClipped(overflow) {
            return [ enums_top, right, bottom, left ].some((function(side) {
                return overflow[side] >= 0;
            }));
        }
        function hide(_ref) {
            var state = _ref.state, name = _ref.name;
            var referenceRect = state.rects.reference;
            var popperRect = state.rects.popper;
            var preventedOffsets = state.modifiersData.preventOverflow;
            var referenceOverflow = detectOverflow(state, {
                elementContext: "reference"
            });
            var popperAltOverflow = detectOverflow(state, {
                altBoundary: true
            });
            var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
            var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
            var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
            var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
            state.modifiersData[name] = {
                referenceClippingOffsets,
                popperEscapeOffsets,
                isReferenceHidden,
                hasPopperEscaped
            };
            state.attributes.popper = Object.assign({}, state.attributes.popper, {
                "data-popper-reference-hidden": isReferenceHidden,
                "data-popper-escaped": hasPopperEscaped
            });
        }
        const modifiers_hide = {
            name: "hide",
            enabled: true,
            phase: "main",
            requiresIfExists: [ "preventOverflow" ],
            fn: hide
        };
        var defaultModifiers = [ eventListeners, modifiers_popperOffsets, modifiers_computeStyles, modifiers_applyStyles, modifiers_offset, modifiers_flip, modifiers_preventOverflow, modifiers_arrow, modifiers_hide ];
        var popper_createPopper = popperGenerator({
            defaultModifiers
        });
        var BOX_CLASS = "tippy-box";
        var CONTENT_CLASS = "tippy-content";
        var BACKDROP_CLASS = "tippy-backdrop";
        var ARROW_CLASS = "tippy-arrow";
        var SVG_ARROW_CLASS = "tippy-svg-arrow";
        var TOUCH_OPTIONS = {
            passive: true,
            capture: true
        };
        var TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO() {
            return document.body;
        };
        function getValueAtIndexOrReturn(value, index, defaultValue) {
            if (Array.isArray(value)) {
                var v = value[index];
                return v == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v;
            }
            return value;
        }
        function isType(value, type) {
            var str = {}.toString.call(value);
            return str.indexOf("[object") === 0 && str.indexOf(type + "]") > -1;
        }
        function invokeWithArgsOrReturn(value, args) {
            return typeof value === "function" ? value.apply(void 0, args) : value;
        }
        function tippy_esm_debounce(fn, ms) {
            if (ms === 0) return fn;
            var timeout;
            return function(arg) {
                clearTimeout(timeout);
                timeout = setTimeout((function() {
                    fn(arg);
                }), ms);
            };
        }
        function splitBySpaces(value) {
            return value.split(/\s+/).filter(Boolean);
        }
        function normalizeToArray(value) {
            return [].concat(value);
        }
        function pushIfUnique(arr, value) {
            if (arr.indexOf(value) === -1) arr.push(value);
        }
        function unique(arr) {
            return arr.filter((function(item, index) {
                return arr.indexOf(item) === index;
            }));
        }
        function tippy_esm_getBasePlacement(placement) {
            return placement.split("-")[0];
        }
        function arrayFrom(value) {
            return [].slice.call(value);
        }
        function removeUndefinedProps(obj) {
            return Object.keys(obj).reduce((function(acc, key) {
                if (obj[key] !== void 0) acc[key] = obj[key];
                return acc;
            }), {});
        }
        function div() {
            return document.createElement("div");
        }
        function tippy_esm_isElement(value) {
            return [ "Element", "Fragment" ].some((function(type) {
                return isType(value, type);
            }));
        }
        function isNodeList(value) {
            return isType(value, "NodeList");
        }
        function isMouseEvent(value) {
            return isType(value, "MouseEvent");
        }
        function isReferenceElement(value) {
            return !!(value && value._tippy && value._tippy.reference === value);
        }
        function getArrayOfElements(value) {
            if (tippy_esm_isElement(value)) return [ value ];
            if (isNodeList(value)) return arrayFrom(value);
            if (Array.isArray(value)) return value;
            return arrayFrom(document.querySelectorAll(value));
        }
        function setTransitionDuration(els, value) {
            els.forEach((function(el) {
                if (el) el.style.transitionDuration = value + "ms";
            }));
        }
        function setVisibilityState(els, state) {
            els.forEach((function(el) {
                if (el) el.setAttribute("data-state", state);
            }));
        }
        function getOwnerDocument(elementOrElements) {
            var _element$ownerDocumen;
            var _normalizeToArray = normalizeToArray(elementOrElements), element = _normalizeToArray[0];
            return element != null && (_element$ownerDocumen = element.ownerDocument) != null && _element$ownerDocumen.body ? element.ownerDocument : document;
        }
        function isCursorOutsideInteractiveBorder(popperTreeData, event) {
            var clientX = event.clientX, clientY = event.clientY;
            return popperTreeData.every((function(_ref) {
                var popperRect = _ref.popperRect, popperState = _ref.popperState, props = _ref.props;
                var interactiveBorder = props.interactiveBorder;
                var basePlacement = tippy_esm_getBasePlacement(popperState.placement);
                var offsetData = popperState.modifiersData.offset;
                if (!offsetData) return true;
                var topDistance = basePlacement === "bottom" ? offsetData.top.y : 0;
                var bottomDistance = basePlacement === "top" ? offsetData.bottom.y : 0;
                var leftDistance = basePlacement === "right" ? offsetData.left.x : 0;
                var rightDistance = basePlacement === "left" ? offsetData.right.x : 0;
                var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
                var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
                var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
                var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
                return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
            }));
        }
        function updateTransitionEndListener(box, action, listener) {
            var method = action + "EventListener";
            [ "transitionend", "webkitTransitionEnd" ].forEach((function(event) {
                box[method](event, listener);
            }));
        }
        function actualContains(parent, child) {
            var target = child;
            while (target) {
                var _target$getRootNode;
                if (parent.contains(target)) return true;
                target = target.getRootNode == null ? void 0 : (_target$getRootNode = target.getRootNode()) == null ? void 0 : _target$getRootNode.host;
            }
            return false;
        }
        var currentInput = {
            isTouch: false
        };
        var lastMouseMoveTime = 0;
        function onDocumentTouchStart() {
            if (currentInput.isTouch) return;
            currentInput.isTouch = true;
            if (window.performance) document.addEventListener("mousemove", onDocumentMouseMove);
        }
        function onDocumentMouseMove() {
            var now = performance.now();
            if (now - lastMouseMoveTime < 20) {
                currentInput.isTouch = false;
                document.removeEventListener("mousemove", onDocumentMouseMove);
            }
            lastMouseMoveTime = now;
        }
        function onWindowBlur() {
            var activeElement = document.activeElement;
            if (isReferenceElement(activeElement)) {
                var instance = activeElement._tippy;
                if (activeElement.blur && !instance.state.isVisible) activeElement.blur();
            }
        }
        function bindGlobalEventListeners() {
            document.addEventListener("touchstart", onDocumentTouchStart, TOUCH_OPTIONS);
            window.addEventListener("blur", onWindowBlur);
        }
        var isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
        var isIE11 = isBrowser ? !!window.msCrypto : false;
        if (false) ;
        var pluginProps = {
            animateFill: false,
            followCursor: false,
            inlinePositioning: false,
            sticky: false
        };
        var renderProps = {
            allowHTML: false,
            animation: "fade",
            arrow: true,
            content: "",
            inertia: false,
            maxWidth: 350,
            role: "tooltip",
            theme: "",
            zIndex: 9999
        };
        var defaultProps = Object.assign({
            appendTo: TIPPY_DEFAULT_APPEND_TO,
            aria: {
                content: "auto",
                expanded: "auto"
            },
            delay: 0,
            duration: [ 300, 250 ],
            getReferenceClientRect: null,
            hideOnClick: true,
            ignoreAttributes: false,
            interactive: false,
            interactiveBorder: 2,
            interactiveDebounce: 0,
            moveTransition: "",
            offset: [ 0, 10 ],
            onAfterUpdate: function onAfterUpdate() {},
            onBeforeUpdate: function onBeforeUpdate() {},
            onCreate: function onCreate() {},
            onDestroy: function onDestroy() {},
            onHidden: function onHidden() {},
            onHide: function onHide() {},
            onMount: function onMount() {},
            onShow: function onShow() {},
            onShown: function onShown() {},
            onTrigger: function onTrigger() {},
            onUntrigger: function onUntrigger() {},
            onClickOutside: function onClickOutside() {},
            placement: "top",
            plugins: [],
            popperOptions: {},
            render: null,
            showOnCreate: false,
            touch: true,
            trigger: "mouseenter focus",
            triggerTarget: null
        }, pluginProps, renderProps);
        var defaultKeys = Object.keys(defaultProps);
        var setDefaultProps = function setDefaultProps(partialProps) {
            if (false) ;
            var keys = Object.keys(partialProps);
            keys.forEach((function(key) {
                defaultProps[key] = partialProps[key];
            }));
        };
        function getExtendedPassedProps(passedProps) {
            var plugins = passedProps.plugins || [];
            var pluginProps = plugins.reduce((function(acc, plugin) {
                var name = plugin.name, defaultValue = plugin.defaultValue;
                if (name) {
                    var _name;
                    acc[name] = passedProps[name] !== void 0 ? passedProps[name] : (_name = defaultProps[name]) != null ? _name : defaultValue;
                }
                return acc;
            }), {});
            return Object.assign({}, passedProps, pluginProps);
        }
        function getDataAttributeProps(reference, plugins) {
            var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
                plugins
            }))) : defaultKeys;
            var props = propKeys.reduce((function(acc, key) {
                var valueAsString = (reference.getAttribute("data-tippy-" + key) || "").trim();
                if (!valueAsString) return acc;
                if (key === "content") acc[key] = valueAsString; else try {
                    acc[key] = JSON.parse(valueAsString);
                } catch (e) {
                    acc[key] = valueAsString;
                }
                return acc;
            }), {});
            return props;
        }
        function evaluateProps(reference, props) {
            var out = Object.assign({}, props, {
                content: invokeWithArgsOrReturn(props.content, [ reference ])
            }, props.ignoreAttributes ? {} : getDataAttributeProps(reference, props.plugins));
            out.aria = Object.assign({}, defaultProps.aria, out.aria);
            out.aria = {
                expanded: out.aria.expanded === "auto" ? props.interactive : out.aria.expanded,
                content: out.aria.content === "auto" ? props.interactive ? null : "describedby" : out.aria.content
            };
            return out;
        }
        var innerHTML = function innerHTML() {
            return "innerHTML";
        };
        function dangerouslySetInnerHTML(element, html) {
            element[innerHTML()] = html;
        }
        function createArrowElement(value) {
            var arrow = div();
            if (value === true) arrow.className = ARROW_CLASS; else {
                arrow.className = SVG_ARROW_CLASS;
                if (tippy_esm_isElement(value)) arrow.appendChild(value); else dangerouslySetInnerHTML(arrow, value);
            }
            return arrow;
        }
        function setContent(content, props) {
            if (tippy_esm_isElement(props.content)) {
                dangerouslySetInnerHTML(content, "");
                content.appendChild(props.content);
            } else if (typeof props.content !== "function") if (props.allowHTML) dangerouslySetInnerHTML(content, props.content); else content.textContent = props.content;
        }
        function getChildren(popper) {
            var box = popper.firstElementChild;
            var boxChildren = arrayFrom(box.children);
            return {
                box,
                content: boxChildren.find((function(node) {
                    return node.classList.contains(CONTENT_CLASS);
                })),
                arrow: boxChildren.find((function(node) {
                    return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
                })),
                backdrop: boxChildren.find((function(node) {
                    return node.classList.contains(BACKDROP_CLASS);
                }))
            };
        }
        function render(instance) {
            var popper = div();
            var box = div();
            box.className = BOX_CLASS;
            box.setAttribute("data-state", "hidden");
            box.setAttribute("tabindex", "-1");
            var content = div();
            content.className = CONTENT_CLASS;
            content.setAttribute("data-state", "hidden");
            setContent(content, instance.props);
            popper.appendChild(box);
            box.appendChild(content);
            onUpdate(instance.props, instance.props);
            function onUpdate(prevProps, nextProps) {
                var _getChildren = getChildren(popper), box = _getChildren.box, content = _getChildren.content, arrow = _getChildren.arrow;
                if (nextProps.theme) box.setAttribute("data-theme", nextProps.theme); else box.removeAttribute("data-theme");
                if (typeof nextProps.animation === "string") box.setAttribute("data-animation", nextProps.animation); else box.removeAttribute("data-animation");
                if (nextProps.inertia) box.setAttribute("data-inertia", ""); else box.removeAttribute("data-inertia");
                box.style.maxWidth = typeof nextProps.maxWidth === "number" ? nextProps.maxWidth + "px" : nextProps.maxWidth;
                if (nextProps.role) box.setAttribute("role", nextProps.role); else box.removeAttribute("role");
                if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) setContent(content, instance.props);
                if (nextProps.arrow) {
                    if (!arrow) box.appendChild(createArrowElement(nextProps.arrow)); else if (prevProps.arrow !== nextProps.arrow) {
                        box.removeChild(arrow);
                        box.appendChild(createArrowElement(nextProps.arrow));
                    }
                } else if (arrow) box.removeChild(arrow);
            }
            return {
                popper,
                onUpdate
            };
        }
        render.$$tippy = true;
        var idCounter = 1;
        var mouseMoveListeners = [];
        var mountedInstances = [];
        function createTippy(reference, passedProps) {
            var props = evaluateProps(reference, Object.assign({}, defaultProps, getExtendedPassedProps(removeUndefinedProps(passedProps))));
            var showTimeout;
            var hideTimeout;
            var scheduleHideAnimationFrame;
            var isVisibleFromClick = false;
            var didHideDueToDocumentMouseDown = false;
            var didTouchMove = false;
            var ignoreOnFirstUpdate = false;
            var lastTriggerEvent;
            var currentTransitionEndListener;
            var onFirstUpdate;
            var listeners = [];
            var debouncedOnMouseMove = tippy_esm_debounce(onMouseMove, props.interactiveDebounce);
            var currentTarget;
            var id = idCounter++;
            var popperInstance = null;
            var plugins = unique(props.plugins);
            var state = {
                isEnabled: true,
                isVisible: false,
                isDestroyed: false,
                isMounted: false,
                isShown: false
            };
            var instance = {
                id,
                reference,
                popper: div(),
                popperInstance,
                props,
                state,
                plugins,
                clearDelayTimeouts,
                setProps,
                setContent,
                show,
                hide,
                hideWithInteractivity,
                enable,
                disable,
                unmount,
                destroy
            };
            if (!props.render) {
                if (false) ;
                return instance;
            }
            var _props$render = props.render(instance), popper = _props$render.popper, onUpdate = _props$render.onUpdate;
            popper.setAttribute("data-tippy-root", "");
            popper.id = "tippy-" + instance.id;
            instance.popper = popper;
            reference._tippy = instance;
            popper._tippy = instance;
            var pluginsHooks = plugins.map((function(plugin) {
                return plugin.fn(instance);
            }));
            var hasAriaExpanded = reference.hasAttribute("aria-expanded");
            addListeners();
            handleAriaExpandedAttribute();
            handleStyles();
            invokeHook("onCreate", [ instance ]);
            if (props.showOnCreate) scheduleShow();
            popper.addEventListener("mouseenter", (function() {
                if (instance.props.interactive && instance.state.isVisible) instance.clearDelayTimeouts();
            }));
            popper.addEventListener("mouseleave", (function() {
                if (instance.props.interactive && instance.props.trigger.indexOf("mouseenter") >= 0) getDocument().addEventListener("mousemove", debouncedOnMouseMove);
            }));
            return instance;
            function getNormalizedTouchSettings() {
                var touch = instance.props.touch;
                return Array.isArray(touch) ? touch : [ touch, 0 ];
            }
            function getIsCustomTouchBehavior() {
                return getNormalizedTouchSettings()[0] === "hold";
            }
            function getIsDefaultRenderFn() {
                var _instance$props$rende;
                return !!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy);
            }
            function getCurrentTarget() {
                return currentTarget || reference;
            }
            function getDocument() {
                var parent = getCurrentTarget().parentNode;
                return parent ? getOwnerDocument(parent) : document;
            }
            function getDefaultTemplateChildren() {
                return getChildren(popper);
            }
            function getDelay(isShow) {
                if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === "focus") return 0;
                return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
            }
            function handleStyles(fromHide) {
                if (fromHide === void 0) fromHide = false;
                popper.style.pointerEvents = instance.props.interactive && !fromHide ? "" : "none";
                popper.style.zIndex = "" + instance.props.zIndex;
            }
            function invokeHook(hook, args, shouldInvokePropsHook) {
                if (shouldInvokePropsHook === void 0) shouldInvokePropsHook = true;
                pluginsHooks.forEach((function(pluginHooks) {
                    if (pluginHooks[hook]) pluginHooks[hook].apply(pluginHooks, args);
                }));
                if (shouldInvokePropsHook) {
                    var _instance$props;
                    (_instance$props = instance.props)[hook].apply(_instance$props, args);
                }
            }
            function handleAriaContentAttribute() {
                var aria = instance.props.aria;
                if (!aria.content) return;
                var attr = "aria-" + aria.content;
                var id = popper.id;
                var nodes = normalizeToArray(instance.props.triggerTarget || reference);
                nodes.forEach((function(node) {
                    var currentValue = node.getAttribute(attr);
                    if (instance.state.isVisible) node.setAttribute(attr, currentValue ? currentValue + " " + id : id); else {
                        var nextValue = currentValue && currentValue.replace(id, "").trim();
                        if (nextValue) node.setAttribute(attr, nextValue); else node.removeAttribute(attr);
                    }
                }));
            }
            function handleAriaExpandedAttribute() {
                if (hasAriaExpanded || !instance.props.aria.expanded) return;
                var nodes = normalizeToArray(instance.props.triggerTarget || reference);
                nodes.forEach((function(node) {
                    if (instance.props.interactive) node.setAttribute("aria-expanded", instance.state.isVisible && node === getCurrentTarget() ? "true" : "false"); else node.removeAttribute("aria-expanded");
                }));
            }
            function cleanupInteractiveMouseListeners() {
                getDocument().removeEventListener("mousemove", debouncedOnMouseMove);
                mouseMoveListeners = mouseMoveListeners.filter((function(listener) {
                    return listener !== debouncedOnMouseMove;
                }));
            }
            function onDocumentPress(event) {
                if (currentInput.isTouch) if (didTouchMove || event.type === "mousedown") return;
                var actualTarget = event.composedPath && event.composedPath()[0] || event.target;
                if (instance.props.interactive && actualContains(popper, actualTarget)) return;
                if (normalizeToArray(instance.props.triggerTarget || reference).some((function(el) {
                    return actualContains(el, actualTarget);
                }))) {
                    if (currentInput.isTouch) return;
                    if (instance.state.isVisible && instance.props.trigger.indexOf("click") >= 0) return;
                } else invokeHook("onClickOutside", [ instance, event ]);
                if (instance.props.hideOnClick === true) {
                    instance.clearDelayTimeouts();
                    instance.hide();
                    didHideDueToDocumentMouseDown = true;
                    setTimeout((function() {
                        didHideDueToDocumentMouseDown = false;
                    }));
                    if (!instance.state.isMounted) removeDocumentPress();
                }
            }
            function onTouchMove() {
                didTouchMove = true;
            }
            function onTouchStart() {
                didTouchMove = false;
            }
            function addDocumentPress() {
                var doc = getDocument();
                doc.addEventListener("mousedown", onDocumentPress, true);
                doc.addEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
                doc.addEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
                doc.addEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
            }
            function removeDocumentPress() {
                var doc = getDocument();
                doc.removeEventListener("mousedown", onDocumentPress, true);
                doc.removeEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
                doc.removeEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
                doc.removeEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
            }
            function onTransitionedOut(duration, callback) {
                onTransitionEnd(duration, (function() {
                    if (!instance.state.isVisible && popper.parentNode && popper.parentNode.contains(popper)) callback();
                }));
            }
            function onTransitionedIn(duration, callback) {
                onTransitionEnd(duration, callback);
            }
            function onTransitionEnd(duration, callback) {
                var box = getDefaultTemplateChildren().box;
                function listener(event) {
                    if (event.target === box) {
                        updateTransitionEndListener(box, "remove", listener);
                        callback();
                    }
                }
                if (duration === 0) return callback();
                updateTransitionEndListener(box, "remove", currentTransitionEndListener);
                updateTransitionEndListener(box, "add", listener);
                currentTransitionEndListener = listener;
            }
            function on(eventType, handler, options) {
                if (options === void 0) options = false;
                var nodes = normalizeToArray(instance.props.triggerTarget || reference);
                nodes.forEach((function(node) {
                    node.addEventListener(eventType, handler, options);
                    listeners.push({
                        node,
                        eventType,
                        handler,
                        options
                    });
                }));
            }
            function addListeners() {
                if (getIsCustomTouchBehavior()) {
                    on("touchstart", onTrigger, {
                        passive: true
                    });
                    on("touchend", onMouseLeave, {
                        passive: true
                    });
                }
                splitBySpaces(instance.props.trigger).forEach((function(eventType) {
                    if (eventType === "manual") return;
                    on(eventType, onTrigger);
                    switch (eventType) {
                      case "mouseenter":
                        on("mouseleave", onMouseLeave);
                        break;

                      case "focus":
                        on(isIE11 ? "focusout" : "blur", onBlurOrFocusOut);
                        break;

                      case "focusin":
                        on("focusout", onBlurOrFocusOut);
                        break;
                    }
                }));
            }
            function removeListeners() {
                listeners.forEach((function(_ref) {
                    var node = _ref.node, eventType = _ref.eventType, handler = _ref.handler, options = _ref.options;
                    node.removeEventListener(eventType, handler, options);
                }));
                listeners = [];
            }
            function onTrigger(event) {
                var _lastTriggerEvent;
                var shouldScheduleClickHide = false;
                if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) return;
                var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === "focus";
                lastTriggerEvent = event;
                currentTarget = event.currentTarget;
                handleAriaExpandedAttribute();
                if (!instance.state.isVisible && isMouseEvent(event)) mouseMoveListeners.forEach((function(listener) {
                    return listener(event);
                }));
                if (event.type === "click" && (instance.props.trigger.indexOf("mouseenter") < 0 || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) shouldScheduleClickHide = true; else scheduleShow(event);
                if (event.type === "click") isVisibleFromClick = !shouldScheduleClickHide;
                if (shouldScheduleClickHide && !wasFocused) scheduleHide(event);
            }
            function onMouseMove(event) {
                var target = event.target;
                var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper.contains(target);
                if (event.type === "mousemove" && isCursorOverReferenceOrPopper) return;
                var popperTreeData = getNestedPopperTree().concat(popper).map((function(popper) {
                    var _instance$popperInsta;
                    var instance = popper._tippy;
                    var state = (_instance$popperInsta = instance.popperInstance) == null ? void 0 : _instance$popperInsta.state;
                    if (state) return {
                        popperRect: popper.getBoundingClientRect(),
                        popperState: state,
                        props
                    };
                    return null;
                })).filter(Boolean);
                if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
                    cleanupInteractiveMouseListeners();
                    scheduleHide(event);
                }
            }
            function onMouseLeave(event) {
                var shouldBail = isEventListenerStopped(event) || instance.props.trigger.indexOf("click") >= 0 && isVisibleFromClick;
                if (shouldBail) return;
                if (instance.props.interactive) {
                    instance.hideWithInteractivity(event);
                    return;
                }
                scheduleHide(event);
            }
            function onBlurOrFocusOut(event) {
                if (instance.props.trigger.indexOf("focusin") < 0 && event.target !== getCurrentTarget()) return;
                if (instance.props.interactive && event.relatedTarget && popper.contains(event.relatedTarget)) return;
                scheduleHide(event);
            }
            function isEventListenerStopped(event) {
                return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf("touch") >= 0 : false;
            }
            function createPopperInstance() {
                destroyPopperInstance();
                var _instance$props2 = instance.props, popperOptions = _instance$props2.popperOptions, placement = _instance$props2.placement, offset = _instance$props2.offset, getReferenceClientRect = _instance$props2.getReferenceClientRect, moveTransition = _instance$props2.moveTransition;
                var arrow = getIsDefaultRenderFn() ? getChildren(popper).arrow : null;
                var computedReference = getReferenceClientRect ? {
                    getBoundingClientRect: getReferenceClientRect,
                    contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
                } : reference;
                var tippyModifier = {
                    name: "$$tippy",
                    enabled: true,
                    phase: "beforeWrite",
                    requires: [ "computeStyles" ],
                    fn: function fn(_ref2) {
                        var state = _ref2.state;
                        if (getIsDefaultRenderFn()) {
                            var _getDefaultTemplateCh = getDefaultTemplateChildren(), box = _getDefaultTemplateCh.box;
                            [ "placement", "reference-hidden", "escaped" ].forEach((function(attr) {
                                if (attr === "placement") box.setAttribute("data-placement", state.placement); else if (state.attributes.popper["data-popper-" + attr]) box.setAttribute("data-" + attr, ""); else box.removeAttribute("data-" + attr);
                            }));
                            state.attributes.popper = {};
                        }
                    }
                };
                var modifiers = [ {
                    name: "offset",
                    options: {
                        offset
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        padding: {
                            top: 2,
                            bottom: 2,
                            left: 5,
                            right: 5
                        }
                    }
                }, {
                    name: "flip",
                    options: {
                        padding: 5
                    }
                }, {
                    name: "computeStyles",
                    options: {
                        adaptive: !moveTransition
                    }
                }, tippyModifier ];
                if (getIsDefaultRenderFn() && arrow) modifiers.push({
                    name: "arrow",
                    options: {
                        element: arrow,
                        padding: 3
                    }
                });
                modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
                instance.popperInstance = popper_createPopper(computedReference, popper, Object.assign({}, popperOptions, {
                    placement,
                    onFirstUpdate,
                    modifiers
                }));
            }
            function destroyPopperInstance() {
                if (instance.popperInstance) {
                    instance.popperInstance.destroy();
                    instance.popperInstance = null;
                }
            }
            function mount() {
                var appendTo = instance.props.appendTo;
                var parentNode;
                var node = getCurrentTarget();
                if (instance.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO || appendTo === "parent") parentNode = node.parentNode; else parentNode = invokeWithArgsOrReturn(appendTo, [ node ]);
                if (!parentNode.contains(popper)) parentNode.appendChild(popper);
                instance.state.isMounted = true;
                createPopperInstance();
                if (false) ;
            }
            function getNestedPopperTree() {
                return arrayFrom(popper.querySelectorAll("[data-tippy-root]"));
            }
            function scheduleShow(event) {
                instance.clearDelayTimeouts();
                if (event) invokeHook("onTrigger", [ instance, event ]);
                addDocumentPress();
                var delay = getDelay(true);
                var _getNormalizedTouchSe = getNormalizedTouchSettings(), touchValue = _getNormalizedTouchSe[0], touchDelay = _getNormalizedTouchSe[1];
                if (currentInput.isTouch && touchValue === "hold" && touchDelay) delay = touchDelay;
                if (delay) showTimeout = setTimeout((function() {
                    instance.show();
                }), delay); else instance.show();
            }
            function scheduleHide(event) {
                instance.clearDelayTimeouts();
                invokeHook("onUntrigger", [ instance, event ]);
                if (!instance.state.isVisible) {
                    removeDocumentPress();
                    return;
                }
                if (instance.props.trigger.indexOf("mouseenter") >= 0 && instance.props.trigger.indexOf("click") >= 0 && [ "mouseleave", "mousemove" ].indexOf(event.type) >= 0 && isVisibleFromClick) return;
                var delay = getDelay(false);
                if (delay) hideTimeout = setTimeout((function() {
                    if (instance.state.isVisible) instance.hide();
                }), delay); else scheduleHideAnimationFrame = requestAnimationFrame((function() {
                    instance.hide();
                }));
            }
            function enable() {
                instance.state.isEnabled = true;
            }
            function disable() {
                instance.hide();
                instance.state.isEnabled = false;
            }
            function clearDelayTimeouts() {
                clearTimeout(showTimeout);
                clearTimeout(hideTimeout);
                cancelAnimationFrame(scheduleHideAnimationFrame);
            }
            function setProps(partialProps) {
                if (false) ;
                if (instance.state.isDestroyed) return;
                invokeHook("onBeforeUpdate", [ instance, partialProps ]);
                removeListeners();
                var prevProps = instance.props;
                var nextProps = evaluateProps(reference, Object.assign({}, prevProps, removeUndefinedProps(partialProps), {
                    ignoreAttributes: true
                }));
                instance.props = nextProps;
                addListeners();
                if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
                    cleanupInteractiveMouseListeners();
                    debouncedOnMouseMove = tippy_esm_debounce(onMouseMove, nextProps.interactiveDebounce);
                }
                if (prevProps.triggerTarget && !nextProps.triggerTarget) normalizeToArray(prevProps.triggerTarget).forEach((function(node) {
                    node.removeAttribute("aria-expanded");
                })); else if (nextProps.triggerTarget) reference.removeAttribute("aria-expanded");
                handleAriaExpandedAttribute();
                handleStyles();
                if (onUpdate) onUpdate(prevProps, nextProps);
                if (instance.popperInstance) {
                    createPopperInstance();
                    getNestedPopperTree().forEach((function(nestedPopper) {
                        requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
                    }));
                }
                invokeHook("onAfterUpdate", [ instance, partialProps ]);
            }
            function setContent(content) {
                instance.setProps({
                    content
                });
            }
            function show() {
                if (false) ;
                var isAlreadyVisible = instance.state.isVisible;
                var isDestroyed = instance.state.isDestroyed;
                var isDisabled = !instance.state.isEnabled;
                var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;
                var duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);
                if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) return;
                if (getCurrentTarget().hasAttribute("disabled")) return;
                invokeHook("onShow", [ instance ], false);
                if (instance.props.onShow(instance) === false) return;
                instance.state.isVisible = true;
                if (getIsDefaultRenderFn()) popper.style.visibility = "visible";
                handleStyles();
                addDocumentPress();
                if (!instance.state.isMounted) popper.style.transition = "none";
                if (getIsDefaultRenderFn()) {
                    var _getDefaultTemplateCh2 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh2.box, content = _getDefaultTemplateCh2.content;
                    setTransitionDuration([ box, content ], 0);
                }
                onFirstUpdate = function onFirstUpdate() {
                    var _instance$popperInsta2;
                    if (!instance.state.isVisible || ignoreOnFirstUpdate) return;
                    ignoreOnFirstUpdate = true;
                    void popper.offsetHeight;
                    popper.style.transition = instance.props.moveTransition;
                    if (getIsDefaultRenderFn() && instance.props.animation) {
                        var _getDefaultTemplateCh3 = getDefaultTemplateChildren(), _box = _getDefaultTemplateCh3.box, _content = _getDefaultTemplateCh3.content;
                        setTransitionDuration([ _box, _content ], duration);
                        setVisibilityState([ _box, _content ], "visible");
                    }
                    handleAriaContentAttribute();
                    handleAriaExpandedAttribute();
                    pushIfUnique(mountedInstances, instance);
                    (_instance$popperInsta2 = instance.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
                    invokeHook("onMount", [ instance ]);
                    if (instance.props.animation && getIsDefaultRenderFn()) onTransitionedIn(duration, (function() {
                        instance.state.isShown = true;
                        invokeHook("onShown", [ instance ]);
                    }));
                };
                mount();
            }
            function hide() {
                if (false) ;
                var isAlreadyHidden = !instance.state.isVisible;
                var isDestroyed = instance.state.isDestroyed;
                var isDisabled = !instance.state.isEnabled;
                var duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);
                if (isAlreadyHidden || isDestroyed || isDisabled) return;
                invokeHook("onHide", [ instance ], false);
                if (instance.props.onHide(instance) === false) return;
                instance.state.isVisible = false;
                instance.state.isShown = false;
                ignoreOnFirstUpdate = false;
                isVisibleFromClick = false;
                if (getIsDefaultRenderFn()) popper.style.visibility = "hidden";
                cleanupInteractiveMouseListeners();
                removeDocumentPress();
                handleStyles(true);
                if (getIsDefaultRenderFn()) {
                    var _getDefaultTemplateCh4 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh4.box, content = _getDefaultTemplateCh4.content;
                    if (instance.props.animation) {
                        setTransitionDuration([ box, content ], duration);
                        setVisibilityState([ box, content ], "hidden");
                    }
                }
                handleAriaContentAttribute();
                handleAriaExpandedAttribute();
                if (instance.props.animation) {
                    if (getIsDefaultRenderFn()) onTransitionedOut(duration, instance.unmount);
                } else instance.unmount();
            }
            function hideWithInteractivity(event) {
                if (false) ;
                getDocument().addEventListener("mousemove", debouncedOnMouseMove);
                pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
                debouncedOnMouseMove(event);
            }
            function unmount() {
                if (false) ;
                if (instance.state.isVisible) instance.hide();
                if (!instance.state.isMounted) return;
                destroyPopperInstance();
                getNestedPopperTree().forEach((function(nestedPopper) {
                    nestedPopper._tippy.unmount();
                }));
                if (popper.parentNode) popper.parentNode.removeChild(popper);
                mountedInstances = mountedInstances.filter((function(i) {
                    return i !== instance;
                }));
                instance.state.isMounted = false;
                invokeHook("onHidden", [ instance ]);
            }
            function destroy() {
                if (false) ;
                if (instance.state.isDestroyed) return;
                instance.clearDelayTimeouts();
                instance.unmount();
                removeListeners();
                delete reference._tippy;
                instance.state.isDestroyed = true;
                invokeHook("onDestroy", [ instance ]);
            }
        }
        function tippy(targets, optionalProps) {
            if (optionalProps === void 0) optionalProps = {};
            var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
            if (false) ;
            bindGlobalEventListeners();
            var passedProps = Object.assign({}, optionalProps, {
                plugins
            });
            var elements = getArrayOfElements(targets);
            if (false) ;
            var instances = elements.reduce((function(acc, reference) {
                var instance = reference && createTippy(reference, passedProps);
                if (instance) acc.push(instance);
                return acc;
            }), []);
            return tippy_esm_isElement(targets) ? instances[0] : instances;
        }
        tippy.defaultProps = defaultProps;
        tippy.setDefaultProps = setDefaultProps;
        tippy.currentInput = currentInput;
        Object.assign({}, modifiers_applyStyles, {
            effect: function effect(_ref) {
                var state = _ref.state;
                var initialStyles = {
                    popper: {
                        position: state.options.strategy,
                        left: "0",
                        top: "0",
                        margin: "0"
                    },
                    arrow: {
                        position: "absolute"
                    },
                    reference: {}
                };
                Object.assign(state.elements.popper.style, initialStyles.popper);
                state.styles = initialStyles;
                if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
            }
        });
        tippy.setDefaultProps({
            render
        });
        const tippy_esm = tippy;
        var dist_clipboard = __webpack_require__(152);
        if (document.querySelector(".clipboard")) {
            const cliboardWrapper = document.querySelectorAll(".clipboard");
            cliboardWrapper.forEach(((clipboard, i) => {
                let clipboardJs = new dist_clipboard(clipboard);
                const copiedTippy = tippy_esm(document.querySelectorAll(".clipboard"), {
                    placement: "bottom",
                    theme: "clean",
                    trigger: "",
                    theme: "dark"
                })[0];
                clipboardJs.on("success", (function(e) {
                    e.trigger._tippy.setContent("Copied");
                    e.trigger._tippy.show();
                    setTimeout(copiedTippy.hide, 2e3);
                }));
            }));
        }
        var HOOKS = [ "onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition" ];
        var defaults = {
            _disable: [],
            allowInput: false,
            allowInvalidPreload: false,
            altFormat: "F j, Y",
            altInput: false,
            altInputClass: "form-control input",
            animate: typeof window === "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
            ariaDateFormat: "F j, Y",
            autoFillDefaultTime: true,
            clickOpens: true,
            closeOnSelect: true,
            conjunction: ", ",
            dateFormat: "Y-m-d",
            defaultHour: 12,
            defaultMinute: 0,
            defaultSeconds: 0,
            disable: [],
            disableMobile: false,
            enableSeconds: false,
            enableTime: false,
            errorHandler: function(err) {
                return typeof console !== "undefined" && console.warn(err);
            },
            getWeek: function(givenDate) {
                var date = new Date(givenDate.getTime());
                date.setHours(0, 0, 0, 0);
                date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
                var week1 = new Date(date.getFullYear(), 0, 4);
                return 1 + Math.round(((date.getTime() - week1.getTime()) / 864e5 - 3 + (week1.getDay() + 6) % 7) / 7);
            },
            hourIncrement: 1,
            ignoredFocusElements: [],
            inline: false,
            locale: "default",
            minuteIncrement: 5,
            mode: "single",
            monthSelectorType: "dropdown",
            nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
            noCalendar: false,
            now: new Date,
            onChange: [],
            onClose: [],
            onDayCreate: [],
            onDestroy: [],
            onKeyDown: [],
            onMonthChange: [],
            onOpen: [],
            onParseConfig: [],
            onReady: [],
            onValueUpdate: [],
            onYearChange: [],
            onPreCalendarPosition: [],
            plugins: [],
            position: "auto",
            positionElement: void 0,
            prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
            shorthandCurrentMonth: false,
            showMonths: 1,
            static: false,
            time_24hr: false,
            weekNumbers: false,
            wrap: false
        };
        var english = {
            weekdays: {
                shorthand: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
                longhand: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
            },
            months: {
                shorthand: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
                longhand: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
            },
            daysInMonth: [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ],
            firstDayOfWeek: 0,
            ordinal: function(nth) {
                var s = nth % 100;
                if (s > 3 && s < 21) return "th";
                switch (s % 10) {
                  case 1:
                    return "st";

                  case 2:
                    return "nd";

                  case 3:
                    return "rd";

                  default:
                    return "th";
                }
            },
            rangeSeparator: " to ",
            weekAbbreviation: "Wk",
            scrollTitle: "Scroll to increment",
            toggleTitle: "Click to toggle",
            amPM: [ "AM", "PM" ],
            yearAriaLabel: "Year",
            monthAriaLabel: "Month",
            hourAriaLabel: "Hour",
            minuteAriaLabel: "Minute",
            time_24hr: false
        };
        const l10n_default = english;
        var pad = function(number, length) {
            if (length === void 0) length = 2;
            return ("000" + number).slice(length * -1);
        };
        var utils_int = function(bool) {
            return bool === true ? 1 : 0;
        };
        function utils_debounce(fn, wait) {
            var t;
            return function() {
                var _this = this;
                var args = arguments;
                clearTimeout(t);
                t = setTimeout((function() {
                    return fn.apply(_this, args);
                }), wait);
            };
        }
        var arrayify = function(obj) {
            return obj instanceof Array ? obj : [ obj ];
        };
        function toggleClass(elem, className, bool) {
            if (bool === true) return elem.classList.add(className);
            elem.classList.remove(className);
        }
        function createElement(tag, className, content) {
            var e = window.document.createElement(tag);
            className = className || "";
            content = content || "";
            e.className = className;
            if (content !== void 0) e.textContent = content;
            return e;
        }
        function clearNode(node) {
            while (node.firstChild) node.removeChild(node.firstChild);
        }
        function findParent(node, condition) {
            if (condition(node)) return node; else if (node.parentNode) return findParent(node.parentNode, condition);
            return;
        }
        function createNumberInput(inputClassName, opts) {
            var wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
            if (navigator.userAgent.indexOf("MSIE 9.0") === -1) numInput.type = "number"; else {
                numInput.type = "text";
                numInput.pattern = "\\d*";
            }
            if (opts !== void 0) for (var key in opts) numInput.setAttribute(key, opts[key]);
            wrapper.appendChild(numInput);
            wrapper.appendChild(arrowUp);
            wrapper.appendChild(arrowDown);
            return wrapper;
        }
        function getEventTarget(event) {
            try {
                if (typeof event.composedPath === "function") {
                    var path = event.composedPath();
                    return path[0];
                }
                return event.target;
            } catch (error) {
                return event.target;
            }
        }
        var doNothing = function() {
            return;
        };
        var monthToStr = function(monthNumber, shorthand, locale) {
            return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
        };
        var revFormat = {
            D: doNothing,
            F: function(dateObj, monthName, locale) {
                dateObj.setMonth(locale.months.longhand.indexOf(monthName));
            },
            G: function(dateObj, hour) {
                dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
            },
            H: function(dateObj, hour) {
                dateObj.setHours(parseFloat(hour));
            },
            J: function(dateObj, day) {
                dateObj.setDate(parseFloat(day));
            },
            K: function(dateObj, amPM, locale) {
                dateObj.setHours(dateObj.getHours() % 12 + 12 * utils_int(new RegExp(locale.amPM[1], "i").test(amPM)));
            },
            M: function(dateObj, shortMonth, locale) {
                dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
            },
            S: function(dateObj, seconds) {
                dateObj.setSeconds(parseFloat(seconds));
            },
            U: function(_, unixSeconds) {
                return new Date(parseFloat(unixSeconds) * 1e3);
            },
            W: function(dateObj, weekNum, locale) {
                var weekNumber = parseInt(weekNum);
                var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
                date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
                return date;
            },
            Y: function(dateObj, year) {
                dateObj.setFullYear(parseFloat(year));
            },
            Z: function(_, ISODate) {
                return new Date(ISODate);
            },
            d: function(dateObj, day) {
                dateObj.setDate(parseFloat(day));
            },
            h: function(dateObj, hour) {
                dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
            },
            i: function(dateObj, minutes) {
                dateObj.setMinutes(parseFloat(minutes));
            },
            j: function(dateObj, day) {
                dateObj.setDate(parseFloat(day));
            },
            l: doNothing,
            m: function(dateObj, month) {
                dateObj.setMonth(parseFloat(month) - 1);
            },
            n: function(dateObj, month) {
                dateObj.setMonth(parseFloat(month) - 1);
            },
            s: function(dateObj, seconds) {
                dateObj.setSeconds(parseFloat(seconds));
            },
            u: function(_, unixMillSeconds) {
                return new Date(parseFloat(unixMillSeconds));
            },
            w: doNothing,
            y: function(dateObj, year) {
                dateObj.setFullYear(2e3 + parseFloat(year));
            }
        };
        var tokenRegex = {
            D: "",
            F: "",
            G: "(\\d\\d|\\d)",
            H: "(\\d\\d|\\d)",
            J: "(\\d\\d|\\d)\\w+",
            K: "",
            M: "",
            S: "(\\d\\d|\\d)",
            U: "(.+)",
            W: "(\\d\\d|\\d)",
            Y: "(\\d{4})",
            Z: "(.+)",
            d: "(\\d\\d|\\d)",
            h: "(\\d\\d|\\d)",
            i: "(\\d\\d|\\d)",
            j: "(\\d\\d|\\d)",
            l: "",
            m: "(\\d\\d|\\d)",
            n: "(\\d\\d|\\d)",
            s: "(\\d\\d|\\d)",
            u: "(.+)",
            w: "(\\d\\d|\\d)",
            y: "(\\d{2})"
        };
        var formats = {
            Z: function(date) {
                return date.toISOString();
            },
            D: function(date, locale, options) {
                return locale.weekdays.shorthand[formats.w(date, locale, options)];
            },
            F: function(date, locale, options) {
                return monthToStr(formats.n(date, locale, options) - 1, false, locale);
            },
            G: function(date, locale, options) {
                return pad(formats.h(date, locale, options));
            },
            H: function(date) {
                return pad(date.getHours());
            },
            J: function(date, locale) {
                return locale.ordinal !== void 0 ? date.getDate() + locale.ordinal(date.getDate()) : date.getDate();
            },
            K: function(date, locale) {
                return locale.amPM[utils_int(date.getHours() > 11)];
            },
            M: function(date, locale) {
                return monthToStr(date.getMonth(), true, locale);
            },
            S: function(date) {
                return pad(date.getSeconds());
            },
            U: function(date) {
                return date.getTime() / 1e3;
            },
            W: function(date, _, options) {
                return options.getWeek(date);
            },
            Y: function(date) {
                return pad(date.getFullYear(), 4);
            },
            d: function(date) {
                return pad(date.getDate());
            },
            h: function(date) {
                return date.getHours() % 12 ? date.getHours() % 12 : 12;
            },
            i: function(date) {
                return pad(date.getMinutes());
            },
            j: function(date) {
                return date.getDate();
            },
            l: function(date, locale) {
                return locale.weekdays.longhand[date.getDay()];
            },
            m: function(date) {
                return pad(date.getMonth() + 1);
            },
            n: function(date) {
                return date.getMonth() + 1;
            },
            s: function(date) {
                return date.getSeconds();
            },
            u: function(date) {
                return date.getTime();
            },
            w: function(date) {
                return date.getDay();
            },
            y: function(date) {
                return String(date.getFullYear()).substring(2);
            }
        };
        var createDateFormatter = function(_a) {
            var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c, _d = _a.isMobile, isMobile = _d === void 0 ? false : _d;
            return function(dateObj, frmt, overrideLocale) {
                var locale = overrideLocale || l10n;
                if (config.formatDate !== void 0 && !isMobile) return config.formatDate(dateObj, frmt, locale);
                return frmt.split("").map((function(c, i, arr) {
                    return formats[c] && arr[i - 1] !== "\\" ? formats[c](dateObj, locale, config) : c !== "\\" ? c : "";
                })).join("");
            };
        };
        var createDateParser = function(_a) {
            var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c;
            return function(date, givenFormat, timeless, customLocale) {
                if (date !== 0 && !date) return;
                var locale = customLocale || l10n;
                var parsedDate;
                var dateOrig = date;
                if (date instanceof Date) parsedDate = new Date(date.getTime()); else if (typeof date !== "string" && date.toFixed !== void 0) parsedDate = new Date(date); else if (typeof date === "string") {
                    var format = givenFormat || (config || defaults).dateFormat;
                    var datestr = String(date).trim();
                    if (datestr === "today") {
                        parsedDate = new Date;
                        timeless = true;
                    } else if (config && config.parseDate) parsedDate = config.parseDate(date, format); else if (/Z$/.test(datestr) || /GMT$/.test(datestr)) parsedDate = new Date(date); else {
                        var matched = void 0, ops = [];
                        for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
                            var token = format[i];
                            var isBackSlash = token === "\\";
                            var escaped = format[i - 1] === "\\" || isBackSlash;
                            if (tokenRegex[token] && !escaped) {
                                regexStr += tokenRegex[token];
                                var match = new RegExp(regexStr).exec(date);
                                if (match && (matched = true)) ops[token !== "Y" ? "push" : "unshift"]({
                                    fn: revFormat[token],
                                    val: match[++matchIndex]
                                });
                            } else if (!isBackSlash) regexStr += ".";
                        }
                        parsedDate = !config || !config.noCalendar ? new Date((new Date).getFullYear(), 0, 1, 0, 0, 0, 0) : new Date((new Date).setHours(0, 0, 0, 0));
                        ops.forEach((function(_a) {
                            var fn = _a.fn, val = _a.val;
                            return parsedDate = fn(parsedDate, val, locale) || parsedDate;
                        }));
                        parsedDate = matched ? parsedDate : void 0;
                    }
                }
                if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
                    config.errorHandler(new Error("Invalid date provided: " + dateOrig));
                    return;
                }
                if (timeless === true) parsedDate.setHours(0, 0, 0, 0);
                return parsedDate;
            };
        };
        function compareDates(date1, date2, timeless) {
            if (timeless === void 0) timeless = true;
            if (timeless !== false) return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
            return date1.getTime() - date2.getTime();
        }
        var isBetween = function(ts, ts1, ts2) {
            return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
        };
        var calculateSecondsSinceMidnight = function(hours, minutes, seconds) {
            return hours * 3600 + minutes * 60 + seconds;
        };
        var parseSeconds = function(secondsSinceMidnight) {
            var hours = Math.floor(secondsSinceMidnight / 3600), minutes = (secondsSinceMidnight - hours * 3600) / 60;
            return [ hours, minutes, secondsSinceMidnight - hours * 3600 - minutes * 60 ];
        };
        var duration = {
            DAY: 864e5
        };
        function getDefaultHours(config) {
            var hours = config.defaultHour;
            var minutes = config.defaultMinute;
            var seconds = config.defaultSeconds;
            if (config.minDate !== void 0) {
                var minHour = config.minDate.getHours();
                var minMinutes = config.minDate.getMinutes();
                var minSeconds = config.minDate.getSeconds();
                if (hours < minHour) hours = minHour;
                if (hours === minHour && minutes < minMinutes) minutes = minMinutes;
                if (hours === minHour && minutes === minMinutes && seconds < minSeconds) seconds = config.minDate.getSeconds();
            }
            if (config.maxDate !== void 0) {
                var maxHr = config.maxDate.getHours();
                var maxMinutes = config.maxDate.getMinutes();
                hours = Math.min(hours, maxHr);
                if (hours === maxHr) minutes = Math.min(maxMinutes, minutes);
                if (hours === maxHr && minutes === maxMinutes) seconds = config.maxDate.getSeconds();
            }
            return {
                hours,
                minutes,
                seconds
            };
        }
        __webpack_require__(895);
        var __assign = void 0 && (void 0).__assign || function() {
            __assign = Object.assign || function(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
            };
            return __assign.apply(this, arguments);
        };
        var __spreadArrays = void 0 && (void 0).__spreadArrays || function() {
            for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
            var r = Array(s), k = 0;
            for (i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
            k++) r[k] = a[j];
            return r;
        };
        var DEBOUNCED_CHANGE_MS = 300;
        function FlatpickrInstance(element, instanceConfig) {
            var self = {
                config: __assign(__assign({}, defaults), flatpickr.defaultConfig),
                l10n: l10n_default
            };
            self.parseDate = createDateParser({
                config: self.config,
                l10n: self.l10n
            });
            self._handlers = [];
            self.pluginElements = [];
            self.loadedPlugins = [];
            self._bind = bind;
            self._setHoursFromDate = setHoursFromDate;
            self._positionCalendar = positionCalendar;
            self.changeMonth = changeMonth;
            self.changeYear = changeYear;
            self.clear = clear;
            self.close = close;
            self.onMouseOver = onMouseOver;
            self._createElement = createElement;
            self.createDay = createDay;
            self.destroy = destroy;
            self.isEnabled = isEnabled;
            self.jumpToDate = jumpToDate;
            self.updateValue = updateValue;
            self.open = open;
            self.redraw = redraw;
            self.set = set;
            self.setDate = setDate;
            self.toggle = toggle;
            function setupHelperFunctions() {
                self.utils = {
                    getDaysInMonth: function(month, yr) {
                        if (month === void 0) month = self.currentMonth;
                        if (yr === void 0) yr = self.currentYear;
                        if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0)) return 29;
                        return self.l10n.daysInMonth[month];
                    }
                };
            }
            function init() {
                self.element = self.input = element;
                self.isOpen = false;
                parseConfig();
                setupLocale();
                setupInputs();
                setupDates();
                setupHelperFunctions();
                if (!self.isMobile) build();
                bindEvents();
                if (self.selectedDates.length || self.config.noCalendar) {
                    if (self.config.enableTime) setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj : void 0);
                    updateValue(false);
                }
                setCalendarWidth();
                var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                if (!self.isMobile && isSafari) positionCalendar();
                triggerEvent("onReady");
            }
            function getClosestActiveElement() {
                var _a;
                return ((_a = self.calendarContainer) === null || _a === void 0 ? void 0 : _a.getRootNode()).activeElement || document.activeElement;
            }
            function bindToInstance(fn) {
                return fn.bind(self);
            }
            function setCalendarWidth() {
                var config = self.config;
                if (config.weekNumbers === false && config.showMonths === 1) return; else if (config.noCalendar !== true) window.requestAnimationFrame((function() {
                    if (self.calendarContainer !== void 0) {
                        self.calendarContainer.style.visibility = "hidden";
                        self.calendarContainer.style.display = "block";
                    }
                    if (self.daysContainer !== void 0) {
                        var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
                        self.daysContainer.style.width = daysWidth + "px";
                        self.calendarContainer.style.width = daysWidth + (self.weekWrapper !== void 0 ? self.weekWrapper.offsetWidth : 0) + "px";
                        self.calendarContainer.style.removeProperty("visibility");
                        self.calendarContainer.style.removeProperty("display");
                    }
                }));
            }
            function updateTime(e) {
                if (self.selectedDates.length === 0) {
                    var defaultDate = self.config.minDate === void 0 || compareDates(new Date, self.config.minDate) >= 0 ? new Date : new Date(self.config.minDate.getTime());
                    var defaults = getDefaultHours(self.config);
                    defaultDate.setHours(defaults.hours, defaults.minutes, defaults.seconds, defaultDate.getMilliseconds());
                    self.selectedDates = [ defaultDate ];
                    self.latestSelectedDateObj = defaultDate;
                }
                if (e !== void 0 && e.type !== "blur") timeWrapper(e);
                var prevValue = self._input.value;
                setHoursFromInputs();
                updateValue();
                if (self._input.value !== prevValue) self._debouncedChange();
            }
            function ampm2military(hour, amPM) {
                return hour % 12 + 12 * utils_int(amPM === self.l10n.amPM[1]);
            }
            function military2ampm(hour) {
                switch (hour % 24) {
                  case 0:
                  case 12:
                    return 12;

                  default:
                    return hour % 12;
                }
            }
            function setHoursFromInputs() {
                if (self.hourElement === void 0 || self.minuteElement === void 0) return;
                var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = self.secondElement !== void 0 ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;
                if (self.amPM !== void 0) hours = ampm2military(hours, self.amPM.textContent);
                var limitMinHours = self.config.minTime !== void 0 || self.config.minDate && self.minDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.minDate, true) === 0;
                var limitMaxHours = self.config.maxTime !== void 0 || self.config.maxDate && self.maxDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.maxDate, true) === 0;
                if (self.config.maxTime !== void 0 && self.config.minTime !== void 0 && self.config.minTime > self.config.maxTime) {
                    var minBound = calculateSecondsSinceMidnight(self.config.minTime.getHours(), self.config.minTime.getMinutes(), self.config.minTime.getSeconds());
                    var maxBound = calculateSecondsSinceMidnight(self.config.maxTime.getHours(), self.config.maxTime.getMinutes(), self.config.maxTime.getSeconds());
                    var currentTime = calculateSecondsSinceMidnight(hours, minutes, seconds);
                    if (currentTime > maxBound && currentTime < minBound) {
                        var result = parseSeconds(minBound);
                        hours = result[0];
                        minutes = result[1];
                        seconds = result[2];
                    }
                } else {
                    if (limitMaxHours) {
                        var maxTime = self.config.maxTime !== void 0 ? self.config.maxTime : self.config.maxDate;
                        hours = Math.min(hours, maxTime.getHours());
                        if (hours === maxTime.getHours()) minutes = Math.min(minutes, maxTime.getMinutes());
                        if (minutes === maxTime.getMinutes()) seconds = Math.min(seconds, maxTime.getSeconds());
                    }
                    if (limitMinHours) {
                        var minTime = self.config.minTime !== void 0 ? self.config.minTime : self.config.minDate;
                        hours = Math.max(hours, minTime.getHours());
                        if (hours === minTime.getHours() && minutes < minTime.getMinutes()) minutes = minTime.getMinutes();
                        if (minutes === minTime.getMinutes()) seconds = Math.max(seconds, minTime.getSeconds());
                    }
                }
                setHours(hours, minutes, seconds);
            }
            function setHoursFromDate(dateObj) {
                var date = dateObj || self.latestSelectedDateObj;
                if (date && date instanceof Date) setHours(date.getHours(), date.getMinutes(), date.getSeconds());
            }
            function setHours(hours, minutes, seconds) {
                if (self.latestSelectedDateObj !== void 0) self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
                if (!self.hourElement || !self.minuteElement || self.isMobile) return;
                self.hourElement.value = pad(!self.config.time_24hr ? (12 + hours) % 12 + 12 * utils_int(hours % 12 === 0) : hours);
                self.minuteElement.value = pad(minutes);
                if (self.amPM !== void 0) self.amPM.textContent = self.l10n.amPM[utils_int(hours >= 12)];
                if (self.secondElement !== void 0) self.secondElement.value = pad(seconds);
            }
            function onYearInput(event) {
                var eventTarget = getEventTarget(event);
                var year = parseInt(eventTarget.value) + (event.delta || 0);
                if (year / 1e3 > 1 || event.key === "Enter" && !/[^\d]/.test(year.toString())) changeYear(year);
            }
            function bind(element, event, handler, options) {
                if (event instanceof Array) return event.forEach((function(ev) {
                    return bind(element, ev, handler, options);
                }));
                if (element instanceof Array) return element.forEach((function(el) {
                    return bind(el, event, handler, options);
                }));
                element.addEventListener(event, handler, options);
                self._handlers.push({
                    remove: function() {
                        return element.removeEventListener(event, handler, options);
                    }
                });
            }
            function triggerChange() {
                triggerEvent("onChange");
            }
            function bindEvents() {
                if (self.config.wrap) [ "open", "close", "toggle", "clear" ].forEach((function(evt) {
                    Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), (function(el) {
                        return bind(el, "click", self[evt]);
                    }));
                }));
                if (self.isMobile) {
                    setupMobile();
                    return;
                }
                var debouncedResize = utils_debounce(onResize, 50);
                self._debouncedChange = utils_debounce(triggerChange, DEBOUNCED_CHANGE_MS);
                if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent)) bind(self.daysContainer, "mouseover", (function(e) {
                    if (self.config.mode === "range") onMouseOver(getEventTarget(e));
                }));
                bind(self._input, "keydown", onKeyDown);
                if (self.calendarContainer !== void 0) bind(self.calendarContainer, "keydown", onKeyDown);
                if (!self.config.inline && !self.config.static) bind(window, "resize", debouncedResize);
                if (window.ontouchstart !== void 0) bind(window.document, "touchstart", documentClick); else bind(window.document, "mousedown", documentClick);
                bind(window.document, "focus", documentClick, {
                    capture: true
                });
                if (self.config.clickOpens === true) {
                    bind(self._input, "focus", self.open);
                    bind(self._input, "click", self.open);
                }
                if (self.daysContainer !== void 0) {
                    bind(self.monthNav, "click", onMonthNavClick);
                    bind(self.monthNav, [ "keyup", "increment" ], onYearInput);
                    bind(self.daysContainer, "click", selectDate);
                }
                if (self.timeContainer !== void 0 && self.minuteElement !== void 0 && self.hourElement !== void 0) {
                    var selText = function(e) {
                        return getEventTarget(e).select();
                    };
                    bind(self.timeContainer, [ "increment" ], updateTime);
                    bind(self.timeContainer, "blur", updateTime, {
                        capture: true
                    });
                    bind(self.timeContainer, "click", timeIncrement);
                    bind([ self.hourElement, self.minuteElement ], [ "focus", "click" ], selText);
                    if (self.secondElement !== void 0) bind(self.secondElement, "focus", (function() {
                        return self.secondElement && self.secondElement.select();
                    }));
                    if (self.amPM !== void 0) bind(self.amPM, "click", (function(e) {
                        updateTime(e);
                    }));
                }
                if (self.config.allowInput) bind(self._input, "blur", onBlur);
            }
            function jumpToDate(jumpDate, triggerChange) {
                var jumpTo = jumpDate !== void 0 ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate && self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);
                var oldYear = self.currentYear;
                var oldMonth = self.currentMonth;
                try {
                    if (jumpTo !== void 0) {
                        self.currentYear = jumpTo.getFullYear();
                        self.currentMonth = jumpTo.getMonth();
                    }
                } catch (e) {
                    e.message = "Invalid date supplied: " + jumpTo;
                    self.config.errorHandler(e);
                }
                if (triggerChange && self.currentYear !== oldYear) {
                    triggerEvent("onYearChange");
                    buildMonthSwitch();
                }
                if (triggerChange && (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) triggerEvent("onMonthChange");
                self.redraw();
            }
            function timeIncrement(e) {
                var eventTarget = getEventTarget(e);
                if (~eventTarget.className.indexOf("arrow")) incrementNumInput(e, eventTarget.classList.contains("arrowUp") ? 1 : -1);
            }
            function incrementNumInput(e, delta, inputElem) {
                var target = e && getEventTarget(e);
                var input = inputElem || target && target.parentNode && target.parentNode.firstChild;
                var event = createEvent("increment");
                event.delta = delta;
                input && input.dispatchEvent(event);
            }
            function build() {
                var fragment = window.document.createDocumentFragment();
                self.calendarContainer = createElement("div", "flatpickr-calendar");
                self.calendarContainer.tabIndex = -1;
                if (!self.config.noCalendar) {
                    fragment.appendChild(buildMonthNav());
                    self.innerContainer = createElement("div", "flatpickr-innerContainer");
                    if (self.config.weekNumbers) {
                        var _a = buildWeeks(), weekWrapper = _a.weekWrapper, weekNumbers = _a.weekNumbers;
                        self.innerContainer.appendChild(weekWrapper);
                        self.weekNumbers = weekNumbers;
                        self.weekWrapper = weekWrapper;
                    }
                    self.rContainer = createElement("div", "flatpickr-rContainer");
                    self.rContainer.appendChild(buildWeekdays());
                    if (!self.daysContainer) {
                        self.daysContainer = createElement("div", "flatpickr-days");
                        self.daysContainer.tabIndex = -1;
                    }
                    buildDays();
                    self.rContainer.appendChild(self.daysContainer);
                    self.innerContainer.appendChild(self.rContainer);
                    fragment.appendChild(self.innerContainer);
                }
                if (self.config.enableTime) fragment.appendChild(buildTime());
                toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
                toggleClass(self.calendarContainer, "animate", self.config.animate === true);
                toggleClass(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
                self.calendarContainer.appendChild(fragment);
                var customAppend = self.config.appendTo !== void 0 && self.config.appendTo.nodeType !== void 0;
                if (self.config.inline || self.config.static) {
                    self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
                    if (self.config.inline) if (!customAppend && self.element.parentNode) self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling); else if (self.config.appendTo !== void 0) self.config.appendTo.appendChild(self.calendarContainer);
                    if (self.config.static) {
                        var wrapper = createElement("div", "flatpickr-wrapper");
                        if (self.element.parentNode) self.element.parentNode.insertBefore(wrapper, self.element);
                        wrapper.appendChild(self.element);
                        if (self.altInput) wrapper.appendChild(self.altInput);
                        wrapper.appendChild(self.calendarContainer);
                    }
                }
                if (!self.config.static && !self.config.inline) (self.config.appendTo !== void 0 ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
            }
            function createDay(className, date, _dayNumber, i) {
                var dateIsEnabled = isEnabled(date, true), dayElement = createElement("span", className, date.getDate().toString());
                dayElement.dateObj = date;
                dayElement.$i = i;
                dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
                if (className.indexOf("hidden") === -1 && compareDates(date, self.now) === 0) {
                    self.todayDateElem = dayElement;
                    dayElement.classList.add("today");
                    dayElement.setAttribute("aria-current", "date");
                }
                if (dateIsEnabled) {
                    dayElement.tabIndex = -1;
                    if (isDateSelected(date)) {
                        dayElement.classList.add("selected");
                        self.selectedDateElem = dayElement;
                        if (self.config.mode === "range") {
                            toggleClass(dayElement, "startRange", self.selectedDates[0] && compareDates(date, self.selectedDates[0], true) === 0);
                            toggleClass(dayElement, "endRange", self.selectedDates[1] && compareDates(date, self.selectedDates[1], true) === 0);
                            if (className === "nextMonthDay") dayElement.classList.add("inRange");
                        }
                    }
                } else dayElement.classList.add("flatpickr-disabled");
                if (self.config.mode === "range") if (isDateInRange(date) && !isDateSelected(date)) dayElement.classList.add("inRange");
                if (self.weekNumbers && self.config.showMonths === 1 && className !== "prevMonthDay" && i % 7 === 6) self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
                triggerEvent("onDayCreate", dayElement);
                return dayElement;
            }
            function focusOnDayElem(targetNode) {
                targetNode.focus();
                if (self.config.mode === "range") onMouseOver(targetNode);
            }
            function getFirstAvailableDay(delta) {
                var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
                var endMonth = delta > 0 ? self.config.showMonths : -1;
                for (var m = startMonth; m != endMonth; m += delta) {
                    var month = self.daysContainer.children[m];
                    var startIndex = delta > 0 ? 0 : month.children.length - 1;
                    var endIndex = delta > 0 ? month.children.length : -1;
                    for (var i = startIndex; i != endIndex; i += delta) {
                        var c = month.children[i];
                        if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj)) return c;
                    }
                }
                return;
            }
            function getNextAvailableDay(current, delta) {
                var givenMonth = current.className.indexOf("Month") === -1 ? current.dateObj.getMonth() : self.currentMonth;
                var endMonth = delta > 0 ? self.config.showMonths : -1;
                var loopDelta = delta > 0 ? 1 : -1;
                for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
                    var month = self.daysContainer.children[m];
                    var startIndex = givenMonth - self.currentMonth === m ? current.$i + delta : delta < 0 ? month.children.length - 1 : 0;
                    var numMonthDays = month.children.length;
                    for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
                        var c = month.children[i];
                        if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj) && Math.abs(current.$i - i) >= Math.abs(delta)) return focusOnDayElem(c);
                    }
                }
                self.changeMonth(loopDelta);
                focusOnDay(getFirstAvailableDay(loopDelta), 0);
                return;
            }
            function focusOnDay(current, offset) {
                var activeElement = getClosestActiveElement();
                var dayFocused = isInView(activeElement || document.body);
                var startElem = current !== void 0 ? current : dayFocused ? activeElement : self.selectedDateElem !== void 0 && isInView(self.selectedDateElem) ? self.selectedDateElem : self.todayDateElem !== void 0 && isInView(self.todayDateElem) ? self.todayDateElem : getFirstAvailableDay(offset > 0 ? 1 : -1);
                if (startElem === void 0) self._input.focus(); else if (!dayFocused) focusOnDayElem(startElem); else getNextAvailableDay(startElem, offset);
            }
            function buildMonthDays(year, month) {
                var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
                var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12, year);
                var daysInMonth = self.utils.getDaysInMonth(month, year), days = window.document.createDocumentFragment(), isMultiMonth = self.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay", nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
                var dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
                for (;dayNumber <= prevMonthDays; dayNumber++, dayIndex++) days.appendChild(createDay("flatpickr-day " + prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
                for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) days.appendChild(createDay("flatpickr-day", new Date(year, month, dayNumber), dayNumber, dayIndex));
                for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth && (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, 
                dayIndex++) days.appendChild(createDay("flatpickr-day " + nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
                var dayContainer = createElement("div", "dayContainer");
                dayContainer.appendChild(days);
                return dayContainer;
            }
            function buildDays() {
                if (self.daysContainer === void 0) return;
                clearNode(self.daysContainer);
                if (self.weekNumbers) clearNode(self.weekNumbers);
                var frag = document.createDocumentFragment();
                for (var i = 0; i < self.config.showMonths; i++) {
                    var d = new Date(self.currentYear, self.currentMonth, 1);
                    d.setMonth(self.currentMonth + i);
                    frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
                }
                self.daysContainer.appendChild(frag);
                self.days = self.daysContainer.firstChild;
                if (self.config.mode === "range" && self.selectedDates.length === 1) onMouseOver();
            }
            function buildMonthSwitch() {
                if (self.config.showMonths > 1 || self.config.monthSelectorType !== "dropdown") return;
                var shouldBuildMonth = function(month) {
                    if (self.config.minDate !== void 0 && self.currentYear === self.config.minDate.getFullYear() && month < self.config.minDate.getMonth()) return false;
                    return !(self.config.maxDate !== void 0 && self.currentYear === self.config.maxDate.getFullYear() && month > self.config.maxDate.getMonth());
                };
                self.monthsDropdownContainer.tabIndex = -1;
                self.monthsDropdownContainer.innerHTML = "";
                for (var i = 0; i < 12; i++) {
                    if (!shouldBuildMonth(i)) continue;
                    var month = createElement("option", "flatpickr-monthDropdown-month");
                    month.value = new Date(self.currentYear, i).getMonth().toString();
                    month.textContent = monthToStr(i, self.config.shorthandCurrentMonth, self.l10n);
                    month.tabIndex = -1;
                    if (self.currentMonth === i) month.selected = true;
                    self.monthsDropdownContainer.appendChild(month);
                }
            }
            function buildMonth() {
                var container = createElement("div", "flatpickr-month");
                var monthNavFragment = window.document.createDocumentFragment();
                var monthElement;
                if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") monthElement = createElement("span", "cur-month"); else {
                    self.monthsDropdownContainer = createElement("select", "flatpickr-monthDropdown-months");
                    self.monthsDropdownContainer.setAttribute("aria-label", self.l10n.monthAriaLabel);
                    bind(self.monthsDropdownContainer, "change", (function(e) {
                        var target = getEventTarget(e);
                        var selectedMonth = parseInt(target.value, 10);
                        self.changeMonth(selectedMonth - self.currentMonth);
                        triggerEvent("onMonthChange");
                    }));
                    buildMonthSwitch();
                    monthElement = self.monthsDropdownContainer;
                }
                var yearInput = createNumberInput("cur-year", {
                    tabindex: "-1"
                });
                var yearElement = yearInput.getElementsByTagName("input")[0];
                yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
                if (self.config.minDate) yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
                if (self.config.maxDate) {
                    yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
                    yearElement.disabled = !!self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
                }
                var currentMonth = createElement("div", "flatpickr-current-month");
                currentMonth.appendChild(monthElement);
                currentMonth.appendChild(yearInput);
                monthNavFragment.appendChild(currentMonth);
                container.appendChild(monthNavFragment);
                return {
                    container,
                    yearElement,
                    monthElement
                };
            }
            function buildMonths() {
                clearNode(self.monthNav);
                self.monthNav.appendChild(self.prevMonthNav);
                if (self.config.showMonths) {
                    self.yearElements = [];
                    self.monthElements = [];
                }
                for (var m = self.config.showMonths; m--; ) {
                    var month = buildMonth();
                    self.yearElements.push(month.yearElement);
                    self.monthElements.push(month.monthElement);
                    self.monthNav.appendChild(month.container);
                }
                self.monthNav.appendChild(self.nextMonthNav);
            }
            function buildMonthNav() {
                self.monthNav = createElement("div", "flatpickr-months");
                self.yearElements = [];
                self.monthElements = [];
                self.prevMonthNav = createElement("span", "flatpickr-prev-month");
                self.prevMonthNav.innerHTML = self.config.prevArrow;
                self.nextMonthNav = createElement("span", "flatpickr-next-month");
                self.nextMonthNav.innerHTML = self.config.nextArrow;
                buildMonths();
                Object.defineProperty(self, "_hidePrevMonthArrow", {
                    get: function() {
                        return self.__hidePrevMonthArrow;
                    },
                    set: function(bool) {
                        if (self.__hidePrevMonthArrow !== bool) {
                            toggleClass(self.prevMonthNav, "flatpickr-disabled", bool);
                            self.__hidePrevMonthArrow = bool;
                        }
                    }
                });
                Object.defineProperty(self, "_hideNextMonthArrow", {
                    get: function() {
                        return self.__hideNextMonthArrow;
                    },
                    set: function(bool) {
                        if (self.__hideNextMonthArrow !== bool) {
                            toggleClass(self.nextMonthNav, "flatpickr-disabled", bool);
                            self.__hideNextMonthArrow = bool;
                        }
                    }
                });
                self.currentYearElement = self.yearElements[0];
                updateNavigationCurrentMonth();
                return self.monthNav;
            }
            function buildTime() {
                self.calendarContainer.classList.add("hasTime");
                if (self.config.noCalendar) self.calendarContainer.classList.add("noCalendar");
                var defaults = getDefaultHours(self.config);
                self.timeContainer = createElement("div", "flatpickr-time");
                self.timeContainer.tabIndex = -1;
                var separator = createElement("span", "flatpickr-time-separator", ":");
                var hourInput = createNumberInput("flatpickr-hour", {
                    "aria-label": self.l10n.hourAriaLabel
                });
                self.hourElement = hourInput.getElementsByTagName("input")[0];
                var minuteInput = createNumberInput("flatpickr-minute", {
                    "aria-label": self.l10n.minuteAriaLabel
                });
                self.minuteElement = minuteInput.getElementsByTagName("input")[0];
                self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
                self.hourElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.time_24hr ? defaults.hours : military2ampm(defaults.hours));
                self.minuteElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : defaults.minutes);
                self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
                self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
                self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
                self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
                self.hourElement.setAttribute("maxlength", "2");
                self.minuteElement.setAttribute("min", "0");
                self.minuteElement.setAttribute("max", "59");
                self.minuteElement.setAttribute("maxlength", "2");
                self.timeContainer.appendChild(hourInput);
                self.timeContainer.appendChild(separator);
                self.timeContainer.appendChild(minuteInput);
                if (self.config.time_24hr) self.timeContainer.classList.add("time24hr");
                if (self.config.enableSeconds) {
                    self.timeContainer.classList.add("hasSeconds");
                    var secondInput = createNumberInput("flatpickr-second");
                    self.secondElement = secondInput.getElementsByTagName("input")[0];
                    self.secondElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getSeconds() : defaults.seconds);
                    self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
                    self.secondElement.setAttribute("min", "0");
                    self.secondElement.setAttribute("max", "59");
                    self.secondElement.setAttribute("maxlength", "2");
                    self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
                    self.timeContainer.appendChild(secondInput);
                }
                if (!self.config.time_24hr) {
                    self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[utils_int((self.latestSelectedDateObj ? self.hourElement.value : self.config.defaultHour) > 11)]);
                    self.amPM.title = self.l10n.toggleTitle;
                    self.amPM.tabIndex = -1;
                    self.timeContainer.appendChild(self.amPM);
                }
                return self.timeContainer;
            }
            function buildWeekdays() {
                if (!self.weekdayContainer) self.weekdayContainer = createElement("div", "flatpickr-weekdays"); else clearNode(self.weekdayContainer);
                for (var i = self.config.showMonths; i--; ) {
                    var container = createElement("div", "flatpickr-weekdaycontainer");
                    self.weekdayContainer.appendChild(container);
                }
                updateWeekdays();
                return self.weekdayContainer;
            }
            function updateWeekdays() {
                if (!self.weekdayContainer) return;
                var firstDayOfWeek = self.l10n.firstDayOfWeek;
                var weekdays = __spreadArrays(self.l10n.weekdays.shorthand);
                if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) weekdays = __spreadArrays(weekdays.splice(firstDayOfWeek, weekdays.length), weekdays.splice(0, firstDayOfWeek));
                for (var i = self.config.showMonths; i--; ) self.weekdayContainer.children[i].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
            }
            function buildWeeks() {
                self.calendarContainer.classList.add("hasWeeks");
                var weekWrapper = createElement("div", "flatpickr-weekwrapper");
                weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
                var weekNumbers = createElement("div", "flatpickr-weeks");
                weekWrapper.appendChild(weekNumbers);
                return {
                    weekWrapper,
                    weekNumbers
                };
            }
            function changeMonth(value, isOffset) {
                if (isOffset === void 0) isOffset = true;
                var delta = isOffset ? value : value - self.currentMonth;
                if (delta < 0 && self._hidePrevMonthArrow === true || delta > 0 && self._hideNextMonthArrow === true) return;
                self.currentMonth += delta;
                if (self.currentMonth < 0 || self.currentMonth > 11) {
                    self.currentYear += self.currentMonth > 11 ? 1 : -1;
                    self.currentMonth = (self.currentMonth + 12) % 12;
                    triggerEvent("onYearChange");
                    buildMonthSwitch();
                }
                buildDays();
                triggerEvent("onMonthChange");
                updateNavigationCurrentMonth();
            }
            function clear(triggerChangeEvent, toInitial) {
                if (triggerChangeEvent === void 0) triggerChangeEvent = true;
                if (toInitial === void 0) toInitial = true;
                self.input.value = "";
                if (self.altInput !== void 0) self.altInput.value = "";
                if (self.mobileInput !== void 0) self.mobileInput.value = "";
                self.selectedDates = [];
                self.latestSelectedDateObj = void 0;
                if (toInitial === true) {
                    self.currentYear = self._initialDate.getFullYear();
                    self.currentMonth = self._initialDate.getMonth();
                }
                if (self.config.enableTime === true) {
                    var _a = getDefaultHours(self.config), hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds;
                    setHours(hours, minutes, seconds);
                }
                self.redraw();
                if (triggerChangeEvent) triggerEvent("onChange");
            }
            function close() {
                self.isOpen = false;
                if (!self.isMobile) {
                    if (self.calendarContainer !== void 0) self.calendarContainer.classList.remove("open");
                    if (self._input !== void 0) self._input.classList.remove("active");
                }
                triggerEvent("onClose");
            }
            function destroy() {
                if (self.config !== void 0) triggerEvent("onDestroy");
                for (var i = self._handlers.length; i--; ) self._handlers[i].remove();
                self._handlers = [];
                if (self.mobileInput) {
                    if (self.mobileInput.parentNode) self.mobileInput.parentNode.removeChild(self.mobileInput);
                    self.mobileInput = void 0;
                } else if (self.calendarContainer && self.calendarContainer.parentNode) if (self.config.static && self.calendarContainer.parentNode) {
                    var wrapper = self.calendarContainer.parentNode;
                    wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
                    if (wrapper.parentNode) {
                        while (wrapper.firstChild) wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
                        wrapper.parentNode.removeChild(wrapper);
                    }
                } else self.calendarContainer.parentNode.removeChild(self.calendarContainer);
                if (self.altInput) {
                    self.input.type = "text";
                    if (self.altInput.parentNode) self.altInput.parentNode.removeChild(self.altInput);
                    delete self.altInput;
                }
                if (self.input) {
                    self.input.type = self.input._type;
                    self.input.classList.remove("flatpickr-input");
                    self.input.removeAttribute("readonly");
                }
                [ "_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "monthsDropdownContainer", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config" ].forEach((function(k) {
                    try {
                        delete self[k];
                    } catch (_) {}
                }));
            }
            function isCalendarElem(elem) {
                return self.calendarContainer.contains(elem);
            }
            function documentClick(e) {
                if (self.isOpen && !self.config.inline) {
                    var eventTarget_1 = getEventTarget(e);
                    var isCalendarElement = isCalendarElem(eventTarget_1);
                    var isInput = eventTarget_1 === self.input || eventTarget_1 === self.altInput || self.element.contains(eventTarget_1) || e.path && e.path.indexOf && (~e.path.indexOf(self.input) || ~e.path.indexOf(self.altInput));
                    var lostFocus = !isInput && !isCalendarElement && !isCalendarElem(e.relatedTarget);
                    var isIgnored = !self.config.ignoredFocusElements.some((function(elem) {
                        return elem.contains(eventTarget_1);
                    }));
                    if (lostFocus && isIgnored) {
                        if (self.config.allowInput) self.setDate(self._input.value, false, self.config.altInput ? self.config.altFormat : self.config.dateFormat);
                        if (self.timeContainer !== void 0 && self.minuteElement !== void 0 && self.hourElement !== void 0 && self.input.value !== "" && self.input.value !== void 0) updateTime();
                        self.close();
                        if (self.config && self.config.mode === "range" && self.selectedDates.length === 1) self.clear(false);
                    }
                }
            }
            function changeYear(newYear) {
                if (!newYear || self.config.minDate && newYear < self.config.minDate.getFullYear() || self.config.maxDate && newYear > self.config.maxDate.getFullYear()) return;
                var newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;
                self.currentYear = newYearNum || self.currentYear;
                if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth); else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
                if (isNewYear) {
                    self.redraw();
                    triggerEvent("onYearChange");
                    buildMonthSwitch();
                }
            }
            function isEnabled(date, timeless) {
                var _a;
                if (timeless === void 0) timeless = true;
                var dateToCheck = self.parseDate(date, void 0, timeless);
                if (self.config.minDate && dateToCheck && compareDates(dateToCheck, self.config.minDate, timeless !== void 0 ? timeless : !self.minDateHasTime) < 0 || self.config.maxDate && dateToCheck && compareDates(dateToCheck, self.config.maxDate, timeless !== void 0 ? timeless : !self.maxDateHasTime) > 0) return false;
                if (!self.config.enable && self.config.disable.length === 0) return true;
                if (dateToCheck === void 0) return false;
                var bool = !!self.config.enable, array = (_a = self.config.enable) !== null && _a !== void 0 ? _a : self.config.disable;
                for (var i = 0, d = void 0; i < array.length; i++) {
                    d = array[i];
                    if (typeof d === "function" && d(dateToCheck)) return bool; else if (d instanceof Date && dateToCheck !== void 0 && d.getTime() === dateToCheck.getTime()) return bool; else if (typeof d === "string") {
                        var parsed = self.parseDate(d, void 0, true);
                        return parsed && parsed.getTime() === dateToCheck.getTime() ? bool : !bool;
                    } else if (typeof d === "object" && dateToCheck !== void 0 && d.from && d.to && dateToCheck.getTime() >= d.from.getTime() && dateToCheck.getTime() <= d.to.getTime()) return bool;
                }
                return !bool;
            }
            function isInView(elem) {
                if (self.daysContainer !== void 0) return elem.className.indexOf("hidden") === -1 && elem.className.indexOf("flatpickr-disabled") === -1 && self.daysContainer.contains(elem);
                return false;
            }
            function onBlur(e) {
                var isInput = e.target === self._input;
                var valueChanged = self._input.value.trimEnd() !== getDateStr();
                if (isInput && valueChanged && !(e.relatedTarget && isCalendarElem(e.relatedTarget))) self.setDate(self._input.value, true, e.target === self.altInput ? self.config.altFormat : self.config.dateFormat);
            }
            function onKeyDown(e) {
                var eventTarget = getEventTarget(e);
                var isInput = self.config.wrap ? element.contains(eventTarget) : eventTarget === self._input;
                var allowInput = self.config.allowInput;
                var allowKeydown = self.isOpen && (!allowInput || !isInput);
                var allowInlineKeydown = self.config.inline && isInput && !allowInput;
                if (e.keyCode === 13 && isInput) if (allowInput) {
                    self.setDate(self._input.value, true, eventTarget === self.altInput ? self.config.altFormat : self.config.dateFormat);
                    self.close();
                    return eventTarget.blur();
                } else self.open(); else if (isCalendarElem(eventTarget) || allowKeydown || allowInlineKeydown) {
                    var isTimeObj = !!self.timeContainer && self.timeContainer.contains(eventTarget);
                    switch (e.keyCode) {
                      case 13:
                        if (isTimeObj) {
                            e.preventDefault();
                            updateTime();
                            focusAndClose();
                        } else selectDate(e);
                        break;

                      case 27:
                        e.preventDefault();
                        focusAndClose();
                        break;

                      case 8:
                      case 46:
                        if (isInput && !self.config.allowInput) {
                            e.preventDefault();
                            self.clear();
                        }
                        break;

                      case 37:
                      case 39:
                        if (!isTimeObj && !isInput) {
                            e.preventDefault();
                            var activeElement = getClosestActiveElement();
                            if (self.daysContainer !== void 0 && (allowInput === false || activeElement && isInView(activeElement))) {
                                var delta_1 = e.keyCode === 39 ? 1 : -1;
                                if (!e.ctrlKey) focusOnDay(void 0, delta_1); else {
                                    e.stopPropagation();
                                    changeMonth(delta_1);
                                    focusOnDay(getFirstAvailableDay(1), 0);
                                }
                            }
                        } else if (self.hourElement) self.hourElement.focus();
                        break;

                      case 38:
                      case 40:
                        e.preventDefault();
                        var delta = e.keyCode === 40 ? 1 : -1;
                        if (self.daysContainer && eventTarget.$i !== void 0 || eventTarget === self.input || eventTarget === self.altInput) {
                            if (e.ctrlKey) {
                                e.stopPropagation();
                                changeYear(self.currentYear - delta);
                                focusOnDay(getFirstAvailableDay(1), 0);
                            } else if (!isTimeObj) focusOnDay(void 0, delta * 7);
                        } else if (eventTarget === self.currentYearElement) changeYear(self.currentYear - delta); else if (self.config.enableTime) {
                            if (!isTimeObj && self.hourElement) self.hourElement.focus();
                            updateTime(e);
                            self._debouncedChange();
                        }
                        break;

                      case 9:
                        if (isTimeObj) {
                            var elems = [ self.hourElement, self.minuteElement, self.secondElement, self.amPM ].concat(self.pluginElements).filter((function(x) {
                                return x;
                            }));
                            var i = elems.indexOf(eventTarget);
                            if (i !== -1) {
                                var target = elems[i + (e.shiftKey ? -1 : 1)];
                                e.preventDefault();
                                (target || self._input).focus();
                            }
                        } else if (!self.config.noCalendar && self.daysContainer && self.daysContainer.contains(eventTarget) && e.shiftKey) {
                            e.preventDefault();
                            self._input.focus();
                        }
                        break;

                      default:
                        break;
                    }
                }
                if (self.amPM !== void 0 && eventTarget === self.amPM) switch (e.key) {
                  case self.l10n.amPM[0].charAt(0):
                  case self.l10n.amPM[0].charAt(0).toLowerCase():
                    self.amPM.textContent = self.l10n.amPM[0];
                    setHoursFromInputs();
                    updateValue();
                    break;

                  case self.l10n.amPM[1].charAt(0):
                  case self.l10n.amPM[1].charAt(0).toLowerCase():
                    self.amPM.textContent = self.l10n.amPM[1];
                    setHoursFromInputs();
                    updateValue();
                    break;
                }
                if (isInput || isCalendarElem(eventTarget)) triggerEvent("onKeyDown", e);
            }
            function onMouseOver(elem, cellClass) {
                if (cellClass === void 0) cellClass = "flatpickr-day";
                if (self.selectedDates.length !== 1 || elem && (!elem.classList.contains(cellClass) || elem.classList.contains("flatpickr-disabled"))) return;
                var hoverDate = elem ? elem.dateObj.getTime() : self.days.firstElementChild.dateObj.getTime(), initialDate = self.parseDate(self.selectedDates[0], void 0, true).getTime(), rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
                var containsDisabled = false;
                var minRange = 0, maxRange = 0;
                for (var t = rangeStartDate; t < rangeEndDate; t += duration.DAY) if (!isEnabled(new Date(t), true)) {
                    containsDisabled = containsDisabled || t > rangeStartDate && t < rangeEndDate;
                    if (t < initialDate && (!minRange || t > minRange)) minRange = t; else if (t > initialDate && (!maxRange || t < maxRange)) maxRange = t;
                }
                var hoverableCells = Array.from(self.rContainer.querySelectorAll("*:nth-child(-n+" + self.config.showMonths + ") > ." + cellClass));
                hoverableCells.forEach((function(dayElem) {
                    var date = dayElem.dateObj;
                    var timestamp = date.getTime();
                    var outOfRange = minRange > 0 && timestamp < minRange || maxRange > 0 && timestamp > maxRange;
                    if (outOfRange) {
                        dayElem.classList.add("notAllowed");
                        [ "inRange", "startRange", "endRange" ].forEach((function(c) {
                            dayElem.classList.remove(c);
                        }));
                        return;
                    } else if (containsDisabled && !outOfRange) return;
                    [ "startRange", "inRange", "endRange", "notAllowed" ].forEach((function(c) {
                        dayElem.classList.remove(c);
                    }));
                    if (elem !== void 0) {
                        elem.classList.add(hoverDate <= self.selectedDates[0].getTime() ? "startRange" : "endRange");
                        if (initialDate < hoverDate && timestamp === initialDate) dayElem.classList.add("startRange"); else if (initialDate > hoverDate && timestamp === initialDate) dayElem.classList.add("endRange");
                        if (timestamp >= minRange && (maxRange === 0 || timestamp <= maxRange) && isBetween(timestamp, initialDate, hoverDate)) dayElem.classList.add("inRange");
                    }
                }));
            }
            function onResize() {
                if (self.isOpen && !self.config.static && !self.config.inline) positionCalendar();
            }
            function open(e, positionElement) {
                if (positionElement === void 0) positionElement = self._positionElement;
                if (self.isMobile === true) {
                    if (e) {
                        e.preventDefault();
                        var eventTarget = getEventTarget(e);
                        if (eventTarget) eventTarget.blur();
                    }
                    if (self.mobileInput !== void 0) {
                        self.mobileInput.focus();
                        self.mobileInput.click();
                    }
                    triggerEvent("onOpen");
                    return;
                } else if (self._input.disabled || self.config.inline) return;
                var wasOpen = self.isOpen;
                self.isOpen = true;
                if (!wasOpen) {
                    self.calendarContainer.classList.add("open");
                    self._input.classList.add("active");
                    triggerEvent("onOpen");
                    positionCalendar(positionElement);
                }
                if (self.config.enableTime === true && self.config.noCalendar === true) if (self.config.allowInput === false && (e === void 0 || !self.timeContainer.contains(e.relatedTarget))) setTimeout((function() {
                    return self.hourElement.select();
                }), 50);
            }
            function minMaxDateSetter(type) {
                return function(date) {
                    var dateObj = self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat);
                    var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
                    if (dateObj !== void 0) self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] = dateObj.getHours() > 0 || dateObj.getMinutes() > 0 || dateObj.getSeconds() > 0;
                    if (self.selectedDates) {
                        self.selectedDates = self.selectedDates.filter((function(d) {
                            return isEnabled(d);
                        }));
                        if (!self.selectedDates.length && type === "min") setHoursFromDate(dateObj);
                        updateValue();
                    }
                    if (self.daysContainer) {
                        redraw();
                        if (dateObj !== void 0) self.currentYearElement[type] = dateObj.getFullYear().toString(); else self.currentYearElement.removeAttribute(type);
                        self.currentYearElement.disabled = !!inverseDateObj && dateObj !== void 0 && inverseDateObj.getFullYear() === dateObj.getFullYear();
                    }
                };
            }
            function parseConfig() {
                var boolOpts = [ "wrap", "weekNumbers", "allowInput", "allowInvalidPreload", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile" ];
                var userConfig = __assign(__assign({}, JSON.parse(JSON.stringify(element.dataset || {}))), instanceConfig);
                var formats = {};
                self.config.parseDate = userConfig.parseDate;
                self.config.formatDate = userConfig.formatDate;
                Object.defineProperty(self.config, "enable", {
                    get: function() {
                        return self.config._enable;
                    },
                    set: function(dates) {
                        self.config._enable = parseDateRules(dates);
                    }
                });
                Object.defineProperty(self.config, "disable", {
                    get: function() {
                        return self.config._disable;
                    },
                    set: function(dates) {
                        self.config._disable = parseDateRules(dates);
                    }
                });
                var timeMode = userConfig.mode === "time";
                if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
                    var defaultDateFormat = flatpickr.defaultConfig.dateFormat || defaults.dateFormat;
                    formats.dateFormat = userConfig.noCalendar || timeMode ? "H:i" + (userConfig.enableSeconds ? ":S" : "") : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
                }
                if (userConfig.altInput && (userConfig.enableTime || timeMode) && !userConfig.altFormat) {
                    var defaultAltFormat = flatpickr.defaultConfig.altFormat || defaults.altFormat;
                    formats.altFormat = userConfig.noCalendar || timeMode ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K") : defaultAltFormat + " h:i" + (userConfig.enableSeconds ? ":S" : "") + " K";
                }
                Object.defineProperty(self.config, "minDate", {
                    get: function() {
                        return self.config._minDate;
                    },
                    set: minMaxDateSetter("min")
                });
                Object.defineProperty(self.config, "maxDate", {
                    get: function() {
                        return self.config._maxDate;
                    },
                    set: minMaxDateSetter("max")
                });
                var minMaxTimeSetter = function(type) {
                    return function(val) {
                        self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
                    };
                };
                Object.defineProperty(self.config, "minTime", {
                    get: function() {
                        return self.config._minTime;
                    },
                    set: minMaxTimeSetter("min")
                });
                Object.defineProperty(self.config, "maxTime", {
                    get: function() {
                        return self.config._maxTime;
                    },
                    set: minMaxTimeSetter("max")
                });
                if (userConfig.mode === "time") {
                    self.config.noCalendar = true;
                    self.config.enableTime = true;
                }
                Object.assign(self.config, formats, userConfig);
                for (var i = 0; i < boolOpts.length; i++) self.config[boolOpts[i]] = self.config[boolOpts[i]] === true || self.config[boolOpts[i]] === "true";
                HOOKS.filter((function(hook) {
                    return self.config[hook] !== void 0;
                })).forEach((function(hook) {
                    self.config[hook] = arrayify(self.config[hook] || []).map(bindToInstance);
                }));
                self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                for (i = 0; i < self.config.plugins.length; i++) {
                    var pluginConf = self.config.plugins[i](self) || {};
                    for (var key in pluginConf) if (HOOKS.indexOf(key) > -1) self.config[key] = arrayify(pluginConf[key]).map(bindToInstance).concat(self.config[key]); else if (typeof userConfig[key] === "undefined") self.config[key] = pluginConf[key];
                }
                if (!userConfig.altInputClass) self.config.altInputClass = getInputElem().className + " " + self.config.altInputClass;
                triggerEvent("onParseConfig");
            }
            function getInputElem() {
                return self.config.wrap ? element.querySelector("[data-input]") : element;
            }
            function setupLocale() {
                if (typeof self.config.locale !== "object" && typeof flatpickr.l10ns[self.config.locale] === "undefined") self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
                self.l10n = __assign(__assign({}, flatpickr.l10ns.default), typeof self.config.locale === "object" ? self.config.locale : self.config.locale !== "default" ? flatpickr.l10ns[self.config.locale] : void 0);
                tokenRegex.D = "(" + self.l10n.weekdays.shorthand.join("|") + ")";
                tokenRegex.l = "(" + self.l10n.weekdays.longhand.join("|") + ")";
                tokenRegex.M = "(" + self.l10n.months.shorthand.join("|") + ")";
                tokenRegex.F = "(" + self.l10n.months.longhand.join("|") + ")";
                tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";
                var userConfig = __assign(__assign({}, instanceConfig), JSON.parse(JSON.stringify(element.dataset || {})));
                if (userConfig.time_24hr === void 0 && flatpickr.defaultConfig.time_24hr === void 0) self.config.time_24hr = self.l10n.time_24hr;
                self.formatDate = createDateFormatter(self);
                self.parseDate = createDateParser({
                    config: self.config,
                    l10n: self.l10n
                });
            }
            function positionCalendar(customPositionElement) {
                if (typeof self.config.position === "function") return void self.config.position(self, customPositionElement);
                if (self.calendarContainer === void 0) return;
                triggerEvent("onPreCalendarPosition");
                var positionElement = customPositionElement || self._positionElement;
                var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, (function(acc, child) {
                    return acc + child.offsetHeight;
                }), 0), calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position.split(" "), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPosVertical === "above" || configPosVertical !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;
                var top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
                toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
                toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
                if (self.config.inline) return;
                var left = window.pageXOffset + inputBounds.left;
                var isCenter = false;
                var isRight = false;
                if (configPosHorizontal === "center") {
                    left -= (calendarWidth - inputBounds.width) / 2;
                    isCenter = true;
                } else if (configPosHorizontal === "right") {
                    left -= calendarWidth - inputBounds.width;
                    isRight = true;
                }
                toggleClass(self.calendarContainer, "arrowLeft", !isCenter && !isRight);
                toggleClass(self.calendarContainer, "arrowCenter", isCenter);
                toggleClass(self.calendarContainer, "arrowRight", isRight);
                var right = window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right);
                var rightMost = left + calendarWidth > window.document.body.offsetWidth;
                var centerMost = right + calendarWidth > window.document.body.offsetWidth;
                toggleClass(self.calendarContainer, "rightMost", rightMost);
                if (self.config.static) return;
                self.calendarContainer.style.top = top + "px";
                if (!rightMost) {
                    self.calendarContainer.style.left = left + "px";
                    self.calendarContainer.style.right = "auto";
                } else if (!centerMost) {
                    self.calendarContainer.style.left = "auto";
                    self.calendarContainer.style.right = right + "px";
                } else {
                    var doc = getDocumentStyleSheet();
                    if (doc === void 0) return;
                    var bodyWidth = window.document.body.offsetWidth;
                    var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
                    var centerBefore = ".flatpickr-calendar.centerMost:before";
                    var centerAfter = ".flatpickr-calendar.centerMost:after";
                    var centerIndex = doc.cssRules.length;
                    var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
                    toggleClass(self.calendarContainer, "rightMost", false);
                    toggleClass(self.calendarContainer, "centerMost", true);
                    doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
                    self.calendarContainer.style.left = centerLeft + "px";
                    self.calendarContainer.style.right = "auto";
                }
            }
            function getDocumentStyleSheet() {
                var editableSheet = null;
                for (var i = 0; i < document.styleSheets.length; i++) {
                    var sheet = document.styleSheets[i];
                    if (!sheet.cssRules) continue;
                    try {
                        sheet.cssRules;
                    } catch (err) {
                        continue;
                    }
                    editableSheet = sheet;
                    break;
                }
                return editableSheet != null ? editableSheet : createStyleSheet();
            }
            function createStyleSheet() {
                var style = document.createElement("style");
                document.head.appendChild(style);
                return style.sheet;
            }
            function redraw() {
                if (self.config.noCalendar || self.isMobile) return;
                buildMonthSwitch();
                updateNavigationCurrentMonth();
                buildDays();
            }
            function focusAndClose() {
                self._input.focus();
                if (window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== void 0) setTimeout(self.close, 0); else self.close();
            }
            function selectDate(e) {
                e.preventDefault();
                e.stopPropagation();
                var isSelectable = function(day) {
                    return day.classList && day.classList.contains("flatpickr-day") && !day.classList.contains("flatpickr-disabled") && !day.classList.contains("notAllowed");
                };
                var t = findParent(getEventTarget(e), isSelectable);
                if (t === void 0) return;
                var target = t;
                var selectedDate = self.latestSelectedDateObj = new Date(target.dateObj.getTime());
                var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth || selectedDate.getMonth() > self.currentMonth + self.config.showMonths - 1) && self.config.mode !== "range";
                self.selectedDateElem = target;
                if (self.config.mode === "single") self.selectedDates = [ selectedDate ]; else if (self.config.mode === "multiple") {
                    var selectedIndex = isDateSelected(selectedDate);
                    if (selectedIndex) self.selectedDates.splice(parseInt(selectedIndex), 1); else self.selectedDates.push(selectedDate);
                } else if (self.config.mode === "range") {
                    if (self.selectedDates.length === 2) self.clear(false, false);
                    self.latestSelectedDateObj = selectedDate;
                    self.selectedDates.push(selectedDate);
                    if (compareDates(selectedDate, self.selectedDates[0], true) !== 0) self.selectedDates.sort((function(a, b) {
                        return a.getTime() - b.getTime();
                    }));
                }
                setHoursFromInputs();
                if (shouldChangeMonth) {
                    var isNewYear = self.currentYear !== selectedDate.getFullYear();
                    self.currentYear = selectedDate.getFullYear();
                    self.currentMonth = selectedDate.getMonth();
                    if (isNewYear) {
                        triggerEvent("onYearChange");
                        buildMonthSwitch();
                    }
                    triggerEvent("onMonthChange");
                }
                updateNavigationCurrentMonth();
                buildDays();
                updateValue();
                if (!shouldChangeMonth && self.config.mode !== "range" && self.config.showMonths === 1) focusOnDayElem(target); else if (self.selectedDateElem !== void 0 && self.hourElement === void 0) self.selectedDateElem && self.selectedDateElem.focus();
                if (self.hourElement !== void 0) self.hourElement !== void 0 && self.hourElement.focus();
                if (self.config.closeOnSelect) {
                    var single = self.config.mode === "single" && !self.config.enableTime;
                    var range = self.config.mode === "range" && self.selectedDates.length === 2 && !self.config.enableTime;
                    if (single || range) focusAndClose();
                }
                triggerChange();
            }
            var CALLBACKS = {
                locale: [ setupLocale, updateWeekdays ],
                showMonths: [ buildMonths, setCalendarWidth, buildWeekdays ],
                minDate: [ jumpToDate ],
                maxDate: [ jumpToDate ],
                positionElement: [ updatePositionElement ],
                clickOpens: [ function() {
                    if (self.config.clickOpens === true) {
                        bind(self._input, "focus", self.open);
                        bind(self._input, "click", self.open);
                    } else {
                        self._input.removeEventListener("focus", self.open);
                        self._input.removeEventListener("click", self.open);
                    }
                } ]
            };
            function set(option, value) {
                if (option !== null && typeof option === "object") {
                    Object.assign(self.config, option);
                    for (var key in option) if (CALLBACKS[key] !== void 0) CALLBACKS[key].forEach((function(x) {
                        return x();
                    }));
                } else {
                    self.config[option] = value;
                    if (CALLBACKS[option] !== void 0) CALLBACKS[option].forEach((function(x) {
                        return x();
                    })); else if (HOOKS.indexOf(option) > -1) self.config[option] = arrayify(value);
                }
                self.redraw();
                updateValue(true);
            }
            function setSelectedDate(inputDate, format) {
                var dates = [];
                if (inputDate instanceof Array) dates = inputDate.map((function(d) {
                    return self.parseDate(d, format);
                })); else if (inputDate instanceof Date || typeof inputDate === "number") dates = [ self.parseDate(inputDate, format) ]; else if (typeof inputDate === "string") switch (self.config.mode) {
                  case "single":
                  case "time":
                    dates = [ self.parseDate(inputDate, format) ];
                    break;

                  case "multiple":
                    dates = inputDate.split(self.config.conjunction).map((function(date) {
                        return self.parseDate(date, format);
                    }));
                    break;

                  case "range":
                    dates = inputDate.split(self.l10n.rangeSeparator).map((function(date) {
                        return self.parseDate(date, format);
                    }));
                    break;

                  default:
                    break;
                } else self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
                self.selectedDates = self.config.allowInvalidPreload ? dates : dates.filter((function(d) {
                    return d instanceof Date && isEnabled(d, false);
                }));
                if (self.config.mode === "range") self.selectedDates.sort((function(a, b) {
                    return a.getTime() - b.getTime();
                }));
            }
            function setDate(date, triggerChange, format) {
                if (triggerChange === void 0) triggerChange = false;
                if (format === void 0) format = self.config.dateFormat;
                if (date !== 0 && !date || date instanceof Array && date.length === 0) return self.clear(triggerChange);
                setSelectedDate(date, format);
                self.latestSelectedDateObj = self.selectedDates[self.selectedDates.length - 1];
                self.redraw();
                jumpToDate(void 0, triggerChange);
                setHoursFromDate();
                if (self.selectedDates.length === 0) self.clear(false);
                updateValue(triggerChange);
                if (triggerChange) triggerEvent("onChange");
            }
            function parseDateRules(arr) {
                return arr.slice().map((function(rule) {
                    if (typeof rule === "string" || typeof rule === "number" || rule instanceof Date) return self.parseDate(rule, void 0, true); else if (rule && typeof rule === "object" && rule.from && rule.to) return {
                        from: self.parseDate(rule.from, void 0),
                        to: self.parseDate(rule.to, void 0)
                    };
                    return rule;
                })).filter((function(x) {
                    return x;
                }));
            }
            function setupDates() {
                self.selectedDates = [];
                self.now = self.parseDate(self.config.now) || new Date;
                var preloadedDate = self.config.defaultDate || ((self.input.nodeName === "INPUT" || self.input.nodeName === "TEXTAREA") && self.input.placeholder && self.input.value === self.input.placeholder ? null : self.input.value);
                if (preloadedDate) setSelectedDate(preloadedDate, self.config.dateFormat);
                self._initialDate = self.selectedDates.length > 0 ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now.getTime() ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now.getTime() ? self.config.maxDate : self.now;
                self.currentYear = self._initialDate.getFullYear();
                self.currentMonth = self._initialDate.getMonth();
                if (self.selectedDates.length > 0) self.latestSelectedDateObj = self.selectedDates[0];
                if (self.config.minTime !== void 0) self.config.minTime = self.parseDate(self.config.minTime, "H:i");
                if (self.config.maxTime !== void 0) self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
                self.minDateHasTime = !!self.config.minDate && (self.config.minDate.getHours() > 0 || self.config.minDate.getMinutes() > 0 || self.config.minDate.getSeconds() > 0);
                self.maxDateHasTime = !!self.config.maxDate && (self.config.maxDate.getHours() > 0 || self.config.maxDate.getMinutes() > 0 || self.config.maxDate.getSeconds() > 0);
            }
            function setupInputs() {
                self.input = getInputElem();
                if (!self.input) {
                    self.config.errorHandler(new Error("Invalid input element specified"));
                    return;
                }
                self.input._type = self.input.type;
                self.input.type = "text";
                self.input.classList.add("flatpickr-input");
                self._input = self.input;
                if (self.config.altInput) {
                    self.altInput = createElement(self.input.nodeName, self.config.altInputClass);
                    self._input = self.altInput;
                    self.altInput.placeholder = self.input.placeholder;
                    self.altInput.disabled = self.input.disabled;
                    self.altInput.required = self.input.required;
                    self.altInput.tabIndex = self.input.tabIndex;
                    self.altInput.type = "text";
                    self.input.setAttribute("type", "hidden");
                    if (!self.config.static && self.input.parentNode) self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
                }
                if (!self.config.allowInput) self._input.setAttribute("readonly", "readonly");
                updatePositionElement();
            }
            function updatePositionElement() {
                self._positionElement = self.config.positionElement || self._input;
            }
            function setupMobile() {
                var inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";
                self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
                self.mobileInput.tabIndex = 1;
                self.mobileInput.type = inputType;
                self.mobileInput.disabled = self.input.disabled;
                self.mobileInput.required = self.input.required;
                self.mobileInput.placeholder = self.input.placeholder;
                self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";
                if (self.selectedDates.length > 0) self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
                if (self.config.minDate) self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
                if (self.config.maxDate) self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
                if (self.input.getAttribute("step")) self.mobileInput.step = String(self.input.getAttribute("step"));
                self.input.type = "hidden";
                if (self.altInput !== void 0) self.altInput.type = "hidden";
                try {
                    if (self.input.parentNode) self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
                } catch (_a) {}
                bind(self.mobileInput, "change", (function(e) {
                    self.setDate(getEventTarget(e).value, false, self.mobileFormatStr);
                    triggerEvent("onChange");
                    triggerEvent("onClose");
                }));
            }
            function toggle(e) {
                if (self.isOpen === true) return self.close();
                self.open(e);
            }
            function triggerEvent(event, data) {
                if (self.config === void 0) return;
                var hooks = self.config[event];
                if (hooks !== void 0 && hooks.length > 0) for (var i = 0; hooks[i] && i < hooks.length; i++) hooks[i](self.selectedDates, self.input.value, self, data);
                if (event === "onChange") {
                    self.input.dispatchEvent(createEvent("change"));
                    self.input.dispatchEvent(createEvent("input"));
                }
            }
            function createEvent(name) {
                var e = document.createEvent("Event");
                e.initEvent(name, true, true);
                return e;
            }
            function isDateSelected(date) {
                for (var i = 0; i < self.selectedDates.length; i++) {
                    var selectedDate = self.selectedDates[i];
                    if (selectedDate instanceof Date && compareDates(selectedDate, date) === 0) return "" + i;
                }
                return false;
            }
            function isDateInRange(date) {
                if (self.config.mode !== "range" || self.selectedDates.length < 2) return false;
                return compareDates(date, self.selectedDates[0]) >= 0 && compareDates(date, self.selectedDates[1]) <= 0;
            }
            function updateNavigationCurrentMonth() {
                if (self.config.noCalendar || self.isMobile || !self.monthNav) return;
                self.yearElements.forEach((function(yearElement, i) {
                    var d = new Date(self.currentYear, self.currentMonth, 1);
                    d.setMonth(self.currentMonth + i);
                    if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") self.monthElements[i].textContent = monthToStr(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " "; else self.monthsDropdownContainer.value = d.getMonth().toString();
                    yearElement.value = d.getFullYear().toString();
                }));
                self._hidePrevMonthArrow = self.config.minDate !== void 0 && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());
                self._hideNextMonthArrow = self.config.maxDate !== void 0 && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
            }
            function getDateStr(specificFormat) {
                var format = specificFormat || (self.config.altInput ? self.config.altFormat : self.config.dateFormat);
                return self.selectedDates.map((function(dObj) {
                    return self.formatDate(dObj, format);
                })).filter((function(d, i, arr) {
                    return self.config.mode !== "range" || self.config.enableTime || arr.indexOf(d) === i;
                })).join(self.config.mode !== "range" ? self.config.conjunction : self.l10n.rangeSeparator);
            }
            function updateValue(triggerChange) {
                if (triggerChange === void 0) triggerChange = true;
                if (self.mobileInput !== void 0 && self.mobileFormatStr) self.mobileInput.value = self.latestSelectedDateObj !== void 0 ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr) : "";
                self.input.value = getDateStr(self.config.dateFormat);
                if (self.altInput !== void 0) self.altInput.value = getDateStr(self.config.altFormat);
                if (triggerChange !== false) triggerEvent("onValueUpdate");
            }
            function onMonthNavClick(e) {
                var eventTarget = getEventTarget(e);
                var isPrevMonth = self.prevMonthNav.contains(eventTarget);
                var isNextMonth = self.nextMonthNav.contains(eventTarget);
                if (isPrevMonth || isNextMonth) changeMonth(isPrevMonth ? -1 : 1); else if (self.yearElements.indexOf(eventTarget) >= 0) eventTarget.select(); else if (eventTarget.classList.contains("arrowUp")) self.changeYear(self.currentYear + 1); else if (eventTarget.classList.contains("arrowDown")) self.changeYear(self.currentYear - 1);
            }
            function timeWrapper(e) {
                e.preventDefault();
                var isKeyDown = e.type === "keydown", eventTarget = getEventTarget(e), input = eventTarget;
                if (self.amPM !== void 0 && eventTarget === self.amPM) self.amPM.textContent = self.l10n.amPM[utils_int(self.amPM.textContent === self.l10n.amPM[0])];
                var min = parseFloat(input.getAttribute("min")), max = parseFloat(input.getAttribute("max")), step = parseFloat(input.getAttribute("step")), curValue = parseInt(input.value, 10), delta = e.delta || (isKeyDown ? e.which === 38 ? 1 : -1 : 0);
                var newValue = curValue + step * delta;
                if (typeof input.value !== "undefined" && input.value.length === 2) {
                    var isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;
                    if (newValue < min) {
                        newValue = max + newValue + utils_int(!isHourElem) + (utils_int(isHourElem) && utils_int(!self.amPM));
                        if (isMinuteElem) incrementNumInput(void 0, -1, self.hourElement);
                    } else if (newValue > max) {
                        newValue = input === self.hourElement ? newValue - max - utils_int(!self.amPM) : min;
                        if (isMinuteElem) incrementNumInput(void 0, 1, self.hourElement);
                    }
                    if (self.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) self.amPM.textContent = self.l10n.amPM[utils_int(self.amPM.textContent === self.l10n.amPM[0])];
                    input.value = pad(newValue);
                }
            }
            init();
            return self;
        }
        function _flatpickr(nodeList, config) {
            var nodes = Array.prototype.slice.call(nodeList).filter((function(x) {
                return x instanceof HTMLElement;
            }));
            var instances = [];
            for (var i = 0; i < nodes.length; i++) {
                var node = nodes[i];
                try {
                    if (node.getAttribute("data-fp-omit") !== null) continue;
                    if (node._flatpickr !== void 0) {
                        node._flatpickr.destroy();
                        node._flatpickr = void 0;
                    }
                    node._flatpickr = FlatpickrInstance(node, config || {});
                    instances.push(node._flatpickr);
                } catch (e) {
                    console.error(e);
                }
            }
            return instances.length === 1 ? instances[0] : instances;
        }
        if (typeof HTMLElement !== "undefined" && typeof HTMLCollection !== "undefined" && typeof NodeList !== "undefined") {
            HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(config) {
                return _flatpickr(this, config);
            };
            HTMLElement.prototype.flatpickr = function(config) {
                return _flatpickr([ this ], config);
            };
        }
        var flatpickr = function(selector, config) {
            if (typeof selector === "string") return _flatpickr(window.document.querySelectorAll(selector), config); else if (selector instanceof Node) return _flatpickr([ selector ], config); else return _flatpickr(selector, config);
        };
        flatpickr.defaultConfig = {};
        flatpickr.l10ns = {
            en: __assign({}, l10n_default),
            default: __assign({}, l10n_default)
        };
        flatpickr.localize = function(l10n) {
            flatpickr.l10ns.default = __assign(__assign({}, flatpickr.l10ns.default), l10n);
        };
        flatpickr.setDefaults = function(config) {
            flatpickr.defaultConfig = __assign(__assign({}, flatpickr.defaultConfig), config);
        };
        flatpickr.parseDate = createDateParser({});
        flatpickr.formatDate = createDateFormatter({});
        flatpickr.compareDates = compareDates;
        if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") jQuery.fn.flatpickr = function(config) {
            return _flatpickr(this, config);
        };
        Date.prototype.fp_incr = function(days) {
            return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
        };
        if (typeof window !== "undefined") window.flatpickr = flatpickr;
        const esm = flatpickr;
        var monthSelect = __webpack_require__(592);
        if (document.querySelector(".choose-date__input")) esm(".choose-date__input", {
            altInput: true,
            altFormat: "F Y",
            plugins: [ new monthSelect({
                shorthand: false,
                dateFormat: "Y-m-d",
                altFormat: "M Y"
            }) ],
            disableMobile: "true"
        });
        var choices = __webpack_require__(529);
        window.addEventListener("load", (() => {
            if (document.querySelector(".select-custom")) {
                const selects = document.querySelectorAll(".select-custom select");
                const tabsWrapper = document.querySelectorAll("[data-balance-wrapper]");
                const observer = new MutationObserver(((mutationsList, observer) => {
                    for (let mutation of mutationsList) if (mutation.type === "attributes" && mutation.attributeName === "hidden") {
                        const targetElement = mutation.target;
                        const isHidden = targetElement.hasAttribute("hidden");
                        if (!isHidden) calculateActiveDeposit(targetElement);
                    }
                }));
                function setValue(valueHtml, value) {
                    valueHtml.querySelector("span") ? valueHtml.querySelector("span").innerHTML = value : valueHtml.innerHTML = value;
                }
                function setMinAmount(htmlBlock, amountInput, minAmount) {
                    setValue(htmlBlock, minAmount);
                    amountInput.value = minAmount;
                    amountInput.setAttribute("min", minAmount);
                }
                function calculateFormula(activeDeposit, amountInput, percent, days) {
                    let value = amountInput.value;
                    let formulaValue = (percent * value / 100).toFixed(2);
                    let output = `${formulaValue}$ after ${days} days`;
                    setValue(activeDeposit, output);
                }
                function calculateActiveDeposit(wrapper = document.querySelectorAll(".open-deposit__wrapper")[0], currentPercent, currentDays) {
                    const activeDeposit = wrapper.querySelector("[data-active-deposit]");
                    const amountInput = wrapper.querySelector("[data-amount-input]");
                    const selectedOption = wrapper.querySelector(".choices__input option");
                    const onFirstPercent = selectedOption.innerHTML.split(", ")[5];
                    const onFirstDays = selectedOption.innerHTML.split(", ")[6];
                    let percent = currentPercent || onFirstPercent;
                    let days = currentDays || onFirstDays;
                    calculateFormula(activeDeposit, amountInput, percent, days);
                    amountInput.addEventListener("input", (() => {
                        let value = parseFloat(amountInput.value);
                        let min = parseFloat(amountInput.getAttribute("min"));
                        if (value < min) {
                            value = min;
                            amountInput.value = value;
                        }
                        calculateFormula(activeDeposit, amountInput, percent, days);
                    }));
                }
                selects.forEach((select => {
                    const sel = new choices(select, {
                        searchEnabled: false,
                        allowHTML: true,
                        shouldSort: false,
                        callbackOnCreateTemplates: function(template) {
                            const getImgHTML = (src, label) => `\n                            <div class='custom-item__image'>\n                                <img src='${src}' alt='${label}' />\n                            </div>\n                            `;
                            const getOptionImgHTML = (src, label) => `\n                            <span class='custom-item__option-image'>\n                                <img src='${src}' alt='${label}' />\n                            </span>\n                            `;
                            const getOptionDescription = value => `\n                            <span class="custom-item__option-description">\n                                ${value}\n                            </span>\n                            `;
                            const getRemainder = value => `\n                            <span class="custom-item__option-remainder">\n                                ${value}$\n                            </span>\n                            `;
                            return {
                                item: ({classNames}, data) => {
                                    const splitValue = data.label.split(", ");
                                    const [label, value, src] = splitValue;
                                    return template(`\n                            <div class='custom-item'>\n                               ${src !== void 0 ? getImgHTML(src, label) : ""}\n                                <div class='custom-item__main'>\n                                    <div class='custom-item__content custom-item__content_${label}'>\n                                        <span class='custom-item__sub-title'>${value}</span>\n                                        <span class='custom-item__title'>${label}</span>\n                                    </div>\n                                    <div class='custom-item__arrow'>\n                                        <span>\n                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.35355 7.85355C6.15829 8.04882 5.84171 8.04882 5.64645 7.85355L2.64645 4.85355C2.45118 4.65829 2.45118 4.34171 2.64645 4.14645C2.84171 3.95118 3.15829 3.95118 3.35355 4.14645L6 6.79289L8.64645 4.14645C8.84171 3.95118 9.15829 3.95118 9.35355 4.14645C9.54882 4.34171 9.54882 4.65829 9.35355 4.85355L6.35355 7.85355Z" fill="white"/> </svg>\n                                        </span>\n                                    </div>\n                                </div>\n                            </div\n                    `);
                                },
                                choice: ({classNames}, data) => {
                                    const splitValue = data.label.split(", ");
                                    const [label, value, src, remainder] = splitValue;
                                    return template(`\n                              <div class="${classNames.item} ${classNames.itemChoice} ${data.disabled ? classNames.itemDisabled : classNames.itemSelectable}" data-choice ${data.disabled ? 'data-choice-disabled aria-disabled="true"' : "data-choice-selectable"} data-id="${data.id}" data-value="${value}" ${data.groupId > 0 ? 'role="treeitem"' : 'role="option"'}>\n\n                                    <span class='custom-item__option-wrapper'>\n                                        ${src !== void 0 ? getOptionImgHTML(src, label) : ""}\n                                        <span class='custom-item__option-info'>\n                                            <span class="custom-item__option-value">\n                                                ${label}\n                                            </span>\n                                            ${value !== void 0 ? getOptionDescription(value) : ""}\n                                        </span>\n                                    </span>\n                                    ${remainder ? getRemainder(remainder) : ""}\n                              </div>\n                            `);
                                }
                            };
                        }
                    });
                    const currentSelect = sel.passedElement.element;
                    const wrapper = currentSelect.closest("[data-balance-wrapper]");
                    sel.passedElement.element.addEventListener("choice", (e => {
                        const splitOptions = e.detail.choice.label.split(", ");
                        const balance = splitOptions[3];
                        const minAmount = splitOptions[4];
                        const percent = splitOptions[5];
                        const days = splitOptions[6];
                        if (balance) if (wrapper) {
                            const valueHtml = wrapper.querySelector("[data-balance]");
                            setValue(valueHtml, balance);
                        } else {
                            const valueHtml = document.querySelector("[data-balance]");
                            setValue(valueHtml, balance);
                        }
                        if (minAmount) if (wrapper) {
                            const amountInput = wrapper.querySelector("[data-amount-input]");
                            const amountHtml = wrapper.querySelector("[data-amount]");
                            setMinAmount(amountHtml, amountInput, minAmount);
                        } else {
                            const amountInput = wrapper.querySelector("[data-amount-input]");
                            const valueHtml = document.querySelector("[data-amount]");
                            setMinAmount(valueHtml, amountInput, minAmount);
                        }
                        if (percent) calculateActiveDeposit(wrapper, percent, days);
                    }));
                }));
                if (tabsWrapper.length > 1 && document.querySelector("[data-active-deposit]")) tabsWrapper.forEach((tab => {
                    observer.observe(tab, {
                        attributes: true
                    });
                }));
                if (document.querySelector("[data-active-deposit]")) calculateActiveDeposit();
            }
        }));
        window.addEventListener("load", (() => {
            if (document.querySelector(".common")) {
                const common = document.querySelector(".common");
                const burger = document.querySelector(".common__burger");
                burger.addEventListener("click", (() => {
                    common.classList.toggle("open");
                    burger.classList.toggle("_active");
                }));
            }
            if (document.querySelector(".menu__item-trigger")) {
                const menuTriggers = document.querySelectorAll(".menu__item-trigger");
                const clearTriggers = () => {
                    menuTriggers.forEach((trigger => trigger.classList.remove("open")));
                };
                menuTriggers.forEach((trigger => {
                    trigger.querySelector(".menu__link").addEventListener("click", (e => {
                        if (trigger.classList.contains("open")) {
                            trigger.classList.remove("open");
                            return;
                        }
                        clearTriggers();
                        trigger.classList.add("open");
                    }));
                }));
            }
            const burger = document.querySelector(".header__burger");
            const menu = document.querySelector(".menu");
            if (burger) burger.addEventListener("click", (() => {
                menu.classList.toggle("open");
                document.body.classList.toggle("lock");
                burger.classList.toggle("_active");
            }));
            const paths = document.querySelectorAll(".path-anim");
            if (paths) {
                function getScrollProgress(element) {
                    const rect = element.getBoundingClientRect();
                    const scrollTop = document.documentElement.scrollTop;
                    window.innerHeight;
                    const offset = 100;
                    const blockTop = rect.top + scrollTop - offset;
                    const blockHeight = rect.height;
                    const halfBlockHeight = blockHeight / 2;
                    if (scrollTop >= blockTop && scrollTop <= blockTop + halfBlockHeight) {
                        const scrollOffset = scrollTop - blockTop;
                        const scrollProgress = scrollOffset / halfBlockHeight;
                        return scrollProgress;
                    } else if (scrollTop < blockTop) return 0; else return 1;
                }
                function fillSvg() {
                    for (let i = 0; i < paths.length; i++) {
                        let path = paths[i];
                        let scrollPercentage = getScrollProgress(path);
                        const pathLength = path.getTotalLength();
                        path.style.strokeDasharray = pathLength;
                        path.style.strokeDashoffset = pathLength;
                        let drawLength = pathLength * scrollPercentage;
                        path.style.strokeDashoffset = pathLength - drawLength;
                    }
                }
                fillSvg();
                window.addEventListener("scroll", fillSvg);
            }
        }));
        pageNavigation();
        spollers();
        tabs();
        showMore();
        animOnScroll();
        formFieldsInit({
            viewPass: true,
            autoHeight: false
        });
    })();
})();