import React, { useContext } from 'react'
import { useQuery } from '@apollo/client';
import { Grid, Transition } from 'semantic-ui-react'

import { AuthContext } from '../context/auth';
import { FETCH_APPS_QUERY } from '../util/GraphQL';
import AppCard from '../components/AppCard'
import AppForm from '../components/AppForm'

export default function Home() {
    const { user } = useContext(AuthContext);

    const { loading, data: { getApps: apps } = {} } = useQuery(FETCH_APPS_QUERY);

    return (
        <Grid columns={10}>
            <Grid.Row className="page-title">
                <h1>Top selling movies</h1>
            </Grid.Row>
            <Grid.Row>
                {user && (
                    <Grid.Column>
                        <AppForm></AppForm>
                    </Grid.Column>
                )}
                {loading ? (
                    <h1>Loading apps...</h1>
                ) : (
                    <Transition.Group>
                        {
                            apps &&
                            apps.map((app) => (
                                <Grid.Column key={app.id} style={{ marginBottom: 20 }}>
                                    <AppCard app={app} />
                                </Grid.Column>
                            ))
                        }
                    </Transition.Group>
                )}
            </Grid.Row>
        </Grid>
    )
}
