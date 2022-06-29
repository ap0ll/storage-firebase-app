import React from 'react'
import FileComponent from './FileComponent'
import SidebarItem from './SidebarItem'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile'
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder'
import StarBoderIcon from '@material-ui/icons/StarBorder'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import StorageIcon from '@material-ui/icons/Storage'
import './Sidebar.css'

const Sidebar=()=> {
    return(
        <div className="sidebar">
            <FileComponent/>
            <div className="sidebar__itemsContainer">
                <SidebarItem 
                arrow icon={(<InsertDriveFileIcon/>)} 
                label={'My Drive'} />
                <SidebarItem 
                arrow icon={(<ImportantDevicesIcon/>)} 
                label={'Computers'} />
                <SidebarItem 
                arrow icon={(<PeopleAltIcon/>)} 
                label={'Shared with me'} />
                <SidebarItem 
                arrow icon={(<QueryBuilderIcon/>)} 
                label={'Recent'} />
                <SidebarItem 
                arrow icon={(<StarBoderIcon/>)} 
                label={'Starred'} />
                <SidebarItem 
                arrow icon={(<DeleteOutlineIcon/>)} 
                label={'Bin'} />
                <hr/>
                <SidebarItem 
                arrow icon={(<StorageIcon/>)} 
                label={'Storage'} />

            </div>
        </div>
    )

}
export default Sidebar