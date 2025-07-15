import { Sequelize } from "sequelize";

const sequelize = new Sequelize("back-log", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Conectando ao banco com sucesso");
  })
  .catch((error) => {
    console.error("Não foi possível conectar ao banco de dados", error);
  });

export default sequelize;
