document.addEventListener('DOMContentLoaded',
    () => {
        const cardArray = [


            {
                name: 'img1',
                image: '{{memory.img_1.url}}'
            },
            {
                name: 'img2',
                image: '{{memory.img_2.url}}'
            },
            {
                name: 'img3',
                image: '{{memory.img_3.url}}'
            },
            {
                name: 'img4',
                image: '{{memory.img_4.url}}'
            },
            {
                name: 'img5',
                image: '{{memory.img_5.url}}'
            },
            {
                name: 'img6',
                image: '{{memory.img_6.url}}'
            },
            {
                name: 'img7',
                image: '{{memory.img_7.url}}'
            },
            {
                name: 'img8',
                image: '{{memory.img_8.url}}'
            },
            {
                name: 'img1',
                image: '{{memory.img_1.url}}'
            },
            {
                name: 'img2',
                image: '{{memory.img_2.url}}'
            },
            {
                name: 'img3',
                image: '{{memory.img_3.url}}'
            },
            {
                name: 'img4',
                image: '{{memory.img_4.url}}'
            },
            {
                name: 'img5',
                image: '{{memory.img_5.url}}'
            },
            {
                name: 'img6',
                image: '{{memory.img_6.url}}'
            },
            {
                name: 'img7',
                image: '{{memory.img_7.url}}'
            },
            {
                name: 'img8',
                image: '{{memory.img_8.url}}'
            },

        ]

        const grid = document.querySelector('.grid');
        const resultDisplay = document.querySelector('#result')
        var cardChosen = []
        var cardChosenId = []
        var cardWon = []


        function createBoard() {
            for (let i = 0; i < cardArray.length; i++) {
                var card = document.createElement('img')

                card.addEventListener('click', flipCard)
                grid.appendChild(card)

            }
            placeCards();
        }

        function placeCards() {
            for(let x = 0 ; x<cardArray.length; x++){
                cardArray[x].random = Math.random();
            }
            cardArray.sort((x,y) => x.random -y.random);

            var cards = grid.children;
            for (let i = 0; i < cardArray.length; i++) {
                var card = cards[i];
                card.setAttribute('src', 'pawpatrol/back.png')
                card.setAttribute('data-id', i)

            }
        }

        createBoard()
        // check for matchs
        function checkForMatch(){
            var cards = document.querySelectorAll('img')
            const optionOneId = cardChosenId[0]
            const optionTwoId = cardChosenId[1]

            if( cardChosen[0] === cardChosen[1]){

                cards[optionOneId].setAttribute('src', 'game/image/chase-150x150.jpg')
                cards[optionTwoId].setAttribute('src', 'game/image/chase-150x150.jpg')
                cardWon.push(cardChosen)
                cards[optionOneId].removeEventListener('click', flipCard)
                cards[optionTwoId].removeEventListener('click', flipCard)
            }


            else{
                cards[optionOneId].setAttribute('src', 'pawpatrol/back.png')
                cards[optionTwoId].setAttribute('src', 'pawpatrol/back.png')


            }
            cardChosen = []
            cardChosenId = []
            resultDisplay.textContent = cardWon.length


            if ( cardWon.length === cardArray.length/2){
                document.getElementById('win').hidden = false;
                document.getElementById('button').addEventListener("click", function() {
                    placeCards();
                    document.getElementById('win').hidden = true;
                });

            }

        }

        // flipcard
        function flipCard(){
            var  cardId= this.getAttribute('data-id')
            if (cardChosenId.length === 1 && cardId===cardChosenId[0] || cardChosenId.length===2){
                return;
            }
            cardChosen.push(cardArray[cardId].name)
            cardChosenId.push(cardId)
            this.setAttribute('src', cardArray[cardId].image)
            if( cardChosen.length ===2){
                setTimeout(checkForMatch,500)
            }
        }

    })