import 'babel/polyfill';

const context = require.context('./src/', true, /\.spec\.(js|jsx)$/);

// Require matches
context.keys().forEach(context);
