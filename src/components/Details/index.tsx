import React from 'react'
import { Link, Outlet, useLoaderData } from 'react-router-dom'
import { User } from '../../model/user.model'

export default function Details() {
    const item = useLoaderData() as User
    return (
        <article style={{ border: "2px solid white", borderRadius: "15px", margin: "1rem", width: "100%" }}>
            <p>{`Name: ${item.name}`}</p>
            <p>{`User Name: ${item.username}`}</p>
            <p>{`Email: ${item.email}`}</p>
            <p>{`Phone: ${item.phone}`}</p>
            <p>{`WebSite: ${item.website}`}</p>
            <p>Address:</p>
            <ul>
                <li>{`Street: ${item.address.street}`}</li>
                <li>{`Suite: ${item.address.suite}`}</li>
                <li>{`City: ${item.address.city}`}</li>
                <li>{`Zip Code: ${item.address.zipcode}`}</li>
            </ul>
            <p><Link to={`/home/users/${item.id}/comments`}>Comments</Link></p>
            <Outlet />
        </article>
    )
}
