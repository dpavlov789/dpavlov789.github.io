
function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#C6C6C6', '#025B58', controlSlider);
    if (from > to) {
        fromSlider.value = to;
        fromInput.value = to;
    } else {
        fromSlider.value = from;
    }
}
    
function controlToInput(toSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#C6C6C6', '#025B58', controlSlider);
    setToggleAccessible(toInput);
    if (from <= to) {
        toSlider.value = to;
        toInput.value = to;
    } else {
        toInput.value = from;
    }
}

function controlFromSlider(fromSlider, toSlider, fromInput) {
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, '#C6C6C6', '#025B58', toSlider);
  if (from > to) {
    fromSlider.value = to;
    fromInput.value = to;
  } else {
    fromInput.value = from;
  }
}

function controlToSlider(fromSlider, toSlider, toInput) {
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, '#C6C6C6', '#025B58', toSlider);
  setToggleAccessible(toSlider);
  if (from <= to) {
    toSlider.value = to;
    toInput.value = to;
  } else {
    toInput.value = from;
    toSlider.value = from;
  }
}

function getParsed(currentFrom, currentTo) {
  const from = parseInt(currentFrom.value, 10);
  const to = parseInt(currentTo.value, 10);
  return [from, to];
}

function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max-to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
      ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
      ${rangeColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} 100%)`;
}

function setToggleAccessible(currentTarget) {
  const toSlider = document.querySelector('#toSlider');
  if (Number(currentTarget.value) <= 0 ) {
    toSlider.style.zIndex = 2;
  } else {
    toSlider.style.zIndex = 0;
  }
}

const fromSlider = document.querySelector('#fromSlider');
const toSlider = document.querySelector('#toSlider');
const fromInput = document.querySelector('#fromInput');
const toInput = document.querySelector('#toInput');
fillSlider(fromSlider, toSlider, '#C6C6C6', '#025B58', toSlider);
setToggleAccessible(toSlider);

fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
fromInput.oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);


document.getElementById('current-year').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', function() {
      // Initialize all custom selects
      const customSelects = document.querySelectorAll('.custom__select');
      
      customSelects.forEach(select => {
          const selectedDiv = select.querySelector('.select__selected');
          const itemsDiv = select.querySelector('.select__items');
          const listItems = itemsDiv.querySelectorAll('li');
          
          // Toggle dropdown on click
          selectedDiv.addEventListener('click', function() {
              // Close other open dropdowns
              document.querySelectorAll('.select__items.active').forEach(active => {
                  if (active !== itemsDiv) {
                      active.classList.remove('active');
                      active.previousElementSibling.classList.remove('active');
                  }
              });
              
              // Toggle current dropdown
              itemsDiv.classList.toggle('active');
              selectedDiv.classList.toggle('active');
          });
          
          // Handle item selection
          listItems.forEach(item => {
              item.addEventListener('click', function() {
                  // Update selected text
                  selectedDiv.textContent = this.textContent;
                  
                  // Remove selected class from all items
                  listItems.forEach(li => li.classList.remove('selected'));
                  
                  // Add selected class to clicked item
                  this.classList.add('selected');
                  
                  itemsDiv.classList.remove('active');
                  selectedDiv.classList.remove('active');
                  
                  const selectedValue = document.getElementById('selectedValue');
                  selectedValue.textContent = `${selectedDiv.textContent} (Value: ${this.getAttribute('data__value')})`;
              });
          });
      });
      
      // Close dropdown when clicking outside
      document.addEventListener('click', function(event) {
          if (!event.target.closest('.custom-select')) {
              document.querySelectorAll('.select-items.active').forEach(active => {
                  active.classList.remove('active');
                  active.previousElementSibling.classList.remove('active');
              });
          }
      });
  });