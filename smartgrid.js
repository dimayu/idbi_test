let smartgrid = require('smart-grid');

let settings = {
    outputStyle: 'scss',
    columns: 12,
    offset: '32px',
    mobileFirst: false,
    container: {
        maxWidth: '1730px',
        fields: '95px'
    },
    breakPoints: {
        xlm: {
            width: '1740px',
            fields: '48px'
        },
        lm: {
            width: '1320px',
            fields: '48px'
        },
        md: {
            width: '940px',
            fields: '36px'
        },
        sm: {
            width: '768px',
            fields: '36px'
        },
        xsm: {
            width: '540px',
            fields: '36px'
        },
        xxs: {
            width: '375px',
            fields: '10px'
        }
    }
};

smartgrid('./src/styles/helpers', settings);


/*
 * mobileFirst
 *  false -> max-width
 *  true -> min-width
 */
