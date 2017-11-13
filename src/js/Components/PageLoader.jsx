import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';

export default class PageLoader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.loading !== this.state.loading) {
            this.setState({
                loading: nextProps.loading
            });
        }
    }

    loader() {
        return <Spinner name='bounce' />;
    }

    render() {
        const children = this.state.loading ? this.loader() : this.props.children;
        return (
            <div className='loader-container'>
                {children}
            </div>
        )
    }
}

PageLoader.propTypes = {
    children: PropTypes.node.isRequired,
    loading: PropTypes.bool.isRequired
};
