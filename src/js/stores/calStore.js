var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

//an indicator for a change event occured in the store
var CHANGE_EVENT = 'change';

//the application store
var _store = {
    display: '', //display on the screen
    operation: '',
    operand1: '', //operand entered before operation was entered
    operand2: '', //operand entered after operation was entered
    isOperationEntered: false, //operation enterd flag
    answer: null
    
}

/**
 * function "enterDigit" appends the entered digit to "_store.operand1" if the 
 * user has not entered an operation, otherwise to "_store.operand2". Then it 
 * updates "_store.display" with the current operand
 * 
 * @param {type} digit
 * @returns {undefined}
 */
var enterDigit = function(digit){
    if(!_store.isOperationEntered){
        _store.operand1 =  _store.operand1 + digit;
        _store.display = _store.operand1;
    }else{
        _store.operand2 = _store.operand2 + digit;
        _store.display = _store.operand2;
    }
};

/**
 * function "enterOperation" stores the entered operation to "_store.operation"
 * and set "_store.isOperationEntered" (the operation entered flag) to be true
 * 
 * @param {type} operation
 * @returns {undefined}
 */
var enterOperation = function(operation){
    if(operation == '+'){
        _store.operation = operation;
        _store.isOperationEntered = true;
    }else if(operation == '-'){
        _store.operation = operation;
        _store.isOperationEntered = true;
    }else if(operation == '/'){
        _store.operation = operation;
        _store.isOperationEntered = true;
    }else if(operation == '*'){
        _store.operation = operation;
        _store.isOperationEntered = true;
    }
};

/**
 * function "enterEqual" evaluates the expression and stores the result to
 * "_store.answer" as well as updating "_store.display" with the result
 * 
 * @returns {undefined}
 */
var enterEqual = function(){
    if(_store.operation == '+'){
        _store.answer = parseInt(_store.operand1) + parseInt(_store.operand2);
        _store.display = _store.answer;
    }else if(_store.operation == '-'){
        _store.answer = parseInt(_store.operand1) - parseInt(_store.operand2);
        _store.display = _store.answer;
    }else if(_store.operation == '/'){
        _store.answer = parseInt(_store.operand1) / parseInt(_store.operand2);
        _store.display = _store.answer;
    }else if(_store.operation == '*'){
        _store.answer = parseInt(_store.operand1) * parseInt(_store.operand2);
        _store.display = _store.answer;
    }
};

/**
 * function to clear the entered data
 * 
 * @returns {undefined}
 */
var enterClear = function(){
    _store.operand1 = '';
    _store.operand2 = '';
    _store.operation = '';
    _store.isOperationEntered = false;
    _store.display = '';
};


var calStore = objectAssign({}, EventEmitter.prototype,{
    addChangeListener: function(onChange){
        this.on(CHANGE_EVENT, onChange);
    },
    removeChangeLisener: function(){
        this.removeListener(CHANGE_EVENT, onChange);
    },
    getDisplay: function(){
        return _store.display;
    }
});

/**
 * to register the catchers of events emitted
 * 
 * @param {type} param
 */
AppDispatcher.register(function(payload){
    var action = payload.action;
    switch(action.actionType){
        case appConstants.ENTER_DIGIT:
            enterDigit(action.data);
            calStore.emit(CHANGE_EVENT);
            break;
        case appConstants.ENTER_OPERATION:
            enterOperation(action.data);
            calStore.emit(CHANGE_EVENT);
            break;
        case appConstants.ENTER_EQUAL:
            enterEqual();
            calStore.emit(CHANGE_EVENT);
            break;
        case appConstants.ENTER_CLEAR:
            enterClear();
            calStore.emit(CHANGE_EVENT);
            break;
        default:
            return true;
    }
});

module.exports = calStore;

