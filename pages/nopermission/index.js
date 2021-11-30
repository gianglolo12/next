import React from 'react';
import Image from 'next/image';

const Subscription = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <Image
        alt='haravan-flow'
        width={150}
        height={150}
        src='/announceIcon.svg'
      />
      <h3 style={{ marginBottom: 0, marginTop: 6 }}>
        Bạn cần liên hệ quản trị hệ thống để cấp quyền
      </h3>
      <h5 style={{ marginBottom: 0, mt: 2 }}>
        Để sử dụng app, bạn cần là Quản trị hệ thống, hoặc quản trị omni.
      </h5>
    </div>
  );
};

export default Subscription;

Subscription.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
