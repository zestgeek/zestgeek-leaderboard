import React from 'react'
import GitHubLogin from 'react-github-login';

const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);

const Github = () =>
  <GitHubLogin 
 		clientId="c82bc163208f51dc7324"
 		redirectUri="http://localhost:3000"
 		onSuccess={onSuccess}
 		onFailure={onFailure}
 		className="button"
  />

export default Github;
