import { useNavigate } from "react-router-dom";
import authImg from "../../assets/images/authimage.png";


function SuccessfulPassReset() {

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/login')
  }

  return (
    <>
      <div className="auth-container">
        <div className="auth-image-container">
          <img src={authImg} alt="" />
        </div>
        <div className="main-container">
          <div className="logo-container logo-reset-container">
        
            <h1>RPMS</h1>
          </div>
          <form className='form-container' onSubmit={handleSubmit}>
            <h2 style={{fontSize: '32px', color: '#434343', fontWeight: '600'}}>Password Reset has been successful!</h2>
           
            <button style={{ cursor: 'pointer' }} type='submit'>
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SuccessfulPassReset;
