import { useEffect, useState } from "react"

import AlertMessage from "./AlertMessage";

import axios from "axios";








  const CrudDemo= ()=>{
    const API_URL= 'http://localhost:8080/api/v1/person';

    const[person,SetPerson]=useState();
    const[personbyid,SetPersonbyid]=useState();

    const[details,SetPersonDetails]=useState();

    const [alert, setAlert] = useState({type: '', message: ''});

    const[showDetails,SetShoWDetails]=useState(false);


useEffect( async()=>{


    await axios.get(API_URL).then(response =>{
        console.log("RESPONSE:", response);
        if(response.status === 200){
            SetPerson(response.data);
            setAlert({type: 'success', message: 'GET operation is done!'})
        } else {
            setAlert({type: 'warning', message: 'Display API Error Message...'});
        }
    }).catch(error => {
        console.log("ERROR: ", error);
        setAlert({type: 'danger', message: error.message})

    })
});



const PersonDetails=({id})=>{

    const[useid,SetSelectedId]=useState(id);


    useEffect(async()=>{


        await axios.get(API_URL +'/' + useid ).then(response =>{
            console.log("RESPONSE:", response);
            if(response.status === 200){
                SetPersonbyid(response.data);
                setAlert({type: 'success', message: 'GET operation is done!'})
            } else {
                setAlert({type: 'warning', message: 'Display API Error Message...'});
            }
        }).catch(error => {
            console.log("ERROR: ", error);
            setAlert({type: 'danger', message: error.message})
    
        })
    });


return (

<>
<br />
        <hr />
        <br />
        <div className="card">
          <div className="card-header">Teacher Details</div>
          <br></br>
          <div className="card-body">
            <div className="bm-3">
              <span>Student id: {details.id}</span>
            </div>
            <div className="bm-3">
              <span>First Name: {details.firstName}</span>
            </div>
            <div className="bm-3">
              <span>Last Name: {details.lastName}</span>
            </div>
            <div className="bm-3">
              <span>email: {details.email}</span>
            </div>
            <div className="bm-3">
              <span>title: {details.title}</span>
            </div>
        

            <div className="bm-3">
              <button
                type="button"
                className="btn btn-primary "
                onClick={() => {
                  setPersonDetails([]);
                  SetShoWDetails(false);
                  console.log(person);
                }}
              >
                {" "}
                Hide
              </button>
            </div>
          </div>
        </div>
      </>
   )}
   let Tableheader = () => {
    return (
      <>
        <thead>
          <tr>
            <td>id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Action</td>
          </tr>
        </thead>
      </>
    );
  };

  let Tablebody = (props) => {
    return (
      <>
        <tbody>
          {props.list.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id} </td>
                <td>{item.firstName} </td>
                <td>{item.lastName} </td>
                <td>{item.email} </td>

                <td>
                  <button
                    type="button"
                    className="btn btn-primary "
                    onClick={(e) => { e.preventDefault();console.log(item);

                      SetPersonDetails(item);
                      <PersonDetails id={item.id}/>
                        

                      SetShoWDetails(true);
                      console.log(item.id);
                    }}
                  >
                    {" "}
                    Details
                  </button>

                  <button type="button" className="btn btn-primary " onClick={(e) => { e.preventDefault(); console.log(item);   SetPersonDetails(item); console.log(item.id); }} >
                    {" "}
                    Delete
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary "
                    onClick={(e) => {
                      e.preventDefault();
                      console.log(item);
                      console.log(person.id);
                    }}
                  >
                    {" "}
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </>
    );
  };
  
 



return (
    <>
    
    <p> Backend conect with axios</p>
    <AlertMessage type={alert.type} message={alert.message} />


    <div>
      <table>
        <Tableheader />
       <Tablebody list={person}/>


       




      </table>
    </div>







    {showDetails && (
      <>
        <br />
        <hr />
        <br />
        <div className="card">
          <div className="card-header">Teacher Details</div>
          <br></br>
          <div className="card-body">
            <div className="bm-3">
              <span>Student id: {details.id}</span>
            </div>
            <div className="bm-3">
              <span>First Name: {details.firstName}</span>
            </div>
            <div className="bm-3">
              <span>Last Name: {details.lastName}</span>
            </div>
            <div className="bm-3">
              <span>email: {details.email}</span>
            </div>
            <div className="bm-3">
              <span>title: {persdetailson.title}</span>
            </div>
        

            <div className="bm-3">
              <button
                type="button"
                className="btn btn-primary "
                onClick={() => {
                  setPersonDetails([]);
                  SetShoWDetails(false);
                  console.log(person);
                }}
              >
                {" "}
                Hide
              </button>
            </div>
          </div>
        </div>
      </>
    )}
  </>





)}

export default CrudDemo;