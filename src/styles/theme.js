import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import createBreakpoints from '@mui/system/createTheme/createBreakpoints';
// A custom theme for this apps
const breakpoints = createBreakpoints({
	xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
			xxl: 1920,
			xxxl: 2560
});
let theme = createTheme({
	breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
			xxl: 1920,
			xxxl: 2560
    }
  },
	'&.fade-enter': {
		opacity: 0,
		zIndex: 1
	},

	'&.fade-enter.fade-enter-active': {
		opacity: 1,
		transition: 'opacity 250ms ease-in'
	},

	palette: {
		primary: {
			icon:'#00a99d',
			main: '#00567b',
			mainHover: '#054561',
			divider: '#8da8b4',
			field: '#8da8b4',
			fieldDisabled: '#d2d2d2',
			mainDarken: 'rgba(2, 36, 67, 1.00)',
			modal: 'rgba(2, 36, 67, 0.70)',
			light: '#def4ff',
			dark: '#043045',
			contrastText: '#fff',
			superLightText: 'rgba(0,86,123,0.12)',
			medium: '#b8b9c3',
			superLight: '#f3f5f6',
			superLightBlue: '#ecf4fc',
			ultraLight: '#fafafa',
			superDark: '#022443',
			text: 'rgba(0, 0, 0, 0.7)',
			textLight: 'rgba(0, 0, 0, 0.4)'
		},
		summer: {
			main: '#00567b',
			mainDarken: '#00577c',
			light: '#def4ff',
			dark: '#043045',
			contrastText: '#fff',
			superLight: 'rgba(253, 247, 235, 1.00)',
			superDark: '#022443'
		},
		secondary: {
			main: '#68bd01',
			mainDarken: '#5aa51c',
			light: '#daefcf',
			pale: '#effaeb',
			dark: '#00accc',
			text: 'red',
			contrastText: '#ffffff'
		},

		action: {
			active: '#00577c',
			activeOpacity: 1,
			// hover: '#022938',
			hoverOpacity: 0.7
			// focus: lightBlue[600],
			// focusOpacity: 1,
			// selected: lightBlue[300],
			// selectedOpacity: 1
		},
		black: {
			main: '#000000',
			hover: '#00577c',
			light: '#00577c'
		},
		default: {
			main: '#cccccc',
			dark: '#cccccc',
			hover: '#4E4136'
		},
		gold: {
			main: '#00577c',
			hover: '#4E4136'
		},
		blue: {
			main: '#008DFF',
			contrastText: '#fff',
			light: '#effeff'
		},
		softPink: {
			main: '#008DFF',
			contrastText: '#fff'
		},
		navy: {
			main: '#008DFF',
			contrastText: '#fff'
		},
		dark: {
			main: '#008DFF',
			contrastText: '#fff'
		},
		yellow: {
			main: '#f1be00'
		},
		grey: {
			main: '#ccc',
			medium: '#c8c9cb',
			light: '#c8c9cb'
		},
		white: {
			main: '#ffffff',
			medium: '#c8c9cb',
			light: '#c8c9cb'
		},
		text: {
			primary: 'rgba(0, 0, 0, 0.7)',
			secondary: 'rgba(0, 0, 0, 0.5)',
			tertiary: 'rgba(0, 0, 0, 0.3)',
			gold: '#00577c'
		},
		error: {
			main: red.A400,
			contrastText: '#fff'
		},
		bg: {
			white: '#FFFFFF'
		},
		review: {
			main: '#fabc06'
		}
	},

	// font-family:'Helvetica Now Text W05 Thin';
	// font-family:'Helvetica Now Text W05 Light';
	// font-family:'Helvetica Now Text W05 Regular';
	// font-family:'Helvetica Now Text W05 Italic';
	// font-family:'Helvetica Now Text W05 Medium';
	// font-family:'Helvetica Now Text W05 Bold';

	typography: {
		htmlFontSize: 16,
		fontFamily: 'stolzl',
		// fontSize: 17,
		lineHeight: '1.2rem',
		textRendering: 'optimizeLegibility',
		fontSmooth: 'auto',
		fontWeight: '400',
		paragraph:{
			marginBottom: 0
		},
		body1: {
			fontWeight: '400',
			'& strong': {
				fontWeight: 600
			},
			'& p': {
				fontSize: '17px',
				lineHeight: '1.8rem'
			},
      '& li': {
        fontFamily: 'stolzl',
				fontSize: '17px',
				lineHeight: '1.8rem'
			}
		},
		body2: {
			'& strong': {
				fontWeight: 600
			},
			fontSize: 16,
			fontWeight: '500'
		},
		subtitle1: {
			marginBottom: 0
		},
		callout: {
			display: 'block',

			[breakpoints.up('sm')]: {
				fontSize: 23,
				lineHeight: 1.5
			},
			fontSize: 20,
			lineHeight: 1.6
		},
		p: {
			fontSize: '1rem',
		},

		td: {
			fontSize: '1rem'
		},
		th: {
			fontSize: '1rem'
		},
		sectionLinks: {
			fontSize: '1.4rem',
			fontWeight: '600',
			lineHeight: 'unset'
			//fontFamily: [ 'helevtica', 'arial' ].join(',')
		},
		h1: {
			fontSize: '2.2rem',

			fontWeight: 600
			//fontFamily: [ 'helevtica', 'arial' ].join(',')
		},

		h2: {
			fontSize: '1.8rem',
			marginBottom: '1rem',
			fontWeight: 500

			//	fontFamily: [ 'helevtica', 'arial' ].join(',')
		},
		h3: {
			fontSize: '1.4rem',
			fontWeight: 400,
			letterSpacing:0,
			marginBottom: '1rem'
			// textTransform: 'none'

			//	fontFamily: [ 'helevtica', 'arial' ].join(',')
		},
		h4: {
			fontWeight: 400,
			letterSpacing:0,
			fontSize: '1.3rem'
			//	fontFamily: [ 'helevtica', 'arial' ].join(',')
		},
		h5: {
			fontSize: '1.6rem'

			//	fontFamily: [  'helevtica', 'arial' ].join(',')
		},
		'& .bolden': { fontWeight: '600' },
		h6: {
			fontSize: '1.1rem'
			//	fontFamily: [  'helevtica', 'arial' ].join(',')
		},
		scriptCallout: {
			fontFamily: [ 'Nothing You Could Do', 'Arial' ].join(','),
			textTransform: 'normal',
			fontWeight: 'normal',
			[breakpoints.up('sm')]: {
				fontSize: 70,
				lineHeight: 1.2
			},
			fontSize: 50,
			lineHeight: 1.1
		},

		overrides: {
			'.MuiLink-root': {
				textDecoration: 'none'
			},
			'& p': {
				marginBottom:0
			}
		},

		a: {
			transition: 'all 0.6s ease-out',
			color: 'text.primary',
			'&:hover': {
				transition: 'all 0.5s ease-out',
				cursor: 'pointer'
			}
		}
	},
	transitions: {
		duration: {
			shortest: 150,
			shorter: 200,
			short: 250,
			// most basic recommended timing
			standard: 300,
			// this is to be used in complex animations
			complex: 375,
			// recommended when something is entering screen
			enteringScreen: 225,
			// recommended when something is leaving screen
			leavingScreen: 195
		},
		easing: {
			// This is the most common easing curve.
			easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
			// Objects enter the screen at full velocity from off-screen and
			// slowly decelerate to a resting point.
			easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
			// Objects leave the screen at full velocity. They do not decelerate when off-screen.
			easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
			// The sharp curve is used by objects that may return to the screen at any time.
			sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
		}
	}
});

