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
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.fileName.value);
    console.log(data);
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
          <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter the desired name of file" />
        </div>
        <br />
        <div>
          <button>Upload</button>
        </div>
        <img src={this.state.imageURL} alt="img" />
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
