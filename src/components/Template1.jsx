import React, { useEffect, useState } from 'react'
import './Template1.css'
import axios from 'axios'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from "jspdf";



export const Template1 = () => {
  const [info, setInfo] = useState({})
  let { state } = useLocation();
  const [loader,setLoader]=useState(false)
  const convertHtmlToPdf = () => {
    const capture = document.getElementById("all2")
    setLoader(true)

    html2canvas(capture,{ allowTaint: true, useCORS:true})
      .then((canvas) => {
        const imgData = canvas.toDataURL("img/png");
        const doc = new jsPDF('p', 'mm', 'a4');
        const componentWidth=doc.internal.pageSize.getWidth()
        const componentHeight=doc.internal.pageSize.getHeight()
        doc.addImage(imgData, 'PNG', 0, 0,componentWidth,componentHeight);
        setLoader(false)
        doc.save("my-resume.pdf")
      })
  }

 useEffect(() => {
    axios
      .post("http://localhost:5000/users/translateToken",
        {
          token: localStorage.getItem("logged")
        })
      .then(({ data }) => {
        console.log(data)
        setInfo(data.cvInfo[state.state.index])
      }
      )
      .catch((err) => console.log(err.message));
  }, [])
  // const [Changed, setChanged] = useState(false);
  // const [EditData, setEditData] = useState({});
  // const [refresh, setRefresh] = useState(false);
  // const [initialFormData, setormData] = useState({
  //   _id: info._id,
  //   fullName: '',
  //   job: '',
  //   image: '',
  //   address: '',
  //   phoneNumber: '',
  //   email: '',
  //   summary: '',
  //   experience: [
  //     {
  //       title: '',
  //       company: '',
  //       location: '',
  //       startYear: '',
  //       finishYear: '',
  //       details: '',
  //     },
  //   ],
  //   education: [
  //     {
  //       title: '',
  //       studies: '',
  //       location: '',
  //       startYear: '',
  //       finishYear: '',
  //     },
  //   ],
  //   languages: [
  //     { language: '', level: '' },
  //     { language: '', level: '' },
  //   ],
  //   skills: [
  //     { skill: '', level: '' },
  //     { skill: '', level: '' },
  //   ],
  // })
 

  // const openChange = (info) => {
  //   setChanged(!Changed)
  //   setEditData(info.cvInfo[0])
  // }

  // const handleChange = async (dataForm) => {
  //   dataForm.preventDefault()

  //   try {
  //     const cake = await axios.patch("http://localhost:5000/cv/patch", {

  //       initialFormData
  //     });
  //     setRefresh(!refresh);
  //     console.log(cake.data)
  //   } catch (err) {
  //     console.log(err.message)
  //   }
  // }

  return (
    <div className='all'>
      <button onClick={convertHtmlToPdf}>PDF</button>
      <div id='all2'>
        <div className='firstrow' style={{ fontSize: '30px' }
        }>
          {info.fullName}
          <img className='naknik' src={info.image} alt="" />
          {console.log(info.image)}
        </div>
        <div className='secondrow'>
          <div style={{ fontSize: "30px", backgroundColor: "#a6efd7" }}> About me:</div>
          <div style={{ margin: "20px" }}>{info.job}</div>
          {/* <div style={{ margin: "20px" }}> {info.address}</div> */}
          <div style={{ margin: "20px" }}> {info.phoneNumber}</div>
          <div style={{ margin: "20px" }}> {info.email}</div>
          <div style={{ margin: "20px" }}>{info.summary}</div>
          <hr />
        </div>
        <hr />
        <div className='thirdandfourth'>
          <div className='thirdrow'>
            <div style={{ fontSize: "30px", backgroundColor: "#a6efd7" }}>My experience:</div>
            {info.experience && info.experience.map((experience, index) =>
              <div key={index}>

                <div className='headereExp'>{experience.title}</div>
                <div className='LowerExp'>{experience.company}</div>
                <div className='LowerExp'>{experience.location}</div>
                <div className='LowerExp'>started at:{experience.startYear}</div>
                <div className='LowerExp'>finished at:{experience.finishYear}</div>
                <div className='LowerExp'>more details:{experience.details}</div>
              </div>
            )}
          </div>
          <div className='fourthrow'>
            <div style={{ fontSize: "30px", backgroundColor: "#a6efd7" }}>My education:</div>
            {info.education && info.education.map((education, index) =>
              <div key={index}>
                <div className='headereExp'>{education.title}</div>
                <div className='LowerExp'>{education.studies}</div>
                <div className='LowerExp'>started at:{education.startYear}</div>
                <div className='LowerExp'>finished at:{education.finishYear}</div>
                <div className='LowerExp'>{education.location}</div>
              </div>
            )}
          </div>
        </div>
        <hr />
        <div className='fifthrow'>
          <div className='lang'>
            {info.languages && info.languages.map((languages, index) =>
              <div key={index} className='skillandlang'>
                <div className='headereExp'>{languages.language}</div>
                <div className='LowerExp'><Rating name="read-only" value={languages.level} readOnly /></div>
              </div>
            )}
          </div>

          <div className='skill'>
            {info.skills && info.skills.map((skills, index) =>
              <div key={index} className='skillandlang'>
                <div className='headereExp'>{skills.skill}</div>
                <div className='LowerExp'><Rating name="read-only" value={skills.level} readOnly /></div>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* <div>
        <button onClick={() => openChange()}>change</button>
        {Changed && <div>
          <form onSubmit={(data) => handleChange(data)} >
            <input type="text" placeholder="title" defaultValue={EditData.title} />
            <button type="submit">Submit</button>
          </form>
        </div>}
      </div> */}
    </div>
  )
}
