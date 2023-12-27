import React from 'react'
import css from './assets/css/myprofile.module.css'
import Accountinfo from './Accountinfo'
import Enquiry from './Enquiry'
import Listedproperties from './Listedproperties'
import { Link, Outlet } from 'react-router-dom'

export default function Myprofile() {
  return (
    <section>
      <div className={css.myprofilemaincontainer}>
        <div className={css.container1}>
          <div className={css.subcontainer1}>
            <div className={css.dashboard}>
              <div className={css.userdetailcontainer}>
                <div className={css.userlogo}>
                  <i class="fa-solid fa-user"></i>
                </div>
                <div className={css.userdashboarddetails}>
                  <div className={css.userdashboardname}>
                    <p>Username</p>
                  </div>
                  <div className={css.userdashboardemail}>
                    <p>abc@domain.com</p>
                  </div>
                </div>
              </div>
              <div className={css.dashboardlistitems}>
                <div className={css.dashboardlistitem}>
                  <Link to='/myprofile/accountinfo'><li><i class="fa-regular fa-user"></i><p>Account Info</p><i class="fa-solid fa-caret-right"></i></li></Link>
                </div>
                <div className={css.dashboardlistitem}>
                  <Link to='/myprofile/enquiry'><li><i class="fa-regular fa-envelope"></i><p>Enquiry</p><i class="fa-solid fa-caret-right"></i></li></Link>
                </div>
                <div className={css.dashboardlistitem}>
                  <Link to='/myprofile/listedproperties'><li><i class="fa-regular fa-building"></i><p>Listed Properties</p><i class="fa-solid fa-caret-right"></i></li></Link>
                </div>
                <div className={css.dashboardlistitem}>
                  <Link to='/myprofile/accountinfo'><li><i class="fa-solid fa-door-open"></i><p>Logout</p><i class="fa-solid fa-caret-right"></i></li></Link>
                </div>
              </div>
            </div>
          </div>
          <div className={css.subcontainer2}>
            {/* <Accountinfo/> */}
            {/* <Enquiry /> */}
            {/* <Listedproperties/> */}
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  )
}
