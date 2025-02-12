export function elementRealLeft(element:HTMLElement){
    let actualLeft = element.offsetLeft;
    let current = <HTMLElement>element.offsetParent;

    while (current !== null){
    actualLeft += current.offsetLeft;
    current = <HTMLElement>current.offsetParent;
    }
    actualLeft -= window.scrollX
    return actualLeft;
}

export function elementRealTop(element:HTMLElement){
    let actualTop = element.offsetTop;
    let current = <HTMLElement>element.offsetParent;

    while (current !== null){
    actualTop += current.offsetTop;
    current = <HTMLElement>current.offsetParent;
    }
    actualTop -= window.scrollY
    return actualTop;
}