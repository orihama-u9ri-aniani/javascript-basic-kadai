const addbtn = document.getElementById("btn");

const addtext = document.getElementById("text");

const parentList = document.getElementById('parent-list');

addbtn.addEventListener('click', () => {
   if (addtext == 'ボタンをクリックしてください') {
    addtext.style.display = 'inline';
  }
  
  else {
    addtext.style.display = 'none';
    parentList.style.marginLeft = 0;
    parentList.style.paddingLeft = 0;
    const childList = document.createElement('h2');
    childList.textContent = 'ボタンをクリックしました';
    parentList.appendChild(childList);
  }
  
});
