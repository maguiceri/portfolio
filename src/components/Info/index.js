import React from 'react';

class Info extends React.Component {
    render() {

        const {profilePic, bio} = this.props

        return (
            <div>
                <img src={profilePic} />
                <p>{bio}</p>
            </div>
        )
    }
}

export default Info;