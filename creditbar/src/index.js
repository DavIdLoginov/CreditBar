import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from './App';
import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);

serviceWorker.unregister();














// initial="hidden"
//               whileInView="visible"
//               transition={{ duration: 0.3 }}
//               variants={{
//                 visible: { opacity: 1, scale: 1 },
//                 hidden: { opacity: 0, scale: 0 },
//               }}