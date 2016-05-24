import React from 'react';
import TestUtils from 'react-addons-test-utils';
import BlogList from '../components/blog/BlogList.jsx';

function setup(saving) {
  let props = {
    blogPosts: []
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<BlogList {...props}/>);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('Blog List', () => {
    it('renders', () => {
      const { output } = setup();
      expect(output).toBeTruthy();
    });

});
