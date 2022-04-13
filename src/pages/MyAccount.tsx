import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const MyAccount = (props: Props) => {
  return (
    <div>
      <div className="" style={{ backgroundColor: '#EBEDF5' }}>
        <section className="w-10/12 m-auto p-8" style={{width:"80%", margin:"auto", padding:"32px"}}>
          <div className="row grid grid-cols-12" style={{display:"grid", gridTemplateColumns:"2fr 8fr"}}>
            <div className="col col-span-2 ">
              <div className="flex" style={{display:"flex"}}>
                <span className="my-auto" style={{margin:"auto 0"}}><i className="far fa-user-circle text-5xl font-thin" /></span>
                <p className="ml-4" style={{marginLeft:"16px",margin:"auto 10px"}}>Vũ Tiến Long</p>
              </div>
              <div className="flex mt-8" style={{display:"flex", marginTop:"32px"}}>
                <span><i className="far fa-user"/></span>
                <div className="ml-2" style={{marginLeft:"8px"}}>
                  <ul>
                    <li className="hoverVang"><NavLink to="login?act=myAccount">Tài khoản của tôi</NavLink></li>
                    <li className="hoverVang"><NavLink to="">Hồ sơ</NavLink></li>
                    <li className="hoverVang"><NavLink to="">Địa chỉ</NavLink></li>
                    <li className="hoverVang"><NavLink to="login?act=changePassword">Đổi mật khẩu</NavLink></li>
                  </ul>
                </div>
              </div>
              <div className="mt-3 flex" style={{marginTop:"12px", display:"flex"}}>
                <div>
                  <ul>
                    <li className="hoverVang"><span><i className="far fa-calendar-minus" /></span><a className="ml-2" style={{marginLeft:"8px"}}>Đơn mua</a></li>
                  </ul>
                </div>
              </div>
              <div className="mt-3 flex" style={{marginTop:"12px", display:"flex"}}>
                <div>
                  <ul>
                    <li className="hoverVang"><i className="far fa-bell" /><a className="ml-2" style={{marginLeft:"8px"}}>Thông báo</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col col-span-10 p-6" style={{ backgroundColor: '#fff', border: '1px solid #ddd' ,padding:"30px"}}>

              {/* thông tin */}
              <div >
                <p className="text-2xl" style={{ color: '#27AE60', fontSize: "22px" }}>Hồ sơ của tôi</p>
                <p className="mb-3">Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
                <hr /> 
                <form method="POST" className="grid grid-cols-12" style={{ display: "grid", gridTemplateColumns:"8fr 4fr" }} encType="multipart/form-data">
                  <div className="mt-8 col-span-8 p-8 " style={{ borderRight: "1px solid #ddd", marginTop: "32px", padding: "32" }}>
                    <div className="mb-4 flex" style={{ marginBottom: "16px", display: "flex" }}>
                      <p>Tên đăng nhập:</p>
                      <input className="border ml-2 w-4/5  p-1" style={{ border: "1px solid #ddd", marginLeft: "8px", width:"70%",float:"left", padding: "4px" }} type="text" defaultValue="<?php if (isset($username)) echo $username; ?>" readOnly />
                    </div>
                    <div className="mb-4" style={{ marginBottom: "16px" }}>
                      <label htmlFor="hoten">Tên</label>
                      <input className="border   w-4/5 p-1" style={{ border: "1px solid #ddd", padding: "4px", width:"70%", marginLeft: "93px" }} type="text" name="hoten" defaultValue="<?php if (isset($hoten)) echo $hoten; ?>" />
                    </div>
                    <div className="mb-4" style={{ marginBottom: "16px" }}>
                      <label htmlFor="email">Email</label>
                      <input className="border ml-16  w-4/5 p-1" style={{ border: "1px solid #ddd", marginLeft: "80px", width:"70%", padding: "4px" }} name="email" type="email" defaultValue="<?php if (isset($email)) echo $email; ?>" />
                    </div>
                    <div className="mb-4" style={{ marginBottom: "16px" }}>
                      <label htmlFor="phone">Số điện thoại</label>
                      <input className="border ml-4 w-4/5  p-1" style={{ border: "1px solid #ddd", marginLeft: "30px", width:"70%", padding: "4px" }} name="phone" type="text" defaultValue="<?php if (isset($phone)) echo $phone; ?>" />
                    </div>
                    <div className="mb-4" style={{ marginBottom: "16px" }}>
                      <label htmlFor="diachi">Địa chỉ</label>
                      <input className="border p-1 w-4/5" type="text" style={{ border: "1px solid #ddd", marginLeft: "70px", width:"70%", padding: "4px" }} name="diachi" defaultValue="<?php if (isset($diachi)) echo $diachi; ?>" />
                    </div>
                    <div className="mb-4 flex" style={{ marginBottom: "16px", display: "flex" }}>
                      <label htmlFor="gioi_tinh">Giới tính</label>
                      <div style={{ marginLeft: 60 }}>
                        <input type="radio" name="gioi_tinh" defaultValue="Nam" checked />
                        <label htmlFor="Nam">Nam</label>
                        <input className="ml-4" type="radio" style={{ marginLeft: "16px" }} name="gioi_tinh" defaultValue="Nữ" />
                        <label htmlFor="Nữ">Nữ</label>
                      </div>
                    </div>
                    <div>
                      <button type="submit" name="btn_update_user" className="py-1 px-4 ml-24" style={{ backgroundColor: '#27AE60', color: "#fff" }}>Lưu</button>
                      <p style={{ color: 'red' }}>{/*?php if ($error != "") echo $error; ?*/}</p>
                    </div>
                  </div>
                  <div className="col-span-4 p-16" style={{ padding:"10px 10px", margin:"auto", textAlign:"center" }}>
                    <img className="mb-4" src="../image/book-1.png" width={130} />
                    <p><input type="file" name="hinh_anh" /></p>
                  </div>
                </form>
              </div>


            </div>
          </div>
        </section>
      </div>



    </div>
  )
}

export default MyAccount