const modals = function () {
  function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = "true") {
    const triggers = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    const AllModalWindows = document.querySelectorAll("[data-modal]");
    const closeAllModalWindow = () => {
      AllModalWindows.forEach((ModalWindow) => { // функция скрывает все модальные окна
        ModalWindow.style.display = "none";
      });
    };

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }
        closeAllModalWindow();
        modal.style.display = "block";
        document.body.classList.add("modal-open");
      });
    });
    const closeModal = () => {
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
    };
    window.addEventListener("keydown", (e) => {
      if (e.code == "Escape") {
        closeModal();
      }
    });
    close.addEventListener("click", () => {
      closeModal();
    });
    modal.addEventListener("click", (e) => {
      if (e.target == modal && closeClickOverlay) {   // в верстке предусмотрено, что modal - это внешний див,подложка, и внутри него уже сам кондент модального окна
        closeModal();
      }
    });

    const showModalByTime = (selector, time) => {
      setTimeout(function () {
        let booleanCheck;// = false
        document.querySelectorAll("[data-modal]").forEach((item) => { // модальное окно откроется через n сек, только если уже не открыто других модальных окон 
          if (getComputedStyle(item).display !== "none") { // проверка, есть ли уже открытые окна (display !== "none", значит display=block/flex)
            booleanCheck = true; // ранее false
          }
        });
        if (!booleanCheck) {  // если ! booleanCheck по-прежнему равно false, то есть нет открытых окон, "!" поменяет false на true и условие выполнится. И наоборот
          document.querySelector(selector).style.display = "block";
          document.body.classList.remove("modal-open");
        }
      }, time);
    };
    showModalByTime(".popup-consultation", 60000);
  }

  bindModal(".button-design", ".popup-design", ".popup-design .popup-close");
  bindModal(".button-consultation", ".popup-consultation", ".popup-consultation  .popup-close");
};
export default modals;
