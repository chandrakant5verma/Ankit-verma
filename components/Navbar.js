import React from 'react'
import './Navbar.css'
import { Button} from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import PersonIcon from '@mui/icons-material/Person';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import LogoutIcon from '@mui/icons-material/Logout';
import CircleNotificationsTwoToneIcon from '@mui/icons-material/CircleNotificationsTwoTone';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Footer from './Footer';

const Navbar = () => {
  return (
    <>
    <div className='searchbar'>
       <form >
        <input className="searchitem" type="search" placeholder="Search users, payments" />
       <Button startIcon={<PersonIcon/>}endIcon={<CircleNotificationsTwoToneIcon/>}>Aditya singh</Button>
      </form>
    </div>
    
    <div className='items'>
    <div className='lable'>
      <h3>Edviron</h3>
    </div><br /><br />
    <br />
    <Button startIcon={<GridViewIcon/>}>Dashboard</Button><br /><br />
      <Button startIcon={<PersonIcon/>}>Users</Button><br /><br />
      <Button startIcon={<PictureAsPdfIcon/>}>Projects</Button><br /><br />
      <Button >Sales</Button><br /><br /><br /><br />
      <Button startIcon={<SettingsApplicationsIcon/>}>Setting</Button><br /><br />
      <Button startIcon={<LogoutIcon/>}>Logout</Button>
    </div>
    <div>
      <h4>In the last 30 days,</h4>
    </div>

    <div>
      <h4>All users</h4>
      Monitor, sales, transactions, etc
    <input className='search2' type="search" placeholder="Search transactions"/>
    <Button startIcon={<FilterAltOutlinedIcon/>}>Filter</Button>
    </div>


    <div>
      <h4>Recent Transactions</h4>
      <Button variant="contained" color="success">View all users</Button>
    </div>


    <div>
      <h4>Highest Transacions</h4>
      <Button variant="contained" color="success">View all transactions</Button>
    </div>


    <div>
    <Stack spacing={2}>
      <Pagination count={10} color="primary" />
    </Stack>
    </div>


    <div className='time'>
    <Footer />
    </div>
    </>
  )
}

export default Navbar
