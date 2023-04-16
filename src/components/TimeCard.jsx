import React from 'react'
import styles from '../styles/TimeCard.module.scss'
import useStore from '../context/store';

const TimeCard = ({card}) => {

    let {title, timeframes } = card;

    const time = useStore(state => state.time)

    const lastText = time == 'daily' ? 'Yesterday' : time == 'weekly' ? 'Last Week' : 'Last Month'


  return (
    <div className={`${styles.card} ${styles[title]}`}>
        <div className={styles.card_header}>

        </div>
        <div className={styles.card_body}>
            <div className={styles.card_title}>
                <h2 className={styles.card_title_text}>{title == 'SelfCare' ? 'Self Care': title}</h2>
                <img className={styles.card_menu} src="icon-ellipsis.svg" alt="card config image" />
            </div>
            <div className={styles.current_previous}>
                <p className={styles.current}>{timeframes[time].current}hrs</p>
                <span className={styles.previous}>{lastText} - {timeframes[time].previous}hrs</span>
            </div>
        </div>
    </div>
  )
}

export default TimeCard