import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Rating from '@mui/material/Rating';
import html2canvas from 'html2canvas';
import jsPDF from "jspdf";
import './Template3.css'
import { useLocation } from 'react-router-dom';

export const Template3 = () => {
    const [info, setInfo] = useState({})
    const [loader,setLoader]=useState(false)
    let { state } = useLocation();
    useEffect(() => {
        axios
            .post("http://localhost:5000/users/translateToken",
                {
                    token: localStorage.getItem("logged")
                })
            .then(({ data }) => setInfo(data.cvInfo[state.state.index])
            )
            .catch((err) => console.log(err.message));
    }, [])

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
    return (
        <div className='all'>
              <button onClick={convertHtmlToPdf}>PDF</button>
            <div id='all2'>
                <div className='firstrow2' style={{ fontSize: '30px' }
                }>
                    {info.fullName}
                    <img className='naknik' src={info.image} alt="" />
                </div>
                <div className='allbelow'>
                    <div className='secondrow2'>
                        <div style={{ fontSize: "30px", backgroundColor: "#b8ae21" }}> About me:</div>
                        <div style={{ margin: "20px" }}>{info.job}</div>
                        {/* <div style={{ margin: "20px" }}> {info.address}</div> */}
                        <div style={{ margin: "20px" }}> {info.phoneNumber}</div>
                        <div style={{ margin: "20px" }}> {info.email}</div>
                        <div style={{ margin: "20px" }}>{info.summary}</div>
                        <hr />
                    </div>
                    <hr />

                    <div className='thirdandfourth2'>
                        <div className='thirdrow2'>
                            <div style={{ fontSize: "30px", backgroundColor: "#b8ae21" }}>My experience:</div>
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
                        <div className='fourthrow2'>
                            <div style={{ fontSize: "30px", backgroundColor: "#b8ae21" }}>My education:</div>
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
                </div>

                <hr />
                <div className='fifthrow2'>
                    <div className='lang'>
                        {info.languages && info.languages.map((languages, index) =>
                            <div key={index} className='skillandlang2'>
                                <div className='headereExp'>{languages.language}</div>
                                <div className='LowerExp'><Rating name="read-only" value={languages.level} readOnly /></div>
                            </div>
                        )}
                    </div>

                    <div className='skill'>
                        {info.skills && info.skills.map((skills, index) =>
                            <div key={index} className='skillandlang2'>
                                <div className='headereExp'>{skills.skill}</div>
                                <div className='LowerExp'><Rating name="read-only" value={skills.level} readOnly /></div>
                            </div>
                        )}
                    </div>


                </div>
            </div>
        </div>
    )
}