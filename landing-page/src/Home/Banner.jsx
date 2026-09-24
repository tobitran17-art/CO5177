import 'rc-banner-anim/assets/index.css';
import React from 'react';
import BannerAnim from 'rc-banner-anim';
import { banner, hero } from './data';

const { Element } = BannerAnim;
const { BgElement } = Element;

class Banner extends React.PureComponent {
  render() {
    const { isMobile } = this.props;
    return (
      <div className="banner page-wrapper">
        <div className="page">
          <div className="logo" />
          <BannerAnim type="across" duration={550} ease="easeInOutQuint">
            <Element key="hero">
              <BgElement
                key="bg"
                className="banner-bg"
                style={{ backgroundImage: `url(${isMobile ? banner.imgMobile : banner.img})` }}
              />
              <div className="hero-wrap">
                <h1 className="hero-title">{hero.title}</h1>
                <div className="hero-info">
                  {hero.info.map(item => (
                    <div className="hero-info-item" key={item.label}>
                      <div className="hero-info-label">{item.label.toUpperCase()}</div>
                      <div className="hero-info-value">{item.value}</div>
                    </div>
                  ))}
                </div>
                <div className="hero-divider" />
                <div className="hero-members">
                  {hero.members.map((member, i) => (
                    <div className="hero-member" key={member.mssv}>
                      <div className="hero-member-index">{`0${i + 1}`}</div>
                      <div className="hero-member-name">{member.name}</div>
                      <div className="hero-member-mssv">{member.mssv}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Element>
          </BannerAnim>
        </div>
      </div>
    );
  }
}

export default Banner;
