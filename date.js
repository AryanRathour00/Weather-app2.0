setInterval(()=>{
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var day = date.getDate()
    var month = date.getMonth()
    var year = date.getFullYear()
    
    if (seconds < 10){
        document.querySelector(".second").innerHTML = `0${seconds}`
    }
    else{
        document.querySelector(".second").innerHTML = `${seconds}`
    }
    if (minutes < 10){
        document.querySelector(".minute").innerHTML = `0${minutes}`
    }
    else{
        document.querySelector(".minute").innerHTML = `${minutes}`
    }
    if (hours < 10){
        document.querySelector(".hour").innerHTML = `0${hours}`
    }
    else{
        document.querySelector(".hour").innerHTML = `${hours}`
    }

    if (day < 10){
        document.querySelector(".day").innerHTML = `0${day}`
    }
    else{
        document.querySelector(".day").innerHTML = `${day}`
    }
    if (month < 10){
        document.querySelector(".month").innerHTML = `0${month}`
    }
    else{
        document.querySelector(".month").innerHTML = `${month}`
    }
    if (year < 10){
        document.querySelector(".year").innerHTML = `0${year}`
    }
    else{
        document.querySelector(".year").innerHTML = `${year}`
    }


    
    
},1000)