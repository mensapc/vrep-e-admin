import lock from '../../assets/images/lockicon.png';
import authImg from '../../assets/images/authimage.png';

import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';

function PasswordReset() {
 
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [visible1, setVisible1] = useState(true)
  const [visible2, setVisible2] = useState(true)

  return (
    <>
      <div className='auth-container'>
        <div className='auth-image-container'>
          <img src={authImg} alt='' />
        </div>
        <div className='main-container'>
          <div className='logo-container'>
       
            <h1>RPMS</h1>
          </div>
          <form className='form-container' >
            <h2 style={{fontSize: '32px', color: '#434343', fontWeight: '600'}}>Password Reset</h2>
            <div className='input-group'>
              <label htmlFor='password'>Enter your new password</label>
              <span className='input-item'>
                <img src={lock} alt='' />
              </span>
              <input
                id='password'
                name='password'
                value={password}
                type={visible1 ? 'password' : 'text'}
                placeholder='**************'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className='input-item' id='eye'>
                {visible1 ? (
                  <FaEyeSlash onClick={() => setVisible1(!visible1)} />
                ) : (
                  <FaEye onClick={() => setVisible1(!visible1)} />
                )}
              </span>
            </div>
            <div className='input-group'>
              <label htmlFor='password'>Confirm Password</label>
              <span className='input-item'>
                <img src={lock} alt='' />
              </span>
              <input
                id='password'
                name='password'
                value={confirmPassword}
                type={visible2 ? 'password' : 'text'}
                placeholder='**************'
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <span className='input-item' id='eye'>
                {visible2 ? (
                  <FaEyeSlash onClick={() => setVisible2(!visible2)} />
                ) : (
                  <FaEye onClick={() => setVisible2(!visible2)} />
                )}
              </span>
            </div>
            <button style={{ cursor: 'pointer' }} type='submit'>
              Verify and Proceed
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default PasswordReset;

