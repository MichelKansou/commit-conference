import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
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
        return <Spinner name='line-scale' />;
    }

    render() {
        const { text, className, call } = this.props;
        return (
            <button className={className ? className : 'btn'} onClick={() => call()}>
                {this.state.loading ? this.loader() : text}
            </button>
        )
    }
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    className: PropTypes.string,
    call: PropTypes.func
};
