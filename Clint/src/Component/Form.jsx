import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [department, setDepartment] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [shift, setShift] = useState("");
  const [section, setSection] = useState("");
  const navigate = useNavigate()


  const handleRegister = () => {
    axios.post("http://localhost:3000/api/user/register", { fName, lName, rollNo, department, shift, section })
      .then(() => {
        toast("Registration successful");
        navigate("/dashboard");
      })
      .catch((err) => {
        console.error(err.message);
        toast("Something went wrong");
        navigate("/register");
      });
  };


  return (
    <div>
      <br />
      <div className='flex justify-center py-24'>
        <div className="w-full md:w-1/3 lg:w-1/2">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                First Name
              </label>
              <input
                value={fName}
                onChange={(e) => setFName(e.target.value)}
                name="fName"
                type="text"
                placeholder="Enter your Fname"
                required
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                Last Name
              </label>
              <input
                value={lName}
                onChange={(e) => setLName(e.target.value)}
                name="lName"
                type="text"
                placeholder="Enter your lname"
                required
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                Department
              </label>
              <input
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                name='department'
                type='text'
                required
                placeholder="Enter your Department"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" />
              <p className="text-gray-600 text-xs italic"></p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                Roll No
              </label>
              <input
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
                name='rollNo'
                type='text'
                required
                placeholder="Enter your Roll No"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                Shift
              </label>
              <div className="relative">
                <input value={shift}
                  onChange={(e) => setShift(e.target.value)}
                  name='shift' className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" placeholder='First/Second' />
                
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                Section
              </label>
              <input
                value={section}
                onChange={(e) => setSection(e.target.value)}
                name='section' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="A/B" />
            </div>
          </div>
          <button onClick={handleRegister} className="btn btn-active btn-accent flex justify-center items-center my-5">Submit</button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Form;