'use client'
import styles from './loginForm.module.css'
import { authenticate } from '@/app/lib/actions'
import { useFormState } from 'react-dom'

const LoginForm = () => {
    const [state, formAction] = useFormState(authenticate, undefined)

    return (
        <div className={styles.container}>
            <form className={styles.form} action={formAction}>
                <h1>Login</h1>
                <input type="text" placeholder="username" name="username" />
                <input type="password" placeholder="password" name="password" />
                <button>Login</button>
                {state && state}
            </form>
        </div>
    )
}

export default LoginForm
