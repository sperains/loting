/**
 * Created by Rains
 * on 2016-10-20.
 */

import  './app.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header.js';
import Content from './component/Content.js';
import About from './component/About.js';
import Stats from './component/Stats.js';
import Bottom from './component/Bottom.js';
import Spinner from './component/Spinner.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class Container extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isHidden : true
        }
    }

    //组件将要挂载时调用
    componentWillMount() {
        
    }

    //当组件加载到DOM中之后调用
    componentDidMount() {

        var me = this ;
        console.log(me.refs.spinner)
        console.log(ReactDOM.findDOMNode(me.refs.spinner))
        setTimeout(function(){
            me.setState({
            isHidden: false 
        })
        } , 2000)
        
    }

    //组件将要更新时调用
    componentWillMount() {
        
    }

    //是否让组件进行更新,返回true 或者false
    shouldComponentUpdate(nextProps, nextState) {
        return true ;
    }

    //组件状态更新时调用
    componentDidUpdate(prevProps, prevState) {
        console.log('update')
        console.log(prevState);
        console.log(this.state.isHidden)
    }

    

    componentWillUnmount() {
        console.log("App will unmount");
    }

    render(){

        // return (
        //             <div className="content-wrap">
        //                 <Header />
        //                 <Content  />
        //                 <About  />
        //                 <Stats  />
        //                 <Bottom />
        //             </div>
        //         )

        if(this.state.isHidden){
            return (
                    <Spinner ref="spinner"/>
                )
        }else {
            return (
                    <div className="content-wrap">
                        <Header />
                        <Content  />
                        <About  />
                        <Stats  />
                        <Bottom />
                    </div>
                )
        }
    }

}

ReactDOM.render(
    <Container/>,
    $('#container')[0]
)
