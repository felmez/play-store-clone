import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { gql, useMutation } from '@apollo/client';


import { useForm } from '../util/Hooks'
import { FETCH_APPS_QUERY } from '../util/GraphQL';


const CREATE_APP_MUTATION = gql`
    mutation createApp(
        $body: String!
    ) {
        createApp(body: $body){
            id
            username
            body
            createdAt
            likesCount
            likes{
                id
                username
                createdAt
            }
            commentsCount
            comments{
                id
                username
                body
                createdAt
            }
        }
    }
`

export default function AppForm() {

    const { onChange, onSubmit, values } = useForm(createAppCallBack, {
        body: '',
    })

    const [createApp] = useMutation(CREATE_APP_MUTATION, {
        variables: values,
        update(proxy, result) {
            const data = proxy.readQuery({
                query: FETCH_APPS_QUERY,
            });
            proxy.writeQuery({
                query: FETCH_APPS_QUERY,
                data: {
                    getApps: [result.data.createApp, ...data.getApps],
                },
            });
            values.body = "";
        },
    });

    function createAppCallBack() {
        createApp();
    }

    return (
        <Form onSubmit={onSubmit}>
            <h1>Create app:</h1>
            <Form.Field>
                <Form.Input
                    placeholder="What's happening?"
                    name="body"
                    onChange={onChange}
                    value={values.body}
                />
                <Button type="submit" color="teal" disabled={!values.body.trim()}>
                    App
                </Button>
            </Form.Field>
        </Form>
    )
}