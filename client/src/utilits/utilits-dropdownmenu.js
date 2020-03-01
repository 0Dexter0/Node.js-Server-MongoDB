const closeDropDown = (size,border) => {
    const notvisibleContent = document.getElementById('notvisible-transition');
    notvisibleContent.style.height=size;
    notvisibleContent.style.borderBottom=border;
}
window.onclick = (event) => {
    const perfectSize = document.getElementById('notvisible-transition').scrollHeight;
    event.target.matches('#visible-transition') || event.target.matches('.links') ?
        closeDropDown(`${perfectSize}px`,
        "1px solid steelblue") :
    closeDropDown("0px","none");
}

