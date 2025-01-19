document.getElementById('goButton').addEventListener('click', function() {
    const input = document.getElementById('arrayInput').value;
    const array = input.split(',').map(Number);
    const stepsDiv = document.getElementById('steps');
    stepsDiv.innerHTML = ''; // Clear previous steps

    // Quick Sort Algorithm
    function quickSort(arr, left, right) {
        if (left < right) {
            const pivotIndex = partition(arr, left, right);
            quickSort(arr, left, pivotIndex - 1);
            quickSort(arr, pivotIndex + 1, right);
        }
        return arr;
    }

    function partition(arr, left, right) {
        const pivot = arr[right];
        let i = left - 1;
        for (let j = left; j < right; j++) {
            if (arr[j] < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
        return i + 1;
    }

    quickSort(array, 0, array.length - 1);

    // Display the sorted array
    stepsDiv.innerHTML = `<p>Sorted array: ${array.join(', ')}</p>`;
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