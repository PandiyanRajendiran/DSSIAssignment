/**
 * Created by computer on 18-02-2018.
 */
import React,{ Component } from 'react';
import './styles.css';

export default class MenuContainer extends Component {
    render = () => (
        <div className="col-lg-3">
            <h1 className="my-4">Online shop</h1>
            <div className="list-group">
                <a href="#" className="list-group-item">Category 1</a>
                <a href="#" className="list-group-item">Category 2</a>
                <a href="#" className="list-group-item">Category 3</a>
            </div>

        </div>
        );
}