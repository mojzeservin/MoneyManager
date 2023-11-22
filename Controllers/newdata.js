function setMaxDate(){
    let date = document.querySelector('#date');
    date.max =  new Date().toISOString().split("T")[0];
}

function getToday(){
    setTimeout(()=>{setMaxDate()}, 500);
}

function addMoney(){

    let date = document.querySelector('#date');
    let type = document.querySelector('#type');
    let amount = document.querySelector('#amount');
    let tag = document.querySelector('#tag');

    if (date.value == "" || type.value == "" || amount.value == 0 || tag.value == ""){
        showMessage("Nem adtál meg minden adatot!");
    }
    else{
        let data = {
            userID : loggedUser.ID,	
            date : date.value,	
            type : type.value,
            amount : amount.value,
            tag : tag.value	
        }
        axios.post(`${serverURL}/items`, data).then((res)=>{
            alert('A egyenleg rögzítve lett!');
            date.value = null;
            type.value = null;
            amount.value = 0;
            tag.value = null;
                });
            }     
    }

