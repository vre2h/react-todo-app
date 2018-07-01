export default {
  default: {
    '-webkit-appearance': 'none',
    '-moz-appearance': 'none',
    '-ms-appearance': 'none',
    '-o-appearance': 'none',
    appearance: 'none',
    cursor: 'pointer',
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
    order: '-1',
    width: '25px',
    height: '25px',
    border: ' 1px solid #e9e9e9',
    borderRadius: '50%',
    fontSize: 0,
    transition: '.2s'
  },

  'customCheckbox--mark': {
    display: 'block',
    marginTop: '-18px',
    fontSize: '45px',
    color: '#3a3a3a'
  }
};
