# Application 'University'
## Quick start

1) `git clone https://github.com/iSokrat/app-university`
2) `cd app-university`
3) `npm i`
4) You should to install in your browser (better is Chrome) addon [allow-control-allow-origin](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related?hl=en)
- Turn on **'Enable cors-origin resource sharing'**
- Set **'Access-control-expose-headers'** to '*'
- Set **'Intersepted URLs or URL patterns'** to http://universities.hipolabs.com/*

#### Production version
If you want to build production version, text in a console `npm run build-prod` (in file `index.html` change the link to `app-bundle.min.css` and the script to `app-bundle.min.js`)

#### Non-Production version
If you want to build non-production version, text in a console `npm run watch` (in file `index.html` change the link to `app-bundle.css` and the script to `app-bundle.js`)

#### How to open project?

Simply open file index.html in your browser.
