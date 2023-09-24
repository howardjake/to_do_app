function index(req, res) {
    if(req.session.userId) {
        User.findById(req.session.userId).exec().then (foundUser => {
            res.render('dashboard/index', {title: "Dashboard", foundUser});
        });
    } else {
        res.render('home/index', {title: "Welcome"})
    }


}

module.exports = {
    index,
}