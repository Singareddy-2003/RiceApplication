import React from 'react'

const Profile = () => {
  return (
   <>
   <div className="container-fluid ">
    <div className="row">
        <div className="col-sm-12 col-12 col-md-3 col-lg-3 " >

            <div className='mx-auto logoutdiv'  >
              <img src="/src/assets/user.png"  alt="Profile" className="rounded-circle mb-3 mx-auto prifileimage shadow" height={200} width={200} 
              />
              <h5 className="mt-2 text-center fw-bold">Mahanth</h5>
              <button className="btn btn-danger mt-4 w-75 ms-5"> Logout </button>
            </div>
          
            
          </div>
        <div className="col-sm-12 col-12 col-md-9 col-lg-9  ">

         <h3 className="mb-4">Edit Profile</h3>
            <form>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" defaultValue="Mahanth" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" defaultValue="mahanthsingareddy3@gmail.com" />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input type="tel" className="form-control" defaultValue="+91 8500230074" />
              </div>
               <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" defaultValue="mahanth@123" />
              </div>
               <div className="mb-3">
                <label className="form-label">Address</label>
                <textarea  name="address" id="" defaultValue={"LIG-98 Dharmarw+eddy colony,KPHB 5th Phase , Hyderabad ."} className='w-100 '>

                </textarea>
              </div>

               <div className="mb-3">
                <label className="form-label">Role</label>
                <input type="text" className="form-control" defaultValue="Public" disabled  />
              </div>
              <button type="submit" className="btn btn-success">Save Changes</button>
            </form>

        </div>
    </div>
   </div>
   
   </>
  )
}

export default Profile
