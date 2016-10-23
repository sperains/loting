
import React from 'react';
import './stats.css';
// import img1 from '../images/Technology.png';
// import img2 from '../images/Entertainment.png';
// import img3 from '../images/Design.png';
import mail from '../images/mail.png';

export default class Stats extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
	    	inputValue : '',
	    	isHidden : true
	    }
	    this.onContactSubmit = this.onContactSubmit.bind(this);
	    this.onChange = this.onChange.bind(this);
	    this.onHideContactWindow = this.onHideContactWindow.bind(this);

	}

	onContactSubmit(e) {

		var value = this.state.inputValue;

		if(value == null || value==""){
			this.setState({
				inputValue : '请输入邮箱'
			})
			return ;
		}else{
			this.setState({
				isHidden : false
			});
		}

		
	}

	onChange(e){
		var inputValue = e.target.value;
		this.setState({
			inputValue : inputValue,
			isHidden : true
		})
		
	}

	onHideContactWindow(e){
		this.setState({
			isHidden : true,
			inputValue : ""
		})
	}


	getContent(){

		var statsInfo = [
			{
				data : 2 ,
				text : 'Years'
			},
			{
				data : 10 ,
				text : 'Projects'
			},
			{
				data : 4 ,
				text : 'Clients'
			}
		]
		return (
				<div className="stats-content">
					<div className="stats-info">
						{
							statsInfo.map( item => 
									<div  key={item.text} className="stats-info_item">
										<span className="first">{item.data}</span>
										<span>{item.text}</span>
									</div>
								)
						}
					</div>
					<div className="contact-us">
						<input  type="text" value={this.state.inputValue}  onChange={this.onChange}/>
						<span onClick={this.onContactSubmit}>OK</span>
					</div>

					

					<div  className={this.state.isHidden ? 'hidden' : 'contact-window'}>
						<div className="contact-window_top">
							<span>Hello</span>
							<div className="close" onClick={this.onHideContactWindow}></div>
						</div>
						<div className="contact-window_info">
							<img src={mail} />
							<span>收到~ {this.state.inputValue}</span>
						</div>
					</div>	

				</div>
			)
	}

	render(){
		return (
				<div className="stats">
					{this.getContent()}
					<div className={this.state.isHidden ? 'hidden' : 'modal'} onClick={this.onHideContactWindow}></div>
				</div>
			)
	}

}