//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    // Create an array of 3 promises with random delays between 1 and 3 seconds
    const createPromise = (promiseName) => {
        const delay = Math.floor(Math.random() * 3) + 1; // Random delay between 1 and 3 seconds
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(delay);
            }, delay * 1000);
        });
    };

    // Create three promises
    const promise1 = createPromise('Promise 1');
    const promise2 = createPromise('Promise 2');
    const promise3 = createPromise('Promise 3');
    
    // Get the table body element
    const tableBody = document.getElementById('table-body');
    const loadingText = document.getElementById('loading-text');

    // Wait for all promises to resolve
    Promise.all([promise1, promise2, promise3])
        .then(results => {
            // Remove loading text and populate the table with results
            loadingText.style.display = 'none'; // Hide loading text
            
            const totalTime = results.reduce((acc, time) => acc + time, 0).toFixed(3);

            // Create rows for each promise result
            results.forEach((time, index) => {
                const row = document.createElement('tr');
                const promiseCell = document.createElement('td');
                const timeCell = document.createElement('td');
                promiseCell.textContent = `Promise ${index + 1}`;
                timeCell.textContent = time;
                row.appendChild(promiseCell);
                row.appendChild(timeCell);
                tableBody.appendChild(row);
            });

            // Add the total row
            const totalRow = document.createElement('tr');
            const totalLabelCell = document.createElement('td');
            const totalTimeCell = document.createElement('td');
            totalLabelCell.textContent = 'Total';
            totalTimeCell.textContent = totalTime;
            totalRow.appendChild(totalLabelCell);
            totalRow.appendChild(totalTimeCell);
            tableBody.appendChild(totalRow);
        });
});
