//your JS code here. If required.
let selected = document.querySelector(`#colorSelect`)
let button = document.querySelector(`.button`)
       button.addEventListener(`click`, remove)

function remove() {
	   if(selected.selectedIndex !== -1){
		   selected.remove(selected.selectedIndex)
	   }
	}