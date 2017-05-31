import React, { Component } from 'react';
import PropTypes from 'prop-types';

const defaultMD = `
Markdown Example
===============

This is the raw markdown used to generate the below web content.

Bulleted List
-------------

* Foo
* Bar

Numbered List
-------------

1. Foo
2. Bar

Formatting
----------

Can be **bold** or *italic*

Links
-----

Click [here](http://foo.com) to go somewhere.
`;

class MarkDownInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mdInput: defaultMD,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentDidMount() {
    this.props.onInputChange(this.state.mdInput);
  }

  handleOnChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    this.props.onInputChange(value);
  }

  render() {
    return (
      <div className="MarkDownInput col-md-6">
        <textarea
          name="mdInput"
          className="md-input-area form-control"
          value={this.state.mdInput}
          onChange={this.handleOnChange}
        />
      </div>
    );
  }
}

MarkDownInput.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};

export default MarkDownInput;
