const PhoneForm = (props)=> {

  const isPhoneNumber = (inputtxt) => {
    const textMessage = document.getElementById('text_message')
    textMessage.innerHTML = ""
    if(!inputtxt){
      textMessage.innerHTML = "Phone Must be valid"
      return false
    }
    const validNumber = new RegExp('^[+0-9]')

    if(validNumber.test(inputtxt)){
      return true
    }
    else
    {
      textMessage.innerHTML = "Phone Must be valid"
      return false
    }
  }

  const onEnter = ()=>{
    const number = document.getElementById('inputNumber').value
    const isPhone = isPhoneNumber(number)
    if(isPhone){
      props.handleGetData(document.getElementById('inputNumber').value)
    }else{

    }
    
  }

  return(
    <div className="card card-size">
      <div className="card-body"> 
        <div className="row">
          < div className="col-md-3 pb-5">
            <img src="/imports/icons8-touchscreen.png" alt="Phone Image"></img>
          </div>
          <div className="col-md-9">
            <h3 className="text-info pt-4">CHECK A PHONE NUMBER</h3>
          </div>
          <div className="col-md-12 pb-3">
            <span className="text-muted">Enter the phone number to be checked including the country code Eg: + 61412333555</span>
          </div>
          <div className="col-md-12">
            <div className="input-group mb-3">
              <input type="text" className="form-control" id="inputNumber" placeholder="Enter  phone number"  />
              <div className="input-group-append" title="Click to Search" onClick={ ()=>{onEnter()}} style={{ cursor : "pointer"}}>
                <span className="input-group-text"><img src="/imports/icons8-search.png" height="20px" width="20px"></img></span>
              </div>
            </div>
            <span className="text-warning" id="text_message"></span>

          </div>
        </div>
      </div>
    </div>
  )
}

export default PhoneForm