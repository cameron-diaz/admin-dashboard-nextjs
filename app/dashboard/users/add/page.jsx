import { addUser } from '@/app/lib/actions'
import styles from '@/app/ui/dashboard/users/addUsers/addUsers.module.css'
const AddUserPage = () => {
    return (
        <div className={styles.container}>
            <form action={addUser} className={styles.form}>
                <input
                    type="text"
                    placeholder="username"
                    name="username"
                    required
                />
                <input type="email" placeholder="email" name="email" required />
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    required
                />
                <input type="phone" placeholder="phone" name="phone" />
                <select name="isAdmin" id="">
                    <option value={false}>Is Admin?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <select name="isActive" id="">
                    <option value={true} selected>
                        Is Active?
                    </option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <textarea
                    name="address"
                    id="address"
                    rows="16"
                    placeholder="Address"
                ></textarea>
                <button type="submit" className={styles.button}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default AddUserPage
