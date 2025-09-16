const passwordBox=document.getElementById("password");
const button=document.getElementById("btn");
const clearBtn = document.getElementById("clear");
const copyButton=document.getElementById("copy");

const generatePassword=()=>{
    const chars="ಅಆಇಈಉಊಋಎಏಐಒಓಔಅಂಅಃಕಖಗಘಙಚಛಜಝಞಟಠಡಢಣತಥದಧನಪಫಬಭಮಯರಲವಶಷಸಹಳಕ್ಷಜ್ಞ೦೧೨೩೪೫೬೭೮೯@#$%^&*()_+}{|\/><=-'~[]";

let password=" ";
const lengthofPassword=8;
for(let i=0;i<lengthofPassword;i++)
{
    password += chars.charAt(Math.floor(Math.random() * chars.length))
    //console.log(password);
}
passwordBox.value=password;

};
clearBtn.addEventListener("click", () => {
    passwordBox.value = "";
});



button.addEventListener("click",generatePassword);

copyButton.addEventListener("click",()=>{

    const passwordCopy = passwordBox.value.trim();
    if(!passwordCopy)
    {
        alert("No password to copy! Please generate a password first.");
        return;
    }


    navigator.clipboard.writeText(passwordCopy)
    .then(()=>{
        alert("Password copied to clipboard!");
    });
});