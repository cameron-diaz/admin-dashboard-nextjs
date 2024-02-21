import styles from '@/app/ui/dashboard/Products/singleProduct/singleProduct.module.css'
import Image from 'next/image'

const SingleUserPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/noavatar.png" alt="" fill />
                </div>
                IPhone
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form}>
                    <label>Title</label>
                    <input type="text" name="title" placeholder="Title" />
                    <label>Price</label>
                    <input type="number" name="price" placeholder="$$$" />
                    <label>Stock</label>
                    <input type="number" name="stock" placeholder="25" />
                    <label>Color</label>
                    <input type="text" name="color" placeholder="Red" />
                    <label>Size</label>
                    <textarea type="text" name="size" placeholder="New York" />
                    <label>Category</label>
                    <select name="cat" id="cat">
                        <option value={true}>Kitchen</option>
                        <option value={false}>Computer</option>
                    </select>
                    <label>Is Active?</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value="kitchen">Kitchen</option>
                        <option value="computers">Computers</option>
                    </select>
                    <label>Description</label>
                    <textarea
                        name="desc"
                        id="desc"
                        rows={10}
                        placeholder="description"
                    ></textarea>
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleUserPage
