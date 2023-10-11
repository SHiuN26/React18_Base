import React, { useState } from 'react'
import ReactQuill from 'react-quill'
// import 'react-quill/dist/quill.bubble.css'
import 'react-quill/dist/quill.snow.css'

const QQ = () => {
  const [value, setValue] = useState('')

  // theme="bubble"
  return <ReactQuill theme="snow" value={value} onChange={setValue} />
}

export default QQ