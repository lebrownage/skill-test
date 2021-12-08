
import styles from '../styles/Home.module.css'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { getBreachedData } from '../actions/main'
import { setData ,setPageActions } from '../redux/main/actions'
import PhoneForm from '../components/phoneForm'
import ModalData from '../components/modalData'
import Router  from 'next/router'

 const Home = ()=> {

  const handleGetData = (number)=>{
    setPageActions({mobileNumber : number })

    getBreachedData(number).then((res)=>{
      if(res){
        setData(res)
      }
      Router.push("/phone")
    }).catch((err)=>{console.log(err)})
    
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <PhoneForm
          handleGetData={handleGetData}
        ></PhoneForm>
        
      </main>

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}

export default Home
