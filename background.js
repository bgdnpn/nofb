better_urls =
  [
    "https://www.wikiart.org/",
    "https://www.artsy.net/",
    "https://artsandculture.google.com/"
  ]

var any_url = function() {
  return better_urls[Math.floor(Math.random() * better_urls.length)];
}

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return {redirectUrl: any_url()};
  },
  {urls: ["https://www.facebook.com/", "https://www.instagram.com/"]},
  ["blocking"]);
