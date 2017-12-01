import { connect } from 'react-redux'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Label from '../components/Label'

class Home extends Component {

	static propTypes = {
		theme: PropTypes.object
	}

	render() {
		// const { author: { name } } = this.props
		return (
			<div>
				<h2>Home</h2>
				<span>This is HomeScreen</span>
			</div> 
		);
	}

}

const mapStateToProps = ({ theme }) => ({ theme })

export default connect(mapStateToProps)(Home);