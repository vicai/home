import React from 'react';
import styles from './Avatar.scss';

class Avatar extends React.Component {
  static propTypes = {
    nickName: React.PropTypes.string,
    src: React.PropTypes.string,
  }

  render() {
    const { nickName, src } = this.props;

    return (
      <div className={styles.avatar}>
        <img className={styles.circle} src={src} />
        <span className={styles.comment}>
          Hello, this is {nickName}
        </span>
      </div>
    );
  }
}

export default Avatar;
