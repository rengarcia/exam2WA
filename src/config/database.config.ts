import mongoose from 'mongoose';

import config from './config';

const URL: string = `mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@${config.MONGO_CLUSTER}/${config.MONGO_NAME}?retryWrites=true&w=majority`;

mongoose.connect(URL, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log(`Mongo connection: ${db.connection.name}`))
.catch(error => console.log(error));