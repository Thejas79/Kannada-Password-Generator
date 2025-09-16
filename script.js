const passwordBox=document.getElementById("password");
const button=document.getElementById("btn");
const clearBtn = document.getElementById("clear");
const copyButton=document.getElementById("copy");

const generatePassword=()=>{
    const chars="ಅಆಇಈಉಊಋಎಏಐಒಓಔಅಂಅಃಕಖಗಘಙಚಛಜಝಞಟಠಡಢಣತಥದಧನಪಫಬಭಮಯರಲವಶಷಸಹಳಕ್ಷಜ್ಞ೦೧೨೩೪೫೬೭೮೯ಅಆಇಈಉಊಋಎಏಐಒಓಔಕಕಾಕಿಕೀಕುಕೂಕೃಕೆಕೇಕೈಕೊಕೋಕೌಖಖಾಖಿಖೀಖುಖೂಖೃಖೆಖೇಖೈಖೊಖೋಖೌಗಗಾಗಿಗೀಗುಗೂಗೃಗೆಗೇಗೈಗೋಗೋಗೌಘಘಾಘಿಘೀಘುಘೂಘೃಘೆಘೇಘೈಘೊಘೋಘೌಙಙಾಙಿಙೀಙುಙೂಙೃಙೆಙೇಙೈಙೊಙೋಙೌಚಚಾಚಿಚೀಚುಚೂಚೃಚೆಚೇಚೈಚೊಚೋಚೌಛಛಾಛಿಛೀಚುಛೂಛೃಛೆಛೇಛೈಛೊಛೋಛೌಜಜಾಜಿಜೀಜುಜೂಜೃಜೆಜೇಜೈಜೊಜೋಜೌಝಝಾಝಿಝೀಝುಝೂಝೃಝೆಝೇಝೈಝೊಝೋಝೌಞಞಾಞಿಞೀಞುಞೂಞೃಞೆಞೇಞೈಞೊಞೋಞೌಟಟಾಟಿಟೀಟುಟೂಟೃಟೆಟೇಟೈಟೊಟೋಟೌಠಠಾಠಿಠೀಠುಠೂಠೃಠೆಠೇಠೈಠೊಠೋಠೌಡಡಾಡಿಡೀಡುಡೂಡೃಡೆಡೇಡೈಡೊಡೋಡೌಢಢಾಢಿಢೀಢುಢೂಢೃಢೆಢೇಢೈಢೊಢೋಢೌಣಣಾಣಿಣೀಣುಣೂಣೃಣೆಣೇಣೈಣೊಣೋಣೌತತಾ ತಿ ತೀತುತೂತೃತೆತೇತೈತೊತೋತೌಥಥಾಠಿಥೀಥುಥೂಥೃಥೆಥೇಥೈಥೊಥೋಥೌದದಾದಿದೀದುದೂದೃದೆದೇದೈದೊದೋದೌಧಧಾಧೀಧುಧೂಧೃಧೆಧೇಧೈಧೋಧೋಧೌನನಾನಿನೀನುನೂನೃನೆನೇನೈನೊನೋನೌಪಪಾಪಿಪೀಪುಪೂಪೃಪೆಪೇಪೈಪೋಪೋಪೌಫಫಾಫಿಫೀಪುಫೂಫೃಫೆಫೇಫೈಫೊಫೋಫೌಬಬಾಬಿಬೀಬುಬೂಬೃಬೆಬೇಬೈಬೊಬೋಬೌಭಭಾಭಿಭೀಭುಭೂಭೃಭೆಭೇಭೈಭೊಭೋಭೌಮಮಾಮಿಮೀಮುಮೂಮೃಮೆಮೇಮೈಮೊಮೋಮೌಯಯಾಯಿಯೀಯುಯೂಯೃಯೆಯೇಯೈಯೊಯೋಯೌರರಾರಿರೀರುರೂರೃರೆರೇರೈರೊರೋರೌಲಲಾಲಿಲೀಲುಲೂಲೃಲೆಲೇಲೈಲೊಲೋಲೌವವಾವಿವೀವುವೂವೃವೆವೇವೈವೋವೌಶಶಾಶಿಶೀಶುಶೂಶೃಶೆಶೇಶೈಶೊಶೋಶೌಷಷಾಷಿಷೀಷುಷೂಷೃಷೆಷೇಷೈಷೊಷೋಷೌಸಸಾಸಿಸೀಸುಸೂಸೃಸೆಸೇಸೈಸೊಸೋಸೌಹಹಾಹಿಹೀಹುಹೂಹೃಹೆಹೇಹೈಹೊಹೋಹೌಳಳಾಳಿಳೀಳುಳೂಳೃಳೆಳೇಳೈಳೊಳೋಳೌಕ್ಷಕ್ಷಾಕ್ಷಿಕ್ಷಕ್ಷುಕ್ಷೂಕ್ಷೃಕ್ಷೆಕ್ಷೇಕ್ಷೈಕ್ಷೊಕ್ಷೋಕ್ಷೌಜ್ಞಜ್ಞಾಜ್ಞಿಜ್ಞೀಜ್ಞುಜ್ಞೂಜ್ಞೃಜ್ಞೆಜ್ಞೇಜ್ಞೈಜ್ಞೋಜ್ಞೋಜ್ಞೌ@#$%^&*()_+}{|\/><=-'~[]";

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