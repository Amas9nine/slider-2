let $Forimg = document.querySelector(`body`)
let $button = document.querySelector(`button`)
let index = 0
$button.addEventListener(`click`,function(){
	if(index == 5){
			index=0
$Forimg.classList.remove(`f${5}`)
	}
index++
$Forimg.classList.add(`f${index}`)
$Forimg.classList.remove(`f${index-1}`)
$Forimg.insertAdjacentHTML(`beforeend`,
`
<body>

</body>
`
)
})



