

//jquery stuff thta I couldn't get

// function createRepoStr(element,idx) {
//   var postsRepoStr = "";
//   postsRepoStr += "<ul><li><h3>"+ parseInt((idx + 2)) +"  </h3><h3>).  Title: " + element.title + "</h3></li>";
//   postsRepoStr += "<li><p>" + element.description + "</p></li>";
//   postsRepoStr += "<li><h6>" + element.lastUpdate + "</h6></li>";
//   postsRepoStr += "</ul>"
//   return postsRepoStr;
// }
//
// document.getElementById("repos").innerHTML =createRepoStr


// This gets the repository stuff to the page


var github = repos.map(function(element){
return{
title: element.name,
description: element.description,
lastUpdate: element.updated_at
}
});

var newRepoStr = "";
github.forEach(function(element) {
    newRepoStr +="<p>" + element.title + "</p><p>" + element.description + "</p><p>"+ element.lastUpdate +"</p>";
});
document.getElementById("repos").innerHTML = newRepoStr;


//This gets the activity stuff on the page

var github = activity.map(function(element) {
  return {
    login: element.login,
    type: element.type,
    name: element.name
  };
});

var newActStr = "";
github.forEach(function(element) {
  newActStr += "<p>" + element.login + "</p><p>" + element.type + "</p><p>" +
    element.name + "</p>";
});
document.getElementById("activity").innerHTML =newActStr;

//hopefully will be a buttom click thing
// I'm having trouble understanding... :(
//
// $('input[type="Repositories"]').click(function(event) {
//   event.preventDefault();
//   var post = grabPostSubmission();
//   var blogStr = createBlogPostStr(post)
//   appendStrToElement(blogStr,$('section'));
//   return
// })
//
// $('header li:first-child').click(function(event) {
//   event.preventDefault();
//   $about = $('#about-page');
//   $blogs = $('#blogs');
//   $headerFirstLI = $('header li:first-child')
//   if($about.hasClass('dont-show-me')) {
//     $about.removeClass('dont-show-me');
//     $blogs.addClass('dont-show-me');
//     $headerFirstLI.text('Back');
//   } else {
//     $blogs.removeClass('dont-show-me');
//     $about.addClass('dont-show-me');
//     $headerFirstLI.text('About');
//   }
//
// });
