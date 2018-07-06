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
    flexGrow: '1',
    height: '50px',
    alignItems: 'center',
    border: '1px solid #e9e9e9',
    borderTop: '0'
  },

  filter__btn: {
    marginLeft: '7px',
    padding: ' 7px 14px',

    border: '1px solid #e9e9e9'
  },

  'list__btn-del': {
    zIndex: '200',
    width: '70px',
    border: '1px solid #e9e9e9',
    borderLeft: 'none',
    borderTop: 'none',
    background: 'transparent',
    textAlign: 'center'
  },

  'list__item-wrapper': {
    position: 'relative',
    display: 'flex'
  }
};
