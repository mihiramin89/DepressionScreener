jest.unmock('../App');

  //import React from 'react';
  //import ReactDOM from 'react-dom';
  //import TestUtils from 'react-addons-test-utils';
  import App from '../App';


describe("App Test", function() {

	var React = require('react');
	var ReactDOM = require('react-dom');
	var TestUtils = require('react-addons-test-utils');

	it("class is defined",  function() {

		var instance = new App();

		expect(instance.constructor.name).toEqual("App");
		
	});
});