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
    paddingLeft: '50px',
    border: '1px solid #e9e9e9',
    borderRight: 'none',
    fontFamily: "'Yanone Kaffeesatz', sans-serif",
    fontSize: '18px',
    boxShadow: 'inset 0 -2px 1px rgba(0, 0, 0, 0.03)',
    borderRadius: '0'
  },

  button: {
    width: '71px',

    border: '1px solid #212121',
    borderBottom: 'none',
    backgroundColor: '#212121',

    color: '#fff',
    textAlign: 'center'
  },

  toggleAll: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    border: '0',
    outline: 'none',
    opacity: '0',
    '-webkit-appearance': 'none',
    '-moz-appearance': 'none',
    '-ms-appearance': 'none',
    '-o-appearance': 'none',
    appearance: 'none',
    margin: '0'
  },

  'toggleAll-custom': {
    alignSelf: 'center',
    position: 'absolute',
    marginTop: '-3px',
    fontSize: '22px',
    color: '#212121',
    cursor: 'pointer',
    transition: '.2s',
    marginLeft: '22px'
  },

  'toggleAll-custom--down': {
    marginTop: '0',
    transform: 'rotate(90deg)'
  }
};
