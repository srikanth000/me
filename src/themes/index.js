const primaryColor = '#2168F3';
const secondaryColor = '#6c757d';
const dangerColor = '#dc3545';
const warningColor = '#ffc107';
const infoColor = '#17a2b8';
const successColor = '#28a745';
const lightColor = '#f8f9fa';
const darkColor = '#343a40';
const whiteColor = '#fff';
const darkestBlue = '#0000ff';
const lightGrey = '#d2d2d2'

const btnStateless = '#f4f4f4';
const btnPrimaryColor = '#2168F3';
const btnDangerColor = 'red';
const btnDefaultColor = '#d3dbe6';
const btnSuccessColor = '#33c133';
const btnWhiteColor = 'white';
const extraInformation ='#324467';


export default {
  breakpoints: ['600px', '900px', '1200px', '1800px'],
  space: [0, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512], // in px
  fonts: {
    normal: 'ProximaNova, sans-serif',
    semiBold: 'ProximaNova-Semibold, sans-serif',
    extraBold: 'ProximaNova-Extrabld, sans-serif'
  },
  fontSizes: {
    xxs: '10px',
    xs: '12px',
    sm: '14px',
    md: '16px',
    mdL: '18px',
    lg: '20px',
    xl: '24px',
    xxl: '30px',
    xxxl: '36px',
    vxl: '44px'
  },
  iconSizes: {
    xxs: '5px',
    xs: '10px',
    sm: '15px',
    md: '20px',
    lg: '25px',
    xl: '30px',
    xxl: '35px',
    xxxl: '45px',
    xxxxl: '55px',
    vxl: '100px',
    vl: '80px'
  },
  fontWeights: {
    lighter: 100,
    light: 200,
    normal: 400,
    bold: 600,
    bolder: 800,
  },
  lineHeights: {
    xs: '0.5em',
    sm: '1em',
    md: '1.5em',
    lg: '2em',
    xl: '2.5em',
    xxl: '3.0em',
  },
  letterSpaces: {
    xs: '0.001em',
    sm: '0.005em',
    md: '0.01em',
    lg: '0.05em',
    xl: '0.08em',
    xxl: '0.1em',
  },
  borders: {
    default: '#eaf1ff',
    input: '#ced4da',
    lighter: '#e8f0f9',
    secondary: secondaryColor,
    primary: primaryColor,
  },
  radii: [0, 2, 4, 8, 16],
  opacity: [0, 0.2, 0.4, 0.6, 0.8, 1],
  shadows: {
    sm: '0 0 4px rgba(0, 0, 0, 0.125)',
    lg: '0 0 24px rgba(0, 0, 0, 0.125)'
  },
  toasts: {
    'success': {
      color: whiteColor,
      backgroundColor: successColor
    },
    'error': {
      color: whiteColor,
      backgroundColor: dangerColor
    },
    'warning': {
      color: whiteColor,
      backgroundColor: warningColor
    },
    default: {
      color: whiteColor,
      backgroundColor: darkColor
    }
  },
  stickers: {
    background: {
      brown: '#fffaee',
      green: "#e0ffee",
      red: "#fff1f1"
    },
    brown: '#70411b',
    green: '#1B7042',
    red: '#bf3030'
  },
  links: {
    'primary':{
      color: primaryColor,
      hoverColor: primaryColor,
      disabledColor: whiteColor
    },
    'secondary': {
      color: secondaryColor,
      hoverColor: primaryColor,
      disabledColor: secondaryColor
    },
    'default': {
      color: secondaryColor,
      hoverColor: primaryColor,
      disabledColor: secondaryColor
    },
    'success': {
      color: primaryColor,
      hoverColor: secondaryColor,
      disabledColor: secondaryColor
    },
    'danger': {
      color: btnDangerColor,
      hoverColor: btnDangerColor,
      disabledColor: secondaryColor
    },
    'warning': {
      color: warningColor,
      hoverColor: secondaryColor,
      disabledColor: secondaryColor
    },
  },
  buttons: {
    'stateless': {
      color: lightGrey,
      backgroundColor: btnStateless,
      borderColor: btnStateless,
      hoverBgColor: btnStateless,
      hoverColor: lightGrey,
      hoverBrColor: btnStateless
    },
    'default': {
      color: btnWhiteColor,
      backgroundColor: btnDefaultColor,
      borderColor: btnDefaultColor,
      hoverBgColor: btnDefaultColor,
      hoverColor: btnWhiteColor,
      hoverBrColor: btnDefaultColor
    },
    'light': {
      color: darkColor,
      backgroundColor: lightColor,
      borderColor: btnDefaultColor,
      hoverBgColor: btnDefaultColor,
      hoverColor: btnWhiteColor,
      hoverBrColor: btnDefaultColor
    },
    'plain': {
      color: darkColor,
      backgroundColor: lightColor,
      borderColor: btnDefaultColor,
      hoverBgColor: lightColor,
      hoverColor: darkColor,
      hoverBrColor: btnDefaultColor
    },
    'primary': {
      color: btnWhiteColor,
      backgroundColor: btnPrimaryColor,
      borderColor: btnPrimaryColor,
      hoverBgColor: btnPrimaryColor,
      hoverColor: btnWhiteColor,
      hoverBrColor: btnPrimaryColor
    },
    'secondary': {
      color: btnWhiteColor,
      backgroundColor: secondaryColor,
      borderColor: secondaryColor,
      hoverBgColor: secondaryColor,
      hoverColor: btnWhiteColor,
      hoverBrColor: secondaryColor
    },
    'success': {
      color: btnWhiteColor,
      backgroundColor: btnSuccessColor,
      borderColor: btnSuccessColor,
      hoverBgColor: btnSuccessColor,
      hoverColor: btnWhiteColor,
      hoverBrColor: btnSuccessColor
    },
    'danger': {
      color: btnWhiteColor,
      backgroundColor: btnDangerColor,
      borderColor: btnDangerColor,
      hoverBgColor: btnDangerColor,
      hoverColor: btnWhiteColor,
      hoverBrColor: btnDangerColor
    },
    'primary-outline': {
      backgroundColor: btnWhiteColor,
      color: btnPrimaryColor,
      borderColor: btnPrimaryColor,
      hoverBgColor: btnPrimaryColor,
      hoverColor: btnWhiteColor,
      hoverBrColor: btnPrimaryColor
    },
    'secondary-outline': {
      backgroundColor: btnWhiteColor,
      color: secondaryColor,
      borderColor: secondaryColor,
      hoverBgColor: secondaryColor,
      hoverColor: btnWhiteColor,
      hoverBrColor: btnPrimaryColor
    },
    'danger-outline': {
      backgroundColor: btnWhiteColor,
      color: btnDangerColor,
      borderColor: btnDangerColor,
      hoverBgColor: btnDangerColor,
      hoverColor: btnWhiteColor,
      hoverBrColor: btnDangerColor
    },
    'success-outline': {
      backgroundColor: btnWhiteColor,
      color: btnSuccessColor,
      borderColor: btnSuccessColor,
      hoverBgColor: btnSuccessColor,
      hoverColor: btnWhiteColor,
      hoverBrColor: btnSuccessColor
    },
    'default-outline': {
      backgroundColor: btnWhiteColor,
      color: btnPrimaryColor,
      borderColor: btnDefaultColor,
      hoverBgColor: btnPrimaryColor,
      hoverColor: btnWhiteColor,
      hoverBrColor: btnPrimaryColor
    },
    'plain-outline': {
      color: btnDefaultColor,
      hoverBgColor: 'none',
      hoverColor: btnWhiteColor,
      hoverBrColor: btnPrimaryColor,
      hoverBrStyle: 'solid'
    },
    'transparent-outline': {
      color: extraInformation,
      borderColor: extraInformation,
      backgroundColor: 'transparent',
      hoverBgColor: 'none',
      borderRadius: '3px'
    }
  },
  cards: {
    primary: {
      color: '#fff',
      backgroundColor: primaryColor
    },
    secondary: {
      color: '#fff',
      backgroundColor: secondaryColor
    },
    success: {
      color: '#fff',
      backgroundColor: successColor
    },
    danger: {
      color: '#fff',
      backgroundColor: dangerColor
    },
    info: {
      color: '#fff',
      backgroundColor: infoColor
    },
    outline: {
      color: primaryColor,
      backgroundColor: 'transparent',
      boxShadow: 'inset 0 0 0 2px'
    }
  },
  tags: {
    backgroundColor: '#e9f1ff',
    green: {
      color: "#1B7042",
      backgroundColor: "#E5F8EE"
    },
    grey: {
      color: "#57616F",
      backgroundColor: "#F3F6FA"
    },
    yellow: {
      color: "#70411B",
      backgroundColor: "#FFFAEE"
    },
    red: {
      color: "#C80010",
      backgroundColor: "#FEF0F0"
    }
  },
  alerts: {
    success: '#c4f1d8',
    danger: '#feeeee',
    warning: '',
  },
  colors: {
    bodyHoverColor: '#f8f9fa',
    borderColor: '#e5e9f0',
    blue: "#2168f3",
    darkBlue: '#2154f3',
    darkerBlue: '#2b56db',
    darkestBlue: darkestBlue,
    lightBlue: '#4d6189',
    lighterBlue: '#CCDBF6',
    lightestBlue: '#f4f6fb',
    green: "#3FCB7F",
    darkGreen: '#00A04F',
    darkerGreen: '#004A30',
    darkestGreen: '#1B7042',
    lightGreen: '#c4f1d8',
    lighterGreen: '#dbfbe9',
    lightestGreen: '#E5F8EE',
    mediumDarkGreen: '#00A04F',
    yellow: "#ffc72d",
    darkYellow: '#ffb500',
    darkerYellow: '#916c00',
    darkestYellow: '#70411b',
    lightYellow: '#ca9b59',
    lighterYellow: '',
    lightestYellow: '#fff8e6',
    red: "#ff6969",
    darkRed: '#d74651',
    darkerRed: '#c80010',
    darkestRed: '#bf3030',
    lightRed: '#ffe4e4',
    lighterRed: '#feeeee',
    lightestRed: '#fff3f3',
    mediumDarkRed: '#D74651',
    border: '#eaf1ff',
    body: '#555555',
    title: '#0D1A35',
    subtitle: '#7c8cab',
    lightestGrey: '#f4f4f4',
    lighterShadeGrey: '#f3f5f8',
    lighterGrey: '#e8e8e8',
    lightGrey: '#8895AF',
    grey: '#7c8cab',
    grayNew: '#7c8cab',
    darkGrey: '#757575',
    darkerGrey: '#555555',
    darkestGrey: '#333333',
    footerGrey: '#fafafa',
    darkIndigo: '#5163ba',
    primary: primaryColor, // Do not change the property name as its values are dynamically used in code. And it's values are not found with a search.
    secondary: secondaryColor, // Do not change the property name as its values are dynamically used in code. And it's values are not found with a search.
    success: successColor, // Do not change the property name as its values are dynamically used in code. And it's values are not found with a search.
    danger: dangerColor, // Do not change the property name as its values are dynamically used in code. And it's values are not found with a search.
    error: dangerColor, // This color is same as dangerColor as it's context is different in input and buttons. Do not change the property name as its values are dynamically used in code. And it's values are not found with a search.
    warning: warningColor, // Do not change the property name as its values are dynamically used in code. And it's values are not found with a search.
    info: infoColor,
    light: lightColor,
    dark: darkColor,
    white: whiteColor,
    textSuccessColor: '#24d2b5',
    dashboardBannerColor: '#001133',
    dashboardAnnouncementColor: '#fffaee',
    infoCard: '#ddf2ff',
    headingColor: '#0d1a35',
    extraInformation: '#324467',
    backgroundColor: '#f5f7f9',
    bannerBackground: '#243352',
    backgroundGrey: '#fafbfd',
    alertYellow: '#ff9800',
    darkestGreyNew: '#4D6189',
    lightestGreyNew: '#f5f7f9',
    borderGrey: '#E5E8F0',
    mediumGrey: '#F2F2F2',
    lightstGreNew: '#f5f7f9'
  }
};