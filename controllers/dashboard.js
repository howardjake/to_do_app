const User = require("../models/user");

const Todo = require("../models/todo");
const user = require("../models/user");
const BASE_URL = 'https://api.pexels.com/v1/' 

function index(req, res) {
    console.log(req.session)
    if(req.session.userId) {
        User.findById(req.session.userId).populate('todos').exec()
        .then (foundUser => {
            res.render('dashboard/index', {title: "Dashboard", foundUser});   
        });
    } else {
        res.render('home/index', {title: "Welcome"})
    }
}

function logout(req, res) {
    req.session.destroy(function(err){
        res.redirect('/')
    });
}

function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === "") delete req.body[key];
    }

    let newTodo
    Todo.create(req.body)
    .then(todo => {
        newTodo = todo._id
        User.findById(req.session.userId)
        .then(user => {
            console.log(user)
            user.todos.push(newTodo);
            user.save()
            .then((err) =>{
                res.redirect('/dashboard');
            })
          })
    })
}


function show(req, res) {

}

function deleteOne(req, res) {
    Todo.findByIdAndDelete(req.params.id)
    .then((err) =>{
        res.redirect('/dashboard');
    })
}

function edit(req, res) {

}

function update(req, res) {
    if(req.session.userId) {
        Todo.findById(req.params.id).then(todo => {
            todo.completed = req.body.completed
            todo.save()
            .then((err) =>{
                res.redirect('/dashboard');
            })
        })
    } else {
        res.redirect('/users/signin')
    }
}

module.exports = {
    index,
    logout,
    create,
    show,
    deleteOne,
    edit,
    update
}
