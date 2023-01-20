const calc = ({ size, material, option, promo, result }) => {
    const sizeBlock = document.querySelector(size);
    const materialBlock = document.querySelector(material);
    const optionBlock = document.querySelector(option);
    const promocodeBlock = document.querySelector(promo);
    const resultlBlock = document.querySelector(result);

    let sum = 0;

    const calcFunc = () => {
        sum = Math.round(
            +sizeBlock.value * +materialBlock.value + +optionBlock.value
        );

        if (sizeBlock.value == "" || materialBlock.value == "") {
            resultlBlock.textContent =
                "Пожалуйста, выберите размер и материал картины";
        } else if (promocodeBlock.value === "промокод") {
            resultlBlock.textContent = Math.round(sum * 0.7);
        } else {
            resultlBlock.textContent = sum;
        }
    };

    sizeBlock.addEventListener("change", calcFunc);
    materialBlock.addEventListener("change", calcFunc);
    optionBlock.addEventListener("change", calcFunc);
    promocodeBlock.addEventListener("input", calcFunc);
};

export default calc;
