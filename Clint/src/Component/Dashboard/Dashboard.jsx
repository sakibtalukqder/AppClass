import axios from 'axios';
import { useEffect, useState } from 'react';
import img from '../../assets/images/login/login.svg';


const Dashboard = () => {

  const delUser = () => {

    window.alert("Unknown Error....!!")

  };

  const updateUser = () => {

    window.alert("Unknown Error....!!")

  };

  const [userData, serData] = useState([]);

  useEffect(() => {

    axios.get("http://localhost:3000/api/user")
      .then((res) => {

        serData(res.data.user)
        console.log(userData);
      })

  }, [])


  return (
    <div>
      <h1 className='text-center text-4xl p-7' >Dashboard</h1>
      {userData.map((data) => {
        return (
          <div className="card m-5 card-side bg-base-100 shadow-xl">
            <figure><img className='w-32 pl-9' src={img} alt="Movie" /></figure>
            <div className="card-body">
              <h2 className="card-title">{"Name: " + data.fName + " " + data.lName}</h2>
              <p>{"Department Of, " + data.department}</p>
              <p>{"Roll No: " + data.rollNo + " Shift :" + data.shift + "(" + data.section + ")"}</p>
              <div className="card-actions justify-end">
                <button onClick={updateUser} className="btn btn-secondary ">Update</button>
                <button onClick={delUser} className="btn btn-primary">Delete</button>
              </div>
            </div>
          </div>
        )
      })}

    </div>
  );
};

export default Dashboard;