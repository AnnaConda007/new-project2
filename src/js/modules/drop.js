const drop = () => {
    const fileInputs = document.querySelectorAll(`[name="upload"]`)



    [`dragenter`, `dragleave`, `dragover`, `drop`].forEach(eventType => {
        fileInputs.forEach(input => {
            input.addEventListener(eventType, preventDefaults, false)
        })
    });



    function preventDefaults(e) {
        e.preventDefault()
        e.stopPropagation()
    }
    /*
        function hightLight(item) {
            item.closest(".file_upload").style.border = "5px solid yelow"
            item.closest(".file_upload").style.backGroundColor = "rgba(0,0,0, .7)"
        }
    
        function unHightLight(item) {
            item.closest(".file_upload").style.border = "none"
            item.closest(".file_upload").style.backGroundColor = "white"
        }
    
    
    
    
    
        ["dragenter", "dragover"].forEach(eventType => {
            fileInputs.forEach((input) => {
                input.addEventListener(eventType, () => {
                    hightLight(input)
                }, false)
            })
        });
    
    
    
        [" dragleave", "drop"].forEach(eventType => {
            fileInputs.forEach((input) => {
                input.addEventListener(eventType, () => {
                    unHightLight(input)
                }, false)
            })
        });
    */
}



export default drop