function search() {
    var charButtons = document.getElementsByClassName("characterButton");
    var tagButtons = document.getElementsByClassName("tagButton");
    
    var searchString = "";
    var tagSelected = false;
    var charSelected = false;

    //First checking if random was selected
    if(charButtons[charButtons.length - 1].style.borderStyle === "inset") {
        var randomIndex = Math.random() * (charButtons.length-2);
        if(Math.random() > 0.5) {
            randomIndex = Math.floor(randomIndex);
        }
        else {
            randomIndex = Math.ceil(randomIndex);
        }
        searchString += charButtons[randomIndex].getElementsByClassName("characterText")[0].innerHTML + " ";
        charSelected = true;
    }
    else {
        //Looping through checking if characters were selected
        for(var i = 0; i < charButtons.length - 1; i++) {
            if(charButtons[i].style.borderStyle === "inset") {
                searchString += charButtons[i].getElementsByClassName("characterText")[0].innerHTML + " ";
                charSelected = true;
            }
        }
    }

    //First checking if random was selected
    if(tagButtons[tagButtons.length - 1].style.borderStyle === "inset") {
        var randomIndex = Math.random() * (tagButtons.length-2);
        if(Math.random() > 0.5) {
            randomIndex = Math.floor(randomIndex);
        }
        else {
            randomIndex = Math.ceil(randomIndex);
        }
        searchString += tagButtons[randomIndex].innerHTML + " ";
        tagSelected = true;
    }
    else {
        //Looping through checking if tags were selected
        for(var i = 0; i < tagButtons.length - 1; i++) {
            if(tagButtons[i].style.borderStyle === "inset") {
                searchString += tagButtons[i].innerHTML + " ";
                tagSelected = true;
            }
        }
    }

    if(charSelected === false && tagSelected == false) {
        window.alert("Please Select a Member and Tag");
        return;
    }
    else if(charSelected == false) {
        window.alert("Please Select a Member");
        return;
    }
    else if(tagSelected == false) {
        window.alert("Please Select a Tag");
        return;
    }
    window.alert(searchString);
    getVideo(searchString);
}
function getVideo(searchString) {
    $.ajax({
        type: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        data: {
            key: 'AIzaSyDNHAYWSCF8gGh0g-6lqahCljqt_fZRy-c',
            q: searchString,
            part: 'snippet',
            maxResults: 1,
            type: 'video',
            videoEmbeddable: true,
        },
        success: function(data){
            embedVideo(data)
        },
        error: function(response){
            console.log("Request Failed");
        }
    });
}

function embedVideo(data) {
    $('iframe').attr('src', 'https://www.youtube.com/embed/' + data.items[0].id.videoId)
}