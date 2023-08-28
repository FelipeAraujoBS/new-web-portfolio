import styles from "./Meter.module.css"

const Meter = props => {

    let circleFill = Math.round(436 - (436 * (props.num / 100)))

    return(
        <section className={props.className} >
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.box}>
                        <div className={styles.percent}>
                            <svg className={styles.svg}>
                                <defs>
                                    <linearGradient id="GradientColor">
                                        <stop offset="0%" stopColor="#e91e63" />
                                        <stop offset="100%" stopColor="#673ab7" />
                                    </linearGradient>
                                </defs>
                                <circle className={styles.circle} style={{ strokeDashoffset: circleFill}} cx="70" cy="70" r="70"/>
                            </svg>
                            <div className={styles.number}>
                                <h2 className={styles.percentage}>{props.num}%</h2>
                            </div>
                        </div>
                        <h2 className={styles.text}>{props.skill}</h2>
                    </div>
                </div>
            </div>
        </section>
    );

}


export default Meter;