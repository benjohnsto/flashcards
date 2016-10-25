


function getGoogleSheetsVocab(spreadsheet_key) {

	var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheet_key + "/od6/public/values?alt=json";
	var vocab = [];

	jQuery.ajax({
	  url: url,
          success: function (data) {
	    $.each(data.feed.entry, function(index,val){
		var o = {"front":val.gsx$front.$t,"back":val.gsx$back.$t};
	   	vocab.push(o);
	    });
          },
        async: false
    });
return vocab;
}


function showHelp() {
  $('#help').toggle();
}
