import 'antd/dist/antd.less';
import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import './index.css';

const MainPage = lazy(() => import("@/containers/MainPage/MainPage" /* webpackChunkName:"MainPage" */));

const Main = () => (
    <Router>
        <Suspense fallback={<div>Module loading....</div>}>
            <Route path="/" exact component={MainPage} />
        </Suspense>
    </Router>
);

const container = document.getElementById('app');
const root = createRoot(container as any);
root.render(<Main />);