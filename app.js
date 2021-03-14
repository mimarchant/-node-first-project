const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const path = require('path');


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const notFound = require('./routes/404');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes);
app.use(shopRoutes) ;   



app.use(notFound);
    









app.listen(5000, ()=>{
    console.log('Listening to requests on PORT 5000')
})