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
var lists;
function parse(){
Papa.parse('https://raw.githubusercontent.com/git-dhruv/Testingawebpage.io/master/recipe_data.csv', {
  download:true,
  skipEmptyLines:'greedy',
  header:true,
  complete: function(results) {
  suggest(results.data);
  }
  });
}

function suggest(data)
{
	var recipe_index=[];
	var suggest_index;
	console.log(data)
	console.log(cat_new)
	for(i=0;i<data.length;i++)
	{
		let [index,cat,name] = Object.entries(data[i])
		if(cat_new==cat[1])
		{
		console.log(name[1])
		recipe_index.push(index[1])
		}
	}
	suggest_index = getRndInteger(0,recipe_index.length);
	console.log(recipe_index)
	for(i=0;i<data.length;i++)
	{
		let [index,cat,name] = Object.entries(data[i]);
		if(index[1]==suggest_index)
		{
			console.log(name[1]);
			document.getElementById('submit').style.display = 'block';
			document.getElementById('ans').innerHTML = name[1];
		}
	}
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
/*
complete: function(results) {
    window.lists = results.data;
	console.log(window.lists);
  }
});*/
