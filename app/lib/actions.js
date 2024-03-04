"use server"
import { revalidatePath } from "next/cache"
import { Product, User } from "./models"
import { connectToDB } from "./utils"
import { redirect } from "next/navigation"
import bcrypt from 'bcrypt'

export const addUser = async (formData) => {
    const { username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData)

    try {
        connectToDB()

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            username, email, password: hashedPassword, phone, address, isAdmin, isActive
        })

        await newUser.save()
    } catch (error) {
        throw new Error("Failed to create user!")
    }
    // As you as you create new user, refresh the data on the users page
    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
}
export const updateUser = async (formData) => {
    const { id, username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData)

    try {
        connectToDB()

        const updateFields = {
            username, email, password, phone, address, isAdmin, isActive
        }

        Object.keys(updateFields).forEach((key) => (updateFields[key] === "" || undefined) && delete updateFields[key])

        await User.findByIdAndUpdate(id, updateFields)

    } catch (error) {
        throw new Error("Failed to update user!")
    }
    // As you as you edit the user, refresh the data on the users page
    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
}
export const updateProduct = async (formData) => {
    const { id, title, desc, price, stock, color, size } = Object.fromEntries(formData)

    try {
        connectToDB()

        const updateFields = {
            title, desc, price, stock, color, size
        }

        Object.keys(updateFields).forEach((key) => (updateFields[key] === "" || undefined) && delete updateFields[key])

        await Product.findByIdAndUpdate(id, updateFields)

    } catch (error) {
        throw new Error("Failed to update product!")
    }
    // As you as you edit the user, refresh the data on the users page
    revalidatePath("/dashboard/products")
    redirect("/dashboard/products")
}

export const addProduct = async (formData) => {
    const { title, desc, price, stock, color, size } = Object.fromEntries(formData)

    try {
        connectToDB()

        const newProduct = new Product({
            title, desc, price, stock, color, size
        })

        await newProduct.save()
    } catch (error) {
        throw new Error("Failed to create product!")
    }
    // As you as you create new product, refresh the data on the products page
    revalidatePath("/dashboard/products")
    redirect("/dashboard/products")
}

export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData)

    try {
        connectToDB()
        await User.findByIdAndDelete(id)
    } catch (error) {
        throw new Error("Failed to delete product!")
    }
    // As you as you delete new product, refresh the data on the product page
    revalidatePath("/dashboard/users")
}
export const deleteProduct = async (formData) => {
    const { id } = Object.fromEntries(formData)

    try {
        connectToDB()
        await Product.findByIdAndDelete(id)
    } catch (error) {
        throw new Error("Failed to delete product!")
    }
    // As you as you delete new product, refresh the data on the product page
    revalidatePath("/dashboard/products")
}