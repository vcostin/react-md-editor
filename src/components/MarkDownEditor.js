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
      <div className="container">
        <div className="row ">
          <div className="col-md-12 text-center">
            <h1 className="md-header">MD Editor</h1>
          </div>
        </div>
        <div className="MarkDownEditor row">
          <MarkDownInput onInputChange={this.handleInputChange} />
          <MarkDownView mdViewContent={this.state.mdContent} />
        </div>
      </div>
    );
  }
}

export default MarkDownEditor;
