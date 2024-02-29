import styles from './transactions.module.css'
import Image from 'next/image'

const Transations = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Latest transations</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image
                                    className={styles.userImage}
                                    src={'/noavatar.png'}
                                    alt="picture"
                                    width={40}
                                    height={40}
                                />
                                Joe Doe
                            </div>
                        </td>
                        <td>
                            <span
                                className={`${styles.status} ${styles.pending}`}
                            >
                                Pending
                            </span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$300</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image
                                    className={styles.userImage}
                                    src={'/noavatar.png'}
                                    alt="picture"
                                    width={40}
                                    height={40}
                                />
                                Joe Doe
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.done}`}>
                                Done
                            </span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$300</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image
                                    className={styles.userImage}
                                    src={'/noavatar.png'}
                                    alt="picture"
                                    width={40}
                                    height={40}
                                />
                                Joe Doe
                            </div>
                        </td>
                        <td>
                            <span
                                className={`${styles.status} ${styles.canceled}`}
                            >
                                Canceled
                            </span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$300</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Transations
