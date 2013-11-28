function CQEdit(){
  this.init();
}

CQEdit.prototype = {
  init: function(){
    this.title = "";
    this.content = "";
    this.setTitle(this.title);
    this.setText(this.content);
    $("#edit-share-button").empty();
  },
  setTitle: function(text){
    $("#edit-title").val(text);
  },
  setText: function(text){
    $("#edit-area").val(text);
  },
  setId: function(id){
    $("#edit-id").val(id);
  },
  setLink: function(url){
    var aTag = document.createElement("a");
    $(aTag).attr({
      "href":url,
      "target" : "_blank"
    }).text(url);
    $("#edit-share-button").append(aTag);
  },
  focus: function(){
    $("#edit-title").focus();
  }
}