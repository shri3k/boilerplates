'use strict';

// Set options as a parameter, environment variable, or rc file.
require = require('esm')(module /*, options*/);
module.export = require('./src/server/server.js');
