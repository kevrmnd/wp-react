import { connect } from 'react-redux'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'

class Page extends Component {

  static propTypes = {
    pages: PropTypes.array
  }

  render() {
    const { match: { params: { id: pageId } }, pages } = this.props
    const page = pages.find(page => page.id === parseInt(pageId, 10))

    if(page == null) { return <Redirect to="/"/> }

    const { id, post_title, post_content, post_author, post_date, post_status } = page
    return (
      <div class="page">
        <h2>{post_title}</h2>
        <span>Posted on {post_date}</span>
        <div class="content">{post_content}</div>
        <Link to="/">Come back to home</Link>
      </div>
    );
  }
}

const mapStateToProps = ({ pages }) => ({ pages })

export default connect(mapStateToProps)(Page);