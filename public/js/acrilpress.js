$(function() {
  var acrilpress = [
  {   
    id: "0", 
    name:"Black", 
    code: "tp-0419", 
    color: "#000000"
  },
  {   
    id: "1", 
    name:"Dark Gray", 
    code: "tp-0412", 
    color: "#808285"
  },
  {   
    id: "2", 
    name:"Snow", 
    code: "tp-0407", 
    color: "#ffffff"
  },
  {   
    id: "3", 
    name:"Ivory", 
    code: "tp-0404", 
    color: "#f1e9c8"
  },
  {   
    id: "4", 
    name:"Late", 
    code: "tp-0413", 
    color: "#846e57"
  },
  {   
    id: "5", 
    name:"Tangerine", 
    code: "tp-0417", 
    color: "#f24701"
  },
  {   
    id: "6", 
    name:"Dark Red", 
    code: "tp-0416", 
    color: "#c12526"
  },
  {   
    id: "7", 
    name:"Cherry", 
    code: "tp-0412", 
    color: "#ee2163"
  },
  {   
    id: "8", 
    name:"Grape", 
    code: "tp-0408", 
    color: "#a73594"
  },
  {   
    id: "9", 
    name:"Violet", 
    code: "tp-0418", 
    color: "#7c51a1"
  },
  {   
    id: "10", 
    name:"Apple", 
    code: "tp-0405", 
    color: "#5cbf16"
  },
  {   
    id: "11", 
    name:"Canary", 
    code: "tp-0406", 
    color: "#fff200"
  },
  {   
    id: "12", 
    name:"Lemon", 
    code: "tp-0401", 
    color: "#c2dc0b"
  },
  {   
    id: "13", 
    name:"Aquamarine", 
    code: "tp-0409", 
    color: "#06b191"
  },
  {   
    id: "14", 
    name:"Light Blue", 
    code: "tp-0410", 
    color: "#8fd8f8"
  }
  ];

  acrilpress.forEach(function(acril) {
    var id = parseInt(acril.id);
    if(!id) {
      return;
    }
    
    var _y = Math.floor(id/5);
    var _x = id%5;

    var x = -10-(80 * _x);
    var y = -7-(80 * _y);

    $('span.color:eq('+id+')')
      .css('background-position', x+'px '+y+'px');
  });

  $("#galeria .scrollable").scrollable();

  $("#myModal")
    .on('show', function() {
      $('#menu #productos').css('z-index', 1039);
    })
    .on('hidden', function() {
      $('#menu #productos').css('z-index', 2000);
    });
  
  $("li.thumb a").click(function(e) {
    var id = parseInt($(this).parent().attr("id"));
    var color = acrilpress[id].color;
    var name = acrilpress[id].name;
    var code = acrilpress[id].code;
    $("#myModal").modal();
    $("#myModal")
      .find('span.color')
        .css('background', color)
        .css('margin-left', '62px')
      .end()
      .find('#myModalLabel')
        .text(name+' ('+code+')');
  });

  $("li.thumb").hover(function() {

    var id = parseInt($(this).attr("id"));

    var name = acrilpress[id].name+'<br/>'+acrilpress[id].code;
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

});
