import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../../services/restClient";
import _ from "lodash";
import initilization from "../../../utils/init";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";


const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = {};
    for (const key in errorObj.errors) {
      if (Object.hasOwnProperty.call(errorObj.errors, key)) {
        const element = errorObj.errors[key];
        if (element?.message) {
          errMsg[key] = element.message;
        }
      }
    }
    return errMsg.length ? errMsg : errorObj.message ? { error : errorObj.message} : {};
};

const CmsCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        let init  = {};
        if (!_.isEmpty(props?.entity)) {
            init = initilization({ ...props?.entity, ...init }, [], setError);
        }
        set_entity({...init});
        setError({});
    }, [props.show]);

    const validate = () => {
        let ret = true;
        const error = {};
        
        if (!ret) setError(error);
        return ret;
    }

    const onSave = async () => {
        if(!validate()) return;
        let _data = {
            name: _entity?.name,category: _entity?.category,path: _entity?.path,image1: _entity?.image1,image2: _entity?.image2,headerContent: _entity?.headerContent,bodyContent: _entity?.bodyContent,disclaimer: _entity?.disclaimer,visible: _entity?.visible,bodyList: _entity?.bodyList,listPageTemplate: _entity?.listPageTemplate,
            createdBy: props.user._id,
            updatedBy: props.user._id
        };

        setLoading(true);

        try {
            
        const result = await client.service("cms").create(_data);
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info Cms created successfully" });
        props.onCreateResult(result);
        } catch (error) {
            console.debug("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create in Cms" });
        }
        setLoading(false);
    };

    

    

    

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError({});
    };

    

    return (
        <Dialog header="Create Cms" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max scalein animation-ease-in-out animation-duration-1000" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="cms-create-dialog-component">
            <div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="name">name:</label>
                <InputText id="name" className="w-full mb-3 p-inputtext-sm" value={_entity?.name} onChange={(e) => setValByKey("name", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["name"]) ? (
              <p className="m-0" key="error-name">
                {error["name"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="category">category:</label>
                <InputText id="category" className="w-full mb-3 p-inputtext-sm" value={_entity?.category} onChange={(e) => setValByKey("category", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["category"]) ? (
              <p className="m-0" key="error-category">
                {error["category"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="path">path:</label>
                <InputText id="path" className="w-full mb-3 p-inputtext-sm" value={_entity?.path} onChange={(e) => setValByKey("path", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["path"]) ? (
              <p className="m-0" key="error-path">
                {error["path"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="image1">image1:</label>
                <InputText id="image1" className="w-full mb-3 p-inputtext-sm" value={_entity?.image1} onChange={(e) => setValByKey("image1", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["image1"]) ? (
              <p className="m-0" key="error-image1">
                {error["image1"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="image2">image2:</label>
                <InputText id="image2" className="w-full mb-3 p-inputtext-sm" value={_entity?.image2} onChange={(e) => setValByKey("image2", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["image2"]) ? (
              <p className="m-0" key="error-image2">
                {error["image2"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="headerContent">headerContent:</label>
                <InputText id="headerContent" className="w-full mb-3 p-inputtext-sm" value={_entity?.headerContent} onChange={(e) => setValByKey("headerContent", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["headerContent"]) ? (
              <p className="m-0" key="error-headerContent">
                {error["headerContent"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="bodyContent">bodyContent:</label>
                <InputText id="bodyContent" className="w-full mb-3 p-inputtext-sm" value={_entity?.bodyContent} onChange={(e) => setValByKey("bodyContent", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["bodyContent"]) ? (
              <p className="m-0" key="error-bodyContent">
                {error["bodyContent"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="disclaimer">disclaimer:</label>
                <InputText id="disclaimer" className="w-full mb-3 p-inputtext-sm" value={_entity?.disclaimer} onChange={(e) => setValByKey("disclaimer", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["disclaimer"]) ? (
              <p className="m-0" key="error-disclaimer">
                {error["disclaimer"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="visible">visible:</label>
                <InputText id="visible" className="w-full mb-3 p-inputtext-sm" value={_entity?.visible} onChange={(e) => setValByKey("visible", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["visible"]) ? (
              <p className="m-0" key="error-visible">
                {error["visible"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="bodyList">headerContent:</label>
                <InputText id="bodyList" className="w-full mb-3 p-inputtext-sm" value={_entity?.bodyList} onChange={(e) => setValByKey("bodyList", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["bodyList"]) ? (
              <p className="m-0" key="error-bodyList">
                {error["bodyList"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="listPageTemplate">image1:</label>
                <InputText id="listPageTemplate" className="w-full mb-3 p-inputtext-sm" value={_entity?.listPageTemplate} onChange={(e) => setValByKey("listPageTemplate", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["listPageTemplate"]) ? (
              <p className="m-0" key="error-listPageTemplate">
                {error["listPageTemplate"]}
              </p>
            ) : null}
          </small>
            </div>
            <small className="p-error">
                {Array.isArray(Object.keys(error))
                ? Object.keys(error).map((e, i) => (
                    <p className="m-0" key={i}>
                        {e}: {error[e]}
                    </p>
                    ))
                : error}
            </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    const { user } = state.auth;
    return { user };
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(CmsCreateDialogComponent);
