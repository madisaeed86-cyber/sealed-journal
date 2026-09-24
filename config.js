/*  Sealed Journal settings — this is the only file you need to edit.
    Leave a value as "" until you have it. The app works without ads or payments. */
window.SJ_CONFIG = {

  // 1) Your payment server on Railway, e.g. "https://sealed-journal-server.up.railway.app"
  apiUrl: "",

  // 2) Paste the public key from keygen.html here (the line that starts with {"kty":"EC"...)
  licensePublicKey: {"kty":"EC",{"kty":"EC","crv":"P-256","x":"0whMTg52kfhN2eiNNNMGONq-DZzEhoxFTIq0fx6gcJk","y":"PF4IJ2eaQ7LzYJA854KMCUWBulhwKejKHPgkI9MA1NI"}},

  // 3) Google AdSense: your publisher ID and the ad unit IDs you create in AdSense
  adsenseClient: "",            // e.g. "ca-pub-1234567890123456"
  adSlots: {
    home: "",                   // ad unit shown at the bottom of the home screen
    lists: "",                  // ad unit shown at the bottom of Checklists
    landing: ""                 // ad unit on the landing page (index.html)
  },

  // Prices shown if the server can't be reached (the real price always comes from the server)
  displayPrices: { yearly: "₹199", lifetime: "₹499" }
};
