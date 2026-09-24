import React from 'react';
import { Row, Col } from 'antd';
import { footer } from './data';

export default function Footer() {
  return (
    <footer className="footer page-wrapper">
      <div className="footer-wrap page">
        <Row>
          {
        footer.map((foot, index) => (
          <Col key={index.toString()} md={12} xs={24} className="footer-item-col">
            <div className="footer-item">
              <h2>
                {foot.icon && <img style={{ marginRight: 16 }} src={foot.icon} alt="img" />}
                {foot.title}
              </h2>
              {foot.children.map(child => (
                <div key={child.link}>
                  <a target="_blank " href={child.link}>
                    {child.title}
                    {child.desc && (
                    <span
                      style={{ color: 'rgba(255, 255, 255, 0.65)' }}
                    > - {child.desc}
                    </span>)}
                  </a>
                </div>))}
            </div>
          </Col>
          ))
      }
        </Row>
      </div>
      <div className="footer-bottom">
        <div className="page">
          <Row>
            <Col md={24} xs={24} style={{ textAlign: 'center' }}>
              <span>Bài tập lớn môn Nền tảng lập trình cho phân tích và trực quan dữ liệu — Nhóm T&amp;D © 2026</span>
            </Col>
          </Row>
        </div>
      </div>
    </footer>);
}
