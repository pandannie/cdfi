let text =document.querySelector('.text')
	text.onmouseover= function() {
		text.innerHTML.style.backgroundColor='red'
	}



function catsMeow(animal) {
message = animal + 'Cat can also meows and make human do things for them :)'
console.log(message)
return message
}

catsMeow('Capybara')