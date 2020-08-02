// A $(docment).ready()block.
$(document).ready(function(){
    console.log("ready!");

    let current = moment().hour();
    let todos = []

    // color change depending on time  
    $(".time-block").each(function(index){
        let id = ($(this).attr("id"));
        
        let hour = parseInt($(this).attr("data-hour"));
        console.log(`id: ${id}, current: ${current}`);

        if(current > hour) {
            $(this).addClass(".past")
            console.log("Have a good morning!")
        }
        else if (current === hour) {
            $(this).addClass(".present")
            console.log("Current time")
        }
        else {
            $(this).addClass(".future")
            console.log("Have a night")
        }

        // key id --> retrieve from local storage 
        var dataStored = localStorage.getItem(id);
        console.log(`dataStored: ${dataStored}`);

        // populate textarea with the value
        console.log(`this: ${this}`);
        console.log(`this > "textarea": ${JSON.stringify($(this > "textarea"))}`)
        $(this).find("textarea").val(dataStored);


       
    })

})

$(".saveBtn").on("click", function(){

    var userData = $(this).siblings("textarea").val().trim();
    console.log(`userData: ${userData}`);

    var timeBlock = $(this).parent().attr("id");
    console.log(`timeBlock: ${timeBlock}`);

    console.log(userData,timeBlock)
    localStorage.setItem(timeBlock, userData)
    
})

var currentTime = moment().hour()
    // for (let i = 8; i <= 16; i++) {
    //     const element = localStorage.getItem(i);
    //     $(`#${i}-input`).val(element)
    //     if (currentTime > i ){
    //         $(`#${i}`).addClass("bg-info")
    //         console.log("Have a good morning!")
    //     } else if (currentTime == i ){
    //         $(`#${i}`).addClass("bg-warning")
    //         console.log("Hey")
    //     } else {
    //         $(`#${i}`).addClass("bg-success")
    //         console.log("Have a night")
    //     }

    // }
var todaysDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#todaysDate").append(todaysDate)
