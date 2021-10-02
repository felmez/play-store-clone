import React from 'react'
import { Card, Image, Rating } from 'semantic-ui-react'
import moment from 'moment'
import { Link } from 'react-router-dom'


export default function AppCard({ app: { id, name, username, body, createdAt, reviewsCount } }) {
    return (
        <Card style={{ borderRadius: '0px' }}>
            <Image src='https://play-lh.googleusercontent.com/3JYmWnF47XCGW29Rd8KlZ4HyeGn8sKttUv2jAObOhNBIEtSATO_74ozmB28patd9884=s180-rw' wrapped ui={false} />
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta as={Link} to={`/apps/${id}`}>by {username} {moment(createdAt).fromNow()}</Card.Meta>
                <Card.Description>
                    {body}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Rating icon='star' defaultRating={3} maxRating={5} /> {reviewsCount}
            </Card.Content>
        </Card>
    )
}