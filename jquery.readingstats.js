(function ($) {
    $.fn.readingStats = function (options) {
        var defaultOptions = {
                readingSpeed: 200, // in words per minute
                format: function (seconds) {
                    // default formatter returns a string like 2 min 45 sec
                    // in 15 seconds increments
                    var mins = Math.floor(seconds / 60),
                        sec15 = 15 * Math.floor((seconds - 60 * mins) / 15),
                        result = '';

                    result = (mins > 0) ? mins.toString() + ' min ' : '';
                    if (sec15 > 0) {
                        result += sec15.toString() + ' sec';
                    }
                    return result;
                }
            },
            options = $.extend(defaultOptions, options || {});

        var wordCount = $.grep( $(this).text().split(' '),
                function (el) {return (el.replace(/^\s*/, '') == "") ? false : true;}
            ).length,
            secondsToRead = Math.ceil(wordCount / options.readingSpeed * 60);

        return {
            wordCount: wordCount,
            secondsToRead: secondsToRead,

            format: function (secs) {
                return options.format(secs || this.secondsToRead);
            }

        }
    }
})(jQuery);
