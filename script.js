const from = document.querySelector("#from");
const to = document.querySelector("#to");
const inputvalue = document.querySelector("#inputvalue");
const resultBox = document.querySelector("#result-box")

document.querySelector("#convert").addEventListener("click", () => {
    let fromValue = from.value;

    let toValue = to.value; 

    let inputValue = inputvalue.value;

    let result = convertBase(fromValue, toValue, inputValue)

    resultBox.innerText = result;
})

function convertBase(fromBase, toBase , num){
    let d = parseInt(num, fromBase)
    let res = d.toString(toBase)
    return res
}

document.querySelector("#swap").addEventListener("click", ()=>{
    let temp = from.value;

    from.value = to.value;

    to.value = temp;
    
})