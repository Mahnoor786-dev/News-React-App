import React from 'react'

export default function NewsItem(props) {
    return (
        <div className="my-3">
            <div className="card text-bg-light mb-3">
                <img src={props.imageUrl ? props.imageUrl : "https://newsforce247.com/09-05-2022-08-54-03-am-2213759.jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text"><small className="text-muted">{props.time}</small></p>
                    <a href="{props.newsUrl}" target="_blank" className="btn btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}
