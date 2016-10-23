

import $ from 'jquery';
import React from 'react';
import './content.css';
import img1 from '../images/Technology.png';
import img2 from '../images/Entertainment.png';
import img3 from '../images/Design.png';
import line from '../images/line.png';

export default class Content extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
	    	text : 'OUR SERVICE'
	    }
	}

	getContent(){
		var contentItems = [
			{
				imgUrl :img1,
				title : 'Technology',
				text : '科技   |   我们一直从事于互联网技术开发工作,设计后台,PC软件,网站建设以及APP开发。并有兴趣涉足更多的科技领域。'
			},
			{
				imgUrl :img2,
				title : 'Entertainment',
				text : '娱乐   |   我们乐于尝试开发津贴日常生活的娱乐应用。不管是流媒体应用,还是游戏APP,我们都愿意挑战。'
			},
			{
				imgUrl :img3,
				title : 'Design',
				text : '设计   |   我们可以为你的创意与产品提供流程梳理,框架搭建,界面设计,可用性分析等设计服务,帮助你打造完美的产品。'
			}
		]
		return (
				<div className="content-info">
					{
						contentItems.map( item => 
								<div key={item.imgUrl} className="content-item">
									<img src={item.imgUrl} />
									<span className="content-item_title">{item.title}</span>
									<span className="content-item_text">{item.text}</span>
								</div>
							)
					}
				</div>
			)
	}

	render() {
		return (
				<div className="content">
					<div className="content-title">{this.state.text}</div>
					<img src={line}/>
					{this.getContent()}
				</div>
			)
	}
}