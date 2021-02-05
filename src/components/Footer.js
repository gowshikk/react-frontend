import React from "react";


class Footer extends React.Component {
    render() {
        const styles = {
            textAlign: 'center',
            bottom: 0,
            color: 'white',
            position: 'fixed'
        }
        return (
        
            <div style={styles} className="footer bg-dark">
            <p>Footer </p>
          </div>);
    }

}

export default Footer;