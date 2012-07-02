// Copyright © 2012 by Scott Sanbar - see COPYRIGHT file
// Original Author:  Scott Sanbar - scott.sanbar@gmail.com

// Here we are accessing globalFunction().  This function variable is defined
// in a different JavaScript file using var, but is available within the
// window object's scope for use here

document.getElementById('output').innerHTML = globalFunction(2); // t = 20