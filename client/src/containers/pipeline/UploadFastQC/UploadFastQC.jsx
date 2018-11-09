import React from 'react';
import { connect } from 'react-redux';
import { submitNewFastQC } from '../../../store/actions/fastQCActions';

class UploadFastQC extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('file1', this.uploadInput.files[0]);
    data.append('file2', this.uploadInput.files[1]);
    console.log(this.uploadInput.files[0]);
    console.log(this.uploadInput.files[1]);
    //data.append('filename', this.fileName.value);
    fetch('http://localhost:5000/pipeline/UploadFastQC', {
      method: 'POST',
      body: data,
    }).then((response) => {
      //console.log(response);
    });
  }

  render() {
    return (
      <form onSubmit={this.handleUploadImage}>
        <div>
          <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
        </div>
        <div>
          <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
        </div>
        <br />
        <div>
          <button>Upload</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.users.isAuthenticated,
        authenticatedUsername: state.users.authenticatedUsername
    };
}

const mapDispatchToProps = dispatch => {
    return {
        submitNewFastQC: (fastQCData) => dispatch(submitNewFastQC(fastQCData))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadFastQC);
