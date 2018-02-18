import React,{ Component } from 'react';
import Proptypes from 'prop-types';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Bowl extends Component {

    render = () => {
        const { item } = this.props;
        const itemDetails = item.mediaArray[0];
        return (
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                    <a href="#"><img className="card-img-top" src={itemDetails.url} alt=""/></a>
                    <div className="card-body text-left">
                        <h4 className="card-title">{item.itemName}</h4>
                        <h4><small>{item.itemDescription}</small></h4>

                    </div>
                    <div className="card-footer footer-container no-padding ">
                        <div className="row no-margin">
                            <p className="price-label col-lg-4 col-md-4 align-middle text-left no-margin">{item.itemPrice}</p>
                            <button className="order-button col-lg-8 clo-md-8 no-padding text-uppercase align-middle"> add to order </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Bowl.Proptypes = {
    item: Proptypes.object.isRequired,
}