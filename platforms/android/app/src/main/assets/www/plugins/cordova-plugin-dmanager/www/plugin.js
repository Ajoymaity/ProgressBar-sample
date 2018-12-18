cordova.define("cordova-plugin-dmanager.DownloadManager", function(require, exports, module) {
var exec = require('cordova/exec');

var PLUGIN_NAME = 'DownloadManager';
var METHOD_NAME = 'enque';

var DownloadManager = {
    
    enqueue: function (path, success, error) {
        exec(success, error, PLUGIN_NAME, METHOD_NAME, [path]);
    },

   /* progress: function (identifier, success, error) {
        exec(success, error, PLUGIN_NAME, "progress", [identifier]);
    }*/
};
module.exports = DownloadManager;

});
