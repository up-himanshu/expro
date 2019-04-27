'use strict';

var sql = require('./db');

var Menu = {};

Menu.getMenu = function (result) {
    console.log(result);

    result(null, getCategories());
    // sql.query("Select * from categories", function (err, res) {
    //     result(err, res);
    // });
};

var Item = function (item) {
    this.item_name = item.item_name;
};

Menu.getCategories = function (result) {
    sql.query("Select * from categories", function (err, res) {
        err ? result(null, err) : result(null,res);
    });
};

Menu.getItemsbyCategoryID = function (categoryid, result) {
    sql.query("Select * from items where category_id = ? ", categoryid, function (err, res) {
        err ? result(null, err) : result(null, res);
    });
}

module.exports = Menu;

// get categories
// pass category ids to fetch items
// add a key in result object for items
// do above iteratively
// send response