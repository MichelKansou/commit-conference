import React, { Component } from 'react';
import PropTypes from 'prop-types';


String.prototype.trunc = String.prototype.trunc ||
function(n){
  return (this.length > n) ? this.substr(0, n-1) + '...' : this;
};

export default class NewsView extends Component {

    constructor(props, context) {
       super(props, context);
    }


    render() {
        const data = this.props.data
        const history = this.context.router.history
        const news = data.news.map((data, index) =>
           <div className='post' key={index} onClick={() => history.push("/blog/"+index)}>
               <div className='thumbnail'>
                   <img className='image' src={'data:image/png;base64, ' + data.image} alt='article image' />
                   <h2 className='title'>{data.title}</h2>
               </div>
               <p className='body'>
                   {data.body.trunc(150)}
               </p>
           </div>
        )

        return (
            <div className='news'>
                <h1 className='section-title'>Articles</h1>
                {news}
            </div>
        );
    }
}

NewsView.contextTypes = {
  router: PropTypes.object
}

NewsView.propTypes = {
    data: PropTypes.object
};
