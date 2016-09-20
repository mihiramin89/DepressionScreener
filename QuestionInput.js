import React from 'react';
import ReactDOM from 'react-dom';

class QuestionInput extends React.Component {

	constructor()
	{
	  super();
	  this.SetScore = this.SetScore.bind(this);
	}
	SetScore(event)
	{

		this.props.onChange(this.props.ID, +event.target.value);
	}
	render(){
		return (
			<div>
			<p><strong> {this.props.question}</strong></p>
			<input ref={this.props.ID} type="radio" onChange={this.SetScore} name={this.props.ID} value="0"/>Not at all 
			<input ref={this.props.ID} type="radio" onChange={this.SetScore} name={this.props.ID} value="1"/>Several days 
			<input ref={this.props.ID} type="radio" onChange={this.SetScore} name={this.props.ID} value="2"/>More than half the days 
			<input ref={this.props.ID} type="radio" onChange={this.SetScore} name={this.props.ID} value="3"/>Nearly every day 
			</div>
			);
	}
}

QuestionInput.propTypes = {
	question: React.PropTypes.string.isRequired,
	ID: React.PropTypes.string.isRequired
}

QuestionInput.defaultProps = {
	question: "this is a test",
	ID:0

}
export default QuestionInput