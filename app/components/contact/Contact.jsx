import React from 'react';

class Contact extends React.Component{
	constructor() {
		super();
    this.state = {
      fullName: '',
      email: '',
      msg: ''
    };
	}

  _handleFullNameChange(e) {
    this.setState({fullName: e.target.value});
  }

  _handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  _handleMessageChange(e) {
    this.setState({msg: e.target.value});
  }

  _submitMsg() {
    $.ajax({
      url : "/v1/contact-us",
      type: "POST",
      data : JSON.stringify(this.state),
      contentType: 'application/json',
      success: function(data) {
          //TODO: display success
      },
      error: function (error) {
        //TODO: respond to error
      }
    });
  }

	render() {
		return (
			<div>
        <h2>GET IN TOUCH</h2>
        <div className="row contact-form">
          <div className="col s12">
    				<div className="row">
          			<div className="input-field col s6">
            				<input id="full_name" 
                      type="text" 
                      className="validate" 
                      value={this.state.fullName} 
                      onChange={this._handleFullNameChange.bind(this)}/>
            				<label htmlFor="full_name">Full Name</label>
          			</div>
          			<div className="input-field col s6">
            				<input id="email"
                      type="email" 
                      className="validate" 
                      value={this.state.email} 
                      onChange={this._handleEmailChange.bind(this)}/>
            				<label htmlFor="email">Email</label>
          			</div>
          	</div>
    				<div className="row">
        				<form className="col s12">
          					<div className="row">
           						<div className="input-field col s12">
              						<textarea id="contactTextArea" 
                            className="materialize-textarea" 
                            value={this.state.msg} 
                            onChange={this._handleMessageChange.bind(this)}>
                          </textarea>
              						<label htmlFor="contactTextArea">Message</label>
            					</div>
          					</div>
    				    </form>
    				</div>
    				<button className="btn waves-effect waves-light" 
              type="submit" 
              name="action"
              onClick={this._submitMsg.bind(this)}>
              Send
        				<i className="material-icons right">send</i>
      			</button>
          </div>
        </div>
			</div>
		);
	}
}

export default Contact;