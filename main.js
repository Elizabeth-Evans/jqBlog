


$(document).ready(function () {
  var posts = "";

  repos.forEach(function (element, idx) {
    posts += "<article data-author='"
      + element.name
      + "'>"
      + "<p>"
      + element.name
      + "</p>"
      + "<p>"
      + element.descritpion
      + "</p>"
      + "<p>"
      + element.updated_at
      + "</p>"
      + "</article>";

  });


  $('.repositories').append(posts);
});

  // public activity

  $(document).ready(function () {
    var activities  = "";

    activity.forEach(function (element, idx) {
      activities += "<article data-author='"
        + element.login
        + "'>"
        + "<p>"
        + element.login
        + "</p>"
        + "<p>"
        + element.type
        + "</p>"
        + "<p>"
        + element.name
        + "</p>"
        + "</article>";

    });


    $('.publicity').append(activities);
});
//buttons clicking!!
  var navItem = $('li').find('a');
  navItem.click(function (event) {
    event.preventDefault();
    var selectedPage = "." + $(this).attr('rel');


    $(selectedPage).siblings('section').removeClass('active');
    $(selectedPage).addClass('active');

  });
