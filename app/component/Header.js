/**
 * Created by Rains
 * on 2016-10-21.
 */

import  './header.css';
import headerImg from '../images/desk.png';
import logo from '../images/logo100.png';
import contactImg from '../images/contact.png';
import contackImg_hover from '../images/contact-hover.png';
import mail from '../images/mail.png';

import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';

export default class Header extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
	    	isHidden : true
	    }
	    this.onMouseOver = this.onMouseOver.bind(this);
	    this.onContactClick = this.onContactClick.bind(this);
	    this.onHideContactWindow = this.onHideContactWindow.bind(this);
	}

	onMouseOver() {
		// this.setState({
		// 	contactImg : contactImg
		// })
		// console.log('hover');
	}

	onContactClick(e){
		console.log(123);
		this.setState({
			isHidden : !this.state.isHidden
		})
	}

	onHideContactWindow(e){
		this.setState({
			isHidden : true
		})
	}


	render() {

		return (
			<div className="header-container">
				<div className="header-nav">
					<div className="nav-content">
						<div className="nav-content_left">
							<img className="logo" src={logo} />
							<div className="nav-text">
								<span>洛丁科技</span>
								<span>technology·Entertainment·Design</span>
							</div>
						</div>
						<img className="contact-img" src={contactImg} onClick={this.onContactClick}/>
					</div>
				</div>
				<div className="header-bg">
					<img src={headerImg} />
				</div>

			       <div className={this.state.isHidden ? 'hidden' : 'modal'} onClick={this.onHideContactWindow}></div>

				<div  className={this.state.isHidden ? 'hidden' : 'contact-window'}>
					<div className="contact-window_top">
						<span>Hello</span>
						<div className="close" onClick={this.onHideContactWindow}></div>
					</div>
					<div className="contact-window_info">
						<img src={mail} />
						<div>联系电话:<span> 0564-3834288</span></div>
						<div>联系邮箱:<span> 1169147513@qq.com</span></div>
						<div>地址: <span>湖北省武汉市洪山区光谷资本大厦腾讯创业基地103室</span></div>
					</div>
				</div>
			</div>	
		)
	}
}