function pacific() {
    var utcDate = new Date();
    utcDate.setHours(utcDate.getHours()+3);
    var pstDate = new Date(utcDate);
    
    console.log(pstDate.getHours() + ":" + pstDate.getMinutes() + ":" + pstDate.getSeconds());
}

setInterval(function() { pacific(); }, 1000);
