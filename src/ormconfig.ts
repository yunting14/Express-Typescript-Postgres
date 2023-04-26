import { DataSource } from "typeorm";
import { UserSeed } from "./userSeed";

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
    migrations: [__dirname + "/migration/**/*.{js,ts}"],
    subscribers: [],
})

AppDataSource.initialize()
                .then(() => {
                    console.log("Data Source Initialised");
                    // AppDataSource.manager.getRepository("User").save(UserSeed);
                })
                .catch(error => {
                    console.log("Data source initialisation error");
                    console.log(error.message);
                });

export default AppDataSource;
                

