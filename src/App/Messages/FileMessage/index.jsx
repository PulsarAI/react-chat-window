import React from 'react'
import FileIcon from '../../UserInput/FileIcon'


const FileMessage = (props) => (
    <a className='sc-message--file' href={props.data.url} download={props.data.fileName}>
        <FileIcon />
        <p>{props.data.fileName}</p>
    </a>
)

export default FileMessage
