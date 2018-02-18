/**
 * Created by computer on 18-02-2018.
 */
import React from 'react';
import './styles.css';
import MenuContainer from '../MenuContainer/index';
import ItemContainer from '../ItemContainer/index';

export default class HomeContainer extends React.Component {

    render = () => (
        <div className="container">
            <div className="row">
                <MenuContainer />
                <ItemContainer />
            </div>
        </div>
    );
}