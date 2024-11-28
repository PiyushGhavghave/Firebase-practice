import React, { useEffect, useState } from 'react'

import { getDatabase , onValue, ref} from 'firebase/database'
import { app } from '../Firebase/firebase'

//make instance of databse
const db = getDatabase(app)

function Profile() {
    const [userdata, setUserdata] = useState(null)
    const [loading , setLoading] = useState(true)

    useEffect( () => {
        //create user reference 
        const userRef = ref(db, 'user/piyush');

        //listener for updates
        const unsubscribe = onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            setUserdata(data);
            setLoading(false)
        })

        return () => unsubscribe();
    }, [])
    
    if(loading){
        return(
            <h3>Loading user data....</h3>
        )
    }
    if(!userdata){
        return(
            <h3>User data not found</h3>
        )
    }

    return (
        <>
            <h3>Your name is {userdata.name } and your age is {userdata.age}</h3>
        </>
    )
}

export default Profile


