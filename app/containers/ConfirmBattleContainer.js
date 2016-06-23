var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function() {
		console.log('getInitialState');
		return {
			isLoading: false,
			playersInfo: []
		}
	},
	componentWillMount: function () {
		console.log('componentWillMount');
	},
	componentDidMount: function() {
		var query = this.props.location.query;
		console.log('componentDidMount');
		// Fetch info from github then update state
	},
	componentWillReceiveProps: function() {
		console.log('componentWillRecieveProps');
	},
	componentWillUnmount: function() {
		console.log('componentWillUnmount');
	},
 	render: function() {
		return (
			<ConfirmBattle 
				isLoading={this.state.isLoading}
				playersInfo={this.state.playersInfo} />
		);
	}
});

module.exports = ConfirmBattleContainer;