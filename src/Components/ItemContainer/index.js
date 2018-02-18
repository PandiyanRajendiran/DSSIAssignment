/**
 * Created by computer on 18-02-2018.
 */
import React, { Component } from 'react';
import './styles.css'
import CarouselContainer from '../CarouselContainer/index'
import BowlContainer from '../BowlContainer/index';

export default class ItemContainer extends Component {

    render = () => (
        <div className="col-lg-9">
            <CarouselContainer />
            <BowlContainer />
        </div>
    );

}
