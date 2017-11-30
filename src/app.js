import index from './index.js';
import list from './list.js';
import details from './details.js';

import React from 'react';
import ReactDom from 'react-dom';

import indesx from './index.css'
import base from './base.css'

import './style/commit.css'
import gif from './images/4.gif';
const png = require('./images/5.png');
import 'font-awesome/css/font-awesome.css';
import './style/zhao.scss';
import qiang from './qiang.scss'

index();
list();
details();

let aa = 1;
console.log(aa);

ReactDom.render(
    < div className="">
        <span className="color">sadasdasd</span>
        <span className={indesx.color}>webPack</span>
        <div className={base.border}></div>
        <img src={gif} alt=""/>
        <img src={png} alt=""/>
        <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
            <div className="rt"></div>
            <div className={qiang.rt}></div>
    </div>,
    document.getElementById('root')
)