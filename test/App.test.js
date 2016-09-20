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

	//testcase to make sure final_score is started at zero.
	it("final_score is zero", function() {
		var instance = TestUtils.renderIntoDocument( <App /> );
		expect(instance.state.final_score).toBe(0);
	});

});

describe("QuestionInput", function() {
	
	it("class is defined", function() {
		var instance = new QuestionInput();
		expect(instance.constructor.name).toEqual("QuestionInput");
	});

	//checks to see if the questionInput is rendered in the document. 
	it("is rendered",function() {

		var instance = TestUtils.renderIntoDocument( <QuestionInput  /> );
    	expect(TestUtils.isCompositeComponent(instance)).toBeTruthy();
	});
});



