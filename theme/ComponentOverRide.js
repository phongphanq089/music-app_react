import { ButtonStyles, ColorStyles, TextStyles } from "./Designs";
const components = {
  MuiCssBaseline: {
    styleOverrides: {
      '*': {
        boxSizing: 'border-box',
      },
      html: {
        height: '100%',
        width: '100%',
      },
      body: {
        height: '100%',
        margin: 0,
        padding: 0,
      },
      '#root': {
        height: '100%',
      },
      "*[dir='rtl'] .buyNowImg": {
        transform: 'scaleX(-1)',
      },

      '.buyNowImg': {
        position: 'absolute',
        right: '-44px',
        top: '-18px',
        width: '143px',
        height: '175px',
      },
      '.MuiCardHeader-action': {
        alignSelf: 'center !important',
      },
      '.scrollbar-container': {
        borderRight: '0 !important',
      },
      "*[dir='rtl'] .welcomebg:before": {
        backgroundPosition: 'top -24px left -9px !important',
      },
      // ".ql-editor, .ql-snow * ": {
      //   fontSize: "unset",
      //   color: "unset"
      // },
      // ".quill .ql-container": {
      //   minHeight: "unset",
      //   fontSize: "unset"
      // },

      // ".quill .ql-container .ql-editor ": {
      //   padding: "1px 0"
      // },
      // ".quill .ql-container .ql-editor": {
      //   textAlign: "unset"
      // },
    },
  },

  // MuiToolbar: {
  //   styleOverrides: {
  //     root: {
  //       maxWidth: ( theme ) => theme.breakpoints.values.lg,
  //     },
  //   },
  // },

  MuiContainer: {
    styleOverrides: {
      root: {
        paddingLeft: '15px !important',
        paddingRight: '15px !important',
        // maxWidth: '1600px',
      },
    },
  },

  MuiButton: {
    variants: [
      {
        props: {
          variant: 'primary',
          variant: 'secondary',
          variant: 'linkgray',
        },
        style: {},
      },
    ],
    styleOverrides: {
      root: {
        textTransform: 'none',
        boxShadow: 'none',
        borderRadius: '4px',
        '&:hover': {
          boxShadow: 'none',
        },
      },
      primary: {
        ...ButtonStyles.primary.default,
        ':hover': {
          ...ButtonStyles.primary.hover,
        },
        ':disabled': {
          ...ButtonStyles.primary.disabled,
        },
      },
      secondary: {
        ...ButtonStyles.secondary.default,
        ':hover': {
          ...ButtonStyles.secondary.hover,
        },
        ':disabled': {
          ...ButtonStyles.secondary.disabled,
        },
      },
      linkgray: {
        ...ButtonStyles.linkgray.default,
        ':hover': {
          ...ButtonStyles.linkgray.hover,
        },
        ':disabled': {
          ...ButtonStyles.linkgray.disabled,
        },
      },
    },
  },

  MuiListItem: {
    styleOverrides: {
      root: {
        borderRadius: '9px',
      },
    },
  },

  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: '20px',
        padding: '14px',
        margin: '15px',
        // boxShadow: '0px 7px 30px 0px rgba(90, 114, 123, 0.11)',
      },
    },
  },

  MuiListItemIcon: {
    styleOverrides: {
      root: {
        minWidth: '40px',
      },
    },
  },

  MuiGridItem: {
    styleOverrides: {
      root: {
        paddingTop: '30px',
        paddingLeft: '30px !important',
      },
    },
  },
  MuiLinearProgress: {
    styleOverrides: {
      root: {
        backgroundColor: '#ecf0f2',
        borderRadius: '6px',
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        borderRadius: '0',
        padding: ( theme ) => `${ theme.spacing( 1 ) } 0!important`,
        borderBottom: `1px ${ ColorStyles.gray[ 100 ] } solid`
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        fontWeight: '500',
        fontSize: '0.75rem',
      },
    },
  },
  MuiFormControl: {
    styleOverrides: {
      root: {
        "&.subscribe": {
          input: {
            height: "inherit"
          }
        }
      }
    }
  },
  MuiInputBase: {


    styleOverrides: {
      inputAdornedEnd: {
        borderRight: "none!important"
      },
      inputAdornedStart: {
        borderLeft: "none!important",
        paddingLeft: "10px!important"
      },
      inputMultiline: {
        border: "none !important"
      }
    }
  },
  MuiInputLabel: {
    styleOverrides: {
      outlined: {
        ...TextStyles.textMd.normal,
        color: ColorStyles.gray[ 400 ],
        "&.Mui-focused": {
          color: ColorStyles.gray[ 900 ],
        }
      },
    }
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        backgroundColor: ColorStyles.base.white,
        "&.Mui-focused": {
          ".MuiOutlinedInput-notchedOutline": {
            // borderColor: color.gray[ 300 ],
            borderWidth: "1px"
          },
        }
      },
      notchedOutline: {
        borderColor: ColorStyles.gray[ 300 ],
      },
      input: {
        ...TextStyles.textMd.normal,
        backgroundColor: ColorStyles.base.white,
        color: ColorStyles.gray[ 900 ],
        borderRadius: "4px",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: ColorStyles.gray[ 300 ],
        height: '9px'
      }
    }
  },
  MuiCheckbox: {
    styleOverrides: {
      root: {
        color: ColorStyles.gray[ 300 ],
      }
    }
  },
  MuiFormControlLabel: {
    styleOverrides: {
      label: {
        ...TextStyles.textSm.medium,
        color: ColorStyles.gray[ 700 ],
      }
    }
  },
};

export default components;
