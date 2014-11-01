var app = require('ghost-app'),
    hbs = require('express-hbs'),
    Promise = require('bluebird'),
    _   = require('lodash'),
    path = require("path"),
    api;

loadpost = app.extend({
    install: function () {},
    uninstall: function () {},
    activate: function () {
        api = this.ghost.api;
    },
    deactivate: function () {}
});

// Get Post html content
loadpost.getContent = function (options) {
    options = options || {};
    options.hash = options.hash || {};
    var slug = options.hash ? options.hash.slug : '';
    if (_.isEmpty(slug)) return new hbs.handlebars.SafeString("Notice: No post specified!");
    
    return api.posts.read({'slug':slug}).then(function (result) {
        if (result) {
            var post = result.posts[0];
            if (post) {
                return new hbs.handlebars.SafeString(post.html);
            }
        }
        return new hbs.handlebars.SafeString("Notice: No post with slug = \"" + slug + "\" found!");
    }).catch(function(err) {
        return new hbs.handlebars.SafeString("Notice: No post with slug = \"" + slug + "\" found!");
    });
}

// Register an async handlebars helper
function registerAsyncHelper(hbs, name, fn) {
    hbs.registerAsyncHelper(name, function (options, cb) {
        Promise.resolve(fn.call(this, options)).then(function (result) {
            cb(result);
        }).catch(function (err) {
            errors.logAndThrowError(err, 'registerAsyncThemeHelper: ' + name);
        });
    });
}

// Register an async handlebars helper for themes
function registerAsyncThemeHelper(name, fn) {
    registerAsyncHelper(hbs, name, fn);
}

// Register helper {{loadpost}}
registerAsyncThemeHelper('loadpost', loadpost.getContent);

// Export to use
module.exports = loadpost;
module.exports.registerAsyncThemeHelper = registerAsyncThemeHelper;