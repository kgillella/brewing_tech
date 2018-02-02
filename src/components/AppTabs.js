import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React, { Component } from 'react';
import AutoCompleteSearch from './AutoCompleteSearch';
import 'react-tabs/style/react-tabs.css'

class AppTabs extends React.Component {
 
  
    render() {
      var renderEle;
      return ( 
       <div className="tabs-wrapper">
        <Tabs defaultIndex={1}>
    <TabList>
      <Tab>Immediate Parking</Tab>
      <Tab>Reserved Parking</Tab>
    </TabList>

    <TabPanel>
     <div className="tab-content1">
      
        <AutoCompleteSearch immediate="true"/>
       
       
     </div>
    </TabPanel>
    <TabPanel>
    <div className="tab-content1">
      
      <AutoCompleteSearch immediate="true"/>
     
     
   </div>
   
    </TabPanel>
  </Tabs></div>
        
      );
    }
    }
    
    export default AppTabs;