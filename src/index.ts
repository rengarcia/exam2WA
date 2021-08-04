import app from './app';
import './config/database.config';

app.listen(app.get("port"), () => {
    console.log(`Server on port: ${app.get("port")}`);
});