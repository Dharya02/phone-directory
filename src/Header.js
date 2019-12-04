import React from 'react';
import './Header.css';
const Header = function (props) {
//  const Header = function() { 6
// const Header = function () { 3
//     const headerStyle = {
//         textAlign: 'center',
//         padding: 20,
//         background: '#000',
//         color: '#fff',
//         textTransform: 'uppercase'
//     };
 return (
        // <div style={headerStyle}> 4
        <div className="header">
             {props.heading}
        </div>
    )
}

export default Header; 