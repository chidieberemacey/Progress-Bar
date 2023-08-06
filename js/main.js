document.addEventListener("DOMContentLoaded", function(){
    const progressBarInner = document.querySelector(".progress-bar-inner");

    window.addEventListener('scroll', function(){
        let height = document.documentElement;

        let sTop = height.scrollTop || document.body.scrollTop;
        let sHeight = height.scrollHeight || document.body.scrollHeight;

        let progress = sTop / (sHeight - height.clientHeight) * 100;
        let roundedProgress = Math.round(progress);
        
        progressBarInner.style.width = progress + "%";
        progressBarInner.innerText = roundedProgress + '%'
    });
});