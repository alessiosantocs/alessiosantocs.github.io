
window.api = {
  projects: function(method, callback){
    $.get("api/projects/" + method + ".json", callback);
  },
  pages: function(method, callback){
    $.get("pages/projects/" + method + ".md", callback);
  },
  repositories: function(callback){
    $.get("http://api.github.com/users/alessiosantocs/repos?sort=pushed", callback);
  }
};


$(document).ready(function(){

  var fetchProjects = function(){
    // projects
    var prototype = $(".projects .project");
    var container = $(".projects");

    // reset
    container.find(".project").remove();

    // fetch data and print stuff
    api.projects("index", function(response){
      var projects = response.projects;

      var projects_html = $.map(projects, function(project){
        var html = prototype.clone();
        html.find(".project-link").html(project.name);
        html.find(".project-link").attr("href", "project.html?id=" + project.id);
        html.find(".project-description").html(project.description);
        html.find(".project-date").html(project.date);
        return html
      });

      $.each(projects_html, function(){
        // console.log(this);
        container.append($(this));
      });

      updatePressables();

      // console.log(projects_html);
    });
  };





  var fetchRepositories = function(){
    // repos
    var prototype = $(".repositories .repository");
    var container = $(".repositories");

    // reset
    container.find(".repository").remove();

    // fetch data and print stuff
    api.repositories(function(response){
      var repositories = response;

      var repositories_html = $.map(repositories, function(repository){
        var html = prototype.clone();
        html.find(".repository-link").html(repository.name);
        html.find(".repository-link").attr("href", repository.html_url);
        html.find(".repository-description").html(repository.description || "No description");
        if(repository.language){
          html.find(".repository-language").html("#" + repository.language.toLowerCase());
        }
        if(!repository.fork){
          html.find(".repository-fork").html("Owner");
        }
        return html
      });

      $.each(repositories_html, function(){
        // console.log(this);
        container.append($(this));
      });

      updatePressables();

      // console.log(projects_html);
    });
  };



  // project page
  if($("body").hasClass("project-page")){
    var search = window.location.search;
    var match_array = search.match(/id=([\w\-\.\s]*)/);

    if(match_array.length == 2){
      var id = match_array[1];
      api.projects(id, function(response){
        var project = response.project;
        $(".project-name").html(project.name);
        $(".project-date").html(project.date);
        $(".project-link").attr("href", project.live_url);
      });

      api.pages(id, function(r){
        $("#project-content").html(
          markdownit().render(r)
        );
      });
    }
  }else{
    fetchProjects();
    fetchRepositories();
  }


  // Custom message form
  $("#contact-form").submit(function (event) {
    event.preventDefault();

    var data = $(this).serialize();

    $.ajax({
      url: $(this).attr("action"),
      type: $(this).attr("method"),
      data: data
    });

    var button = $(this).find("button[type=submit]");
    button.attr("disabled", true);

    this.reset();
    button.html("Sending");

    window.setTimeout(function(){
      button.html("Sent");

      window.setTimeout(function(){
        button.removeAttr("disabled");
        button.html("Shoot");
      }, 3000)
    }, 3000);

    // $('#custom-email-form').addClass('hidden');
    // $('#thankyou-message').removeClass('hidden');

    return false;
  });

});
