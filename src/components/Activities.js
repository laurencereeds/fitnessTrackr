import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';
import {fetchActivities, setToken, getToken, createActivity} from '../api';

const Activities = (props) => {
    const { token, setToken} = props;
    const [allActivities, setAllActivities] = useState([]);
    const [isActive, setIsActive] = useState(false)
    const [name, setName]= useState('');
    const [description, setDescription]= useState('');
    let history = useHistory();

    useEffect( () => {
        // fetchActivities().then(response => setAllActivities(response)).catch(error => console.log(error))
        fetchActivities().then(setAllActivities)
        console.log('activities', allActivities);
        const token = getToken();
        if(token){
            setToken(token) ;
        }
 
    },[])

    const handleCreateActivity = async () => {
        // let history = useHistory();
        try {
            // let history = useHistory();
            event.preventDefault();
            // console.log('activity.name', activities)
            const result = await createActivity(name, description);
            console.log(result);
            // console.log('result.name', result.name)
            if (result.error) {
                swal({
                    title: "Oh no!",
                    text: "An activity with this name already exists",
                    icon: "warning",
                    button: "Oh la la!",
                  });
            } else {
            allActivities.push(result)
            // let history = useHistory();
            // ('activityForm').hide()
            // history.push("/activities");
            // <myRoutines />
            swal({
                title: "Success!",
                text: "You created a new activity!",
                icon: "success",
              });
            }

        } catch(error) {
            console.error(error);
        }

    }
 
    return (<>
    { 
    token ?
   <div>
    <button type="button" className="btn btn-primary btn-lg btn-block" onClick={setIsActive}>Create Activity</button>
    <div>
    { isActive ? 
        <form className="activityForm">
            <div className="form-group">
            <label >Name</label>
            <input type="email" className="form-control" value={name} onChange={(e) => {setName(e.target.value)}}></input>
            </div>
            <div className="form-group">
            <label >Description</label>
            <input type="email" className="form-control" value={description} onChange={(e) => {setDescription(e.target.value)}}></input>
            <button type="submit" className="btn btn-primary" onClick={handleCreateActivity}>Submit</button>
            </div>
        </form>
         : " "
    }

    </div>
    <div id="allActivities"><b style={{ fontSize: '3rem', marginLeft: "2rem"}}>Activities</b></div>

    {allActivities && allActivities.map(({id, name, description}) => 
    <div key={id}
    className="row">
    <div className="col-sm-6">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
    )}
    </div>

    :
    
    allActivities && allActivities.map(({id, name, description}) => 
<div className="container">
    <div key={id}
    className="row justify_content-center" style={{ marginBottom: '20px'}}>
    <div className="col-3 mr-auto">
      <div className="card card-body mb-2">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</div>
    )
    }
    </>)
};


export default Activities;