theme = createTheme(theme, {
	shadows: [
		'0', //elevation 0
		'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', //elevation 1
		'0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', //elevation 2
		'0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)', //elevation 3
		'0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)', //elevation 4
		'0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)', //elevation 5
		'0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)', //elevation 6
		'0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)', //elevation 7
		'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none'
	],
	components: {
		MuiTypography: {
			styleOverrides: {
				gutterBottom: {
					marginBottom: 16
				},

				h1: {
					marginTop: 0,
					paddingTop: 0,
					marginBottom: 20
				},
				h2: {
					marginTop: 30
				},
				h3: {
					marginTop: 20,
					marginBottom: 5
				}
			}
		},
		MuiListItemText:{
			styleOverrides: {
				'& p':{
					marginBottom: 0
				},
				paragraph:{
					marginBottom: 0
				},

				root: {
					paragraph:{
						marginBottom: 0
					},
				},

			}
		},
		MuiLink: {
			styleOverrides: {
				root: {
					cursor: 'pointer',
					fontWeight: 500,
					transition: 'all 0.5s ease-out',
					color: theme.palette.primary.main,
					'&:hover': {
						color: theme.palette.primary.mainDarken
					}
				},
				subtle: {
					color: theme.palette.primary.main,
					'&:hover': {
						color: theme.palette.primary.mainDarken
					}
				}
			}
		},

		MuiPickerStaticWrapper:{
			styleOverrides: {
				content: {
			border:'1px solid #ededed',borderRadius:10
				}
			}
		},
MuiPickersCalendarHeader:{
	styleOverrides: {
		root: {
			// paddingLeft:0
		}
	}
},
		//ACCORDION----------------------
		MuiAccordion: {
			styleOverrides: {
				root: {
					boxShadow: 'none',
					background: 'none'
				}
			}
		},
		MuiAccordionSummary: {
			styleOverrides: {
				root: {
					background: 'none',
					fontWeight: 400
				}
			}
		},
		MuiAccordionDetails: {
			styleOverrides: {
				root: {
					background: 'none',
					fontWeight: 400
				}
			}
		},

		// MuiFormLabel: {
		// 	styleOverrides: {
		// 		root: {
		// 			ml: 2
		// 		}
		// 	}
		// },
		// MuiTextField: {
		// 	styleOverrides: {
		// 		root: {
		// 			borderRadius: 10,
		// 			// backgroundColor: '#ffffff',
		// 			border: 0,
		// 			pl: 10
		// 		}
		// 	}
		// },
		MuiSelect: {
			styleOverrides: {
				// root: {
				// 	backgroundColor: '#ffffff',
				// 	pl: 5
				// },
				// fullWidth: {
				// 	backgroundColor: 'transparent'
				// },

					// root:{border:'1px solid red'},
					root:{
						outlined:{border:'1px solid red'}
					}
			}
		},
		// MuiFormControl: {
		// 	styleOverrides: {
		// 		root: {
		// 			backgroundColor: '#ffffff'
		// 		},
		// 		fullWidth: {
		// 			backgroundColor: 'transparent'
		// 		}
		// 	}
		// },
		// MuiOutlinedInput: {
		// 	styleOverrides: {
		// 		root: {
		// 			backgroundColor: '#ffffff'
		// 		}
		// 	}
		// },
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					borderWeight: 2,
					color: '#000000',
					borderRadius: 10,//was 30
					backgroundColor: '#ffffff',
					border: 0,
					padding: 0,//was 2
					paddingLeft: 10
				}
			}
		},
		MuiInputAdornment: {
			styleOverrides: {
				root: {
					paddingLeft: 15
				}
			}
		},
		// MuiAutocomplet': {
		// 			zIndex: 9999999
		// 		},
		MuiRadio: {
			root: {
				'&:hover': {
					boxShadow: 'none'
				},
				'&:focus': {
					boxShadow: 'none'
				}
			}
		},

		// MuiSelect: {
		// 	styleOverrides: {

		// 		root: {
		// 			backgroundColor: 'transparent',
		// 			borderRadius: 30,
		// 			height: 45,
		// 			p: 0
		// 		},
		// 		outlined: {
		// 			width: '100%',
		// 			fontSize: 14
		// 		},
		// 		filled: {
		// 			width: '100%',

		// 			backgroundColor: '#FFFFFF'
		// 		}
		// 	}
		// },
		// MuiFilledInput: {
		// 	styleOverrides: {
		// 		root: {
		// 			pb: '2px',
		// 			border: '5px solid #ddd',
		// 			borderRadius: 10,
		// 			backgroundColor: 'red',
		// 			'&:before': {
		// 				borderBottom: 0
		// 			},
		// 			'&:hover': {
		// 				backgroundColor: 'res',
		// 				borderBottom: 0,
		// 				'&:before': {
		// 					borderBottom: 0
		// 				}
		// 			},
		// 			'&:selected': {
		// 				backgroundColor: 'transparent',
		// 				'&:hover': {
		// 					backgroundColor: 'transparent'
		// 				}
		// 			}
		// 		}
		// 	}
		// },

		// MuiFormLabel: {
		// 	root: {
		// 		color: '#000000'
		// 	},
		// 	focused: {
		// 		color: '#000000'
		// 	}
		// },

		//A REGULAR DROPDOWN FIELD
		MuiInputLabel: {
			styleOverrides: {
				root: {
					fontSize:14,
					fontWeight: '500',
					// border: 0,
					// mb: '0px',
					// position: 'relative',
					borderRadius: 5,
					// borderWidth: 1,
					// borderStyle: 'solid',
					// borderColor: '#f2f2f9',
					// backgroundColor: '#FFFFFF',
					ml: 20,
					// top: '-15px',
					//top: '5px',
					padding: '0 10px'
				},

				filled: {
					focused: {
						color: '#00000'
					}
				}
			}
		},

		MuiFormHelperText: {
			styleOverrides: {
				root: {
					fontWeight: '600',
					color: 'red',
					fontSize: 14
				}
			}
		},

		//LIST ITEMS--------------------------------
		MuiListItem: {
			styleOverrides: {
				root: {
					marginLeft:0}
				}
			},
		// MuiSelect:{
		// 	styleOverrides: {
		// 		select:{
		// 			p:0
		// 		}
		// 	}
		// },

		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					fontSize:15,borderRadius:0,
				},
				placeholder: {
					fontSize:15,
				}
			}
		},
		MuiMenuItem: {
			styleOverrides: {
				root: {
					fontSize:15
				}
			}
		},
		//AUTOCOMPLETE--------------------------------
		MuiAutocomplete: {
			styleOverrides: {

				// background: 'red',
				fullWidth:{
					p:0,fontsize:41
				},
				'&.MuiFormLabel': {
					root:{
					fontSize: 14,
					color:'red'
				}
				},
				groupLabel: {
					fontSize: 14,
					color:theme.palette.primary.mainDarken,
					borderBottom:'2px solid #ededed',
				},
				input:{
					p:0,fontsize:10
									},
				root: {		fontsize:10,
					// hover: {
					// 	background: 'red'
					// }
				},
				// listbox :{
				// 	overflow: 'none',
				// 	maxHeight: 'inherit'
				// },
				option: {
					'&[aria-selected="true"]': {
            backgroundColor: '#e3abed',
          },
					// '&[aria-selected="true"]': {
					// 	'&:hover': 'red',
					// 	backgroundColor: theme.palette.primary.mainDarken,
					// 	color: '#fff'
					// },

					 fontSize: 14,
					lineHeight: 1.4,
					borderBottom:'1px solid #ededed',
					action: {
						backgroundColor: 'red'
					},
					'&:hover': {
						backgroundColor: '#ededed',
						color: '#00'
					}
					// '&:focused': {
					// 	// backgroundColor: theme.palette.primary.mainDarken,
					// 	// color: 'red'
					// }
					// backgroundColor: '#fff'
				}
			}
		},

		//BUTTONS--------------------------------
		MuiButton: {
			styleOverrides: {
				// Name of the slot
				contained: {
					cursor: 'pointer',
					borderRadius: 55,
					letterSpacing: 0,
					textTransform: 'none',
					padding: '10px 20px',
					'&:hover': {
						color: theme.palette.primary.contrastText,
						backgroundColor: theme.palette.primary.mainDarken
					}
				},
				text: {
					'&:hover': {
						backgroundColor: 'transparent',
						color: theme.palette.primary.dark
					}
				}
			}
		},
		//CARDS
		MuiCardActionArea: {
			styleOverrides: {
				root: {
					'&:hover': {
						backgroundColor: 'yellow'
					}
				}
			}
		},

		//BUTTONS--------------------------------
		MuiAlert: {
			styleOverrides: {
				root: {
					borderRadius: 10,
					borderWidth: 1,
					borderStyle: 'solid'
				},
				standardError: {
					borderColor: 'rgba(94, 172, 98, 1.00)'
				},
				standardError: {
					borderColor: 'rgba(224, 62, 50, 1.00)'
				},
				standardWarning:{
					borderColor: '#caa06a',
				}
			}
		},

		//TABLES--------------------------------
		MuiTableHead: {
			styleOverrides: {
				root: {
					'.MuiTableCell-head': {
						fontWeight: 700
					}
				}
			}
		}
	}
});

export default theme;
