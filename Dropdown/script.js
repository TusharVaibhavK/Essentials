document.addEventListener('DOMContentLoaded', function () {
    const dropdownList = document.getElementById('dropdownList');
    const newOptionInput = document.getElementById('newOption');
    const addOptionButton = document.getElementById('addOption');
    const removeOptionButton = document.getElementById('removeOption');
  
    addOptionButton.addEventListener('click', function () {
      const newOptionValue = newOptionInput.value.trim();
      if (newOptionValue !== '') {
        const newOption = document.createElement('option');
        newOption.value = newOptionValue;
        newOption.textContent = newOptionValue;
        dropdownList.appendChild(newOption);
        newOptionInput.value = '';
      }
    });
  
    removeOptionButton.addEventListener('click', function () {
      const selectedIndex = dropdownList.selectedIndex;
      if (selectedIndex !== -1) {
        dropdownList.remove(selectedIndex);
      }
    });
  });
  