export default {
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    margin: '20px 0',
    justifyContent: 'space-between'
  },

  filter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'space-between',
    justifyContent: 'center'
  },

  list: {
    listStyle: 'none',
    margin: '0',
    padding: '0'
  },

  list__wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },

  list__item: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    padding: '15px',
    fontSize: '18px',
    border: '1px solid #e9e9e9',
    borderTop: '0',
    cursor: 'pointer',
    color: '#212121'
  },

  list__label: {
    position: 'relative',
    zIndex: '-100',
    margin: '0 10px',
    cursor: 'pointer',
    marginLeft: '20px'
  },

  list__checkbox: {
    position: 'relative',
    display: 'block',
    '-webkit-appearance': 'none',
    cursor: 'pointer',
    '&:checked + label': {
      textDecoration: 'line-through',
      color: '#ccc'
    }
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
  },

  filter__btn: {
    padding: ' 7px 14px',
    marginLeft: '7px',
    border: '1px solid #e9e9e9',
    background: 'transparent',
    cursor: 'pointer',
    transition: '.3s',
    fontFamily: "'Yanone Kaffeesatz', sans-serif",
    fontSize: '18px',
    '&:hover': {
      color: 'burlywood'
    }
  }
};
