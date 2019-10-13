import React, { Component } from "react";
import '../styles/Registration.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Helmet from "react-helmet";
import Icon from "antd/es/icon";
import Upload from "antd/es/upload";

class UploadFile extends Component{
    constructor(props) {
        super(props);
        this.state = {
         selectedFile: null
        }
    };

    normFile = e => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    render() {
        return(
            <div className="formregis">
                <Helmet>
                    <style>{'body { background-color: #eeeeee; }'}</style>
                </Helmet>
            <Container>
                <h2>
                    Upload your calender
                </h2>
                <form method="post" action="#" id="#">
                    <Upload name="logo" action="/upload.do" listType="picture">
                        <Button>
                            <Icon type="upload" /> Click to upload
                        </Button>
                    </Upload>
                </form>

            </Container>
            </div>
        );
    }
}
            export default UploadFile;