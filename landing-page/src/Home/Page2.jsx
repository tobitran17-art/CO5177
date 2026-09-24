import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col, Icon } from 'antd';

import Tetris from './technology-comp/Tetris';
import Column from './technology-comp/Column';
import Coordinate from './technology-comp/Coordinate';
import Building from './technology-comp/Building';


const pageData = [
  {
    title: 'Python & Scikit-learn',
    content: 'Xử lý dữ liệu, huấn luyện và đánh giá mô hình học máy',
    links: [
      <a key="0" href="https://scikit-learn.org" target="_blank">Scikit-learn&nbsp;&nbsp;<Icon type="right" /></a>,
      <a key="1" href="https://python.org" target="_blank">Python&nbsp;&nbsp;<Icon type="right" /></a>,
    ],
    Bg: Tetris,
  },
  {
    title: 'Pandas & NumPy',
    content: 'Tiền xử lý, làm sạch và biến đổi dữ liệu',
    links: (<a href="https://pandas.pydata.org" target="_blank">Xem chi tiết&nbsp;&nbsp;<Icon type="right" /></a>),
    Bg: Column,
  },
  {
    title: 'Matplotlib, Seaborn & Plotly',
    content: 'Trực quan hóa dữ liệu và kết quả mô hình',
    links: (<a href="https://plotly.com" target="_blank">Xem chi tiết&nbsp;&nbsp;<Icon type="right" /></a>),
    Bg: Coordinate,
  },
  {
    title: 'OpenCV & Google Colab',
    content: 'Xử lý ảnh, chạy notebook end-to-end trên môi trường GPU miễn phí',
    links: (<a href="https://colab.research.google.com" target="_blank">Xem chi tiết&nbsp;&nbsp;<Icon type="right" /></a>),
    full: true,
    Bg: Building,
  },
];

export default class Design extends React.PureComponent {
  state = {
    hover: null,
  };
  onMouseEnter = (hover) => {
    this.setState({
      hover,
    });
  }
  onMouseLeave = () => {
    this.setState({
      hover: null,
    });
  }
  render() {
    const { isMobile } = this.props;
    const children = pageData.map((item, i) => {
      const colProps = {
        md: item.full ? 24 : 8, xs: 24,
      };
      return (
        <Col {...colProps} key={i.toString()} className="page2-item-wrapper">
          <div
            className={`page2-item${item.full ? ' full' : ''}`}
            onMouseEnter={() => { this.onMouseEnter(item.title); }}
            onMouseLeave={this.onMouseLeave}
          >
            <div className="page2-item-bg">
              {item.Bg && React.createElement(item.Bg, {
                hover: !isMobile && this.state.hover === item.title,
                isMobile,
              })}
            </div>
            <div className="page2-item-desc">
              <h4>{item.title}</h4>
              <p>{item.content}</p>
              <p className="page2-item-links">
                {item.links}
              </p>
            </div>
          </div>
        </Col>
      );
    });
    return (
      <div className="page-wrapper page2">
        <div className="page">
          <h1>Công nghệ sử dụng</h1>
          <i />
          <OverPack className="page2-content">
            <QueueAnim component={Row} key="queue" type="bottom" leaveReverse>
              {children}
            </QueueAnim>
          </OverPack>
        </div>
      </div>);
  }
}
