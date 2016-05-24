import React from 'react';
import TestUtils from 'react-addons-test-utils';
import BlogDetails from '../components/blog/BlogDetails.jsx';

function setup(saving) {
  let props = {
    blogPost: {}
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<BlogDetails {...props}/>);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('Blog Details', () => {
    it('renders', () => {
      const { output } = setup();
      expect(output).toBeTruthy();
    });

});
