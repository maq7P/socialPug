import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import style from './profile.module.css'
import {Redirect, Route} from 'react-router-dom';
import ChangeHeader from '../common/ChangeHeader/ChangeHeader';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";
import Overview from "./Overview/Overview";

const Profile = (props) => {
    if(!props.profileInfo){
        return <Preloader/>
    }

    return (<main>
        <ProfileInfo 
            profileInfo={props.profileInfo}
            status={props.status}
            put_profile_status={props.put_profile_status}
            id={props.id}
            set_photo={props.set_photo}
            error={props.error}
            loadingPhoto={props.loadingPhoto}
        />
        <div className={style.containerProfile}>
            <ChangeHeader dataLinks={props.dataLinks}/>
            <Route path="/profile/posts" render={() => (
                <div className={style.posts}>
                    <MyPostsContainer store={props.store}/>
                </div>
            )}/>
            <Route path="/profile/overview" render={() => (
                <Overview 
                    profileInfo={props.profileInfo}
                    status={props.status}
                 />
            )}/>
        </div>
    </main>)
}

export default Profile;