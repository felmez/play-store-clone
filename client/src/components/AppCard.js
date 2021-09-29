import React, { useContext } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import moment from 'moment'
import { Link } from 'react-router-dom'

import { AuthContext } from '../context/auth'


export default function AppCard({ app: { id, name, body, createdAt, reviewsCount } }) {
    const { user } = useContext(AuthContext);

    return (
        <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta as={Link} to={`/posts/${id}`}>{moment(createdAt).fromNow()}</Card.Meta>
                <Card.Description>
                    {body}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name='star' />
                {reviewsCount} Reviews
            </Card.Content>
        </Card>
    )
}