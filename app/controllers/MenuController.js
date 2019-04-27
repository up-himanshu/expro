'use strict';

var Menu = require('../models/Menu');

exports.listMenu = function (req, res) {
    Menu.getCategories(function (err, cat) {

        cat.forEach(value => {
            let category_id = value.id;
            Menu.getItemsbyCategoryID(category_id, function (err, item) {
                let normalitems = JSON.parse(JSON.stringify(item));
                console.log(normalitems);
            });
        });

        res.send("all good");
    });
};