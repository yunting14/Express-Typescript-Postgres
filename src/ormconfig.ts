import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres", 
    password: "yunting",
    database: "simpletsappdb",
    synchronize: true,
    logging: false,
    entities: [__dirname + "/entity/**/*.{js,ts}"], // metadata error. https://stackoverflow.com/questions/51562162/no-metadata-for-user-was-found-using-typeorm
    migrations: [],
    subscribers: [],
})

AppDataSource.initialize()
                .then(() => {
                    console.log("Data Source Initialised");
                })
                .catch(error => {
                    console.log("Data source initialisation error");
                    console.log(error.message);
                });

export default AppDataSource;
                

