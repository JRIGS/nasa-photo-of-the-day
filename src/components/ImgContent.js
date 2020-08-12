import React from 'react'


function ImgContent(props) {
const {passingImgState} = props
return (

<div>
    <h1> Todays Picture</h1>
    <p>Date {passingImgState.date}</p>
    <p>{passingImgState.explanation}</p>
    <img src={passingImgState.url} alt="null" />
    <p>{passingImgState.copyright}</p>
</div>

)

}

export default ImgContent
