import React, { Component } from 'react';

import Card from '../components/Card';
import devGrub from '../assets/devgrub.jpg';
import youtube from '../assets/youtube.jpg';
import everest from '../assets/everest.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Dev Grub',
                    subTitle: 'The cookbook for developers',
                    imgSrc: devGrub,
                    link: 'https://devgrub.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Trevor Perez',
                    subTitle: 'YouTube channel',
                    imgSrc: youtube,
                    link: 'https://youtube.com',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Everest',
                    subTitle: 'A social network for developers',
                    imgSrc: everest,
                    link: 'https://github.com',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id.selected] ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
        })
    }
    render () {
        return (
            <Container fluid>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;