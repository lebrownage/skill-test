import { setPageActions } from '../redux/main/actions'
import { useSelector } from 'react-redux'
import PhoneDataRows from './phoneDataRows'

export default function Modal(){

  const data = useSelector((state) => state.main.pageActions)
  const phoneData = useSelector((state) => state.main.data)

  let modalOpen = data.modal
  let modalSettings = {
    display : "block",
    modal : "show",
    background : "rgba(0, 0, 0, 0.6)",
    fontSize : "12px"
  },
  modalScrollSettings ={
    "maxHeight": "calc(50vh - 100px)",
    "overflowY": "auto"
  }
  if(!modalOpen) {
    modalSettings = {
      display : "none",
      modal : ""
    }
  }


  return (
    <div className={"modal fade "+ modalSettings.modal} tabIndex="-1" role="dialog" style={{ display: modalSettings.display, background : modalSettings.background, fontSize : modalSettings.fontSize }}>
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Phone Data</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={()=>{ setPageActions({modal : false})}}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body"  >
            <div className="row p-3">
              <div className="col-md-3 padding-top-93">
                <div className="card text-center ">
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
                <PhoneDataRows
                  data={phoneData}
                ></PhoneDataRows>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={()=>{  setPageActions({modal : false})}}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

