import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
	//This is a constructor that holds the score of each individual
	constructor(){
		super();
		this.state = {
			final_score: 0,
			scores: [
			{ID:"1", value:0},
			{ID:"2", value:0},
			{ID:"3", value:0},
			{ID:"4", value:0},
			{ID:"5", value:0},
			{ID:"6", value:0},
			{ID:"7", value:0},
			{ID:"8", value:0},
			{ID:"9", value:0}],
			therapist: ""

		};
		this.SaveScore = this.SaveScore.bind(this);
		this.ChosenTherapist = this.ChosenTherapist.bind(this);
		this.NeedsToSeeTherapist = this.NeedsToSeeTherapist.bind(this);
		this.SendMessage = this.SendMessage.bind(this);
	}
	NeedsToSeeTherapist()
	{
		if(this.state.final_score >= 10)
		{
			ReactDOM.render(<Therapist name1="Mădălina"  name2="Bruce" name3="Kelly" onChange={this.ChosenTherapist} onClick={this.SendMessage}/>, document.getElementById('TList'));
		}else {
			ReactDOM.render(<span>Wahoo you do not show signs of severe depression!</span>, document.getElementById('msg'));
		}
	}

	ChosenTherapist(e)
	{
		this.setState({
			therapist: e.target.value
		})
	}

	SendMessage()
	{
		ReactDOM.render(<span>Thank you! please schedule a meeting with Therapist {this.state.therapist} in  the near future.</span>, document.getElementById('msg'));
	}

	SaveScore(ID, val)
	{
		let scoreCount = 0;
		this.state.scores.map(score =>{
				if(score.ID === ID)
				{
					score.value = val;
				}
				scoreCount = scoreCount + score.value;
			})
		this.setState({
			final_score: scoreCount
		})
	}
	render(){
		return (
			<div>
				<h1 id="msg"></h1>
				<hr />
				<QuestionInput ref="one" ID="1" question="Little interest or pleasure in doing things?" onChange={this.SaveScore}/>
				<br />
				<QuestionInput ref="two" ID="2" question="Feeling down, depressed, or hopeless?" onChange={this.SaveScore}/>
				<br />
				<QuestionInput ref="three" ID="3" question="Trouble falling or staying asleep, or sleeping too much?" onChange={this.SaveScore}/>
				<br />
				<QuestionInput ref="four" ID="4" question="Feeling tired or having little energy?" onChange={this.SaveScore}/>
				<br />
				<QuestionInput ref="five" ID="5" question="Poor appetite or overeating?" onChange={this.SaveScore}/>
				<br />
				<QuestionInput ref="six" ID="6" question="Feeling bad about yourself - or that you are a failure or have let yourself or your family down?" onChange={this.SaveScore}/>
				<br />
				<QuestionInput ref="seven" ID="7" question="Trouble concentrating on things, such as reading the newspaper or watching television?" onChange={this.SaveScore}/>
				<br />
				<QuestionInput ref="eight" ID="8" question="Moving or speaking so slowly that other people could have noticed?
Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?" onChange={this.SaveScore}/>
				<QuestionInput ref="nine" ID="9" question="Thoughts that you would be better off dead, or of hurting yourself in some way?" onChange={this.SaveScore}/>
				<hr />
				<button onClick={this.NeedsToSeeTherapist}>Next </button>   <label ref="final_results">{this.state.final_score}/27</label>
				<span> Depression Severity: 0-4 none, 5-9 mild, 10-14 moderate, 15-19 moderately severe, 20-27 severe.</span>
				<br />
				<br />
				<div id="TList"></div>
			</div>
			);
	}
}

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
			<hr />
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

const Therapist = (props) => {
	return (
			<div>
				<input type="radio" onChange={props.onChange} name="therapist" value={props.name1} /> {props.name1}
				<input type="radio" onChange={props.onChange} name="therapist" value={props.name2} /> {props.name2}
				<input type="radio" onChange={props.onChange} name="therapist" value={props.name3} /> {props.name3}
				<button onClick={props.onClick}>Done</button>
			</div>
			);
}

export default App