import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Card, Avatar, Button } from 'antd';
import { CameraOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Meta } = Card;

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div>
          <Button type="primary">
            <Link to={`/streams/edit/${stream.id}`}>Edit</Link>
          </Button>
          <Button type="danger">
            {' '}
            <Link to={`/streams/delete/${stream.id}`}>Delete</Link>{' '}
          </Button>
        </div>
      );
    }
  }

  renderList() {
    return this.props.streams.map((stream) => (
      <Card
        style={{ width: 300, marginTop: 16 }}
        key={stream.id}
        actions={[this.renderAdmin(stream)]}
      >
        <Meta
          avatar={<CameraOutlined style={{ fontSize: '26px' }} />}
          title={stream.title}
          description={stream.description}
        />
      </Card>
    ));
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <Button type="primary">
          <Link to="/streams/new">Create Stream</Link>
        </Button>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div>{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
