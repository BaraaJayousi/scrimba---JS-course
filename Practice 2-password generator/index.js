const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1El = document.getElementById("pass1-el");
let pass2EL = document.getElementById("pass2-el");

function generatePassword(){
    
    let passwords = []
    let password = ""
    for(j = 0; j <2; j++){
        for(i = 0; i < 15; i++)
        {
            password += characters[Math.floor(Math.random() * characters.length)]
        }
        passwords.push(password)
        password = ""
    }

    pass1El.textContent = passwords[0]
    pass2EL.textContent = passwords[1]
    
}

