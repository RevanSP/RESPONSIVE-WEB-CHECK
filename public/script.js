function fetchURL() {
    const url = document.getElementById("urlInput").value;
    if (url) {
        document.getElementById("mobileViewBtn").classList.remove("btn-disabled");
        document.getElementById("desktopViewBtn").classList.remove("btn-disabled");

        window.fetchedURL = url;
    }
}

function showMobileView() {
    const iframe = document.getElementById("iframeMobile");
    iframe.src = window.fetchedURL; 
    document.getElementById("my_modal_1").showModal(); 
}

function showDesktopView() {
    const iframe = document.getElementById("iframeDesktop");
    iframe.src = window.fetchedURL; 
    document.getElementById("my_modal_2").showModal(); 
}