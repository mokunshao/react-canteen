import React from 'react';

interface Props {
  history: { push: Function };
}

export default function Menu(props: Props) {
  if (!sessionStorage.email || !sessionStorage.token) {
    props.history.push('/login');
  }
  return <div>menu</div>;
}
