var React = require('react');
var Display = require('./Display');
var KeyPad = require('./KeyPad');
var calStore = require('../stores/calStore');
var calActions = require('../actions/calActions');

var CalculatorContainer = React.createClass({
	getInitialState: function(){
		return {
			display: calStore.getDisplay()
		};
		
	},
        
        componentDidMount: function(){
            calStore.addChangeListener(this._onChange);
        },
        
        componentWillUnmount: function(){
            calStore.removeChangeListener(this._onChange);
        },
        
        handleEnterDigit: function(digit){
            calActions.enterDigit(digit);
        },
        
        handleEnterOperation: function(operation){
            calActions.enterOperation(operation);
        },
        
        handleEnterEqual: function(){
            calActions.enterEqual();
        },
        
        handleClear: function(){
            calActions.enterClear();
        },
        
        _onChange: function(){
            this.setState({
                display: calStore.getDisplay()
            })
        },
	render: function(){
		return(
			<div>
				<h3>Calculator</h3>
				<Display display={this.state.display}/>
				<KeyPad enterNumKey={this.handleEnterDigit}
                                        enterOperation={this.handleEnterOperation}
                                        enterEqual={this.handleEnterEqual}
                                        enterClear={this.handleClear}
                                        />
			</div>
		)
	}
});

React.render(<CalculatorContainer/>, document.getElementById('calculator-app'));