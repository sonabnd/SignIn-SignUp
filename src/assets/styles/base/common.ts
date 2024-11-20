// import fonts from '../abstracts/fonts';
import sizes from '../abstracts/sizes';

const commonStyles = {
    '@global': {
        html: {
            fontSize: sizes.base,
        },
        body: {
            // fontFamily: fonts.fontMain,
            margin: 0,
        },
        a: {textDecoration: 'none', '&:hover': {color: 'black',},},
        img: {maxWidth: '100%',},
        ul: {listStyleType: 'none', padding: 0, margin: 0,},
    },
};

export default commonStyles;