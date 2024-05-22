import React from 'react';
import ReactDOM from 'react-dom';
import { InertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { createInertiaApp } from '@inertiajs/inertia-react';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}`).default,
    setup({ el, App, props }) {
        ReactDOM.render(<App {...props} />, el);
    },
});

InertiaProgress.init({ color: '#4B5563' });
