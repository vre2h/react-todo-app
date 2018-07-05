export default {
  default: {
    '-webkit-appearance': 'none',
    '-moz-appearance': 'none',
    '-ms-appearance': 'none',
    '-o-appearance': 'none',
    appearance: 'none',
    cursor: 'pointer',
    opacity: '0',
    '&:checked + label': {
      textDecoration: 'line-through',
      color: '#ccc'
    }
  },

  list__label: {
    position: 'relative',
    zIndex: '-100',
    width: '200px',
    margin: '0 10px',
    cursor: 'pointer',
    marginLeft: '20px'
  },

  list__checkbox: {
    position: 'relative',
    display: 'block'
  },

  customCheckbox: {
    position: 'relative',
    order: '-1',
    width: '25px',
    height: '25px',
    marginRight: '10px',
    border: ' 1px solid #e9e9e9',
    borderRadius: '50%',
    fontSize: 0,
    transition: '.2s'
  },

  'customCheckbox--mark': {
    position: 'absolute',
    right: 0,
    color: '#3a3a3a',
    transform: 'scale(5)',
    fontSize: '10px'
  },

  list__edit: {
    border: 0,
    outline: 0,
    fontSize: '18px',
    fontFamily: "'Yanone Kaffeesatz', sans-serif",
    fontStyle: 'italic',
    color: '#ccc'
  }
};
