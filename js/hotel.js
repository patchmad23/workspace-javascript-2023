//hotel registration ---- store in an object
var test = {
    hotelname : "Marriot",
    room: 456,
    booked: 123,
    display: function(){
        return this.hotelname;
    }
};

//access the properties / change the properties
console.log(test.hotelname);
console.log(test.booked);

test.booked = 144;
console.log(test.booked);

//start hotel reservation
var guestgroup = [];
function reservation(){
    //get values from the form, and put it in an object
    //practice -- complete the project
    var guest = {
        name: $('#name').val(),
        numberofGuest: $('#num').val(),
        checkin: $('#checkin').val(),
        checkout: $('#checkout').val(),
        roomtype: $('#room').val()
    };

    guestgroup.push(guest);
    console.log(guest);
    alert("Thank you for your reservation");
}

function displayList(){
    $("#guestlist").html("");
    $("#guestlist").append("<table>");
    for(var i in guestgroup){
        $("#guestlist").append("<tr> <td>"+ guestgroup[i].name +"</td>"); 
        $("#guestlist").append("<td>"+ guestgroup[i].numberofGuest +"</td>");
        $("#guestlist").append("<td>"+ guestgroup[i].checkin +"</td>");
        $("#guestlist").append("<td>"+ guestgroup[i].checkout +"</td>");
        $("#guestlist").append("<td>"+ guestgroup[i].roomtype +"</td> </tr>");
    }
    $("#guestlist").append("</table>");

}


//register the event handler
$('#submit').click(reservation);
$("#lists").click(displayList);