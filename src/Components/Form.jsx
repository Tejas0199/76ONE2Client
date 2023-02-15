import React, { useState } from "react";
import Input from "./Input";
import Radio from "./Radio";
import Selectbox from "./Selectbox";
import TextArea from "./TextArea";
import './style.css';
import { useValidate } from "../hooks/validationHook";
import Popup from "./popup";
const INITIAL_USER_Info = {
  fname: "",
  lname: "",
  phone: "",
  fathername: "",
  dob: "",
  course: "",
  subject: "",
  aadhar: "",
  gender: "",
  permaddress: "",
  curraddress: "",
};

let PORT_USER_URL = "http://127.0.0.7:4500/users"
const Form = ({
  isSumbitBtn = true,
  isPhoneDisable = false,
  isAadharDisable = false,
  isNameDisable = false,
  isFromEditModel,
  userData,
  method = 'POST',
  border = true,
  ...restProps
}) => {
  const validate = useValidate(Object.keys(INITIAL_USER_Info)); //['fname','lname',]
  const [userInfo, setUserInfo] = useState(isFromEditModel ? userData : INITIAL_USER_Info);
  const [errors,setErrors] = useState({});
  const [isSuccess,setIsSuccess] = useState(null);
  const [resMsg,setResMsg] = useState("");

  const [isSameAsParament, setIsSameAsParament] = useState(false);
  const onUserEnterInput = ({ target: { name, value } }) => {
    if (name === "permaddress" && isSameAsParament) {
      setUserInfo({ ...userInfo, [name]: value, curraddress: value });
    } else {
      setUserInfo({ ...userInfo, [name]: value });
    }
  };
  const onSubmitForm = (event) => {
    event.preventDefault();
    // setErrors(validate(userInfo));
    console.log(userInfo);
    fetch(PORT_USER_URL, {
      method : method,
      body : JSON.stringify(userInfo),
      headers :  {
        "Content-Type" : "application/json"
      }
    }).then(res => {
      if(res.status === 200) {
        setIsSuccess(true);
        setUserInfo(INITIAL_USER_Info)
        setTimeout(() => {
          setIsSuccess(null);
          restProps.setIsDisplayEditModel && restProps.setIsDisplayEditModel(false)
          restProps.setGetLatestData && restProps.setGetLatestData(prev => !prev)
        },3000)
        return res.json()
      }
      else {
        setIsSuccess(false);
        setTimeout(() => {
          setIsSuccess(null);
        },3000)
      }
    }).then((data) => {
      setResMsg(data.msg)
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <form className={border ? "container mt-4 border border-2 rounded rounder-3" : "container mt-4"} onSubmit={onSubmitForm}>
      <div className="row p-2">
        { isSuccess !== null && isSuccess === false && <Popup text={resMsg} classList="error-popup"/>}
        { isSuccess && <Popup text={resMsg} classList="success-popup" />}
        <div className="form-group col-md-6 p-1">
          <Input
            label="ENTER FIRST NAME"
            value={userInfo.fname}
            name="fname"
            error={errors.fname}
            handler={onUserEnterInput}
            className="form-control"
            placeholder="ex:brenden"
            isDisable={isNameDisable}
          />
        </div>
        <div className="form-group col-md-6 p-1">
          <Input
            label="ENTER LAST NAME"
            value={userInfo.lname}
            name="lname"
            error={errors.lname}
            handler={onUserEnterInput}
            className="form-control"
            placeholder="ex:eich"
          />
        </div>
      </div>
      <div className="row p-2">
        <div className="form-group col-md-6 p-1">
          <Input
            label="ENTER PHONE NUMBER"
            value={userInfo.phone}
            name="phone"
            handler={onUserEnterInput}
            className="form-control"
            placeholder="ex:90XXXXXXX24"
            isDisable={isPhoneDisable}
          />
        </div>
        <div className="form-group col-md-6 p-1">
          <Input
            label="ENTER FATHERS NAME"
            value={userInfo.fathername}
            name="fathername"
            handler={onUserEnterInput}
            className="form-control"
            placeholder="ex:brenden eich"
          />
        </div>
      </div>
      <div className="row p-2">
        <div className="form-group col-md-6 p-1">
          <Input
            label="ENTER DOB"
            value={userInfo.dob}
            name="dob"
            type="date"
            handler={onUserEnterInput}
            className="form-control"
          />
        </div>
        <div className="form-group col-md-6">
          <div className="row p-1">
            <div className="form-group col-md-6">
              <Selectbox
                label="QUALIFICATION"
                value={userInfo.course}
                name="course"
                id="course"
                className="form-control"
                handler={onUserEnterInput}
                opt={["select course", "javascript", "python", "java", "ruby"]}
              />
            </div>
            <div className="form-group col-md-6">
              <label></label>
              <Selectbox
                name="subject"
                id="subject"
                value={userInfo.subject}
                className="form-control"
                handler={onUserEnterInput}
                opt={["select subject", "OOPS", "data-structures", "ML", "AI"]}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row p-2">
        <div className="form-group col-md-6 p-1">
          <Input
            label="ENTER AADHAR NUMBER"
            value={userInfo.aadhar}
            name="aadhar"
            handler
            className="form-control"
            placeholder="ex:4573 XXXX XXXX XXX8"
            isDisable={isAadharDisable}
          />
        </div>
        <div className="form-group col-md-6 p-1">
          <div className="row p-2">
            <div className="row-col-md-9">
              <label>GENDER</label>
              <div className="d-flex">
                <div className="d-inline-block pe-5">
                  <Radio
                    label="MALE"
                    className="form-input-check"
                    name="gender"
                  />
                </div>
                <div className="d-inline-block">
                  <Radio
                    label="FEMALE"
                    className="form-input-check"
                    name="gender"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row p-2">
        <div className="form-group col-md-6 p-1">
          <TextArea
            label="PERMANENT ADDRESS"
            value={userInfo.permaddress}
            name="permaddress"
            className="form-control"
            handler={onUserEnterInput}
          />
        </div>
        <div className="form-group col-md-6 p-1">
          <TextArea
            label="CURRENT ADDRESS"
            value={userInfo.curraddress}
            name="curraddress"
            className="form-control"
            handler={onUserEnterInput}
          />
        </div>
      </div>
      <div className="row p-2">
        <div className="form-group col-md-6 p-1"></div>
        <div className="form-group col-md-6 p-1">
          <Input
            label="SAME AS PERMAMENT ADDRESS"
            type="checkbox"
            handler={({ target: { checked } }) => {
              if (checked) {
                setUserInfo({ ...userInfo, curraddress: userInfo.permaddress });
              } else {
                setUserInfo({ ...userInfo, curraddress: "" });
              }
              setIsSameAsParament(checked);
            }}
            className="form-check-label mx-3"
          />
        </div>
      </div>
      <div className="row p-3">
        <div className="text-center">
          { isSumbitBtn && <button
            type="submit"
            className="btn btn-outline-dark p-3 text-primary border-primary"
          >
            SUBMIT
          </button>}
          {restProps.children}
        </div>
      </div>
    </form>
  );
};

export default Form;
