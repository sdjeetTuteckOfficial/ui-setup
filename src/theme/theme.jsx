import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  shape: {
    borderRadius: ['0px'],
    borderColor: '#ABBFC9CC',
  },
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        inputRoot: {
          paddingTop: '6.1px',
          paddingBottom: '6.2px',
        },
      },
      // root: {
      //   height: '48px',
      //   borderRadius: '0px',
      // },

      // select: {
      //   padding: '50rem 1.6rem',
      // },
      // icon: {
      //   right: '16px',
      // },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '0px',
          padding: '10px 28px',
          fontSize: '12px',
          lineHeight: '125%',
          //   textTransform: "capitalize",
          letterSpacing: '1px',
          fontFamily: 'Lato',
          fontWeight: 700,
        },
        contained: {
          // background: '#0091a2',
          color: '#fff',
        },
        outlined: {
          border: '1px solid #363636',
          color: '#191919',
          ':hover': {
            background: '#E4E6E7',
            border: '1px solid #363636',
          },
          ':disabled': {
            border: 'none',
          },
        },
      },
    },

    MuiInput: {
      styleOverrides: {
        root: {
          border: 'none !important',
        },
        input: {
          borderRadius: '0px',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          // height: '48px',
          borderRadius: '0px',
          // paddingTop: '6.1px',
          // paddingBottom: '6.2px',
        },
        select: {
          padding: '14px 1.6rem',
        },
        icon: {
          right: '16px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          borderRadius: '0px',
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#3A97D4',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: '2px solid #3A97D4',
          },
          '&.Mui-disabled': {
            // backgroundColor: '#e6e6e6',
          },
        },
        notchedOutline: {
          border: '1px solid #C9CDCF',
        },
        input: {
          padding: '1rem 1.6rem',
          fontSize: '12px',
          fontWeight: 400,
          lineHeight: '125%',
        },
      },
    },
  },

  typography: {
    fontFamily: 'Lato',
    h1: {
      fontSize: '40px',
      fontWeight: '700',
      lineHeight: '52.5px',
    },

    h2: {
      fontSize: '31px',
      fontWeight: '700',
      lineHeight: '50px',
    },

    h3: {
      fontSize: '24px',
      fontWeight: '600',
      lineHeight: '30px',
    },

    h4: {
      fontSize: '20px',
      fontWeight: '600',
      lineHeight: '25px',
    },

    h5: {
      fontSize: '16px',
      fontWeight: '600',
      lineHeight: '20px',
    },

    h6: {
      fontSize: '14px',
      fontWeight: '500',
      lineHeight: '17.5px',
    },

    p: {
      fontSize: '17px',
      fontWeight: '300',
      lineHeight: '20px',
    },

    body1: {
      fontSize: '12px',
      fontWeight: '400',
      lineHeight: '16px',
    },

    body2: {
      fontSize: '10px',
      fontWeight: '400',
      lineHeight: '12px',
    },
  },
  palette: {
    primary: {
      main: '#4A628A',
      light: '#d9eef1',
      100: '#e6f5f9',
    },
    secondary: {
      main: '#F4FFEE',
    },
    accent: {
      main: '#f4f4f4', /// not in use
    },
    badge: {
      main: '#E5F3FF',
    },
    warning: {
      main: '#BB5504',
      light: '#FCF3DE',
    },
    danger: {
      main: '#CD3D64',
      light: '#FEE8E7',
    },
    error: {
      main: '#CD3D64',
    },
    success: {
      main: '#09825D',
      light: '#E5FAE4',
    },
    info: {
      main: '#3a97d4',
      dark: '#075996',
      light: '#DFF0FF',
    },
    grey: {
      50: '#fff',
      100: '#C9CDCF',
      200: '#AEB4B7',
      300: '#8B9296',
      400: '#788287',
      500: '#60686C',
      600: '#484E51',
      700: '#303436',
      800: '#1A1A1A',
      900: '#000',
    },
  },
});

export default theme;
