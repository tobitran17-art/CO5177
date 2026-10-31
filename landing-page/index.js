import React from 'react';
import ReactDOM from 'react-dom';
import Home from './src/Home';
import TabularReport from './src/Home/TabularReport';
import TextReport from './src/Home/TextReport';
import ImageReport from './src/Home/ImageReport';
import { currentRoute, isAppLink } from './src/Home/routes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { route: currentRoute() };
  }

  componentDidMount() {
    window.addEventListener('popstate', this.onPop);
    document.addEventListener('click', this.onClick);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.onPop);
    document.removeEventListener('click', this.onClick);
  }

  onPop = () => {
    this.setState({ route: currentRoute() });
  }

  onClick = (event) => {
    if (
      event.defaultPrevented
      || event.button !== 0
      || event.metaKey
      || event.ctrlKey
      || event.shiftKey
      || event.altKey
    ) {
      return;
    }
    let node = event.target;
    while (node && node.tagName !== 'A') {
      node = node.parentNode;
    }
    if (!node || node.getAttribute('target') === '_blank') {
      return;
    }
    const href = node.getAttribute('href');
    if (!isAppLink(href)) {
      return;
    }
    event.preventDefault();
    const url = new URL(href, window.location.href);
    window.history.pushState({}, '', `${url.pathname}${url.search}${url.hash}`);
    this.setState({ route: currentRoute() });
    window.scrollTo(0, 0);
  }

  render() {
    if (this.state.route === '/tabular') {
      return <TabularReport />;
    }
    if (this.state.route === '/text') {
      return <TextReport />;
    }
    if (this.state.route === '/image') {
      return <ImageReport />;
    }
    return <Home />;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
