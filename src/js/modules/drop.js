const drop = () => {
  const fileInputs = document.querySelectorAll(`[name="upload"]`);

  [`dragenter`, `dragleave`, `dragover`, `drop`].forEach((eventType) => {
    fileInputs.forEach((input) => {
      input.addEventListener(eventType, preventDefaults, false);
    });
  });

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function hightLight(item) {
    item.closest(".file_upload").style.border = "5px solid yellow";
    item.closest(".file_upload").style.backGroundColor = "rgba(0,0,0, .7)";
  }

  function unHightLight(item) {
    item.closest(".file_upload").style.border = "none";
    if (item.closest(".calk_form")) {
      item.closest(".file_upload").style.backGroundColor = "white";
    } else {
      item.closest(".file_upload").style.backGroundColor = "ededed";
    }
  }

  ["dragenter", "dragover"].forEach((eventType) => {
    fileInputs.forEach((input) => {
      input.addEventListener(
        eventType,
        () => {
          hightLight(input);
        },
        false
      );
    });
  });
  ["dragleave", "drop"].forEach((eventType) => {
    fileInputs.forEach((input) => {
      input.addEventListener(
        eventType,
        () => {
          unHightLight(input);
        },
        false
      );
    });
  });

  fileInputs.forEach((input) => {
    input.addEventListener("drop", (e) => {
      input.files = e.dataTransfer.files;
      let dots;
      const arr = input.files[0].name.split(".");
      arr[0].length > 6 ? (dots = "...") : (dots = ".");
      const name = arr[0].substring(0, 6) + dots + arr[1];
      input.previousElementSibling.textContent = name;
    });
  });
};

export default drop;
