import React from 'react'

export default ({ label, emoji }) => (
  <span
    className="emoji"
    role="img"
    aria-label={label ? label : ''}
    aria-hidden={label ? 'false' : 'true'}
  >
    {emoji}
  </span>
)
