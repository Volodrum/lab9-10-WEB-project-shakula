import { useContext } from 'react';
import { BookingContext } from '../context/BookingContext';
import styles from './WagonSelector.module.css';

const WagonSelector = () => {
  const { selectedWagon, setSelectedWagon, clearSelection } = useContext(BookingContext);
  const wagons = [1, 2, 3];

  const handleWagonChange = (wagonNum) => {
    setSelectedWagon(wagonNum);
    clearSelection();
  };

  return (
    <div className={styles.selectorContainer}>
      <h3>Виберіть вагон:</h3>
      <div className={styles.wagonList}>
        {wagons.map(num => (
          <button
            key={num}
            className={`${styles.wagonBtn} ${selectedWagon === num ? styles.active : ''}`}
            onClick={() => handleWagonChange(num)}
          >
            Вагон {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default WagonSelector;