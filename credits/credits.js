(function(w, d){
  var creditContainerTag = d.createElement("div");
  var creditLinkTag = d.createElement("a");
  var stylesheet = d.createElement("link");
  stylesheet.rel ="stylesheet";
  stylesheet.type="text/css";
  stylesheet.href="http://aboutalessio.com/credits/credits.css";

  creditContainerTag.id = "as-powercredits-container";
  creditLinkTag.id = "as-powercredits-a";
  creditLinkTag.href = "http://aboutalessio.com";
  creditLinkTag.target = "_blank";
  creditLinkTag.innerHTML = "Powered by Alessio Santo";
  creditContainerTag.appendChild(creditLinkTag);

  var noscripttag = d.getElementById("as-powercredits-container");
  noscripttag.remove();
  
  d.body.appendChild(stylesheet);
  d.body.appendChild(creditContainerTag);
})(window, document)