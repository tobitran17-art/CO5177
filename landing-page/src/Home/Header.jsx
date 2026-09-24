import React from 'react';
import TweenOne from 'rc-tween-one';

const navItems = [
  { title: 'Bài tập lớn', href: '#page1' },
  { title: 'Công nghệ', href: '#page2' },
];

const REPO_LINK = 'https://github.com/tobitran17-art/CO5177';

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
      <nav data-navigation-status={status} className="navigation">
        <div
          data-navigation-toggle="close"
          className="navigation__dark-bg"
          onClick={this.close}
          role="presentation"
        />
        <div className="centered-nav">
          <div className="centered-nav__bg" />
          <div className="centered-nav__header">
            <a href="#" className="centered-nav__logo">
              {LOGO_GLYPHS.map((glyph, i) => (
                <TweenOne
                  key={glyph.text}
                  className="centered-nav__logo-glyph"
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
              data-navigation-toggle="toggle"
              className="centered-nav__toggle"
              onClick={this.toggle}
            >
              <div className="centered-nav__toggle-bar" />
              <div className="centered-nav__toggle-bar" />
            </button>
          </div>
          <div className="centered-nav__content">
            <div className="centered-nav__inner">
              <ul className="centered-nav__ul">
                {navItems.map((item, i) => (
                  <div
                    data-navigation-item=""
                    className="centered-nav__li"
                    key={item.title}
                    style={{ transitionDelay: `${i * 0.05}s` }}
                  >
                    <a href={item.href} className="hamburger-nav__a" onClick={this.close}>
                      <p className="hamburger-nav__p">{item.title}</p>
                    </a>
                  </div>
                ))}
              </ul>
              <div
                data-navigation-item=""
                className="centered-nav__banner-w"
                style={{ transitionDelay: `${navItems.length * 0.05}s` }}
              >
                <a href={REPO_LINK} target="_blank" rel="noopener noreferrer" className="centered-nav__banner">
                  <div className="centered-nav__banner-row">
                    {[0, 1].map(row => (
                      <div data-css-marquee-list="" className="centered-nav__banner-item" key={row}>
                        {[0, 1, 2, 3, 4].map(i => (
                          <div className="centered-nav__banner-inner" key={i}>
                            <p className="centered-nav__banner-text">Xem trên GitHub</p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
