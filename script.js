const boxes = document.querySelectorAll('.box');
const checkAnswerButton = document.getElementById('check-answer');
const result = document.querySelector('.result');



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
    // Add more players here
  ];


  function checkAnswer() {
    const selectedBoxes = document.querySelectorAll('.box.selected');
    const selectedCategories = Array.from(selectedBoxes).map(box => box.dataset.category);
    const commonCategory = selectedCategories.filter(category => selectedCategories.filter(c => c === category).length === selectedBoxes.length)[0];
  
    if (commonCategory) {
      // Move correct boxes to the top
      const correctBoxes = document.querySelectorAll('.box.selected');
      correctBoxes.forEach(box => {
        box.style.transform = 'translateY(-100px)';
      });
  
      result.textContent = `Similarity: Players share the ${commonCategory} category`;
      result.style.color = '#007bff';
    } else {
      result.textContent = 'Please select 4 players with a common category.';
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
      const correctBoxes = document.querySelectorAll('.box.selected');
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


  boxes.forEach((box) => {
    box.addEventListener('click', () => {
      box.classList.toggle('selected');
  
      if (box.classList.contains('selected')) {
        selectedCategories.push(box.dataset.value);
      } else {
        const index = selectedCategories.indexOf(box.dataset.value);
        if (index > -1) {
          selectedCategories.splice(index, 1);
        }
      }
    });
  });

  
checkAnswerButton.addEventListener('click', checkAnswer);