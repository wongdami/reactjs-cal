var React = require('react');

var Display = React.createClass({
	render: function(){
		return (
		    <div>
				<input type="text" value={this.props.display} readOnly/>
			</div>
		)
	}
});

module.exports = Display;