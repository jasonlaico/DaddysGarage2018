import React from 'react';
import {Switch, Route} from 'react-router-dom'

import AboutUs from './components/AboutUs/AboutUs';
import Dashboard from './components/Dashboard/Dashboard';
import FAQ from './components/FAQ/FAQ';
import ListingPortal from './components/ListingPortal/ListingPortal';
import ToolUpdate from './components/ListingPortal/ToolUpdate';

import ListTool from './components/ListTool/ListTool';
import Marketplace from './components/Marketplace/Marketplace';
import Marketplaceupdate from './components/Marketplace/Marketplaceupdate';

import Safety from './components/Safety/Safety';
import ToolDetail from './components/ToolDetail/ToolDetail';
import ToolsForRent from './components/ToolsForRent/ToolsForRent';
import RentTime from './components/ToolDetail/RentTime';
import Contact from './components/Contact/Contact';

import Account from './components/Account/Account';

export default (
  <Switch> 
    <Route path="/AboutUs" component={AboutUs} />
    <Route path="/FAQ" component={FAQ} />   
    {/* <Route path="/ListingPortal" component={ListingPortal} />      */}
    <Route path="/ToolUpdate/:tool_id" component={ToolUpdate} />          
     
    <Route path="/Marketplace" component={Marketplace} />     
    <Route path="/Marketplaceupdate/:id" component={Marketplaceupdate} />          
     
    <Route path="/Safety" component={Safety} />          
    <Route path="/ToolsForRent" component={ToolsForRent} /> 
    <Route path="/ToolDetail/RentTime/:tool_id" component={RentTime} /> 
    <Route path="/Account" component={Account} />          
    <Route path="/Contact" component={Contact} />          

    <Route path="/ToolDetail/:tool_id" component={ToolDetail} />          
    <Route path="/ListingPortal/:user_id" component={ListingPortal} /> 
    <Route path="/ListTool" component={ListTool} />          
    <Route exact path="/" component={Dashboard} />  

  </Switch>
);