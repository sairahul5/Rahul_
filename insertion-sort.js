document.getElementById('goButton').addEventListener('click', function() {
    const input = document.getElementById('arrayInput').value;
    const array = input.split(',').map(Number);
    const stepsDiv = document.getElementById('steps');
    stepsDiv.innerHTML = ''; // Clear previous steps

    // Insertion Sort Algorithm
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;

        // Create a step box for the current state of the array
        const stepBox = document.createElement('div');
        stepBox.className = 'step-box';
        stepBox.innerHTML = `<p>Step ${i}: ${array.join(', ')}</p>`;
        
        // Add an arrow to indicate movement
        const arrow = document.createElement('div');
        arrow.className = 'arrow';
        arrow.innerHTML = '⬇️'; // You can use any arrow character or icon
        stepBox.appendChild(arrow);
        
        stepsDiv.appendChild(stepBox);
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