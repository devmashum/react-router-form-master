import './App.css'
import Grandpa from './Components/Grandpa/Grandpa'
import Simpleform from './Components/Simpleform/Simpleform'
import StatefulForm from './Components/StatefulForm/StatefulForm'
import HookForm from './HookForm/HookForm'
import Refform from './Refform/Refform'
import ReuseableForm from './ReuseableForm/ReuseableForm'

function App() {
  const handleSignUpSubmit = data => {
    console.log('sign up data', data)
  }
  const handleUpdateProfile = data => {
    console.log('updata', data)
  }

  return (
    <>

      <Grandpa></Grandpa>




      {/* <Simpleform></Simpleform> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <Refform></Refform> */}
      {/* <HookForm></HookForm> */}
      {/* <div className='apps'>   <ReuseableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please Sign Up right now</p>
        </div>
      </ReuseableForm></div>

      <div> <ReuseableForm formTitle={'Profile Update'} submitBtnText='UPDATE' handleSubmit={handleUpdateProfile}>
        <div><h2>
          Update Profile</h2>
          <p>Always keep your profile updated</p></div>
      </ReuseableForm></div> */}
    </>
  )
}

export default App
