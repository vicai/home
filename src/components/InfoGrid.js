import Avatar from './Avatar';
import ImmutablePropTypes from 'react-immutable-proptypes';
import NameCard from './NameCard';
import React from 'react';
import styles from './InfoGrid.scss';

class InfoGrid extends React.Component {
  static propTypes = {
    nameCard: ImmutablePropTypes.map,
  }

  render() {
    const { nameCard } = this.props;

    return (
      <div className={styles.grid}>
        <div className={styles.left} />
        <div className={styles.mid}>
          <NameCard
            chineseName={nameCard.get('chineseName')}
            name={nameCard.get('name')}
            title={nameCard.get('title')}
          />
        </div>
        <div className={styles.right}>
          <Avatar
            nickName={nameCard.get('nickName')}
            src={nameCard.get('avatar')}
          />
        </div>
      </div>
    );
  }
}

export default InfoGrid;
