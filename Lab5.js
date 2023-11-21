function Lab5(app) {
  const assignment = {
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  };
  const todos = [
    { id: 1, title: "Task 1", completed: true },
    { id: 2, title: "Task 2", completed: false },
    { id: 3, title: "Task 3", completed: false },
    { id: 4, title: "Task 4", completed: false },
  ];
  const hello = (req, res) => {
    res.send("Welcome to Lab5");
  };
  // A5 HOME
  app.get("/a5", hello);

  // A5 WELCOME
  app.get("/a5/welcome", (req, res) => {
    res.send("Welcome to Assignment 5");
  });

  // Example of sending data via path parameters
  app.get("/a5/hello/:name", (req, res) => {
    res.send(`Hello ${req.params.name}`);
  });

  //Example addition of user given 2 numbers
  app.get("/a5/add/:a/:b", (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.send(`Sum of ${a} + ${b} = ${a + b}`);
  });

  //Example subtraction of user given 2 numbers using destructor
  app.get("/a5/subtract/:a/:b", (req, res) => {
    const { a, b } = req.params;
    res.send(`Sum of ${a} - ${b} = ${parseInt(a) - parseInt(b)}`);
  });

  // EXAMPLE OF PASSING VALUES IN A QUERY STRING
  // http://localhost:4000/a5/calculator?a=1&b=5&operation='add'
  app.get("/a5/calculator", (req, res) => {
    const { a, b, operation } = req.query;
    let result = 0;
    if (operation === "add") {
      result = parseInt(a) + parseInt(b);
    } else if (operation === "subtract") {
      result = parseInt(a) - parseInt(b);
    } else {
      result = "Invalid operation!";
    }
    res.send(result.toString());
  });

  // EXAMPLE OF WORKING WITH OBJECTS: RESPONSE BODY
  app.get("/a5/assignment", (req, res) => {
    res.json(assignment);
  });
  app.get("/a5/assignment/title", (req, res) => {
    res.json(assignment.title);
  });
  app.get("/a5/assignment/title/:newTitle", (req, res) => {
    const { newTitle } = req.params;
    assignment.title = newTitle;
    res.json(assignment);
  });
  app.get("/a5/assignment/score/:newScore", (req, res) => {
    const { newScore } = req.params;
    assignment.score = newScore;
    res.json(assignment);
  });
  app.get("/a5/assignment/completed/:newCompleted", (req, res) => {
    const { newCompleted } = req.params;
    assignment.completed = newCompleted;
    res.json(assignment);
  });
  //   // WOK=RKING WITH ARRAYS
  //   app.get("/a5/todos", (req, res) => {
  //     res.json(todos);
  //   });
  // Retrieving an Item from an Array by ID

  // Creating new Items in an Array
  app.get("/a5/todos/create", (req, res) => {
    const newTodo = {
      id: new Date().getTime(),
      title: "New Task",
      completed: false,
    };
    todos.push(newTodo);
    res.json(todos);
  });
  app.post("/a5/todos", (req, res) => {
    const newTodo = {
      ...req.body,
      id: new Date().getTime(),
    };
    todos.push(newTodo);
    res.json(newTodo);
  });
  // Deleting an item in an array
  app.get("/a5/todos/:id/delete", (req, res) => {
    const { id } = req.params;
    const todo = todos.find((t) => t.id === parseInt(id));
    todos.splice(todos.indexOf(todo), 1);
    res.json(todos);
  });
  app.delete("/a5/todos/:id", (req, res) => {
    const { id } = req.params;
    const todo = todos.find((t) => t.id === parseInt(id));
    if (!todo) {
      res.res
        .status(404)
        .json({ message:
          `Unable to delete Todo with ID ${id}` });
      return;
    }
    todos.splice(todos.indexOf(todo), 1);
    res.sendStatus(200);
  });

  // Updating an item in an array
  // app.get("/a5/todos/:id/title/:title", (req, res) => {
  //   const { id, title } = req.params;
  //   const todo = todos.find((t) => t.id === parseInt(id));
  //   todo.title = title;
  //   res.json(todos);
  // });
  app.put("/a5/todos/:id", (req, res) => {
    const { id } = req.params;
    const todo = todos.find((t) => t.id === parseInt(id));
    if (!todo) {
      res.res
        .status(404)
        .json({ message:
          `Unable to update Todo with ID ${id}` });
      return;
    }
    todo.title = req.body.title;
    todo.description = req.body.description;
    todo.due = req.body.due;
    todo.completed = req.body.completed;
    res.sendStatus(200);
  });

  // Updating completed field of an item in an array
  app.get("/a5/todos/:id/completed/:completed", (req, res) => {
    const { id, completed } = req.params;
    const todo = todos.find((t) => t.id === parseInt(id));
    todo.completed = completed;
    res.json(todos);
  });

  app.get("/a5/todos/:id/description/:description", (req, res) => {
    const { id, description } = req.params;
    const todo = todos.find((t) => t.id === parseInt(id));
    todo.description = description;
    res.json(todos);
  });

  app.get("/a5/todos/:id", (req, res) => {
    const { id } = req.params;
    const todo = todos.find((t) => t.id === parseInt(id));
    res.json(todo);
  });
  // Filtering array items using a query string
  app.get("/a5/todos", (req, res) => {
    const { completed } = req.query;
    console.log("hit", completed);
    if (completed !== undefined) {
      const completedTodos = todos.filter(
        (t) => String(t.completed) == completed
      );
      res.json(completedTodos);
      return res;
    }
    res.json(todos);
  });
}

export default Lab5;
