import React from 'react';
import s from './Avatar.module.scss';


function Avatar({ 
    user, 
    hidden, 
    setHidden, 
    handleLogout, 
    handleCharsName,
    handleProfile, 
}){
    if (!user){
        return <div>loading user ....</div>
    }
    return (
        <div onMouseLeave={()=>setHidden(true)} className={s.container}>
            <div 
                className={s.icon} 
                onMouseEnter={()=>setHidden(false)}                
            >                
                {handleCharsName(user.fullName)} 
            </div>
            <div className={`${s.avatarInfo} ${hidden? s.hidden: ''}`} >
                <div className={s.topInfo}> 
                    <div className={s.iconInfo}>
                    {handleCharsName(user.fullName)}
                    </div>
                    <div className={s.userData}>
                        <div className={s.fullName}>{user.fullName}</div>
                        <div className={s.email}>{user.email}</div>
                        <div className={s.profileContainer} onClick={handleProfile} >                            
                            Profile                            
                        </div>
                    </div>
                </div>
                <div className={s.bottomInfo}>
                    <p onClick={handleLogout}>Logout</p>
                </div>
            </div>
        </div>
    )
}





export default Avatar;