import Home from "./Home";

export default function Login({}) {
  return (
      <div className='Login'>
        <nav className='navbar navbar-expand navbar-light fixed-top'>
          <div className='container'>
            <a href='' className='navbar-brand'>Home</a>
            <div className='collapse navbar-collapse'>
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                  <a href='' className='nav-link'>Login</a>
                </li>
                <li className='nav-item'>
                  <a href='' className='nav-link'>Sign up</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Home />
          </div>
        </div>
      </div>
  );
}

//const styles = StyleSheet.create({
//    buttonContainer:{
//        width: 320,
//        height: 68,
//        marginHorizontal: 20,
//        alignItems: 'center',
//        justifyContent: 'center',
//        padding: 3,
//    },
//});