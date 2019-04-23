import React from 'react';
import { Redirect } from 'dva/router';

export default function Contact() {
  return (
    <>
      <Redirect to={'/about/contact/phone'} />
    </>
  );
}
