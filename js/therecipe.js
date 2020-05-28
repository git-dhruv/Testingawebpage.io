/*
background-image: url('https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068220_960_720.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

*/
var cat_new;

console.log('Yourmom')
function displaytext(img){
	img.style.background='url('+img.src+')';
	img.style.filter = 'blur(2px)';
	img.title = img.alt;
	document.getElementById(img.id+'_caption').style.display='block'
}

function hidetext(img)
{
	img.style.background='url('+img.src+')';
	img.style.filter = '';
	img.title = img.alt;
	document.getElementById(img.id+'_caption').style.display='none'
}
function showbutton(cat)
{
	document.getElementById('submit').style.display = 'block';
	cat_new = cat;
}
function givesuggestion(){
	console.log(cat_new)
	if(window.FileReader){
		alert('Done')
	}
	else{
		alert('File Reader is not supported! Use another Browser')
	}
}
