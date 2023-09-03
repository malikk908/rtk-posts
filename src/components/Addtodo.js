import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postAdded } from '../store/slices/PostSlice'
import { selectAllUsers } from '../store/slices/UserSlice'



const Addtodo = () => {

    const dispatch = useDispatch()

    const users = useSelector(selectAllUsers)


    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [userId, setUserId] = useState("")

    const handleChange = (e) => {
        if (e.target.name == 'title') {
            setTitle(e.target.value)

        } else if (e.target.name == 'content') {
            setContent(e.target.value)

        } else if (e.target.name == 'author') {
            setUserId(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(postAdded(title, content, userId))

        setTitle("")
        setContent("")
    }

    const userOptions = users.map(k => (
        <option key={k.id} value={k.id}>
            {k.name}
        </option>)


    )


    return (
        <div className='flex flex-col justify-center my-5 mx-auto'>
            <h1 className='text-3xl font-bold text-center'>Add Todo</h1>

            <form onSubmit={handleSubmit}>
                <div className="mb-6 mt-6 max-w-md mx-auto">
                    <input value={title} onChange={handleChange} name='title' type="text" id="title" className="bg-white border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3" placeholder="Todo" required />
                    <input value={content} onChange={handleChange} name='content' type="text" id="content" className="bg-white border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Content" required />
                    <select onChange={handleChange} value={userId} name="author" id="author">
                        <option value=""></option>
                        {userOptions}
                    </select>
                </div>

                <div className='text-center'>
                    <button type="submit" className=" mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </div>
            </form>

        </div>
    )
}

export default Addtodo
