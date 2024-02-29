import { User, Product } from './models'
import { connectToDB } from './utils';

export const fetchUsers = async (q, page) => {

    // "i" for case insensitive
    const regex = new RegExp(q, "i")

    const ITEM_PER_PAGE = 2


    try {
        connectToDB();
        const count = await User.find({ username: {$regex: regex }}).count()
        // Not skipping any item
        const users = await User.find({ username: {$regex: regex }}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        return {users, count}
    } catch (error) {
        throw new Error("failed to fetch users")
    }
}

export const fetchProducts = async (q, page) => {

    // "i" for case insensitive
    const regex = new RegExp(q, "i")

    const ITEM_PER_PAGE = 2


    try {
        connectToDB();
        const count = await Product.find({ title: {$regex: regex }}).count()
        // Not skipping any item
        const products = await Product.find({ title: {$regex: regex }}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        return {products, count}
    } catch (error) {
        throw new Error("failed to fetch products")
    }
}