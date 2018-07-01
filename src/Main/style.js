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
    width: '100vw',
    height: '100vh'
  },

  title: {
    lineHeight: '150px',
    fontSize: '170px',
    fontWeight: '300',
    color: titleColors[1],
    margin: '10px 0',
    cursor: 'pointer',
    transition: '.3s',
    '&:hover': {
      color: titleColors[0]
    }
  },
  wrapper: {
    width: '320px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
};
