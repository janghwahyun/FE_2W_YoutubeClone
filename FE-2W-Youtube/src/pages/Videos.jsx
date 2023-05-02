import React from 'react'
import { useParams } from 'react-router-dom'

export default function Videos() {
    const { keyword } = useParams()
    return <div>VIDEOS {keyword ? `${keyword}` : '응 없어'}</div>
}
