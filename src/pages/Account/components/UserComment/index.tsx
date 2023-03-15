import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Comments } from '../../../../model/user.model'

export default function UserComment() {
    const comments = useLoaderData() as Comments[]
    return (
        <>
            {
                comments?.map(item => (
                    <article key={`${item.postId}-${item.id}`} style={{ border: "2px solid white", borderRadius: "15px", margin: "1rem", textAlign: "left", padding: "1rem" }}>
                        <p>{`Name: ${item.name}`}</p>
                        <p>{`Email: ${item.email}`}</p>
                        <p style={{ maxWidth: "450px" }}>{`Body: ${item.body}`}</p>
                    </article>
                ))
            }
        </>
    )
}
