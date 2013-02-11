$(function() {
  var formipress = [
    { id: "0", 
      name:"Ash Walnut", 
      code: "" },
    {   
      id: "1", 
      name:"White Walnut", 
      code: "" },
    {   
      id: "2", 
      name:"Black Africa", 
      code: "" },
    {   
      id: "3", 
      name:"Celtic Ebano", 
      code: "" },
    {   
      id: "4", 
      name:"Wengue Africa", 
      code: "" },
    {   
      id: "5", 
      name:"Brown Linosa", 
      code: "" },
    {   
      id: "6", 
      name:"White Linosa", 
      code: "" },
    {   
      id: "7", 
      name:"Montana Walnut", 
      code: "" },
    {   
      id: "8", 
      name:"Sand Africa", 
      code: "" }
  ];

  formipress.forEach(function(formi) {
    var id = parseInt(formi.id);
    if(!id) {
      return;
    }
    
    var _y = Math.floor(id/3);
    var _x = id%3;

    var x = -10-(110 * _x);
    var y = -10-(93 * _y);

    $('span.textura:eq('+id+')')
      .css('background-position', x+'px '+y+'px');
  });

  $("li.thumb").hover(function() {

    var id = parseInt($(this).attr("id"));

    var name = formipress[id].name;/*+'<br/>'+formipress[id].code;*/
    var $alt = $("<p>").addClass("alt").html(name).css({
      position: "absolute",
                "bottom": 0,
                "background-color":"#666",
                "color": "white",
                "font-size":"12px",
                "width": "100%",
                "padding": "3px 0",
                "text-align":"center",
                "cursor": "pointer",
                "line-height": "13px"
    });

    $(this).css({position:"relative"}).append($alt);
  }, function() {
    $(this).find(".alt").remove();
  });

  $("li.thumb a").click(function(e) {
    var id = parseInt($(this).parent().attr("id"));
    var name = formipress[id].name;
    var code = formipress[id].code;

    var _y = Math.floor(id/3);
    var _x = id%3;

    var x = -13-(410 * _x);
    var y = -11-(410 * _y);

    $("#myModal").modal();
    $("#myModal")
      .find('span.texture')
        .css('background-position', x+'px '+y+'px')
        .css('margin-left', '62px')
      .end()
      .find('#myModalLabel')
        .text(name);
  });

})
