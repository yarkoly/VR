console.clear()

var links = document.querySelector('#links'),
		enter = document.querySelector('#enter-group');

console.log(enter); 

hideEntity = function(){ 
	enter.emit('zoom');
	links.emit('move');
}


// Register component //
// AFRAME.registerComponent('hide-enter-on-click', {
//   schema: {default: ''},
//   init() {
//     const enter = document.querySelector('.enter');
    
//     this.el.addEventListener('click', () => {
//       enter.setAttribute('src', this.data);
//     });
//   }
// });