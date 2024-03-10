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
  }

function generatePlayerBoxes() {
    const grid = document.querySelector('.grid');

    playerImages.forEach((player, index) => {
        if (index < 16) { // Only generate 16 boxes
            const box = document.createElement('div');
            box.classList.add('box');

            const img = document.createElement('img');
            img.src = player.src;
            img.alt = `Player ${index + 1}`;
            box.appendChild(img);

            box.dataset.category = Object.keys(player.categories)[0];
            box.dataset.value = player.categories[Object.keys(player.categories)[0]];

            grid.appendChild(box);
        }
    });
}

boxes.forEach((box) => {
    box.addEventListener('click', () => {
      if (box.classList.contains('selected')) {
        box.classList.remove('selected');
        const index = selectedCategories.indexOf(box.dataset.value);
        if (index > -1) {
          selectedCategories.splice(index, 1);
        }
      } else {
        if (selectedCategories.length < 4) {
          box.classList.add('selected');
          selectedCategories.push(box.dataset.value);
        }
      }
    });
  });

  
checkAnswerButton.addEventListener('click', checkAnswer);