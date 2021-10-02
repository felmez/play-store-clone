import React from 'react'
import { useQuery } from '@apollo/client';
import { Grid, Transition } from 'semantic-ui-react'

import { FETCH_APPS_QUERY } from '../util/GraphQL';
import AppTable from '../components/AppTable';

export default function Home() {
    const { loading, data: { getApps: apps } = {} } = useQuery(FETCH_APPS_QUERY);

    return (
        <Grid columns={1}>
            <Grid.Row>
                {loading ? (
                    <h1>Loading apps...</h1>
                ) : (
                    <Transition.Group>
                        {
                            apps &&
                            apps.map((app) => (
                                <Grid.Column key={app.id} style={{ marginBottom: 20 }}>
                                    <AppTable app={app} />
                                </Grid.Column>
                            ))
                        }
                    </Transition.Group>
                )}
            </Grid.Row>
        </Grid>
    )
}
