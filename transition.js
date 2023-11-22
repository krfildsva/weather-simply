const blocks = document.querySelectorAll('.footblock');

function handleButtonHover(event) {
    const block = event.currentTarget;

    if (event.type === 'mouseover') {
        block.style.backgroundColor = '#d76e7c';
        block.style.transform = 'scale(1.2)';
        block.style.color = '#ffffff';
    } else if (event.type === 'mouseout') {
        block.style.backgroundColor = '#E38899';
    block.style.transform = 'scale(1)';
    block.style.color = '#fff';
    }
}

blocks.forEach((block) => {
    block.addEventListener('mouseover', handleButtonHover);
    block.addEventListener('mouseout', handleButtonHover);
});

function myFunction(x) {
    x.classList.toggle("change");
  }