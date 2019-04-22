import React from 'react';
import { Redirect } from 'dva/router';

export default function Contact(props: any) {
  return (
    <>
      <Redirect to={'/about/contact/address'} />
    </>
  );
}
