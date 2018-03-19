// Something doesn't play nice with the $ selector, so we need noConflict
jQuery.noConflict();

// we can't see the console.log in game, so let's use our own function for output!
function debug(text) {
  console.log(text);
  // append our output to the dev console
  jQuery("#devconsole").append("<p>" + text + "</p>");
}

// if anything breaks, let's print it to our own homebrew console
window.onerror = function myErrorHandler(errorMsg, url, lineNumber) {
  debug("ERROR: " + errorMsg + " on line " + lineNumber + " in file " + url);
  return false;
}

var bindingsReady = false;
var cameraObject;

function onBindingsReady(evt) {
  debug("bindings ready!");
  bindingsReady = true;
  cameraObject = engine.call("VRCSDK2.Networking.Instantiate", "CustomCamera");
  debug(cameraObject);
}
document.addEventListener('onBindingsReady', onBindingsReady, false);
