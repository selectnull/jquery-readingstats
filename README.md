jquery-readingstats
===================

v0.1 of jQuery readingstats plugin.

How to use it?
==============

$('#my-content').readingstats(); // returns an object with word count, secondsToRead value and format functions to display results.
readingstats plugin accepts an optional argument to change:

* readingSpeed, default value is 200 words per minute
* format, formatter function that takes a number (of seconds) and returns a string like 2 min 45 sec

So...

    var rs = $('body').readingstats({readingSpeed: 100, format: function (x) {return x.toString() + ' sec';} } );
    console.log(rs.wordCount); // word count
    console.log(rs.secondsToRead); // number of seconds required to read the whole page
    console.log(rs.format()); // displays formatted output


Licence
=======

jquery-readingstats is MIT licensed.

