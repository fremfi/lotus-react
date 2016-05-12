var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var BlogDetails = require('../components/pages/blog/BlogDetails.jsx').default;

describe('Blog Details', () => {
    var component;

    beforeEach(() => {
        component = TestUtils.renderIntoDocument(<BlogDetails blogPost={{}}/>);
    });

    it('renders', () => {
        expect(component).toBeTruthy();
    });

});