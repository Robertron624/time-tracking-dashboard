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
                <svg className={styles.card_menu} width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="currentcolor" fill-rule="evenodd"/></svg>
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