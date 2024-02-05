import React,{useState}from 'react'
function LoginLogout() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (phoneNumber.length === 10 && password) {
      setLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setPhoneNumber('');
    setPassword('');
  };

  const handlePhoneNumberChange = (e) => {
    const inputNumber = e.target.value;
    setPhoneNumber(inputNumber);
  };

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Welcome, Aanchal!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <div>
            <label>
              Phone Number:
              <input type="number" value={phoneNumber} onChange={handlePhoneNumberChange} />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
          </div>
          <div>
            <button onClick={handleLogin} disabled={isLoggedIn || !(phoneNumber.length === 10 && password)}>
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginLogout
