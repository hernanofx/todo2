function ShowDate() {
    var dNow = new Date();
    var utcdate = (dNow.getMonth() + 1) + '/' + dNow.getDate() + '/' + dNow.getFullYear();
    $('#currentdate').text(utcdate)
}
