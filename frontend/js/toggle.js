var a=[{"image":"/images/john.png","Name":"John Doe","Gender":"Male"},{"image":"/images/jane.png","Name":"Jane Doe","Gender":"Female"}];

var cur=1;
function toggle(){
    cur=1-cur;
    var user=a[cur];
    document.getElementById("image").src=user.image;
    document.getElementById("Name").textContent=user.Name;
    document.getElementById("Gender").textContent=user.Gender;
}