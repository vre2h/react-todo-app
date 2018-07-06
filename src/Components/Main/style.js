const titleColors = [
  'rgba(175, 47, 47, 0.15)',
  'rgba(93, 194, 175, 0.55)',
  'rgba(119, 119, 119, 0.45)'
];

export default {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: '40px'
  },

  title: {
    lineHeight: '150px',
    fontSize: '170px',
    fontWeight: '300',
    margin: '10px 0',
    cursor: 'pointer',
    transition: '.3s',
    '&-dark': {
      color: titleColors[0],
      '&:hover': {
        color: titleColors[2]
      }
    },
    '&-light': {
      color: titleColors[1],
      '&:hover': {
        color: titleColors[0]
      }
    },
    '@media (max-width: 660px)': {
      fontSize: '150px'
    }
  },
  wrapper: {
    width: '320px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 660px)': {
      padding: '10px'
    }
  }
};
