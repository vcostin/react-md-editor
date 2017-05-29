import React, { Component } from 'react';
import MarkDownInput from './MarkDownInput';
import MarkDownView from './MarkDownView';

class MarkDownEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mdContent: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(inputContent) {
    this.setState({
      mdContent: inputContent,
    });
  }

  render() {
    return (
      <div>
        <h1>MD Editor</h1>
        <div className="MarkDownEditor">
          <MarkDownView mdViewContent={this.state.mdContent} />
          <MarkDownInput onInputChange={this.handleInputChange} />
        </div>
      </div>
    );
  }
}

export default MarkDownEditor;
