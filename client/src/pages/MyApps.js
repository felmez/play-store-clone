import React, { useContext } from 'react'
import { useQuery } from '@apollo/client';
import { Grid, Table } from 'semantic-ui-react'

import { AuthContext } from '../context/auth'
import { FETCH_APPS_QUERY } from '../util/GraphQL';
import AppTable from '../components/AppTable';

export default function MyApps() {
    const { loading, data: { getApps: apps } = {} } = useQuery(FETCH_APPS_QUERY);

    const { user } = useContext(AuthContext);

    return (
        <Grid columns={4}>
            <Grid.Column>
            </Grid.Column>
            <Grid.Column>
                {loading ? (
                    <h1>Loading apps...</h1>
                ) : (
                    <Table singleLine>
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
                        {
                            apps &&
                            apps.filter(app => app.username === user.username).map(filteredApps => (
                                <AppTable app={filteredApps} />
                            ))
                        }
                    </Table>
                )}
            </Grid.Column>
        </Grid>
    )
}
