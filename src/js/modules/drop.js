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
    item.closest(".file_upload").style.backGroundColor = "rgba(0,0,0, .7)"; // ниначто не влияет
  }

  function unHightLight(item) {
    item.closest(".file_upload").style.border = "none";
    if (item.closest(".calk_form")) {
      item.closest(".file_upload").style.backGroundColor = "white"; // ниначто не влияет
    } else {
      item.closest(".file_upload").style.backGroundColor = "ededed"; // ниначто не влияет
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
      input.files = e.dataTransfer.files; // файл в input = файлу, который был помещен в input через перетаскивание
      const splitFileName = input.files[0].name.split("."); // имя файла превращается в массив. [0]-все до точки, [1]-точки и последующие символы
      const [fileName, fileType] = splitFileName; // такая запись предпологает, что fileName=splitFileName[0], fileType=splitFileName[1]
      const dots = fileName.length > 6 ? "..." : ".";
      const name = `${fileName.slice(0, 5)}${dots}${fileType}`; // name = первым 5 символам fileName+точка или многоточие+тип расширения файла
      input.previousElementSibling.textContent = name;
    });
  });
};

export default drop;
