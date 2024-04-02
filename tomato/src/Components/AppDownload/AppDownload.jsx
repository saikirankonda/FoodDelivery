import React from 'react'
import "./AppDownload.css"
import {assets} from "../../assets/assets"

const AppDownload = () => {
  return (
    <div className='app-download'>
        <p className='paratag' >For Better Experience Download <br/> Tomato App</p>
        <div className="app-download-plotforms">
            <img src={assets.play_store} alt="playstore" />
            <img src={assets.app_store} alt="appstore" />
        </div>
    </div>
  )
}

export default AppDownload