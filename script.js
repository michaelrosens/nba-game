const boxes = document.querySelectorAll('.box');
const checkAnswerButton = document.getElementById('check-answer');
const result = document.querySelector('.result');

let selectedCategories = [];

const playerImages = [
    {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Stephen_Curry_%28cropped%29.jpg/1200px-Stephen_Curry_%28cropped%29.jpg',
        categories: {
            position: 'PG',
            team: 'GSW',
            nationality: 'USA'
        }
    },
    {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/LeBron_James_%28cropped%29.jpg/1200px-LeBron_James_%28cropped%29.jpg',
        categories: {
            position: 'PF',
            team: 'LAL',
            nationality: 'USA'
        }
    },
    {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Kevin_Durant_%28cropped%29.jpg/1200px-Kevin_Durant_%28cropped%29.jpg',
        categories: {
            position: 'SF',
            team: 'BKN',
            nationality: 'USA'
        }
    },
    {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Kyrie_Irving_%28cropped%29.jpg/1200px-Kyrie_Irving_%28cropped%29.jpg',
        categories: {
            position: 'PG',
            team: 'BKN',
            nationality: 'USA'
        }
    },
    // Add more players here
];

function generatePlayerBoxes() {
    const grid = document.querySelector('.grid');

    playerImages.forEach((player, index) => {
        const box = document.createElement('div');
        box.classList.add('box');

        const img = document.createElement('img');
        img.src = player.src;
        img.alt = `Player ${index + 1}`;
        box.appendChild(img);

        box.dataset.category = Object.keys(player.categories)[0];
        box.dataset.value = player.categories[Object.keys(player.categories)[0]];

        grid.appendChild(box);
    });
}

function checkAnswer() {
    const uniqueCategories = [...new Set(selectedCategories)];

    if (uniqueCategories.length === 4) {
        let similarity = '';

        if (uniqueCategories.includes('position')) {
            similarity += 'Play the same position. ';
        }

        if (uniqueCategories.includes('team')) {
            similarity += 'Play for the same team. ';
        }

        if (uniqueCategories.includes('nationality')) {
            similarity += 'Share the same nationality. ';
        }

        result.textContent = `Similarity: ${similarity.trim()}`;
        result.style.color = '#007bff';

        // Move correct boxes to the top
        const correctBoxes = document.querySelectorAll('.box');
        correctBoxes.forEach(box => {
            box.style.transform = 'translateY(-100px)';
        });
    } else {
        result.textContent = 'Please select 4 players with a common characteristic.';
        result.style.color = '#ff0000';

        // Shake incorrect boxes
        boxes.forEach(box => {
            box.classList.add('shake');
            setTimeout(() => {
                box.classList.remove('shake');
            }, 500);
        });
    }
}

generatePlayerBoxes();

boxes.forEach(box => {
    box.addEventListener('click', () => {
        if (selectedCategories.length < 4) {
            box.style.backgroundColor = '#007bff';
            box.style.color = '#fff';
            selectedCategories.push(box.dataset.category);
        }
    }