
let click_sound_1 = new Audio ("./SE-MAGIC-EFFECT.wav"); 
let click_sound_2 = new Audio ("./ch0264_00_satoshi_0044_en.ogg"); 
let click_sound_3 = new Audio ("./ch0264_00_satoshi_0045_en.ogg"); 
let click_sound_4 = new Audio ("./ch0264_00_satoshi_0030_en.ogg"); 

let bgm = new Audio ("./1-02. Introduction.mp3"); 
bgm.loop = true; 

window.onload = function() 
{
    // var pack = document.getElementById("Pokemon-Pack"); 
    const img = document.getElementById("pack-img");       // addition to ensure that clicking on the image triggers cards to open, and not surrounding areas 
    img.addEventListener("click", openPack); 
}

randomNumber = function(min, max) 
{
    return Math.ceil(Math.random() * (max-min) + min); 
}

openPack = function()          // OR: function openPack() {...} 
{
    bgm.play(); 
    // alert("Pack is open!"); 

    // alternate between sound effects while opening pack 

    let click_sound_num = randomNumber(0, 10); 

    if (click_sound_num == 1 || click_sound_num == 4 || click_sound_num == 10) { click_sound_1.play(); }

    else if (click_sound_num == 2 || click_sound_num == 5 || click_sound_num == 8) { click_sound_2.play(); }

    else if (click_sound_num == 3 || click_sound_num == 6 || click_sound_num == 9) { click_sound_3.play(); }

    else if (click_sound_num == 7) { click_sound_4.play(); }

    const heading2 = document.getElementById("hd_2"); 
    heading2.textContent = "Wow! [Click again to Generate more!]"; 
    heading2.style.fontSize = "20px"; 
    heading2.style.fontWeight = "bold"; 

    // to avoid repetitive and continuous stream of cards upon opening pack 
    let cardsOpened = document.getElementById("poke-cards-opened"); 
    while (cardsOpened.firstChild) // If div tags exist within the "poke-cards-opened" div id, 
    {
        cardsOpened.firstChild.remove(); // remove the div tags, so the new ones created below can replace them 
    }

    for (let i = 0; i <= 10; i++)
    {
        // allows us to create a div tag --> [ <div></div> ]
        let cardDiv = document.createElement("div"); 

        // now we want to apply a style class -- [ <div class="poke-card"> </div> ]
        cardDiv.classList.add("poke-card"); 

        let cardImg = document.createElement("img"); 
        cardImg.id = i; 

        // set num to generate cards based on rareity 
        let num = 1; 

        if (i == 10)
        {
            num = randomNumber(1, 16); 
        } 
        else 
        {
            num = randomNumber(17, 102); 
        }

        cardImg.src = "./pokemon-cards/base set (" + num.toString() + ").jpg"; // created image tag with img src 

        // now we add the img tag to the div tag : [ <div class="poke-card"> </div> ] 
        cardDiv.appendChild(cardImg); 
        document.getElementById("poke-cards-opened").appendChild(cardDiv); 
    }
}

