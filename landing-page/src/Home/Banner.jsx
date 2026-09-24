import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { hero } from './data';

class Banner extends React.PureComponent {
  render() {
    return (
      <div className="banner page-wrapper">
        <div className="page">
          <QueueAnim type="bottom" ease={['easeOutCubic', 'easeInQuad']}>
            <h1 key="title" className="hero-title">{hero.title}</h1>
            <div key="info" className="hero-info">
              {hero.info.map(item => (
                <div className="hero-info-item" key={item.label}>
                  <div className="hero-info-label">{item.label.toUpperCase()}</div>
                  <div className="hero-info-value">{item.value}</div>
                </div>
              ))}
            </div>
            <div key="divider" className="hero-divider" />
            <div key="members" className="hero-members">
              {hero.members.map((member, i) => (
                <div className="hero-member" key={member.mssv}>
                  <div className="hero-member-index">{`0${i + 1}`}</div>
                  <div className="hero-member-name">{member.name}</div>
                  <div className="hero-member-mssv">{member.mssv}</div>
                </div>
              ))}
            </div>
          </QueueAnim>
        </div>
      </div>
    );
  }
}

export default Banner;
