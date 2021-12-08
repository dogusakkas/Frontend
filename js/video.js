$("#videoModal").on("hidden.bs.modal", function() {
    let videoIframe = $(".modal-body").html();
    $(".modal-body").html(videoIframe);
});

const VIDE_LINK = {
    "1": {
        "video": "https://www.youtube.com/embed/XDvfryJ_nUc",
        "baslik": "Video 1"
    },

    "2": {
        "video": "https://www.youtube.com/embed/JvJzn8soFQ4",
        "baslik": "Video 2"
    },

    "3": {
        "video": "https://www.youtube.com/embed/8wC-ThWwW3g",
        "baslik": "Video 3"
    },

    "4": {
        "video": "https://www.youtube.com/embed/8wC-ThWwW3g",
        "baslik": "Video 4"
    },

    "5": {
        "video": "https://www.youtube.com/embed/8wC-ThWwW3g",
        "baslik": "Video 5"
    },

    "6": {
        "video": "https://www.youtube.com/embed/8wC-ThWwW3g",
        "baslik": "Video 6"
    }
};

$(".video-btn").click(function() {
    let videoDataId = $(this).attr("data-video");
    let video = VIDE_LINK[videoDataId].video;
    let baslik = VIDE_LINK[videoDataId].baslik;

    $("#videoModalLabel").html(baslik);
    $("#videoFrame").attr("src", video);
});