import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

const AdminContainer = (props) => {
  return (
    <div>
      <nav>
        <Link to={'/posts/create'}>Create Post</Link>
        <Link to={'/posts/edit'}>Edit Post</Link>
        <Link to={'/posts'}>View Posts</Link>
      </nav>
      <div>
        {props.children}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);
