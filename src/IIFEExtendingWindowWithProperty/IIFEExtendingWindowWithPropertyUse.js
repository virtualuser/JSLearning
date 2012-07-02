// Copyright © 2012 by Scott Sanbar - see COPYRIGHT file
// Original Author:  Scott Sanbar - scott.sanbar@gmail.com

// Here we are accessing externalFunction().  It is defined in a different
// JavaScript file but extends the global window object so it is in scope

document.getElementById('output').innerHTML = externalFunction(2); // t = 20