import React, { Component } from 'react';import Hi from './Hi';const url = 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1425317030,4113620941&fm=117&gp=0.jpg';export default class Hello extends Component {	render(){		return(			<div>				Hello World Hello webpack				<Hi />				<img src= {url}/>				<img src="http://pic.58pic.com/58pic/16/82/82/49R58PICJtr_1024.jpg"/>			</div>		)	}}