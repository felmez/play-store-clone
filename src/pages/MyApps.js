import React, { useContext } from 'react'
import { useQuery } from '@apollo/client';
import { Grid, Transition } from 'semantic-ui-react'

import { AuthContext } from '../context/auth'
import { FETCH_APPS_QUERY } from '../util/GraphQL';
import AppTable from '../components/AppTable';

export default function MyApps() {
    const { loading, data: { getApps: apps } = {} } = useQuery(FETCH_APPS_QUERY);

    const { user } = useContext(AuthContext);

    return (
        <Grid columns={1}>
            <Grid.Row>
                {loading ? (
                    <h1>Loading apps...</h1>
                ) : (
                    <Transition.Group>
                        {
                            apps &&
                            apps.filter(app => app.username === user.username).map(filteredApps => (
                                <Grid.Column key={filteredApps.id} style={{ marginBottom: 20 }}>
                                    <AppTable app={filteredApps} />
                                </Grid.Column>
                            ))
                        }
                    </Transition.Group>
                )}
            </Grid.Row>
        </Grid>
    )
}
