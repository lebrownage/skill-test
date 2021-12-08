import { setPageActions } from '../redux/main/actions'
import { useSelector } from 'react-redux'
import PhoneDataRows from '../components/phoneDataRows'

import styles from '../styles/Home.module.css'
import Router from 'next/router'

const Phone = () =>{

  const data = useSelector((state) => state.main.pageActions)
  const phoneData = useSelector((state) => state.main.data)



  const backToMain = ()=>{
    Router.push("/")
  }

  const modalScrollSettings ={
    "maxHeight": "calc(50vh - 100px)",
    "overflowY": "auto"
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="row p-3">
          <div className="col-md-3">
            <div className="card" >
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12 text-center ">
                    <img src="/imports/Avatar.png" height="50px" width="50px" className="rounded-circle"></img>
                  </div>
                  <div className="col-md-12 p-0">
                    <hr />
                  </div>
                  <div className="col-md-3">
                    <i className="mdi mdi-phone mdi-18px"></i> 
                  </div>
                  <div className="col-md-9">
                    <span className="text-muted pt-2">{data.mobileNumber}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9 " style={modalScrollSettings}>
            <div className="card">
              <div className="card-body">
                <PhoneDataRows
                  data={phoneData}
                ></PhoneDataRows>
              </div>
            </div>
          </div>
        </div>
        <div className="text-right pt-5">
          <button className="btn btn-primary " onClick={()=>{ backToMain() }}>Back to Main</button>
        </div>
      </main>
    </div>
    
  )


}


export default Phone