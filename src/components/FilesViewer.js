 
import React, {useEffect, useState} from 'react'
import './FilesViewer.css'
import { db } from '../firebase'
 
import FileCard from './FileCard'
            
 
 
import FileItem from './FileItem'  


const FilesViewer = () => {
    const [files,setFiles] =useState([])
    useEffect(() => {
         db.collection('myfiles').onSnapshot(snapshot=>{
            setFiles(snapshot.docs.map(doc => ({
                id: doc.id,
                item: doc.data()
            })))
         })
      },[])


    return(
        <div className='fileViewer'>   
        <div className="fileViewer__row">

    {
                files.slice(0, 5).map(({id,item})=>(
                    <FileCard key={id} name={item.caption}/>
                ))
            }

        

        </div>
        <div className="fileViewer__titles"> 
            <div className="fileViewer__titles--left"> 
                <p>Name</p>
            </div>
            <div className="fileViewer__titles--right"> 
                <p>File size</p>
            </div>
        </div>
        {
            files.map(({id,item})=>(
                <FileItem id={id} caption={item.caption}
                timestamp={item.timestamp} fileUrl={item.fileUrl}
                size={item.size}/>
                
            ))
}
</div>
)
}
export default FilesViewer

/*<*/