$(document).ready(function()
{
   $('#listcourses').scroll(function()
   {
      var dropdownlist = $(this);
      var dropdownoverlay = dropdownlist.find($('.dropdownoverlay'))
      if (dropdownlist.height() <  (dropdownlist.scrollTop()-142)) //142 is based on the height of the dropdown list in small screens. It is set to 250px in the css class "navbardropdown" inside customstyle.css. Should be fixed since this is a hack.
      {
      	dropdownoverlay.css("display","none");
      } else
      {
      	  dropdownoverlay.css("display","block");
      }

   });
});