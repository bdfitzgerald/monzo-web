// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  monzo: {
    client_id: 'oauthclient_00009LXbEjWwPsmAKL40S9',
    client_secret: 'dfzAtx+SigeGhFrLH1Qtkh8HrJNXVtG+VdBfVYsgCBbcMlpiHTpt/kr0E94D/fzqed6oDq5k1IgFFhA0gx4v',
    client_secret_encoded: 'dfzAtx%2BSigeGhFrLH1Qtkh8HrJNXVtG%2BVdBfVYsgCBbcMlpiHTpt%2Fkr0E94D%2Ffzqed6oDq5k1IgFFhA0gx4v',
    redirect_uri: 'http://localhost:4200/oauth/callback',
    redirect_uri_encoded: 'http%3A%2F%2Flocalhost%3A4200%2Foauth%2Fcallback',
    api_url: 'https://api.monzo.com/',
    auth_url: 'https://auth.getmondo.co.uk/'
  },
  firebase: {
    apiKey: 'AIzaSyBRDm0fEQKU2qk82vYBgdghFWArRRrqvk4',
    authDomain: 'monzo-web.firebaseapp.com',
    databaseURL: 'https://monzo-web.firebaseio.com',
    projectId: 'monzo-web',
    storageBucket: '785568685998',
    messagingSenderId: ''
  },
  maps: {
    api_key: 'AIzaSyAI8sXb9Wea0nTlrFpdhDQ2tpQdBCCKR9k'
  }
};
