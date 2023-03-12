import React from 'react'
import { Form, useSubmit } from 'react-router-dom'
import styles from './overview.module.css'

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default function Overview() {
    let submit = useSubmit();

    const handleSubmit = () => {
        let formData = new FormData();
        submit(formData)
    }

    return (
        <div>
            <h4>Add a new Post</h4>
            <Form className={styles.form} method="post">
                <input type="text" name="title" />
                <input type="text" name="body" />
                <input type="text" name="id" hidden defaultValue={`1`} />
                <input type="text" name="userId" hidden defaultValue={`123`} />
                <button type="submit" onClick={handleSubmit}>Save</button>
            </Form>
        </div>
    )
}
