import React from 'react';
import styles from './NameCard.scss';

class NameCard extends React.Component {
  static propTypes = {
    chineseName: React.PropTypes.string,
    name: React.PropTypes.string,
    title: React.PropTypes.string,
  }

  render() {
    const {
      chineseName,
      name,
      title,
    } = this.props;

    return (
      <div className={styles.nameCard}>
        <div className={styles.chineseName}>
          {chineseName}
        </div>
        <div className={styles.title}>
          {title}
        </div>
        <div className={styles.name}>
          {name}
        </div>
      </div>
    );
  }
}

export default NameCard;
