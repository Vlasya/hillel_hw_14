// В документе имеем иерархию ul.root>li*3>ul>li*5 (emmet pattern https://docs.emmet.io/abbreviations/syntax/)
// Написать скрипт, который добавит класс `last` всем последним li в группах.
// Написать функцию setFirstItemClassName(level), где level - это номер уровня вложенности, в котором нужно произвести изменения. Функция setFirstItemClassName должна установить первому тегу группы - класс `first-item`
// при добавлении классов - должен изменится цвет фона на красный(first) и зеленый(last), с анимацией - задержка 2 секунды


// Написать скрипт, который добавит класс `last` всем последним li в группах.
function addLastClass(){
	let lastLi=document.querySelectorAll('ul>li:last-child')
		if(lastLi){
			lastLi.forEach(function(el){
				el.classList.add('last')
			})
		}	
}
	
setTimeout(function(){
	addLastClass()
},2000)


// Написать функцию setFirstItemClassName(level), где level - это номер уровня вложенности, в котором нужно произвести изменения. Функция setFirstItemClassName должна установить первому тегу группы - класс `first-item`

let firstUl=document.querySelector('ul.root')

function setFirstItemClassName(level,ourUl){
	let childElements =[...ourUl.children]
	if(level>0){
		if(ourUl.children.length>0){
			childElements.map(elem =>{
				if(elem.children){
					setFirstItemClassName(level-1,elem)
				}
				return elem
			})
		}
	}else if(level===0){
		ourUl.firstElementChild.classList.add('first-item')
	}
}


setTimeout(function(){
	setFirstItemClassName(1,firstUl)
},2000)


// По второму заданию. Я поняла это так,что нужно найти уровень,а затем его первый элемент покрасить







