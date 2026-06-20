var a=[{"image":"/images/john.png","Name":"John Doe","Gender":"Male"},{"image":"/images/jane.png","Name":"Jane Doe","Gender":"Female"}];

var cur=0;
function toggle(){
    cur=1-cur;
    var user=a[cur];
    document.getElementById("image").src=user.image;
    document.getElementById("name").textContent=user.Name;
    //can use either textContent or inner text
    document.getElementById("gender").innerText=user.Gender;
}
//cur=0
//cur=cur+1;
//cur=cur%2;