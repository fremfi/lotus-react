var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var BlogList = require('../components/pages/blog/BlogList.jsx').default;

describe('Blog List', () => {
    var component;

    beforeEach(() => {
        component = TestUtils.renderIntoDocument(<BlogList blogPosts={[]}/>);
    });

    it('renders', () => {
        expect(component).toBeTruthy();
    });

});