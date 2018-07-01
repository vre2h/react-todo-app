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
    padding: '7px 14px 10px 14px',
    fontSize: '18px',
    border: '1px solid #e9e9e9',
    borderTop: '0',
    cursor: 'pointer',
    color: '#212121'
  },

  list__label: {
    margin: '0 10px'
  },

  list__checkbox: {
    '&:checked + label': {
      textDecoration: 'line-through',
      color: '#ccc'
    }
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
