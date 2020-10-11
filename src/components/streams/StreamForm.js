import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Input, Button } from 'antd';
import { Layout } from 'antd';

const { Content } = Layout;

class StreamForm extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return error;
    }
  }

  renderTitleInput = ({ input, meta }) => {
    const styledError = `${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <Form.Item
        label="Enter Title"
        validateStatus={styledError}
        help={this.renderError(meta)}
      >
        <Input {...input} autoComplete="off" />
      </Form.Item>
    );
  };

  renderDescriptionInput = ({ input, meta }) => {
    const styledError = `${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <Form.Item
        label="Enter Description"
        validateStatus={styledError}
        help={this.renderError(meta)}
      >
        <Input {...input} autoComplete="off" />
      </Form.Item>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <Content
        className="site-layout"
        style={{ padding: '0 50px', marginTop: 64 }}
      >
        <Form
          layout="vertical"
          onFinish={this.props.handleSubmit(this.onSubmit)}
          style={{ maxWidth: '300px' }}
        >
          <Field name="title" component={this.renderTitleInput} />
          <Field name="description" component={this.renderDescriptionInput} />
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </Content>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

export default reduxForm({ form: 'streamForm', validate })(StreamForm);
