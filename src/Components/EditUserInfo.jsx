
import { useEffect } from 'react';
import Form from './Form';

const EditUserInfo = ({setIsDisplayEditModel,userData,setGetLatestData}) => {
    return <div className="model-container">
        <div className='p-4'>
            <Form 
            isSumbitBtn={false} 
            isPhoneDisable={true}
            isAadharDisable={true}
            isFromEditModel={true}
            userData={userData}
            method={"PATCH"}
            setGetLatestData={setGetLatestData}
            setIsDisplayEditModel={setIsDisplayEditModel}
            border={false}>
           <div className='d-flex justify-content-end gap-3'>
           <button className='btn btn-primary' type='submit'>SAVE</button>
            <button className='btn btn-outline-danger' onClick={() => {
                setIsDisplayEditModel(false)
            }}>CENCLE</button>
           </div>
           </Form>
        </div>
    </div>
}

export default EditUserInfo;