import React, {Component} from 'react'
import {PropTypes} from 'prop-types'

import {card} from './card.css'

class ContactCard extends Component{
	constructor(props){

		super(props);


	}


	

	render(){

		return( 
		<div id = {this.props.id}>
			<p>{this.props.name}</p>
			<p>{this.props.email}</p>
			<p>{this.props.phone}</p>
			<p>{this.props.work}</p>
		</div>
		);
	}
};

ContactCard.propTypes ={
	name : PropTypes.string.isRequired,
	email : PropTypes.string.isRequired,
	phone : PropTypes.number.isRequired,
	work : PropTypes.number,
};

export default ContactCard;