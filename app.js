window.onload = function () {
    const inp = document.getElementById('inp')
    const nameList = document.getElementById('name-list')
    const display = document.getElementById('display')
    const giveATry = document.getElementById('give-a-try')
    const firstPosition = document.getElementById('first-position')
    const secondPosition = document.getElementById('second-position')
    const thirdPosition = document.getElementById('third-position')

    const participantNames = []

    inp.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            let newNames = event.target.value.split(', ')
            if (newNames[0] !== '') {
                // let newNames = event.target.value.split(', ')
                newNames.forEach(name => {
                    participantNames.push(name)
                    let item = createListItem(name)
                    nameList.appendChild(item)
                    event.target.value = ''
                })
            }
        }
    })

    giveATry.addEventListener('click', function() {
        if(participantNames.length === 0) {
            alert('There is no entry for this participant')
        } else {
            let shuffledNames = shuffle(participantNames)
            for (let i = 0; i < shuffledNames.length; i++){
                (function (i, count) {
                     setTimeout(() => {
                         let rand = Math.floor(Math.random() * (shuffledNames.length))
                         display.innerHTML = shuffledNames[rand]

                         if(count === shuffledNames.length - 1) {
                            if(!firstPosition.innerHTML) {
                                firstPosition.innerHTML = shuffledNames[rand];
                                let ind = participantNames.indexOf(shuffledNames[rand])
                                participantNames.splice(ind, 1)
                            } else if(!secondPosition.innerHTML) {
                                secondPosition.innerHTML = shuffledNames[rand];
                                let ind = participantNames.indexOf(shuffledNames[rand])
                                participantNames.splice(ind, 1)
                            } else if(!thirdPosition.innerHTML) {
                                thirdPosition.innerHTML = shuffledNames[rand];
                                let ind = participantNames.indexOf(shuffledNames[rand])
                                participantNames.splice(ind, 1)
                            } else {
                                alert('Raffle Draw Already Completed');
                            }
                         }
                     }, i)
                }) (i*100, i)
            }
        }
    })
}

function createListItem(name) {
    let li = document.createElement('li')
    li.className = 'list-group-item'
    li.innerHTML = name
    return li
}

function shuffle(arr) {
    let shuffledArr = [...arr]

    for (let i = shuffledArr.length - 1; i > 0; i--) {
        let rand = Math.floor(Math.random() * (i + 1))
        let temp = shuffledArr[rand]
        shuffledArr[rand] = shuffledArr[i]
        shuffledArr[i] = temp
    }

    return shuffledArr;
}

// function sampleRandom(v, y, r, z) {
//         v.innerHTML = y[r];
//         let ind = z.indexOf(y[r])
//         z.splice(ind, 1)
// }
// if(!v.innerHTML) {
//     v.innerHTML = shuffledNames[rand];
//     let ind = participantNames.indexOf(shuffledNames[rand])
//     participantNames.splice(ind, 1)
// }

   //Extract text from the text area and store it in an array
   //Render the names extracted from the text area
   // shuffle the names array for better result
   //Pic a random winner, remove HIM/HER from the names array
   //display winners name

//    Cierra Vega, Alden Cantrell, Kierra Gentry, Pierre Cox, Thomas Crane, Miranda Shaffer, Bradyn Kramer, Alvaro Mcgee