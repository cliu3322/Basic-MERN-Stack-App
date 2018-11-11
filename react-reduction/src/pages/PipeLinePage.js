import React from 'react';
import { uploadFastQC } from '../store/actions/pipelineActions';

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from 'reactstrap';

import Page from 'components/Page';

class PipeLinePage extends React.Component {

  handleNewArticleSubmit = (e) => {
    e.preventDefault();
    //uploadFastQC();
    const data = new FormData(e.target);
    console.log(data.get('fastQC1'));
    fetch('http://localhost:5000/pipeline/UploadFastQC', {
      method: 'POST',
      body: data,
    }).then((response) => {
      //console.log(response);
    });
  };
  handleTrim = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/pipeline/Trim', {
      method: 'POST'
    }).then((response) => {
      //console.log(response);
    });
  };
  render() {
    return (
    <Page title="PipeLine" breadcrumbs={[{ name: 'PipeLine', active: true }]}>
      <Row>
        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Upload FastQC</CardHeader>
            <CardBody>
              <Form onSubmit={this.handleNewArticleSubmit}>
                <FormGroup row>
                  <Label for="exampleFile" sm={2}>
                    File R1
                  </Label>
                  <Col sm={10}>
                    <Input type="file" name="fastQC1"/>
                    <FormText color="muted">
                      This is some placeholder block-level help text for the
                      above input. It's a bit lighter and easily wraps to a new
                      line.
                    </FormText>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="exampleFile" sm={2}>
                    File R2
                  </Label>
                  <Col sm={10}>
                    <Input type="file" name="fastQC2"/>
                    <FormText color="muted">
                      This is some placeholder block-level help text for the
                      above input. It's a bit lighter and easily wraps to a new
                      line.
                    </FormText>
                  </Col>
                </FormGroup>
                <FormGroup check row>
                  <Col sm={{ size: 10, offset: 2 }}>
                    <Button>Submit</Button>
                  </Col>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Upload FastQC</CardHeader>
            <CardBody>
              <Form onSubmit={this.handleTrim}>
                <FormGroup check row>
                  <Col sm={{ size: 10, offset: 2 }}>
                    <Button>Submit</Button>
                  </Col>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
  }
};

export default PipeLinePage;
