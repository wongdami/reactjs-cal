var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');

var calActions = {
	enterDigit: function(digit){
		AppDispatcher.handleAction({
			actionType: appConstants.ENTER_DIGIT,
			data: digit,
		});			
	},
	enterOperation: function(operation){
		AppDispatcher.handleAction({
			actionType: appConstants.ENTER_OPERATION,
			data: operation,
		});
	},
	enterEqual: function(){
		AppDispatcher.handleAction({
			actionType: appConstants.ENTER_EQUAL,
                        data: ''
		});
	},
	enterClear: function(){
            AppDispatcher.handleAction({
                actionType: appConstants.ENTER_CLEAR,
                data: ''
            });
        }	
};

module.exports = calActions;