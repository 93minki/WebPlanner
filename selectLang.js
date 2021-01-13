const selectKOR = document.getElementById('KOR');
const selectENG = document.getElementById('ENG');

const sendButton = document.getElementById('submit');
const signButton = document.getElementById('sign');
const findButton = document.getElementById('findInfo');

const userInformation = document.getElementById('info');

let whatPageIs;
const LOGIN_PAGE = 0;
const SIGN_PAGE = 1;

function checkLanguage(){
    if(selectKOR.checked == true){
        console.log("KOR");
    }
    else{
        console.log("ENG");
    }

}

function selectKorean(){
    console.log("user select korean");
    if(whatPageIs === LOGIN_PAGE){
        sendButton.value="제출";
        signButton.value="가입";
        findButton.value="ID/PW 찾기"
    }else{
        sendButton.value="회원가입";
    }
}

function selectEnglish()
{
    console.log("user select English");
    if(whatPageIs === LOGIN_PAGE){
        sendButton.value="Send";
        signButton.value="Sign";
        findButton.value="Find ID/PW"
    }else{
        sendButton.value="Send";
    }
}

function checkThisPage(){
    const numOfChild = userInformation.childElementCount;
    if(numOfChild === 8){
        // Login Page
        console.log("Login Page");
        whatPageIs = LOGIN_PAGE;

    }else if(numOfChild === 9){
        // Sign-In Page
        console.log("Sing-In Page");
        whatPageIs = SIGN_PAGE;
    }
}

function init()
{
    checkThisPage();
    checkLanguage();
    selectKOR.addEventListener('click', selectKorean);
    selectENG.addEventListener('click', selectEnglish);
}

init();