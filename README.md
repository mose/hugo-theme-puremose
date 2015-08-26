hugo-theme-puremose
====================

This theme is based on [Purehugo](http://github.com/dplesca/purehugo) theme by [dplesca](http://github.com/dplesca).

Purehugo is a theme based on [purecss](http://purecss.io/) from Yahoo. The theme is 
- based on [the purecss blog layout example](http://purecss.io/layouts/blog/)
- responsive
- handles pagination (if enabled)
- responsive images (through a shortcode)
- google analytics
- disqus comments 
- a mini-asset-pipeline using gulp.
- uses cloudinary for images storage.

Config file
----------------------------------
The config file for the demo site looks like this:

```toml
baseurl = "http://example.com/myblog/"
languageCode = "en-us"
title = "My site"
theme = "hugo-theme-puremose"
Paginate = 10
disqusShortname = "xxxx"

[params]
  twitterName = "example"
  githubName = "example"
  description = "Demo site for a hugo theme"
  google_analytics = "UA-xxxxxx-xx"
```

Notice the configuration necessary for disqus comments (just setting the disqusShortname), the twitter and github handlers (for the site sidebar), the site description and enabling Google Analytics reporting.

Syntax Highlighting
----------------------------------
Syntax highlighting is enabled by default and it uses the nice [rainbow js](http://craig.is/making/rainbows) library. All you need to do is to let rainbow.js the language of the highlighted code, using something like ````go` when writing the code in markdown.

Reponsive Images
----------------------------------
For responsive images you could use the built-in responsive image shortcode (without the `/**/` characters):  
```
{{%/* img-responsive "http://example.com/image.jpg" */%}}
```

Screenshot
----------------------------------
![Screenshot](http://i.imgur.com/Dsj41Rz.png)
