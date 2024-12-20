const addItemForm = document.getElementById('addItemForm');
const itemInput = document.getElementById('itemInput');
const itemList = document.getElementById('itemList');

addItemForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const newItemText = itemInput.value.trim();
    if (newItemText) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${newItemText} <button class="remove">Remove</button>`;

        const removeButton = listItem.querySelector('.remove');
        removeButton.addEventListener('click', function() {
            itemList.removeChild(listItem);
        });

        itemList.appendChild(listItem);
        itemInput.value = '';
    }
});
