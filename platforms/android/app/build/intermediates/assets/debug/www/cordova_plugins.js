cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-ionic-keyboard.keyboard",
    "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
    "pluginId": "cordova-plugin-ionic-keyboard",
    "clobbers": [
      "window.Keyboard"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-dmanager.DownloadManager",
    "file": "plugins/cordova-plugin-dmanager/www/plugin.js",
    "pluginId": "cordova-plugin-dmanager",
    "clobbers": [
      "DownloadManager"
    ]
  },
  {
    "id": "cordova-plugin-download-manager.DownloadManager",
    "file": "plugins/cordova-plugin-download-manager/www/plugin.js",
    "pluginId": "cordova-plugin-download-manager",
    "clobbers": [
      "DownloadManager"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-device": "2.0.2",
  "cordova-plugin-ionic-keyboard": "2.0.5",
  "cordova-plugin-ionic-webview": "1.2.1",
  "cordova-plugin-splashscreen": "5.0.2",
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-dmanager": "0.0.1",
  "cordova-plugin-download-manager": "0.0.1"
};
// BOTTOM OF METADATA
});