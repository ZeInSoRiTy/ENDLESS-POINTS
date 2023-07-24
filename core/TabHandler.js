function switchTab(event, tabName) {
    var i, tabs, link;
    
    tabs = document.getElementsByClassName("tabs");
    for (i=0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }

    link = document.getElementsByClassName("link")
    for (i = 0; i < link.length; i++) {
        link[i].className = link[i].className.replace(" active", "");
    }
      document.getElementById(tabName).style.display = "block";
      event.currentTarget.className += " active";
}