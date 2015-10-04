
var config = {
  displayName: "Alessio",
  showRepositories: false,
  knownFor: "creativity, perfectionism and magic."
};

var api = {
  projects: function(method, callback){
    $.get("api/projects/" + method + ".json", callback);
  },
  pages: function(method, callback){
    $.get("pages/projects/" + method + ".md", callback);
  },
  repositories: function(callback){
    $.ajax({
      url: "http://api.github.com/users/alessiosantocs/repos?sort=pushed",
      crossDomain: true
    }).done(callback);
  }
};


$(document).ready(function(){

  var fetchProjects = function(){
    // projects
    var prototype = $(".projects .project");
    var container = $(".projects");

    // fetch data and print stuff
    api.projects("index", function(response){
      var projects = response.projects;

      // reset
      container.find(".project").remove();

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



    // fetch data and print stuff
    api.repositories(function(response){
      var repositories = response;

      // reset
      container.find(".repository").remove();

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
        $("title").html("Project: " + project.name + " - Alessio Santo - aboutalessio.com");
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

    if(config.showRepositories){
      fetchRepositories();
    }else{
      $(".repositories").hide();
    }
  }

  // Configure page
  $("#logotype-displayname").html(config.displayName.toLowerCase());
  $("#proposition-displayname").html(config.displayName);
  $("#known-for").html(config.knownFor);

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

    var form = this;
    button.html("Sending");

    window.setTimeout(function(){
      form.reset();
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

  // Modal closer
  var updateModalClosers = function(){
    $(".modal-closer").each(function(){
      var img = $(this).find("img.hidden");
      img.removeClass("hidden");
      img.next().addClass("hidden");
      img.prev().addClass("hidden");

    });
  };
  $(".modal-opener").click(function(){
    $("#contact").modal("show");
    updateModalClosers();
  })
  $(".modal-closer").click(function(){
    updateModalClosers();
  });


  // Home page effect
  window.setTimeout(function(){
    $("#presenter").addClass("present");
    $("#contenteffect").addClass("present");

    window.setTimeout(function(){
      $("#presenter").remove();
    }, 1600);
  }, 800);
});
