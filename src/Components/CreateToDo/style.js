export default {
  root: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    minHeight: '50px'
  },

  input: {
    flexGrow: '1',
    padding: '10px',
    paddingLeft: '40px',
    border: '1px solid #e9e9e9',
    fontFamily: "'Yanone Kaffeesatz', sans-serif",
    fontSize: '24px',
    boxShadow: 'inset 0 -2px 1px rgba(0,0,0,0.03)'
  },

  button: {
    position: 'absolute',
    right: '0',

    width: '50px',
    height: '100%',

    border: '1px solid #ededed',
    backgroundColor: '#212121',

    color: '#fff'
  },

  toggleAll: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    border: '0',
    outline: 'none',
    '-webkit-appearance': 'none',
    '-moz-appearance': 'none',
    '-ms-appearance': 'none',
    '-o-appearance': 'none',
    appearance: 'none',
    margin: '0',
    '&::before': {
      position: 'absolute',
      content: '"❯"',
      fontSize: '22px',
      color: '#212121',
      cursor: 'pointer',
      transition: '.2s',
      marginLeft: '12px'
    }
  },

  'toggleAll-down': {
    '&::before': {
      transform: 'rotate(90deg)'
    }
  }
};
