import React from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import Comp1 from "./comps/comp1";
import Comp2 from "./comps/comp2";
import Comp3 from "./comps/comp3";
import Comp4 from "./comps/comp4";
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


export default class App extends React.Component {
  state = {
    comps: [
      {
        index: 1,
        Comp: <Comp1/>
      },
      {
        index: 2,
        Comp: <Comp2/>
      },
      {
        index: 3,
        Comp: <Comp3/>
      },
      {
        index: 4,
        Comp: <Comp4/>
      }
    ],
    data:[
      {
        id: 0,
        name: "Mohammad22",
        title: "Hey",
        content: "We will have a night meeting today",
        pic: "Habeeb.png",
        location: "Inbox"
      },
      {
        id: 1,
        name: "Loader",
        title: "Accepted",
        content: "okay i'm in",
        pic: "Ahmad.png",
        location: "Inbox"
      },
      {
        id: 2,
        name: "Ahmed",
        title: "Slepping",
        content: "nahh i will be sleeping. feel free to fire me",
        pic: "Ali.png",
        location: "Inbox"
      }
    ],
    status: false,
    index: 1
  };

  handleDelete = id => {
    let temp = this.state.data;
    temp[id].location = "Delete";
    this.setState({ date: temp });
  };

  handleChange = index => {
    this.setState({ index: index})
  };

  handleStatus=()=>{
    this.setState({status: !this.state.status})
  };

  render(){

    const drawer = (
      <div >
        <div style={{width: 150, textAlign:"right"}}>
          <IconButton onClick={this.handleStatus}>
              <ChevronLeftIcon />
          </IconButton>
        </div>
        
        <Divider />
        <List>
          {['Index', 'Trash', 'comp3', 'comp4'].map((text, index) => (
            <ListItem button onClick={() => this.handleChange(index+1)} key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div>
          <AppBar
        position="fixed"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={this.handleStatus}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
        
        <Drawer
              variant="persistent"
              open={this.state.status}
            >
            {drawer}
        </Drawer>
      </div>
    );
  }
}