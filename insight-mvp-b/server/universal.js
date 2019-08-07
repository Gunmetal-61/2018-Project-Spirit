
// An inbuilt file system and path management modules of Node.  No need to independently import and install these.
console.log('92--1');
const path = require('path');
const fs = require('fs'); 
console.log('92--2');

const React = require('react');
// const {Provider} = require('react-redux');
const {renderToString} = require('react-dom/server');
const {StaticRouter} = require('react-router-dom');
console.log(App);
console.log('92--3');

// const {default: configureStore} = require('../src/store');
const {default: App} = require('../src/App');
console.log(App);
console.log('92--4');

module.exports = function universalLoader(req, res) {
    const filePath = path.resolve(__dirname, '..', 'build', 'index.html');
    console.log('92--5');

    fs.readFile(filePath, 'utf8', (err, htmlData)=>{
        console.log('92--6');

        if (err) {
        console.error('read err', err);
            return res.status(404).end();
        }
        console.log('92--7');

        const context = {};
        // const store = configureStore();
        console.log('92--8');
        console.log(req.url);
        
        const markup = renderToString(
        //   <Provider store={store}>
            <StaticRouter
                location={req.url}
                context={context}
            >
                <App/>
            </StaticRouter>
        //   </Provider>
        );
        console.log('92--9');

        if (context.url) {
        // Somewhere a `<Redirect>` was rendered
        console.log('92--10');

        res.redirect(301, context.url);
        } else {
            // we're good, send the response
            console.log('92--11');

            const RenderedApp = htmlData.replace('{{SSR}}', markup);
            res.send(RenderedApp);
            console.log('92--12');

        }
        console.log('92--13');

    })
}

