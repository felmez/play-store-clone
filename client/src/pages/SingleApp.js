import React, { useContext, useState, useRef } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { Button, Form, Card, Grid, Image, Icon, Label } from 'semantic-ui-react';
import moment from 'moment';

import { AuthContext } from '../context/auth'


const FETCH_APP_QUERY = gql`
    query (
        $appID: ID!
    ) {
        getApp(
            appID: $appID
        ){
            id
            username
            body
            reviewsCount
            reviews{
                id
                username
                body
                createdAt
            }
            createdAt
        }
    }
`

const CREATE_REVIEW_MUTATION = gql`
  mutation ($appID: ID!, $body: String!) {
    createReview(appID: $appID, body: $body) {
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

export default function SingleApp(props) {
    const { user } = useContext(AuthContext);

    const reviewInputRef = useRef(null);

    const appID = props.match.params.appID;

    const [review, setReview] = useState('');

    const { data: { getApp } = {} } = useQuery(FETCH_APP_QUERY, {
        variables: {
            appID
        }
    })

    const [createReview] = useMutation(CREATE_REVIEW_MUTATION, {
        update() {
            setReview('');
            reviewInputRef.current.blur();
        },
        variables: {
            appID,
            body: review
        }
    })

    function deleteAppCallBack() {
        props.history.push('/');
    }

    let appMarkup;

    if (!getApp) {
        appMarkup = <p>Loading app...</p>
    } else {
        const {
            id,
            username,
            body,
            reviewsCount,
            reviews,
            createdAt
        } = getApp;

        appMarkup = (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={2}>
                        <Image
                            floated='right'
                            size='small'
                            src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                        />
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Card fluid>
                            <Card.Content>
                                <Card.Header>
                                    {username}
                                </Card.Header>
                                <Card.Meta>
                                    {moment(createdAt).fromNow()}
                                </Card.Meta>
                                <Card.Description>
                                    {body}
                                </Card.Description>
                            </Card.Content>
                            <hr></hr>
                            <Card.Content extra>
                                <Button as="div" labelPosition="right">
                                    <Button basic color="blue" onClick={() => console.log('review on app')}>
                                        <Icon name='star' />
                                    </Button>
                                    <Label as='a' basic color='blue' pointing='left' /*TODO show reviewers*/>
                                        {reviewsCount}
                                    </Label>
                                </Button>
                            </Card.Content>
                        </Card>
                        {
                            user &&
                            <Card fluid>
                                <Card.Content>
                                    <p>Post a review</p>
                                    <Form>
                                        <div className="ui action input fluid">
                                            <input
                                                type="text"
                                                placeholder="What's up..."
                                                name="review" value={review}
                                                onChange={event => setReview(event.target.value)}
                                                ref={reviewInputRef}
                                            />
                                            <button
                                                type="submit"
                                                className="ui button teal"
                                                disabled={review.trim() === ''}
                                                onClick={createReview}
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </Form>
                                </Card.Content>
                            </Card>
                        }
                        {reviews.map(review => (
                            <Card fluid key={review.id}>
                                <Card.Content>
                                    <Card.Header>
                                        {review.username}
                                    </Card.Header>
                                    <Card.Meta>
                                        {moment(review.createdAt).fromNow()}
                                    </Card.Meta>
                                    <Card.Description>
                                        {review.body}
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        ))}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    };

    return appMarkup;
}
