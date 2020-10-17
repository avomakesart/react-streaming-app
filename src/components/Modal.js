import React from 'react';
import ReactDOM from 'react-dom';
import { Modal as ReactModal } from 'antd';

export const Modal = ({ title, content, actions, onDismiss }) => {
  return ReactDOM.createPortal(
    <div onClick={onDismiss}>
      <ReactModal
        title={title}
        visible="true"
        onCancel={false}
        onOk={false}
        footer={actions}
      >
        <div>{content}</div>
      </ReactModal>
    </div>,
    document.getElementById('modal')
  );
};
