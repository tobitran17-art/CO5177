import React from 'react';
import TweenOne from 'rc-tween-one';

const navItems = [
  { title: 'Bài tập lớn', href: '#page1' },
  { title: 'Công nghệ', href: '#page2' },
];

const smallLinks = [
  { title: 'Repository', href: 'https://github.com/tobitran17-art/CO5177' },
  { title: 'GitHub', href: 'https://github.com/tobitran17-art' },
];

const REPO_LINK = 'https://github.com/tobitran17-art/CO5177';
const ASSIGNMENT_PDF = 'assignment-vne-v4.pdf';

// Scatter offsets each logo glyph starts from before gathering into place,
// mirroring the Ant Motion "logo gather" entrance effect.
const LOGO_GLYPHS = [
  { text: 'T', from: { x: -60, y: -40, rotate: -35, opacity: 0 } },
  { text: '&', from: { x: 0, y: 50, rotate: 25, opacity: 0 } },
  { text: 'D', from: { x: 60, y: -40, rotate: 35, opacity: 0 } },
];

export default class Header extends React.PureComponent {
  state = {
    active: false,
  };

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = (e) => {
    if (e.keyCode === 27 && this.state.active) {
      this.close();
    }
  };

  toggle = () => {
    this.setState(prevState => ({ active: !prevState.active }));
  };

  close = () => {
    this.setState({ active: false });
  };

  render() {
    const { active } = this.state;
    const status = active ? 'active' : 'not-active';
    return (
      <nav data-twostep-nav data-nav-status={status} className="twostep-nav">
        <div
          data-nav-toggle="close"
          className="twostep-nav__bg"
          onClick={this.close}
          role="presentation"
        />
        <div className="twostep-nav__wrap">
          <div className="twostep-nav__width">
            <div className="twostep-nav__bar">
              <div className="twostep-nav__back">
                <div className="twostep-nav__back-bg" />
              </div>
              <div className="twostep-nav__top">
                <a href="#" className="twostep-nav__logo">
                  {LOGO_GLYPHS.map((glyph, i) => (
                    <TweenOne
                      key={glyph.text}
                      className="twostep-nav__logo-glyph"
                      animation={[
                        { ...glyph.from, duration: 0 },
                        {
                          x: 0, y: 0, rotate: 0, opacity: 1,
                          delay: 200 + i * 120,
                          duration: 600,
                          ease: 'easeOutBack',
                        },
                      ]}
                    >
                      {glyph.text}
                    </TweenOne>
                  ))}
                </a>
                <button
                  type="button"
                  data-nav-toggle="toggle"
                  className="twostep-nav__toggle"
                  onClick={this.toggle}
                >
                  <div className="twostep-nav__toggle-bar" />
                  <div className="twostep-nav__toggle-bar" />
                </button>
                <div className="twostep-nav__top-line" />
              </div>
              <div className="twostep-nav__bottom">
                <div className="twostep-nav__bottom-overflow">
                  <div className="twostep-nav__bottom-inner">
                    <div className="twostep-nav__bottom-row">
                      <div className="twostep-nav__bottom-col">
                        <div className="twostep-nav__info">
                          <ul className="twostep-nav__ul">
                            {navItems.map(item => (
                              <li className="twostep-nav__li" key={item.title}>
                                <a href={item.href} className="twostep-nav__link" onClick={this.close}>
                                  <span className="twostep-nav__link-span">{item.title}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                          <ul className="twostep-nav__ul is--small">
                            {smallLinks.map(item => (
                              <li className="twostep-nav__li" key={item.title}>
                                <a
                                  href={item.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="twostep-nav__link"
                                >
                                  <span className="twostep-nav__link-eyebrow">{item.title}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="twostep-nav__bottom-col is--visual">
                        <div className="twostep-nav__visual">
                          <p className="twostep-nav__visual-eyebrow">Đề bài</p>
                          <p className="twostep-nav__visual-title">
                            Nền tảng lập trình cho phân tích và trực quan dữ liệu
                          </p>
                          <a
                            href={ASSIGNMENT_PDF}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="twostep-nav__visual-btn"
                          >
                            Xem bài tập
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
