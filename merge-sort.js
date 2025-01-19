document.getElementById('goButton').addEventListener('click', function() {
    const input = document.getElementById('arrayInput').value;
    const array = input.split(',').map(Number);
    const stepsDiv = document.getElementById('steps');
    stepsDiv.innerHTML = ''; // Clear previous steps

    // Merge Sort Algorithm
    function mergeSort(arr) {
        if (arr.length <= 1) return arr;

        const mid = Math.floor(arr.length / 2);
        const left = mergeSort(arr.slice(0, mid));
        const right = mergeSort(arr.slice(mid));

        return merge(left, right);
    }

    function merge(left, right) {
        const result = [];
        let i = 0, j = 0;

        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }

        return result.concat(left.slice(i)).concat(right.slice(j));
    }

    const sortedArray = mergeSort(array);
    stepsDiv.innerHTML = `<p>Sorted array: ${sortedArray.join(', ')}</p>`;
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