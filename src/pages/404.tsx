import React from 'react';
import router from 'umi/router';

export default function() {
  router.push('/home');
  return <div>404 Not Found</div>;
}
