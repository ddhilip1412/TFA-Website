$(document).ready(function() {
    $('#listcourses').scroll(function() {
        var dropdownlist = $(this);
        var scrolloverlaytop = dropdownlist.find($('.scrolloverlaytop'));
        var scrolloverlaybottom = dropdownlist.find($('.scrolloverlaybottom'));
        if (dropdownlist.height() < (dropdownlist.scrollTop() - 142)) //142 is based on the height of the dropdown list in small screens. It is set to 250px in the css class "navbardropdown" inside customstyle.css. Should be fixed since this is a hack.
        {
            scrolloverlaybottom.css("display", "none");
        } else {
            scrolloverlaybottom.css("display", "block");
        }
        if (dropdownlist.scrollTop() > 0) {
            scrolloverlaytop.css("display", "block");
        } else {
            scrolloverlaytop.css("display", "none");
        }

    });
});