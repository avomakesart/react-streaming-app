import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

const { Content } = Layout;

class StreamCreate extends Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <Content
        className="site-layout"
        style={{ padding: '0 50px', marginTop: 64 }}
      >
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </Content>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
