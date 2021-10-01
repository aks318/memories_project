import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15px',
  },

  [theme.breakpoints.down('sm')] : {   //similar to media query , if screen size is small then have this class
    mainContainer : {
      flexDirection : 'column-reverse'
    }
  }
  
}));