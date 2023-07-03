import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Create.css';
import UploadWidget from './picture'

export const Create = () => {
  const [info, setInfo] = useState('');
  const [Img, setImg] = useState('');

  useEffect(() => {
    axios
      .post('http://localhost:5000/users/translateToken', {
        token: localStorage.getItem('logged'),
      })
      .then(({ data }) => {
        setInfo(data)
        setFormData({ ...formData, _id: data._id })
      })
      .catch((err) => console.log(err.message));
  }, []);

  const [initialFormData, setormData] = useState({
    _id: info._id,
    fullName: '',
    job: '',
    image:'',
    address: '',
    phoneNumber: '',
    email: '',
    summary: '',
    experience: [
      {
        title: '',
        company: '',
        location: '',
        startYear: '',
        finishYear: '',
        details: '',
      },
    ],
    education: [
      {
        title: '',
        studies: '',
        location: '',
        startYear: '',
        finishYear: '',
      },
    ],
    languages: [
      { language: '', level: '' },
      { language: '', level: '' },
    ],
    skills: [
      { skill: '', level: '' },
      { skill: '', level: '' },
    ],
  })

  const [formData, setFormData] = useState(initialFormData);




  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  useEffect (()=>{
     const handleChangepic = () => {
    setFormData((prevData) => ({
      ...prevData,
      image:Img
    }));
  };
  handleChangepic()
  },[Img])
 

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const experience = [...prevData.experience];
      experience[index] = {
        ...experience[index],
        [name]: value,
      };

      return { ...prevData, experience };
    });
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const education = [...prevData.education];
      education[index] = {
        ...education[index],
        [name]: value,
      };
      return { ...prevData, education };
    });
  };

  const handleLanguageChange = (index, e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const languages = [...prevData.languages];
      languages[index] = {
        ...languages[index],
        [name]: value,
      };
      return { ...prevData, languages };
    });
  };

  const handleSkillChange = (index, e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const skills = [...prevData.skills];
      skills[index] = {
        ...skills[index],
        [name]: value,
      };
      return { ...prevData, skills };
    });
  };

  const addExperienceField = () => {
    setFormData((prevData) => ({
      ...prevData,
      experience: [
        ...prevData.experience,
        {
          title: '',
          company: '',
          location: '',
          startYear: '',
          finishYear: '',
          details: '',
        },
      ],
    }));
  };
  const removeExperienceField = (index) => {
    setFormData((prevData) => {
      const experience = [...prevData.experience];
      experience.splice(index, 1);
      return { ...prevData, experience };
    });
  };

  const addEducationField = () => {
    setFormData((prevData) => ({
      ...prevData,
      education: [
        ...prevData.education,
        {
          title: '',
          studies: '',
          location: '',
          startYear: '',
          finishYear: '',
        },
      ],
    }));
  };

  const removeEducationField = (index) => {
    setFormData((prevData) => {
      const education = [...prevData.education];
      education.splice(index, 1);
      return { ...prevData, education };
    });
  };

  const addLanguageField = () => {
    setFormData((prevData) => ({
      ...prevData,
      languages: [...prevData.languages, { language: '', level: '' }],
    }));
  };

  const removeLanguageField = (index) => {
    setFormData((prevData) => {
      const languages = [...prevData.languages];
      languages.splice(index, 1);
      return { ...prevData, languages };
    });
  };

  const addSkillField = () => {
    setFormData((prevData) => ({
      ...prevData,
      skills: [...prevData.skills, { skill: '', level: '' }],
    }));
  };

  const removeSkillField = (index) => {
    setFormData((prevData) => {
      const skills = [...prevData.skills];
      skills.splice(index, 1);
      return { ...prevData, skills };
    });
  };

  const handleSubmit = async (e) => {
    try {
      ;
      const { data: newPost } = await axios.post(
        "http://localhost:5000/cv/create",
        formData
      );

      console.log(newPost);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className='form-input'><h1 style={{ backgroundColor: "#7fffd4" }}>About me</h1>

        <label className="form-label">
          Full Name:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="form-input"
          />
        </label>

        <label className="form-label">
          Job:
          <input
            type="text"
            name="job"
            value={formData.job}
            onChange={handleChange}
            className="form-input"
          />
        </label>


        <label >
          <UploadWidget
            setImg={setImg}
            className="form-input"
          />
        </label>


        <label className="form-label">
          What is this for:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="form-input"
          />
        </label>

        <label className="form-label">
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="form-input"
          />
        </label>

        <label className="form-label">
          Email:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
          />
        </label>

        <label className="form-label">
          Summary:
          <textarea name="summary" value={formData.summary} onChange={handleChange} className="form-textarea" />
        </label>
      </div>
      <div className='form-input'><h1 style={{ backgroundColor: "#7fffd4" }}>Experience</h1>
        {formData.experience.map((experience, index) => (
          <div key={index} className="field-group">
            <label className="form-label">
              Experience Title:
              <input
                type="text"
                name={'title'}
                defaultValue={experience?.title}
                onChange={(e) => handleExperienceChange(index, e)}
                className="form-input"
              />
            </label>

            <label className="form-label">
              Experience Company:
              <input
                type="text"
                name={`company`}
                defaultValue={experience.company}
                onChange={(e) => handleExperienceChange(index, e)}
                className="form-input"
              />
            </label>

            <label className="form-label">
              Experience Location:
              <input
                type="text"
                name={`location`}
                defaultValue={experience.location}
                onChange={(e) => handleExperienceChange(index, e)}
                className="form-input"
              />
            </label>

            <label className="form-label">
              Experience Start Year:
              <input
                type="text"
                name={`startYear`}
                defaultValue={experience.startYear}
                onChange={(e) => handleExperienceChange(index, e)}
                className="form-input"
              />
            </label>

            <label className="form-label">
              Experience Finish Year:
              <input
                type="text"
                name={`finishYear`}
                defaultValue={experience.finishYear}
                onChange={(e) => handleExperienceChange(index, e)}
                className="form-input"
              />
            </label>

            <label className="form-label">
              Experience Details:
              <textarea
                name={`details`}
                defaultValue={experience.details}
                onChange={(e) => handleExperienceChange(index, e)}
                className="form-textarea"
              />
            </label>

            <button type="button" onClick={() => removeExperienceField(index)} className="form-button remove-field-button">
              Remove Experience
            </button>
          </div>
        ))}
        <button type="button" onClick={addExperienceField} className="form-button add-field-button">
          Add Experience
        </button>
      </div>

      <div className='form-input'><h1 style={{ backgroundColor: "#7fffd4" }}>Education</h1>
        {formData.education.map((education, index) => (
          <div key={index} className="field-group">
            <label className="form-label">
              Education Title:
              <input
                type="text"
                name={`title`}
                defaultValue={education.title}
                onChange={(e) => handleEducationChange(index, e)}
                className="form-input"
              />
            </label>

            <label className="form-label">
              Education Studies:
              <input
                type="text"
                name={`studies`}
                defaultValue={education.studies}
                onChange={(e) => handleEducationChange(index, e)}
                className="form-input"
              />
            </label>

            <label className="form-label">
              Education Location:
              <input
                type="text"
                name={`location`}
                defaultValue={education.location}
                onChange={(e) => handleEducationChange(index, e)}
                className="form-input"
              />
            </label>

            <label className="form-label">
              Education Start Year:
              <input
                type="text"
                name={`startYear`}
                defaultValue={education.startYear}
                onChange={(e) => handleEducationChange(index, e)}
                className="form-input"
              />
            </label>

            <label className="form-label">
              Education Finish Year:
              <input
                type="text"
                name={`finishYear`}
                defaultValue={education.finishYear}
                onChange={(e) => handleEducationChange(index, e)}
                className="form-input"
              />
            </label>

            <button type="button" onClick={() => removeEducationField(index)} className="form-button remove-field-button">
              Remove Education
            </button>
          </div>
        ))}
        <button type="button" onClick={addEducationField} className="form-button add-field-button">
          Add Education
        </button>
      </div>

      <div className='form-input'><h1 style={{ backgroundColor: "#7fffd4" }}>Language</h1>
        {formData.languages.map((language, index) => (
          <div key={index} className="field-group">
            <label className="form-label">
              Language:
              <input
                type="text"
                name={`language`}
                defaultValue={language.language}
                onChange={(e) => handleLanguageChange(index, e)}
                className="form-input"
              />
            </label>

            <label className="form-label">
              Language Level:
              <input
                type="text"
                name={`level`}
                defaultValue={language.level}
                onChange={(e) => handleLanguageChange(index, e)}
                className="form-input"
              />
            </label>

            <button type="button" onClick={() => removeLanguageField(index)} className="form-button remove-field-button">
              Remove Language
            </button>
          </div>
        ))}
        <button type="button" onClick={addLanguageField} className="form-button add-field-button">
          Add Language
        </button>
      </div>

      <div className='form-input'><h1 style={{ backgroundColor: "#7fffd4" }}>Skill</h1>
        {formData.skills.map((skill, index) => (
          <div key={index} className="field-group">
            <label className="form-label">
              Skill:
              <input
                type="text"
                name={`skill`}
                defaultValue={skill.skill}
                onChange={(e) => handleSkillChange(index, e)}
                className="form-input"
              />
            </label>

            <label className="form-label">
              Skill Level:
              <input
                type="text"
                name={`level`}
                defaultValue={skill.level}
                onChange={(e) => handleSkillChange(index, e)}
                className="form-input"
              />
            </label>

            <button type="button" onClick={() => removeSkillField(index)} className="form-button remove-field-button">
              Remove Skill
            </button>
          </div>
        ))}
        <button type="button" onClick={addSkillField} className="form-button add-field-button">
          Add Skill
        </button>
      </div>

      <button type="submit" className="form-button submit-button">
        Submit
      </button>
    </form>
  );
};


