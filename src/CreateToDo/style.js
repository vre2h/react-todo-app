export default {
  root: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
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
    height: '100%',
    width: '50px',
    border: '1px solid #ededed',
    fontFamily: "'Yanone Kaffeesatz', sans-serif",
    cursor: 'pointer',
    fontSize: '18px',
    transition: '.5s',
    backgroundColor: '#212121',
    color: '#fff',
    '&:hover': {
      color: 'burlywood'
    }
  },

  toggleAll: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    border: '0',
    outline: 'none',
    '-webkit-appearance': 'none',
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
