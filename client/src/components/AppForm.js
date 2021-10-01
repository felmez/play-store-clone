import React from 'react'
import { Form, Button, Modal, Container, Icon } from 'semantic-ui-react'
import { gql, useMutation } from '@apollo/client';


import { useForm } from '../util/Hooks'
import { FETCH_APPS_QUERY } from '../util/GraphQL';


const CREATE_APP_MUTATION = gql`
    mutation createApp(
        $body: String!
        $name: String!
    ) {
        createApp(body: $body, name: $name){
            id
            name
            username
            body
            createdAt
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

export default function AppForm() {

    const { onChange, onSubmit, values } = useForm(createAppCallBack, {
        name: '',
        body: ''
    })

    const [open, setOpen] = React.useState(false)

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
            values.name = "";
            values.body = "";
        },
    });

    function createAppCallBack() {
        createApp();
    }

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button color='teal'>
                <Icon name='plus' /> Submit App
            </Button>}
        >
            <Modal.Header>Create New App</Modal.Header>
            <Modal.Content>
                <Container>


                    <Form onSubmit={onSubmit}>
                        <Form.Field>
                            <Form.Input
                                placeholder="Name"
                                name="name"
                                onChange={onChange}
                                value={values.name}
                            />
                            <Form.Input
                                placeholder="Description"
                                name="body"
                                onChange={onChange}
                                value={values.body}
                            />
                            <Button type="submit" color="teal" disabled={!values.name.trim()}>
                                Submit
                            </Button>
                        </Form.Field>
                    </Form>
                </Container>
            </Modal.Content>
        </Modal>
    )
}