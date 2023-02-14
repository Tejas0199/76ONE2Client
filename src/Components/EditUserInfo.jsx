
import Form from './Form';

const EditUserInfo = ({setIsDisplayEditModel}) => {
    return <div className="model-container">
        <div className='p-4'>
            <Form 
            isSumbitBtn={false} 
            isPhoneDisable={true}
            isAadharDisable={true}
            isFromEditModel={true}
            userData={{fname : "tejas",phone : 9874563210,lname : "M"}}
            border={false}/>
           <div className='d-flex justify-content-end gap-3'>
           <button className='btn btn-primary'>SAVE</button>
            <button className='btn btn-outline-danger' onClick={() => {
                setIsDisplayEditModel(false)
            }}>CENCLE</button>
           </div>
        </div>
    </div>
}

export default EditUserInfo;