import $ from 'jquery';
import React from 'react';
import './bottom.css';

export default class Bottom extends React.Component {

	

	getContent(){

		var logoes = [
			'qq' , 'dd' , 'wx'
		]

		var info = {
			name: '武汉洛丁科技有限公司',
			contact : '联系电话:0564-3834288 |  联系邮箱:1169147513@qq.com',
			address : '地址:湖北省洪山区资本大厦腾讯创业基地103室'
		}
		return (
				<div className="bottom-info">
					<div className="logo"></div>
					<span className="name">{info.name}</span>
					<span>{info.contact}</span>
					<span className="address">{info.address}</span>
					<div className="logoes">
						{
							logoes.map( logo => (
									<div key={logo} className={logo}></div>
								)
							)
						}
					</div>
				</div>
			)
	}


	render(){
		return (
				<div className="bottom">
					{this.getContent()}
				</div>
			)
	}
}