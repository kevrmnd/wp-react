import { connect } from 'react-redux'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Label from '../components/Label'

import './Header.css'

class Header extends Component {

	static propTypes = {
    theme: PropTypes.object
	}

	render() {
		const { theme: { blogname, blogdescription } } = this.props
		return (
			<header>
				<h1>{blogname}</h1>
				<h2>{blogdescription}</h2>
        <Link to="/">Home page</Link><br/>
				<Link to="/page/2">Page id 2</Link>
			</header> 
		);
	}

}

const mapStateToProps = ({ theme }) => ({ theme })

export default connect(mapStateToProps)(Header);