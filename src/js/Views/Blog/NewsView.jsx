import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default class NewsView extends Component {

    constructor(props, context) {
       super(props, context);
       this.state = {
           news: this.props.data,
           history: this.context.router.history
       };
    }


    render() {
        const { news, history } = this.state
        const post = news.map((data, index) =>
           <div className='post' key={index} onClick={() => history.push("/blog/"+data.id)}>
               <div className='thumbnail'>
                   <img className='image' src={'data:image/png;base64, ' + data.image} alt='article' />
                   <h2 className='title'>{data.title}</h2>
               </div>
               <p className='body'>
                   {data.shortDescription}
               </p>
               <h4 className='date'>{moment.unix(data.timestamp).format("DD-MM-YYYY, HH:mm")}</h4>
           </div>
        )

        return (
            <div className='news'>
                <h1 className='section-title'>Articles</h1>
                <div className='grid'>
                    {post}
                </div>
            </div>
        );
    }
}

NewsView.contextTypes = {
  router: PropTypes.object
}

NewsView.propTypes = {
    data: PropTypes.array
};
