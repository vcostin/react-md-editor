import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MarkDownInput extends Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    this.props.onInputChange(e.target.value);
  }

  render() {
    return (
      <div className="MarkDownInput md-element">
        <textarea
          cols="75"
          rows="10"
          name="mdInput"
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
