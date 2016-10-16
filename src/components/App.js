import axios from 'axios';
import classNames from 'classnames';
import Immutable from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import InfoGrid from './InfoGrid';
import React from 'react';
import styles from './App.scss';

class App extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    info: ImmutablePropTypes.map,
  }

  constructor(props) {
    super(props);

    this.state = {
      info: Immutable.Map({
        nameCard: Immutable.Map(),
      }),
    };
  }

  componentDidMount() {
    axios({
      url: '/json/vic.json',
    }).then(response => {
      const info = Immutable.fromJS(response.data);
      this.setState({
        info,
      });
    });
  }

  render() {
    const { className } = this.props;
    const { info } = this.state;
    return (
      <div className={classNames(styles.app, className)}>
        <InfoGrid
          nameCard={info.get('nameCard')}
        />
      </div>
    );
  }
}

export default App;
