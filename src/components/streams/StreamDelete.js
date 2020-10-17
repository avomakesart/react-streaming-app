import React, { useEffect } from 'react';
import { Button } from 'antd';
import { Modal } from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

export const StreamDelete = () => {
  const { id } = useParams();
  const params = useSelector((state) => state.streams[id], shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchStream(id);
  }, [params, id]);

  const handleDelete = () => {
    return dispatch(deleteStream(id));
  };

  const actions = (
    <>
      <Button type="primary">
        <Link to="/">Cancel</Link>
      </Button>
      <Button type="danger" onClick={handleDelete}>
        Delete
      </Button>
    </>
  );

  const renderContent = () => {
    if (!params) {
      return 'Are you sure you want to delete this stream?';
    }

    return `Are you sure you want to delete the stream with the title ${params.title}?`;
  };

  return (
    <Modal
      title="Delete Stream"
      content={renderContent()}
      actions={actions}
      onDismiss={() => history.push('/')}
    />
  );
};
