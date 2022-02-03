


//add new note pad
const addBtn = document.getElementById('add');/*grab the button with the ID add*/
addBtn.addEventListener('click', () => addNewNote())

function addNewNote(text = '') {
    const note = document.createElement('div')
    note.classList.add('note')

    note.innerHTML = `
 <div class="tools">
    <button class="delete">delete</button>
</div>
    <textarea placeholder="Make a note"></textarea>
</div>
    `

//Button CRUD
    const deleteBtn = note.querySelector('.delete');



    deleteBtn.addEventListener('click', () => {
        note.remove()
    });

document.body.appendChild(note)
}

