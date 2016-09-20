import React from 'react';
import ReactDOM from 'react-dom';
import QuestionInput from './QuestionInput';


class App extends React.Component {
	//This is a constructor that holds the score of each individual
	constructor(){
		super();
		this.state = {
			final_score: 0,
			questions: [
			{ref: "one", ID:"1", question: "Little interest or pleasure in doing things?"},
			{ref: "two", ID:"2", question: "Feeling down, depressed, or hopeless?" },
			{ref: "three", ID:"3", question: "Trouble falling or staying asleep, or sleeping too much?"},
			{ref: "four", ID:"4", question: "Feeling tired or having little energy?"},
			{ref: "five", ID:"5", question: "Poor appetite or overeating?"},
			{ref: "six", ID:"6", question: "Feeling bad about yourself - or that you are a failure or have let yourself or your family down?"},
			{ref: "seven", ID:"7", question: "Trouble concentrating on things, such as reading the newspaper or watching television?"},
			{ref: "eight", ID:"8", question: "Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?"},
			{ref: "nine", ID:"9", question: "Thoughts that you would be better off dead, or of hurting yourself in some way?"}
			],
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
			document.getElementById('TList').scrollIntoView({block: 'end', behavior: 'smooth'});
		}else {
			ReactDOM.render(<div id="notDepressed">You do not show signs of severe depression!</div>, document.getElementById('overlay-content'));
			document.getElementById("overlay").style.width = "100%";
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
		ReactDOM.render(<div id="Depressed">Thank you! Please schedule a meeting with Therapist {this.state.therapist} in  the near future.</div>, document.getElementById('overlay-content'));
		document.getElementById("overlay").style.width = "100%";
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
				<h2 ref="msg" className="message" id="msg"></h2>
				<ol>
					{this.state.questions.map(q => {
					 	return <li><QuestionInput key={q.ID} ref={q.ref} ID={q.ID} question={q.question} onChange={this.SaveScore} /></li>
					 })}
				</ol>
				<hr />
				<div id="score_key"> Depression Severity: 0-4 none, 5-9 mild, 10-14 moderate, 15-19 moderately severe, 20-27 severe.</div>
				<br />
				<button ref="next" onClick={this.NeedsToSeeTherapist}>Next </button>   
				<label ref="final_results">{this.state.final_score}/27</label>
			</div>
			);
	}
}
//stateless therapist class. No need to keep track of state. Just generate a list of options and let the owner do that.
const Therapist = (props) => {
	return (
			<div id="therapistList">
				<h1>Choose a Therapist to see</h1><br />
				<input type="radio" onChange={props.onChange} name="therapist" value={props.name1} /> {props.name1}
				<input type="radio" onChange={props.onChange} name="therapist" value={props.name2} /> {props.name2}
				<input type="radio" onChange={props.onChange} name="therapist" value={props.name3} /> {props.name3}
				<button onClick={props.onClick}>Done</button>
			</div>
			);
}

export default App