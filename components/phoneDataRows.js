

const PhoneDatRows = (props)=>{

  const data = props.data

  return <div className="row">
      {
        data.length==0?
          <div className="col-md-12 p-5" style={{width : "855px"}}>
              <div className="alert alert-primary" role="alert">
                No Data Found
              </div>
          </div>
            
          :
          data.map((value,key)=>{
            return(
              <div  key={key} className="pb-3 pr-3 pl-3 pt-1">
                <div className="card ">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-2 text-center pb-3 ">
                          <img src={value.LogoPath} height="50px" width="50px" className="rounded-circle"></img>
                      </div>
                      <div className="col-md-8 d-block">
                        <span className="text-primary font-weight-bold">{value.Title}</span><br />
                        <span className="text Muted font-weight-bold"> Compromised Data  :</span> <span className="text-muted">{value.DataClasses.join()}</span>
                      </div>
                      <div className="col-md-12">
                        <p className="text-muted" dangerouslySetInnerHTML={{__html: value.Description}}></p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            )
          })
        
        }
      
    </div>
}


export default PhoneDatRows