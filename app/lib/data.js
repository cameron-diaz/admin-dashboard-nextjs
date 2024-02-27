import { User } from './models'
import { connectToDB } from './utils';

export const fetchUsers = async (q) => {

    // "i" for case insensitive
    const regex = new RegExp(q, "i")


    try {
        connectToDB();
        const users = await User.find({ username: {$regex: regex }});
        return users
    } catch (error) {
        throw new Error("failed to fetch users")
    }
}