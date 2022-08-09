# tailwindcss-percentage-width
This plugin add new utilities classes so you can use from 0% to 100% in your widths.

# Get Started
### Install the npm package into your project

    npm i tailwindcss-percentage-width

or

    yarn add tailwindcss-percentage-width

### Load the plugin in your `tailwind.config.js` file

    //tailwind.config.js
    const percentageWidth = require('tailwindcss-percentage-width'); // load the plugin
    module.exports = {
	    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	    darkMode:  false, // or 'media' or 'class'
	    theme: {},
	    variants: {
	       extend: {},
	    },
	    plugins: [
	        percentageWidth, // <== Add our plugin to the list of tailwind plugins
	        //other plugins...
	    ]
    };
    
    
## Just use it
![how to use](https://i.imgur.com/isk1mSs.png)

