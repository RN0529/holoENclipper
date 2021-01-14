function getVideo() {
    $.ajax({
        type: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        data: {
            key: 'AIzaSyDNHAYWSCF8gGh0g-6lqahCljqt_fZRy-c',
            //'AIzaSyDNHAYWSCF8gGh0g-6lqahCljqt_fZRy-c' nelsons key

            q: "hololive Amelia watson pain ",
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