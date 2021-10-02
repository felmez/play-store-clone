import React from 'react'
import { useQuery } from '@apollo/client';
import { Grid, Transition } from 'semantic-ui-react'

import { FETCH_APPS_QUERY } from '../util/GraphQL';
import AppCard from '../components/AppCard'

export default function Movies() {
    const { loading, data: { getApps: apps } = {} } = useQuery(FETCH_APPS_QUERY);

    return (
        <Grid columns={6} className="homeContainer">
            <Grid.Row className="page-title">
                <h1>Movies</h1>
            </Grid.Row>
            <Grid.Row>
                {loading ? (
                    <h1>Loading movies...</h1>
                ) : (
                    <Transition.Group>
                        {
                            apps &&
                            apps.filter(app => app.category === "movie").map(filteredApps => (
                                <Grid.Column key={filteredApps.id} style={{ marginBottom: 20 }}>
                                    <AppCard app={filteredApps} />
                                </Grid.Column>
                            ))
                        }
                    </Transition.Group>
                )}
            </Grid.Row>
        </Grid>
    )
}
