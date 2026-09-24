import React from "react";

const navItems = [
  { title: "Bài tập lớn", href: "#page1" },
  { title: "Công nghệ", href: "#page2" },
];

const smallLinks = [
  {
    title: "Repository",
    href: "https://github.com/tobitran17-art/CO5177",
    icon: "github",
  },
];

const GitHubIcon = () => (
  <svg
    viewBox="0 0 16 16"
    width="14"
    height="14"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
      0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
      -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66
      .07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15
      -.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27
      .68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12
      .51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48
      0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"
    />
  </svg>
);

const REPO_LINK = "https://github.com/tobitran17-art/CO5177";
const ASSIGNMENT_PDF = "assignment-vne-v4.pdf";

export default class Header extends React.PureComponent {
  state = {
    active: false,
  };

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown);
  }

  onKeyDown = (e) => {
    if (e.keyCode === 27 && this.state.active) {
      this.close();
    }
  };

  toggle = () => {
    this.setState((prevState) => ({ active: !prevState.active }));
  };

  close = () => {
    this.setState({ active: false });
  };

  render() {
    const { active } = this.state;
    const status = active ? "active" : "not-active";
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
                  T&amp;D
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
                {/* <div className="twostep-nav__top-line" /> */}
              </div>
              <div className="twostep-nav__bottom">
                <div className="twostep-nav__bottom-overflow">
                  <div className="twostep-nav__bottom-inner">
                    <div className="twostep-nav__bottom-row">
                      <div className="twostep-nav__bottom-col">
                        <div className="twostep-nav__info">
                          <ul className="twostep-nav__ul">
                            {navItems.map((item) => (
                              <li className="twostep-nav__li" key={item.title}>
                                <a
                                  href={item.href}
                                  className="twostep-nav__link"
                                  onClick={this.close}
                                >
                                  <span className="twostep-nav__link-span">
                                    {item.title}
                                  </span>
                                </a>
                              </li>
                            ))}
                          </ul>
                          <ul className="twostep-nav__ul is--small">
                            {smallLinks.map((item) => (
                              <li className="twostep-nav__li" key={item.title}>
                                <a
                                  href={item.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="twostep-nav__link"
                                >
                                  <span className="twostep-nav__link-eyebrow">
                                    {item.title}
                                  </span>
                                  {item.icon === "github" && (
                                    <span className="twostep-nav__badge">
                                      <GitHubIcon />
                                    </span>
                                  )}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="twostep-nav__bottom-col is--visual">
                        <div className="twostep-nav__visual">
                          {/* <p className="twostep-nav__visual-eyebrow">Đề bài</p> */}
                          <p className="twostep-nav__visual-title">
                            Nền tảng lập trình cho phân tích và trực quan dữ
                            liệu
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
