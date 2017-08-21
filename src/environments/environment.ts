// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  monzo: {
    client_id: 'oauthclient_00009Ne4to5EY4iq4pznd3',
    client_secret: 'DhS/agtWiqoMeiTawb2vQfj/R1GI15AddYH4AMBD1OWues9KfQxR0hsfx69VmBieM02uqX/Ih4+7Rg1VJI/q',
    client_secret_encoded: 'DhS%2FagtWiqoMeiTawb2vQfj%2FR1GI15AddYH4AMBD1OWues9KfQxR0hsfx69VmBieM02uqX%2FIh4%2B7Rg1VJI%2Fq',
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
