const router = require("express").Router();
const userRoutes = require("./users");
const recipeRoutes = require("./recipes");

router.use("/api/users", userRoutes);
router.use("/recipes", recipeRoutes);

// Get Homepage
// router.get('/', ensureAuthenticated, function(req, res){
// 	res.render('index');
// });

// function ensureAuthenticated(req, res, next){
// 	if(req.isAuthenticated()){
// 		return next();
// 	} else {
// 		//req.flash('error_msg','You are not logged in');
// 		res.redirect('/users/login');
// 	}
// }

module.exports = router;