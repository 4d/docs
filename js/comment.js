function getFlags($code){
    $code = $code.toUpperCase();
    if($code == 'DE') return '🇩🇪'; //'(de)'
    if($code == 'EN') return ''; //'🇬🇧'
    if($code == 'ES') return '🇪🇸';
    if($code == 'FR') return '🇫🇷';
    if($code == 'JA') return '🇯🇵';
    if($code == 'PT') return '🇵🇹';
    //if($code == 'US') return '🇺🇸';
    return '🏳';
}
function getCommentTrad($code){
    $code = $code.toUpperCase();
    if($code == 'DE') return 'Comment';
    if($code == 'EN') return 'Comment';
    if($code == 'ES') return 'Comment';
    if($code == 'FR') return 'Comment';
    if($code == 'JA') return 'Comment';
    if($code == 'PT') return 'Comment';
    //if($code == 'US') return 'Comment';
    return 'Comment';
}
function replaceLast(string, find, replace) {
    var lastIndex = string.lastIndexOf(find);
    if (lastIndex === -1) {
        return string;
    }
    var beginString = string.substring(0, lastIndex);
    var endString = string.substring(lastIndex + find.length);
    return beginString + replace + endString;
}

$( document ).ready(function() {
  var lang = $('html').attr('lang');
  var editButton=$(".edit-page-link");

  //var commentButton=editButton.clone();
  editButton.text(getCommentTrad(lang));

  // from https://github.com/4D/docs/edit/Rx/docs/Project/overview.md
  // to /4d/docs/blob/master/docs/Project/overview.md
  var pageLink = editButton.attr("href"); 
  pageLink=pageLink.replace("https://github.com", "");
  pageLink=pageLink.replace("docs/edit/", "docs/blob/");

  var pageName = pageLink.substring(pageLink.lastIndexOf('/') + 1);
  var pageHeader = $(".postHeaderTitle").text();

  // construct issue
  var issueTitle="Comment on: "+pageHeader;
  //var issueBody=`- 🇬🇧 [${pageName}](${pageLink})\n`;
  var issueBody=`- [${pageName}](${pageLink})\n`;

  if(lang != "en") {
    // from https://github.com/4D/docs/edit/Rx/docs/Project/overview.md
    // to /4d/docs/blob/Rx/website/translated_docs/<lang>/Project/overview.md
     pageLink=replaceLast(pageLink,"/docs/", "/website/translated_docs/"+lang+"/");
     issueBody+=`- ${getFlags(lang)} [${pageName}](${pageLink})`;
  }
  issueBody+=`\n\n`+"Enter your comment here:"+`\n`;
  var commentLink = `https://github.com/4d/docs/issues/new?title=${encodeURIComponent(issueTitle)}&body=${encodeURIComponent(issueBody)}`

  editButton.attr("href", commentLink);

  // editButton.after(commentButton); // if want to insert
  //editButton.replaceWith(commentButton);
});