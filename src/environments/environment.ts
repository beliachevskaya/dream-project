// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyD1WY9NsmZ8-mW72Couc2IU4arY_MCR9jw',
    authDomain: 'timesheet-1b76c.firebaseapp.com',
    databaseURL: 'https://timesheet-1b76c.firebaseio.com',
    projectId: 'timesheet-1b76c',
    storageBucket: 'timesheet-1b76c.appspot.com',
    messagingSenderId: '845899414104',
    appId: '1:845899414104:web:0d25a3fa5cca8111'
  },
  database: 'firebase',
  socialAuthEnabled: true
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
