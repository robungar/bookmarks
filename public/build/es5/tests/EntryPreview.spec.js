"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

// https://github.com/producthunt./chai-enzyme

var EntryPreview = _interopRequire(require("../components/EntryPreview"));

var _enzyme = require("enzyme");

var mount = _enzyme.mount;
var render = _enzyme.render;
var shallow = _enzyme.shallow;


describe("EntryPreview", function () {
	var entry = {
		title: "First Entry",
		url: "http://www.google.com",
		description: "This is the description:"
	};

	it("shows entry title", function () {
		var component = mount(React.createElement(EntryPreview, { entry: entry }));
		expect(component.find("h3")).to.have.length(1);
		expect(component.find("h3")).to.contain.text("First Entry");
	});

	it("shows entry description", function () {
		var component = mount(React.createElement(EntryPreview, { entry: entry }));
		expect(component.find("h4")).to.have.length(1);
		expect(component.find("h4")).to.contain.text("This is the description:");
	});

	it("shows entry link", function () {
		var component = mount(React.createElement(EntryPreview, { entry: entry }));
		expect(component.find("a")).to.have.attr("href").equal("http://www.google.com");
		expect(component.find("a")).to.contain.text("http://www.google.com");
	});
});