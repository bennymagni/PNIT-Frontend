import { useState } from "react"

const RegistrationData = ({ userData }) => {

    const [isNotAuthorized, setIsNotAuthorized] = useState(true)
    const [password, setPassword] = useState('');

    const checkPassword = (e) => {
        e.preventDefault();
        if (password === 'ReTfJhI9e25r317'){
            setIsNotAuthorized(false)
        } else {
            alert('Incorrect code entered, you are not authorized to view users')
        }
    }

    return(
        <>
        {isNotAuthorized ?
        (<div style={{minHeight:'50vh'}}>
            <form action="" onSubmit={checkPassword} style={{display:'flex', flexDirection:'column', alignItems:"center", justifyContent:"center"}}>
                <div>
                    <label htmlFor="">Authorization Code</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </div>
                <button style={{padding:'2px'}}>Validate</button>
            </form>
        </div>) :
            (<div style={{ padding:'3rem'}}>
                <div style={{display:'flex', justifyContent:"space-around",  maxWidth: '95vw'}}>
                        <div style={{display:"flex", justifyContent:"center", width:'5rem', marginBottom:'2rem', borderBottom: '2px solid'}}>
                            <h5>First Name</h5>
                        </div>
                        <div style={{display:"flex", justifyContent:"center", width:'5rem', marginBottom:'2rem', borderBottom: '2px solid'}}>
                            <h5>Last Name</h5>
                        </div>
                        <div style={{display:"flex", justifyContent:"center", width:'5rem', marginBottom:'2rem', borderBottom: '2px solid'}}>
                            <h5>Email</h5>
                        </div>
                        <div style={{display:"flex", justifyContent:"center", width:'9rem', marginBottom:'2rem', borderBottom: '2px solid'}}>
                            <h5>Phone Number</h5>
                        </div>
                        <div style={{display:"flex", justifyContent:"center", width:'12rem', marginBottom:'2rem', borderBottom: '2px solid'}}>
                            <h5>Course</h5>
                        </div>
                </div>
                {userData.map((student, index) => (
                    <div key={index} style={{display:'flex', justifyContent:"space-around",  maxWidth: '95vw'}}>
                        <div style={{display:"flex", justifyContent:"center", width:'5rem', paddingBottom:'2rem'}}>
                            <p>{student.firstName}</p>
                        </div>
                        <div style={{display:"flex", justifyContent:"center", width:'5rem'}}>
                            <p>{student.lastName}</p>
                        </div>
                        <div style={{display:"flex", justifyContent:"center", width:'5rem'}}>
                            <p>{student.email}</p>
                        </div>
                        <div style={{display:"flex", justifyContent:"center", width:'9rem'}}>
                            <p>{student.phoneNumber}</p>
                        </div>
                        <div style={{display:"flex", justifyContent:"center", width:'12rem'}}>
                            <p>{student.course}</p>
                        </div>
                    </div>
                ))}
            </div>)
              }
            </>)
}

export default RegistrationData