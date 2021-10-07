import React from 'react'
import { connect } from 'react-redux'

import { selectDirectorySections } from '../../redux/directory/directory.selectors'

import './directory.styles.scss'

import MenuItem from '../menu-item/menu-item.component';
import { createStructuredSelector } from 'reselect'

const Directory = ({sections}) => {
  return (
    <div className="directory-menu">
      {
        sections.map(({ id, ...props }) => {
          return (
            <MenuItem key={id} {...props} />
          )
        })
      }
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)