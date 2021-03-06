import React from "react";
import Navigation from "./Navigation";
import {connect} from "react-redux";
import {got_profile_user} from "../../../redux/profileReducer";
class NavigationURLContainer extends React.Component{
    /*updateProfile = (e) => {
        if (!this.props.isAuth) {
            return
        }
        if (this.props.isAuth && e.target.textContent === 'My profile') {
            this.props.got_profile_user(false)
        }
    }*/
    render(){
        return (
                <Navigation
                    {...this.props}
                    //updateProfile={this.updateProfile}
                />
            )
    }
}
let mapStateToProps = (state) => {
    return {
        navigation: state.settingsOfLinks.navigation,
        profileInfo: state.profilePage.profileInfo,
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {got_profile_user})(NavigationURLContainer)