function calcCarCost(){
    const inputs = document.querySelectorAll(".input");
    if(!validate(inputs)){
        alert("Пожалуйста, заполните все поля");
    }

}

function validate(inputs){
    for(let i=0; i<inputs.length; i++)
    {
        let x = inputs[i].value;
        if (inputs[i].value == ""){
            return false;
        }
    }
    return true;
}

function changeMark(){
    const mark = document.querySelector(".container__mark");
    let model = document.querySelector(".container__model");
    let year = document.querySelector(".container__year");

    removeOptions(model);

    switch(mark.value){
        case 'lada':
            addOptionToList(model, 'Granta');
            addOptionToList(model, 'Kalina');
            break;
        case 'kia':
            addOptionToList(model, 'Pride');
            addOptionToList(model, 'Rio');
            break;
        default:
            alert("Хьюстрон, у нас проблемы")
            break;
    }

}

function addOptionToList(list, optionValue){
    let option = document.createElement('option');
    //Здесь правильнее использовать словарь, как - пока не разобралась
    option.value = optionValue;
    option.innerHTML = optionValue;
    list.appendChild(option);
}

function removeOptions(list){
    for(let i=0; i<list.length; i++){
        list.remove(i);
    }
}

document.querySelector(".button").addEventListener("click", calcCarCost);

document.querySelector(".container__mark").addEventListener("change", changeMark);
