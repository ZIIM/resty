import React from 'react';

// class Header extends React.Component {
//   render() {
//     return (
//       <header>
//         <h1>RESTy</h1>
//       </header>
//     );
//   }
// }

// export default Header;
function Header(): React.ReactElement{
  return (
    <header id="header-container">
      <h1>RESTy</h1>
    </header>
  )
}

export default Header;