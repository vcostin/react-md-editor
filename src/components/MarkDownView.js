import React, { Component } from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';

class MarkDownView extends Component {
  render() {
    return (
      <div
        className="MarkDownView md-element markdown-body"
        dangerouslySetInnerHTML={{ __html: marked(this.props.mdViewContent) }}
      />
    );
  }
}

MarkDownView.propTypes = {
  mdViewContent: PropTypes.string.isRequired,
};

export default MarkDownView;
