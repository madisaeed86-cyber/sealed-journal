# Sealed Journal website (Free + Premium)

Upload everything in this folder to your website host. Keep the `icons` folder as it is.

| File | What it is |
|---|---|
| `index.html` | Landing page (helps AdSense approval and Google search) |
| `app.html` | The journal app |
| `config.js` | **The only file you edit**: server address, public key, AdSense IDs |
| `privacy.html`, `terms.html` | Required by AdSense and Razorpay. Fill in the `[BRACKETS]` |
| `ads.txt` | Required by AdSense. Replace the zeros with your publisher number |
| `sw.js`, `manifest.webmanifest`, `icons/` | Offline mode and "Add to Home Screen" |

When you change anything later, open `sw.js` and bump `sj-v2` to `sj-v3` so installed copies update.
Full setup steps are in SETUP-GUIDE.md.
