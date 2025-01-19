document.getElementById('goButton').addEventListener('click', function() {
    const input = document.getElementById('arrayInput').value;
    const array = input.split(',').map(Number);
    const stepsDiv = document.getElementById('steps');
    stepsDiv.innerHTML = ''; // Clear previous steps

    // Shell Sort Algorithm
    const n = array.length;
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i++) {
            let temp = array[i];
            let j;
            for (j = i; j >= gap && array[j - gap] > temp; j -= gap) {
                array[j] = array[j - gap];
            }
            array[j] = temp;

            // Create a step box for the current state of the array
            const stepBox = document.createElement('div');
            stepBox.className = 'step-box';
            stepBox.innerHTML = `<p>Step with gap ${gap}: ${array.join(', ')}</p>`;
            stepsDiv.appendChild(stepBox);
        }
    }
});

document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('arrayInput').value = '';
    document.getElementById('steps').innerHTML = '';
});

document.getElementById('codeButton').addEventListener('click', function() {
    const codeSection = document.getElementById('codeSection');
    codeSection.style.display = codeSection.style.display === 'none' ? 'block' : 'none';
});

// Copy Code Functionality
document.getElementById('copyButton').addEventListener('click', function() {
    const codeBlock = document.getElementById('codeBlock');
    navigator.clipboard.writeText(codeBlock.textContent)
        .then(() => {
            alert('Code copied to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
}); 