import { StudentRouter } from "../components";

const listRoutes = [["/student", StudentRouter]];

export const routes = (app) => {
  listRoutes.forEach(([path, controller]) => {
    app.use(path, controller);
  });
};