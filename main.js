(() => {
    "use strict";
    let e = document.querySelector("#pictureFile"),
        c = document.querySelector("#profileViewer");
    e.onchange = t => {
        const [r] = e.files;
        r && (c.src = URL.createObjectURL(r))
    }
})();