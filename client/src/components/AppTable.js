import React, { useContext } from 'react'
import { Table, Header, Rating, Container } from 'semantic-ui-react'
import moment from 'moment'

import { AuthContext } from '../context/auth'
import DeleteButton from '../components/DeleteButton';

export default function AppTable({ app: { id, username, name, body, createdAt, category } }) {
    const { user } = useContext(AuthContext);

    return (
        <Container>
            <Table celled padded>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Category</Table.HeaderCell>
                        <Table.HeaderCell>Reviews</Table.HeaderCell>
                        <Table.HeaderCell>Puplish Date</Table.HeaderCell>
                        <Table.HeaderCell>Actions</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

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
                            <Rating icon='star' defaultRating={3} maxRating={5} />
                        </Table.Cell>
                        <Table.Cell>
                            {moment(createdAt).fromNow()}
                        </Table.Cell>
                        <Table.Cell>
                            {user && user.username === username && <DeleteButton appID={id} />}
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </Container>
    )
}


