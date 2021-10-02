import React, { useContext } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";


import { AuthContext } from '../context/auth'


export default function AppCard({ app: { id, name, username, body, createdAt, reviewsCount, category } }) {
    const { user } = useContext(AuthContext);

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    return (
        <Card style={{ borderRadius: '0px' }}>
            <Image src='https://play-lh.googleusercontent.com/3JYmWnF47XCGW29Rd8KlZ4HyeGn8sKttUv2jAObOhNBIEtSATO_74ozmB28patd9884=s180-rw' wrapped ui={false} />
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta as={Link} to={`/apps/${id}`}>by {username} {moment(createdAt).fromNow()}</Card.Meta>
                <Card.Description>
                    {body}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={12}
                    emptyIcon={<i className="fa fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                />
            </Card.Content>
        </Card>
    )
}