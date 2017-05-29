import React, { Component } from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import sanitizeHtml from 'sanitize-html';

class MarkDownView extends Component {
  render() {
    return (
      <div
        className="MarkDownView md-element markdown-body"
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(marked(this.props.mdViewContent)) }}
      />
    );
  }
}

MarkDownView.propTypes = {
  mdViewContent: PropTypes.string.isRequired,
};

export default MarkDownView;
