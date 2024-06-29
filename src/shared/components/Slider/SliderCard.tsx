
// import s from './slider.module.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap';
// import { SwiperSlide } from 'swiper/react';


export const SliderCard = (props: any) => {

    const {imgSrc, price, title} = props.data;
  
    return (
        <Card className='p-0 overflow-hidden h-100 shadow'>
            <div className='overflow-hidden rounded p-0 bg-light'>
                <Card.Img variant='top' src={imgSrc} />
            </div>
            <Card.Body className='text-center'>
                <Card.Title className='display-6'>{price}</Card.Title>
                <Card.Title >{title}</Card.Title>
            </Card.Body>
            <Button className='w-100 rounded-0' variant='success'>Подробнее</Button>
        </Card>
    )
  };


