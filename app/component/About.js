
import $ from 'jquery';
import React from 'react';
import './about.css';
// import img1 from '../images/Technology.png';
// import img2 from '../images/Entertainment.png';
// import img3 from '../images/Design.png';
import line from '../images/line.png';

export default class About extends React.Component {

	getContent(){
		var content = {
			title : 'ABOUT US',
			text : `我们是一直活跃在江城武汉的创意团队,团队现有12人,覆盖了后台数据库,PC软件开发,IOS与安卓开发,
			H5应用开发,产品设计等各个角色。成立一年多来,我们开发推广了10数款产品应用,与众多行业都有合作。成立
			一年有余的我们准备以新的面孔迎战挑战,所以这是你们看到的新网站,我们希望能看到更多的市场与新的技术需要,我们也需要进步,
			我们很高兴见到你带来的新亮点。对我们感兴趣?那联系我们吧。`,
			address : '湖北省武汉市洪山区光谷资本大厦腾讯创业基地103室',
			tel : ''
		}

		return (
				<div className="about-info">
					<div className="about-info-title">{content.title}</div>
					<img src={line} />
					<div className="about-info_content">
						<span className="text">{content.text}</span>
						<div className="img"></div>
						<div>
							<span className="address">地址:{content.address}</span>
							<span></span>
						</div>
					</div>
				</div>
			)
	}

	render(){
		return (
				<div className="about">
					{this.getContent()}
				</div>
			)
	}
}