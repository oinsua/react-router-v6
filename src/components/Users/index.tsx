import React from 'react'
import { Link, Outlet, useLoaderData } from 'react-router-dom'
import { User } from '../../model/user.model'

export default function Users() {
    const data = useLoaderData() as User[]

    return (
        <div>
            {
                data.map(item => (
                    <article key={item.id} style={{ border: "2px solid white", borderRadius: "15px", margin: "1rem" }}>
                        <p>{`Name: ${item.name}`}</p>
                        <p>{`User Name: ${item.username}`}</p>
                        <p>{`Email: ${item.email}`}</p>
                        <p>{`Phone: ${item.phone}`}</p>
                        <p><Link to={`/home/users/${item.id}`}>Details</Link></p>
                        <Outlet />
                    </article>
                ))
            }
        </div>
    )
}
