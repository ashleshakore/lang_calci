
let inputlang ='0';
let inputelement='0';
let result="0"
const ln=document.querySelectorAll(".lang")

const ele=document.querySelectorAll(".element")

const calculatorScreen=document.querySelector(".calculator-screen")

const updateScreen=(element) =>{
    calculatorScreen.value=element
}
ln.forEach((lang) => {
    lang.addEventListener("click",(event) => {
        inputl(event.target.value)
        updateScreen(inputlang)
    })
    
})





const inputl=(lang) => {
    inputlang=lang
}
const inpute=(element) => {
    inputelement=element
}

const calculate =() => {
    
    switch(inputlang){
        case 'java':
            switch(inputelement){
                case 'for':
                    result="Syntax for java's for loop and all"
                    break
                case 'while':
                    result="Syntax for java's while"
                    break
                case 'if-else':
                    result="syntax for java's if-else"
                    break
                case 'method':
                    result="syntax for method declaration in java"
                    break
                case 'class':
                    result="class features in java"
                    break
                default:
                    return
            }
            break
        case 'python':
            switch(inputelement){
                case 'for':
                    result="Syntax for python's for loop and all"
                    break
                case 'while':
                    result="Syntax for python's while"
                    break
                case 'if-else':
                    result="syntax for python's if-else"
                    break
                case 'method':
                    result="syntax for method declaration in python"
                    break
                case 'class':
                    result="class features in python"
                    break
                default:
                    return
            }
            break
        case 'c++':
            switch(inputelement){
                case 'for':
                    result="Syntax for c++'s for loop and all"
                    break
                case 'while':
                    result="Syntax for c++'s while"
                    break
                case 'if-else':
                    result="syntax for c++'s if-else"
                    break
                case 'method':
                    result="syntax for method declaration in c++"
                    break
                case 'class':
                    result="class features in c++"
                    break
                default:
                    return
            }
            break
        case 'c':
            switch(inputelement){
                case 'for':
                    result="Syntax for c's for loop and all"
                    break
                case 'while':
                    result="Syntax for c's while"
                    break
                case 'if-else':
                    result="syntax for c's if-else"
                    break
                case 'method':
                    result="syntax for method declaration in c"
                    break
                case 'class':
                    result="c is not object oriented lang,c does not have classes"
                    break
                default:
                    return
            }
            break  
        default:
            return  
    }

}

ele.forEach((element) => {
    element.addEventListener("click",(event) => {
        inpute(event.target.value)
        calculate()
        updateScreen(result)
    })
    
})