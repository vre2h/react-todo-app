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
    fill: '#e9e9e9',
    position: 'relative',
    order: '-1',
    marginRight: '10px',
    fontSize: 0,
    transition: '.2s'
  },

  'customCheckbox--mark': {
    fill: '#212121',

    display: 'block'
  },

  'customCheckbox--hide': {
    display: 'none'
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
