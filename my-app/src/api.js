//API Quizzes

const TOKEN = 'ddaac0a66fc4cc2a801f';

export const postAPI = async (quizzes) => {
    try {
        const res = await fetch("https://core.dit.upm.es/api/quizzes/random10wa?token=" + TOKEN, {
          method: 'POST', 
          headers:{
              "Content-Type": "application/json",
          },
          body: JSON.stringify(quizzes)
        });
        const {uri} = await res.json();
        return uri;               
    } catch (err) {
        alert("No se ha podido crear el endpoint.")
    }
}

export const getAPI = async () => {
    try {
        const res = await fetch("https://core.dit.upm.es/api/quizzes/random10wa?token=" + TOKEN);
        return res.json();
    } catch (e) {
        alert("No se ha podido recuperar la información.")
    }
}

export const updateAPI = async (quizzes) => {
    try {
        await fetch(localStorage.URL, {
            method: 'PUT', 
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(quizzes)
        });
    } catch(e) {
        alert("Ha ocurrido un error");
        return;
    }
}

//API Pokedex

export const getPokedex = async (index) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
        const data = await res.json();
        return data;
    } catch (e) {
        alert("No se ha podido recuperar la información.")
    }
}

export const searchPokedex = async (pokemon) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const data = await res.json();
        return data;
    } catch (e) {
        alert("No se ha podido recuperar la información.")
    }
}