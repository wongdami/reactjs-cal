var React = require('react');
var appConstants = require('../constants/appConstants');

var KeyPad = React.createClass({
	handlePressNumKey: function(num){
            this.props.enterNumKey(num);
	},
        
        handlePressOperationKey: function(operation){
            this.props.enterOperation(operation);
        },
        
        handlePressEqualKey: function(){
            this.props.enterEqual();
        },
        
        handlePressClearKey: function(){
            this.props.enterClear();
        },
        
        
	render: function(){
                var numButtons = [];
                var operationButtons = [];
                
                var x;
                for(x = 0; x < 10; x++){
                    numButtons.push(<button onClick={this.handlePressNumKey.bind(this, x)}>{x}</button>);
                }
                
                var y;
                var operationsLength = appConstants.OPERATIONS.length;
                for (y = 0; y < operationsLength; y++){
                    var operation = appConstants.OPERATIONS[y];
                    operationButtons.push(<button onClick={this.handlePressOperationKey.bind(this, operation)}>{operation}</button>)
                }
                
            
		return (
			<div>
                            {numButtons}
                            {operationButtons}
                            <button onClick={this.handlePressEqualKey}>=</button>
                            <button onClick={this.handlePressClearKey}>C</button>
			</div>
		)
	}
});

module.exports = KeyPad;