import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableOfContents extends Component {
  render() {
    const { toc } = this.props;

    if(toc === ''){
      return null;
    }

    return (
      <div>
        <p>目次</p>
        <div dangerouslySetInnerHTML={{ __html: toc }}/>
      </div>
    );
  }
}

TableOfContents.propTypes = {
  toc: PropTypes.string.isRequired,
};

export default TableOfContents;
