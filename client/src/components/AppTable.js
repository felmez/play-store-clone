import React, { useContext } from 'react'
import { Table, Header, Rating } from 'semantic-ui-react'
import moment from 'moment'

import { AuthContext } from '../context/auth'
import DeleteButton from '../components/DeleteButton';

export default function AppTable({ app: { id, username, name, body, createdAt, category, reviewsCount } }) {
    const { user } = useContext(AuthContext);

    return (
        <Table.Body>
            <Table.Row>
                <Table.Cell>
                    <Header >
                        {name}
                    </Header>
                </Table.Cell>
                <Table.Cell>{body}</Table.Cell>
                <Table.Cell>{category}</Table.Cell>
                <Table.Cell>
                    <Rating icon='star' defaultRating={3} maxRating={5} /> {reviewsCount}
                </Table.Cell>
                <Table.Cell>
                    {moment(createdAt).fromNow()}
                </Table.Cell>
                <Table.Cell>
                    {user && user.username === username && <DeleteButton appID={id} />}
                </Table.Cell>
            </Table.Row>
        </Table.Body>
    )
}


