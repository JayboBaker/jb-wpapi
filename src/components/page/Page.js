import React from 'react'
import { connect } from 'react-redux'

function Page (props) {
  const { page } = props

  const renderPage = () => {
    if (!page.acf) return
    const { acf, title } = page
    const primaryHeadlineCopy = acf['PH_copy'] && acf['PH_copy']
    function primaryHeadlineMarkup () {
      return { __html: primaryHeadlineCopy || '' }
    }
    return (
      <div>
        <h1>{title.rendered}</h1>
        <div dangerouslySetInnerHTML={primaryHeadlineMarkup()} />
      </div>
    )
  }

  return (
    <div>
      {page && renderPage()}
    </div>
  )
}

function mapStateToProps (state, ownProps) {
  const { page } = state
  return {
    page
  }
}

export default connect(mapStateToProps)(Page)
