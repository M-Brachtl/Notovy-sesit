const noteSpaces = document.querySelectorAll('.noteSpace');
const letterBtns = document.querySelectorAll('.letter'); // C,D,E,F,G,A,H
const startC = 54; // C4 in px
const octaveChange = 36;
const singleNote = 5;
const noteNames = ['C', 'D', 'E', 'F', 'G', 'A', 'H'];
const octaveInput = document.querySelector('#octaveNum');

let currentLetter = ''; // change to empty string

noteSpaces.forEach(noteSpace => {
    noteSpace.addEventListener('click', () => {
        // don't care about octave for now
        console.log("noteSpace clicked");
        const note = document.createElement('div');
        note.classList.add('note');
        note.innerText = currentLetter;
        noteSpace.appendChild(note);
        note.style.top = `${startC - noteNames.indexOf(currentLetter) * singleNote - (Number(octaveInput.value)-4) * octaveChange }px`;
    });
});

letterBtns.forEach(letterBtn => {
    letterBtn.addEventListener('click', () => {
        currentLetter = letterBtn.innerText === currentLetter ? '' : letterBtn.innerText;
        console.log(currentLetter);
        letterBtn.style.backgroundColor = currentLetter ? 'red' : '';
        letterBtns.forEach(btn => {
            if (btn !== letterBtn) {
                btn.style.backgroundColor = '';
            }
        });
    });
});