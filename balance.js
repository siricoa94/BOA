$.ajax("/data", {
    type: "GET"
}).then(function(data) {
    console.log(data.balance + "Hello");
    console.log(data)

    var balance = data.balance;
    var len = balance.length;

    for (var i = 0; i < len; i++) {
    var new_elem =
        "<li>" +
        balance[i].id + 
        ". " + "<p>" + balance[i].balance+ "</p>" +
        "<button class='delete-cat' data-id='" +
        balance[i].id +
        "'>DELETE!</button></li>";
        $("#balanceDiv").append(new_elem)
    }
    
});