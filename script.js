const boxes = document.querySelectorAll('.box');
const checkAnswerButton = document.getElementById('check-answer');
const result = document.querySelector('.result');

let selectedCategories = [];

boxes.forEach(box => {
    box.addEventListener('click', () => {
        if (selectedCategories.length < 4) {
            box.style.backgroundColor = '#007bff';
            box.style.color = '#fff';
            selectedCategories.push(box.dataset.category);
        }
    });
});

checkAnswerButton.addEventListener('click', () => {
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
    } else {
        result.textContent = 'Please select 4 players with a common characteristic.';
        result.style.color = '#ff0000';
    }
});