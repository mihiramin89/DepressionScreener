jest.unmock('../App');

  import React from 'react';
  import ReactDOM from 'react-dom';
  import TestUtils from 'react-addons-test-utils';
  import App from '../App';

//before each test, reset the modules so we start at a clean instance.
beforeEach(function() {
	jest.resetModules();
});

describe("App Test", function() {

	it("class is defined", function() {

		var instance = new App();

		expect(instance.constructor.name).toEqual("App");
		
	});

	it("is rendered",function() {
		//var instance = new App();

		var instance = TestUtils.renderIntoDocument( <App /> );
    	expect(TestUtils.isCompositeComponent(instance)).toBeTruthy();
	});
});



