LoadPost App for Ghost
======================

An app for Ghost blog. This app will display a widget with content of specified post.


## When to use?

+ Display some description with image, social links 
+ Display contact information with an embed Google Maps 
+ Display a video
+ Display an embed contact form
+ etc.


## Features
+ Load a specified post via it's slug by just a call.
+ Load many posts via many call. Here loads post A, there load post B and so on at your will.
+ Works on All page (`default.hbs`) or any inner page (index/home, author, page, post, tag).


## Dependencies
+ Ghost App `ghost-app`.
+ Lo-Dash `lodash`.


## Download

[Download LoadPost v0.0.1 for Ghost](http://w3ball.com/download-loadpost-app-for-ghost-load-post-wherever-you-want/)

## Compatibility

Ghost 0.5 (Latest is recommended).


## Installing

**Step 1**: Extract the downloaded file first.

**Step 2**: Upload the folder `loadpost` to `/content/apps/`

**Step 3**:
Use the sqllite database manager which you are family with, open up the database, and add the name of app to `activeApps` field in the `settings` table.

In this case, the app'name is `loadpost`, the value of `activeApps` should be `["loadpost"]`. Double quotes are required.

![Install app LoadPost](http://w3ball.com/content/images/2014/10/loadpost-install-up.png)

Once added, restart Ghost and app will be installed & loaded. Once success, you can see the field `installedApps` also contains `["loadpost"]`.

![LoadPost is installed and activated](http://w3ball.com/content/images/2014/10/loadpost-install-ok-up.png)



## Usage

**Step 1**: Create a post (should be static page so it will not display on blog stream).

**Step 2**: Call app from your theme to load post.

Open your theme file (`default.hbs`, `index.hbs`, `page.hbs`, etc.) depends on what page you want to display the widget, then load widget at where you want with below syntax.

**Syntax**: 

    {{loadpost slug="slug-of-post"}}

For example: If I want to display this widget on All page then I will edit `default.hbs`. If I want to display widget on Homepage then I will edit `index.hbs` or `home.hbs`. 

You can wrap above loading code by a div or an allowed html element - this helps you in styling.

**Example**:

    <div class="widget widget-about">
      {{loadpost slug="slug-of-post"}}
    </div>

Restart Ghost to make sure changes to theme can be applied.


## Changelog
0.0.1 Initial publish

## Copyright & License

Copyright (c) 2014 W3Ball.com - Released under the MIT license.


## Problem?
Please feel free to leave a comment for problems you got on [W3Ball.com](http://w3ball.com/download-loadpost-app-for-ghost-load-post-wherever-you-want/)

Happy blogging with Ghost!
