import { Component } from 'react';
import NotFound from '../components/404/404';

export default class ErrorBoundary extends Component {
    constructor() {
        super()

        this.state = {
            hasError: false,
        };
    };

    static getDerivedStateFromError(err) {
        console.log('GetDerivedStateFromError');
        return {
            hasError: true,
        };
    };

    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch')
    };

    render() {
        if (this.state.hasError) {
            return <NotFound />
        };

        return this.props.children;
    };
};