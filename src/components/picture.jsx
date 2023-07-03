import React from 'react'
import { useEffect,useRef } from 'react'
function UploadWidget({setImg}) {
    const cloudinaryRef =useRef();
    const widgetRef =useRef();
    useEffect(()=>{
        cloudinaryRef.current=window.cloudinary;
         widgetRef.current=cloudinaryRef.current.createUploadWidget({
            cloudName:"chen1234",
            uploadPreset:"qkoelmkp",
        },function(error,result){
          if(!error&&result&&result.event=="success"){
            console.log(result.info.url);
            setImg(result.info.url);
          }
        })
    },[])
  return (
    <div>
        <div className="btn-div" onClick={()=>widgetRef.current.open()}>upload image</div>
    </div>
  )
}

export default UploadWidget