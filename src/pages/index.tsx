import React from 'react';
import { Carousel } from 'antd';
import { DoubleLeftOutlined, WindowsOutlined, GitlabOutlined, MediumOutlined } from '@ant-design/icons';
const a = require('../assets/pics/1.jpg');
const b = require('../assets/pics/2.png');
const c = require('../assets/pics/3.jpg');
const d = require('../assets/pics/4.jpg');
const e = require('../assets/pics/5.jpg');
import style from './index.less';

export default () => {
    // @ts-ignore
    return (
    <div style={{ width: 700, margin: 'auto' }}>
      <Carousel autoplay autoplaySpeed={2000} style={{ height: 500 }}>
        <DoubleLeftOutlined className={style.pic} />
        <WindowsOutlined className={style.pic} />
        <GitlabOutlined className={style.pic} />
        <MediumOutlined className={style.pic} />
      </Carousel>
    </div>
  );
}
