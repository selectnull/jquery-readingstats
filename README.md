===========================
jQuery reading stats plugin
===========================

jQuery reading stats plugin, v1.0

Use it to calculate and display time to read a piece of text,
eg a blog post.


How to use it?
==============

There are two arguments and both are optional. The first is options object
with which you can customize reading speed (in words per minute) and
formatter funtion to display the result.

* *readingSpeed*, default value is 200 words per minute
* *format*, formatter function that takes a number (of seconds)
  and returns a string like 2 min 45 sec

There are two ways to call it. First is to get
result directly, like this:

    var rs = $('#my-content').readingStats({
        readingSpeed: 100,
        format: function (x) {return x.toString() + ' sec';}
    });

    console.log(rs.wordCount); // word count
    console.log(rs.secondsToRead); // number of seconds
    console.log(rs.format()); // formatted output

If you want to do something else with selector, you can specify
callback function as second argument and chain whatever
jQuery methods after it.

    $('#my-content').readingStats({readingSpeed: 240}, function (stats) {
            console.log(stats);
            // do something with stats object
        }
    ).fadeOut().fadeIn();


Licence
=======

The code is MIT licensed.
