import React, {Component, PropTypes} from 'react';

export default class Html extends Component {
    static propTypes = {
        webpackStats: PropTypes.object,
        component: PropTypes.object
    }

    render() {
        const {webpackStats, component, store} = this.props;
        const title = 'Universal news app';
        return (
            <html lang="en-us">
            <head>
                <meta charSet="utf-8"/>
                <title>{title}</title>
                <link rel="shortcut icon" href="/favicon.ico" />
                {webpackStats.css.files.map((css, i) =>
                    <link href={css} key={i} media="screen, projection"
                          rel="stylesheet" type="text/css"/>)}
            </head>
            <body>
            <div id="content" dangerouslySetInnerHTML={{__html: React.renderToString(component)}}/>
            <script src={webpackStats.script[0]}/>
            </body>
            </html>
        );
    }
}
