import React from 'react';
import ReactDOM from 'react-dom';

class EmailForm extends React.Component {
  constructor() {
    super();
    this.state = { subject: '', body: '' };
  }
  Validate = event => {
    var subject = document.getElementById('input1').value;
    var body = document.getElementById('input2').value;
    window.location.href =
      'mailto:spk290720001@gmail.com?subject=' + subject + '&body=' + body;
    event.preventDefault();
    return false;
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <br />
          <br />
          <h1 style={{ textAlign: 'center', color: 'blue' }}>Send Mail </h1>
        </div>
        <div class="col-md-8 offset-md-2">
          <form class="container" onSubmit={this.Validate}>
            <div class=" form-group">
              <div>
                <label
                  style={{ color: 'white', fontSize: 'bold' }}
                  for="subject"
                >
                  Name
                </label>
                <input type="text" class="form-control" id="input1" />
              </div>
              <br />
              <div>
                <label style={{ color: 'white', fontSize: 'bold' }} for="body">
                  Feedback
                </label>
                <textarea id="input2" class="form-control" />
              </div>
              <br />
              <button class="btn btn-primary">Send</button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default EmailForm;
