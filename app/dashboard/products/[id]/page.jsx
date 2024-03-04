import { fetchSingleProduct } from '@/app/lib/data'
import { updateProduct } from '@/app/lib/actions'
import styles from '@/app/ui/dashboard/Products/singleProduct/singleProduct.module.css'
import Image from 'next/image'

const SingleProductPage = async ({ params }) => {
    const { id } = params
    const product = await fetchSingleProduct(id)

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/noavatar.png" alt="" fill />
                </div>
                {product.title}
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form} action={updateProduct}>
                    <input type="hidden" name="id" value={product.id} />
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        placeholder={product.title}
                    />
                    <label>Price</label>
                    <input
                        type="number"
                        name="price"
                        placeholder={product.price}
                    />
                    <label>Stock</label>
                    <input
                        type="number"
                        name="stock"
                        placeholder={product.stock}
                    />
                    <label>Color</label>
                    <input
                        type="text"
                        name="color"
                        placeholder={product.color}
                    />
                    <label>Size</label>
                    <textarea
                        type="text"
                        name="size"
                        placeholder={product.size}
                    />
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
                        placeholder={product.desc}
                    ></textarea>
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleProductPage
