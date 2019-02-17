let [media, _] = document.getElementsByTagName('video');
console.log(media);

//var script_port;
//
//browser.runtime.onConnect.addListener((port) => {
//  script_port = port;
//  script_port.postMessage({state: "ok"});
//});

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
        let command = message["command"];
        switch (command) {
                case 'increase-speed':
                        media.playbackRate += 0.1;
                        break;
                case 'decrease-speed':
                        media.playbackRate -= 0.1;
                        break;
                default:
                        console.log(`Unknown command ${command}`);
        }
        return true;
});

//if (media) {
//        media.playbackRate += 0.1;
//}
// listen for background script messages
//browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
//});

// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage
// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage
// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#Communicating_with_background_scripts
// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_scripts
// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension
