import React, { useState } from 'react'
import { Button, Confirm } from 'semantic-ui-react'
import { gql, useMutation } from '@apollo/client';

import { FETCH_APPS_QUERY } from '../util/GraphQL';
import CustomPopup from './CustomPopup'

const DELETE_APP_MUTATION = gql`
  mutation deleteApp($appID: ID!) {
    deleteApp(appID: $appID)
  }
`

const DELETE_REVIEW_MUTATION = gql`
  mutation deleteReview($appID: ID!, $reviewID: ID!) {
    deleteReview(appID: $appID, reviewID: $reviewID) {
        id
        reviewsCount
        reviews{
            id
            username
            body
            createdAt
        }
    }
  }
`

export default function DeleteButton({ appID, reviewID, callback }) {
    const [confirmOpen, setConfirmOpen] = useState(false);

    const mutation = reviewID ? DELETE_REVIEW_MUTATION : DELETE_APP_MUTATION;

    const [deleteAppOrReview] = useMutation(mutation, {
        update(proxy) {
            setConfirmOpen(false);

            if (!reviewID) {
                const data = proxy.readQuery({
                    query: FETCH_APPS_QUERY
                });
                proxy.writeQuery({
                    query: FETCH_APPS_QUERY,
                    data: {
                        getApps: data.getApps.filter((a) => a.id !== appID)
                    },
                });

                if (callback) callback();
            }
        },
        variables: {
            appID,
            reviewID
        }
    });

    return (
        <>
            <CustomPopup content={reviewID ? 'Delete review' : 'Delete app'}>
                <Button circular icon="close" color="red" floated="right" onClick={() => setConfirmOpen(true)}>
                </Button>
            </CustomPopup>
            <Confirm
                open={confirmOpen}
                onCancel={() => setConfirmOpen(false)}
                onConfirm={deleteAppOrReview}
            />
        </>
    );
}

