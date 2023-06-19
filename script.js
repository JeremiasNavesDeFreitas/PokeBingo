

let table = document.getElementById("table");

let cartela = []

function geraCartela() {

    for (let i = 0; i < table.rows.length; i++) {
        for (let j = 0; j < table.rows[i].cells.length; j++) {
            
            let cont = Math.floor(Math.random() * 100) + 1;
            let url = `https://pokeapi.co/api/v2/pokemon/${cont}`;
            
            if (!cartela.includes(cont)) {
                cartela.push(cont)
                
                p = new Promise(() => {
                    fetch(url)
                    .then((resposta) => {
                        return resposta.json()
                    })
                    .then((pokemon) => {
                        
                        let id = (i+1) + "-" + (j+1);
                        
                        if (id != "3-3") {
                            
                            let cel = document.getElementById(id);
                            
                            sprite = pokemon.sprites.front_default;
                            
                            let poke = document.createElement("img");
                            poke.setAttribute("src", sprite);
                            
                            cel.appendChild(poke);
                        }               
                        
                    })
                    .catch((erro) => {
                        return erro;
                    })
                }) 
            }else {
                j--;
                continue;
            }
            
        }
    }
}

geraCartela()

let bot1 = document.getElementById("next");

let pokeSorted = [];
let poke;

bot1.addEventListener("click", function() {
    
    bot1.remove()
    
    
    let interval = setInterval(function () {
        
        if (cells == 24) {
            if (win == true) {
                clearInterval(interval);
            }
        }

        if (pokeSorted.length == 100) {
            clearInterval(interval);
            alert("Você perdeu, quem sabe na próxima.");
            location.reload();
        }
        
        poke = Math.floor(Math.random() * 100) + 1;
        while(pokeSorted.includes(poke)){
            poke = Math.floor(Math.random() * 100) + 1;
        }
        
        let url = `https://pokeapi.co/api/v2/pokemon/${poke}`;
        
        pokeSorted.push(poke)
        
        p = new Promise(() => {
            fetch(url)
            .then((resposta) => {
                return resposta.json()
            })
            .then((pokemon) => {
                
                let img = document.getElementById("pokeSort");
                img.style.border = "1px solid";
                
                sprite = pokemon.sprites.front_default;
                
                img.setAttribute("src", sprite);
                
            })
            .catch((erro) => {
                return erro;
            })
        }) 
        
        
    }, 5000)
    
})

let cells = 0;
let contBot = 0;
let win = false;

let cell1 = document.getElementById("1-1");
let cell2 = document.getElementById("1-2");
let cell3 = document.getElementById("1-3");
let cell4 = document.getElementById("1-4");
let cell5 = document.getElementById("1-5");
let cell6 = document.getElementById("2-1");
let cell7 = document.getElementById("2-2");
let cell8 = document.getElementById("2-3");
let cell9 = document.getElementById("2-4");
let cell10 = document.getElementById("2-5");
let cell11 = document.getElementById("3-1");
let cell12 = document.getElementById("3-2");
let cell13 = document.getElementById("3-4");
let cell14 = document.getElementById("3-5");
let cell15 = document.getElementById("4-1");
let cell16 = document.getElementById("4-2");
let cell17 = document.getElementById("4-3");
let cell18 = document.getElementById("4-4");
let cell19 = document.getElementById("4-5");
let cell20 = document.getElementById("5-1");
let cell21 = document.getElementById("5-2");
let cell22 = document.getElementById("5-3");
let cell23 = document.getElementById("5-4");
let cell24 = document.getElementById("5-5");

cell1.addEventListener("click", ()=>checaPoke(cell1));
cell2.addEventListener("click", ()=>checaPoke(cell2));
cell3.addEventListener("click", ()=>checaPoke(cell3));
cell4.addEventListener("click", ()=>checaPoke(cell4));
cell5.addEventListener("click", ()=>checaPoke(cell5));
cell6.addEventListener("click", ()=>checaPoke(cell6));
cell7.addEventListener("click", ()=>checaPoke(cell7));
cell8.addEventListener("click", ()=>checaPoke(cell8));
cell9.addEventListener("click", ()=>checaPoke(cell9));
cell10.addEventListener("click", ()=>checaPoke(cell10));
cell11.addEventListener("click", ()=>checaPoke(cell11));
cell12.addEventListener("click", ()=>checaPoke(cell12));
cell13.addEventListener("click", ()=>checaPoke(cell13));
cell14.addEventListener("click", ()=>checaPoke(cell14));
cell15.addEventListener("click", ()=>checaPoke(cell15));
cell16.addEventListener("click", ()=>checaPoke(cell16));
cell17.addEventListener("click", ()=>checaPoke(cell17));
cell18.addEventListener("click", ()=>checaPoke(cell18));
cell19.addEventListener("click", ()=>checaPoke(cell19));
cell20.addEventListener("click", ()=>checaPoke(cell20));
cell21.addEventListener("click", ()=>checaPoke(cell21));
cell22.addEventListener("click", ()=>checaPoke(cell22));
cell23.addEventListener("click", ()=>checaPoke(cell23));
cell24.addEventListener("click", ()=>checaPoke(cell24));

function checaPoke(cell) {
    
    if (cell.style.backgroundColor != "#ff03038a") {
        cells++;
    }
    
    cell.style.backgroundColor = "#ff03038a";
    
    if (cells == 24) {
        
        let bots = document.getElementById("bots");
        
        bot1.remove();
        
        let bot2 = document.createElement("button");
        bot2.innerHTML = "Bingo!!!";
        
        bot2.addEventListener("click", function () {
            
            let ganhar = 0;
            
            for (let i = 0; i < cartela.length; i++) {
                
                if(pokeSorted.includes(cartela[i]))
                ++ganhar;
                
            }
            
            if (ganhar == 25) {
                alert("Você ganhou!!!");
                win = true;
                location.reload();
            }else {
                alert("Você perdeu, continue tentando.");
            }
        });
        
        bots.appendChild(bot2);
    }
    
}