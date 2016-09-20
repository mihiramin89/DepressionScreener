import React from 'react';
import ReactDOM from 'react-dom';

//This class controls the question look as well as the scoring for each question. 
class QuestionInput extends React.Component {

	//constructor
	constructor()
	{
	  super();
	  this.SetScore = this.SetScore.bind(this);
	}
	//this function passes the score value to the owner component to manipulate the state.
	SetScore(event)
	{

		this.props.onChange(this.props.ID, +event.target.value);
	}
	//renders the component.
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

//define the type for the propertye.
QuestionInput.propTypes = {
	question: React.PropTypes.string.isRequired,
	ID: React.PropTypes.string.isRequired
}

//sets default values.
QuestionInput.defaultProps = {
	question: "this is a test",
	ID:"0"

}
export default QuestionInput