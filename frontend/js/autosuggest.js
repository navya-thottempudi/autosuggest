var API_URL="https://autosuggest-backend.onrender.com/api/autosuggest";
var searchbar=document.getElementById("search-bar");
var searchsuggestions=document.getElementById("search-suggestions");

//the function is called everytime user types something and 
// in this function, 
// we get the data
// update the query in the URL and
//  get suggestions
//append search sugggestions to div tag

searchbar.addEventListener("input",function(){
    var query=searchbar.value.trim();
    console.log(query);
    fetchSuggestions(query);
})

function fetchSuggestions(query){
    var fullAPI=API_URL+"?q=" + query + "&weighted=true&algorithm=trie&limit=8";
    fetch(fullAPI)
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            console.log(query);
            showSuggestions(data);
        })
        .catch(function(err){
            console.log("Error: "+err);
        })
}
function showSuggestions(data){
    var values=data.results;
    if(data.count===0){
        searchsuggestions.innerHTML="<div>No Matching results founds</div>"
    }
    else{
        var htmlString="";
        for(let i=0;i<values.length;i++){
            htmlString+="<div class='suggestion-item'>"+values[i].text + "</div>";
        }
        searchsuggestions.innerHTML=htmlString;
    }
}