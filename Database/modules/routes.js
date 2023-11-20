import db from "../index.js";
function ModuleRoutes(app) {
  app.get("/api/courses/:cid/modules", (req, res) => {
    const { cid } = req.params;
    const modules = db.modules.filter(
      (m) => parseInt(m.course, 10) === parseInt(cid, 10)
    );
    res.send(modules);
  });
  app.post("/api/courses/:cid/modules", (req, res) => {
    const { cid } = req.params;
    const maxId = db.modules.reduce((max, course) => {
      return course.id > max ? course.id : max;
    }, 0);
    const newModule = {
      ...req.body,
      course: cid,
      id: maxId + 1,
    };
    db.modules.push(newModule);
    res.send(newModule);
  });
  app.delete("/api/modules/:mid", (req, res) => {
    const { mid } = req.params;
    db.modules = db.modules.filter((m) => m.id !== parseInt(mid, 10));
    res.sendStatus(200);
  });
  app.put("/api/modules/:mid", (req, res) => {
    const { mid } = req.params;
    const moduleIndex = db.modules.findIndex((m) => m.id === parseInt(mid, 10));
    db.modules[moduleIndex] = {
      ...db.modules[moduleIndex],
      ...req.body,
    };
    res.sendStatus(204);
  });
}
export default ModuleRoutes;
