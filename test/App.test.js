jest.unmock('../App');

  import React from 'react';
  import ReactDOM from 'react-dom';
  import TestUtils from 'react-addons-test-utils';
  import App from '../App';
  import QuestionInput from '../QuestionInput';

//before each test, reset the modules so we start at a clean instance.
beforeEach(function() {
	jest.resetModules();
});

describe("App Test", function() {

	it("class is defined", function() {

		var instance = new App();
		expect(instance.constructor.name).toEqual("App");
		
	});

	//checks to see if the app is rendered in the document. 
	it("is rendered",function() {

		var instance = TestUtils.renderIntoDocument( <App /> );
    	expect(TestUtils.isCompositeComponent(instance)).toBeTruthy();
	});

	//testcase to see if what happens on button click.
	it("function SendMessage", function() {
		//var instance = new App();
		var instance = TestUtils.renderIntoDocument( <App /> );
		var result = instance.SendMessage;
		var msg = TestUtils.findRenderedDOMComponentWithTag(instance, 'h1');
		console.log(typeof msg);

		expect(msg.text).toEqual("Thank you! please schedule a meeting with Therapist  in  the near future.");
	});
});

describe("QuestionInput", function() {
	
	it("class is defined", function() {
		var instance = new QuestionInput();
		expect(instance.constructor.name).toEqual("QuestionInput");
	});

	//checks to see if the app is rendered in the document. 
	it("is rendered",function() {

		var instance = TestUtils.renderIntoDocument( <QuestionInput /> );
    	expect(TestUtils.isCompositeComponent(instance)).toBeTruthy();
	});

});



