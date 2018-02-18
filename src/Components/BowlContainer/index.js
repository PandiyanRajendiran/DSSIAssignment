/**
 * Created by computer on 18-02-2018.
 */
import React, { Component } from 'react';
import UUID from 'uuid';
import './styles.css'
import Bowl from '../Bowl/index';
import BowlDetails from '../../Assets/Mainland_Poke_Build_Your_Own_Bowl.json';

export default class BowlContainer extends Component {

    renderBowlItems = () => BowlDetails.items.map((item) => (<Bowl key={UUID.v4()} item={item} />));

    render = () => (
        <div>
            <h2 className="title">{BowlDetails.groupName}</h2>
            <div className="row">
                {this.renderBowlItems()}
            </div>
        </div>
    );
}
