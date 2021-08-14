import React, { memo } from 'react'

const LandingPageLayout = (props) => {
  return (
    <>
      <div className="landing-page-layout">
        <main>
          {props.children}
        </main>
      </div>
    </>
  )
}

export default memo(LandingPageLayout)