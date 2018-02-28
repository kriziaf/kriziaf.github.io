$('document').ready(
  function() {
    $.ajax({
      //SERVER LINK GOES HERE 104...
      url:"http://localhost:3000/twitter",
      //data:{},
      success: function(data) {
        //console.log('hi');
        var obj = jQuery.parseJSON(data);
        // var json = data;
        // obj = JSON.parse(json);
        // console.log(obj[0].text);
        for (var i=0;i<data.length;i++){
            $('#result').html('<p>' + obj[i].text + '</p>')
        }

      },
      error: function(err) {
        console.log(err);
      }
    })
  }
)
