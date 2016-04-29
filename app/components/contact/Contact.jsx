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
    //TODO: Only post email if there's if email is valid and
    //message is not empty
    //Give feedback to the user
    $.ajax({
      url : "/api/contact-us",
      type: "POST",
      data : JSON.stringify(this.state),
      contentType: 'application/json',
      success: function(data) {
        //TODO: display success
        this.setState({
          fullName: '',
          email: '',
          msg: ''
        });
      }.bind(this),
      error: function (error) {
        //TODO: respond to error
      }
    });
  }

	render() {
		return (
			<div>
        <h4>GET IN TOUCH</h4>
        <div className="row">
          <div className="col m12 l6">
            <div className="row contact-form">
              <div className="col s12">
        				<div className="row">
              			<div className="input-field col s12">
                				<input id="full_name"
                          type="text"
                          className="validate"
                          value={this.state.fullName}
                          onChange={this._handleFullNameChange.bind(this)}/>
                				<label htmlFor="full_name">Name</label>
              			</div>
              			<div className="input-field col s12">
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
          <div className="col m12 offset-l1 l5">
            <div>
              <p>Do you have a question or comment? Please feel free to send me an email or fill in this handy contact form. My aim is to reply within 24 hours.</p>
              <i className="small material-icons contact-location-icon">location_on</i>
              <span><b>Montreal, QC</b></span>
            </div>
            <div>
              <i className="small material-icons contact-email-icon">email</i>
              <span><b><a className="email-link" href="mailto:frederick.mfinanga@gmail.com">frederick.mfinanga@gmail.com</a></b></span>
            </div>
            <hr/>
            <ul className="social-media-icons">
              <li><a href="http://www.facebook.com/fjmva"><i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i></a></li>
              <li><a href="http://www.twitter.com/fjmva"><i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i></a></li>
              <li><a href="http://www.instagram.com/fjmva"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a></li>
              <li><a href="https://ca.linkedin.com/in/frederickmfinanga"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </div>
			</div>
		);
	}
}

export default Contact;