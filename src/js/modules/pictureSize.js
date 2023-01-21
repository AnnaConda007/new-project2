const pictureSize = (imgWraperSelector) => {
    const imgWrapers = document.querySelectorAll(imgWraperSelector);

    function showImg(wrap) {
        const img = wrap.querySelector("img");
        img.src = img.src.slice(0, -4) + "-1.png";
        wrap.querySelectorAll("p:not(.sizes-hit)").forEach((p) => {
            p.style.display = "none";
        });
    }

    function hideImg(wrap) {
        const img = wrap.querySelector("img");
        img.src = img.src.slice(0, -6) + ".png";
        wrap.querySelectorAll("p").forEach((p) => {
            p.style.display = "block";
        });
    }

    imgWrapers.forEach((wrapper) => {
        wrapper.addEventListener("mouseover", () => {
            showImg(wrapper);
        });
        wrapper.addEventListener("mouseout", () => {
            hideImg(wrapper);
        });
    });
};
export default pictureSize;
