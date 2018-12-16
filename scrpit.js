   var imgArray = new Array();

         
         imgArray[0] = 'image/image4.jpg';
          imgArray[1] = 'image/image2.jpg';
          imgArray[2] = 'image/image3.jpg';
          imgArray[3] = 'image/image1.jpg';
          imgArray[4] = 'image/image5.jpg';
          imgArray[5] = 'image/image2.jpg';
          imgArray[6] = 'image/image1.jpg';
          imgArray[7] = 'image/image3.jpg';
          imgArray[8] = 'image/image2.jpg';
          imgArray[9] = 'image/image5.jpg';
         imgArray[10] = 'image/image1.jpg';
          
          
  
    function getItems(page) {
  var req = new XMLHttpRequest();

  req.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
   
      var character = JSON.parse(this.responseText);
      for (var i = 1; i < character.length; i++) {
        
          
    var container = document.getElementById("cardContainer");
    var colCard = document.createElement("div")
    colCard.className= "col-md-4 "
     
   var cards = document.createElement("div");
    cards.className="card mb-2";
    cards.setAttribute("id",i)

     
     
    var img = document.createElement("img");
         img.setAttribute("src", imgArray[i])
        img.className="card-img-top img-responsive"; 
        img.style.height = "250px"
          
        
    
          
   var cardBody= document.createElement("div")      
   
   cardBody.className="card-body"
   
   var name = document.createElement("h3");
    name.className="card-title"
    name.textContent="Name:" +character[i].name;
    var gender = document.createElement("h3");
    gender.className="card-title"
    gender.textContent="Gender:"+ character[i].gender;
    
    var centerBlock = document.createElement("div")
    centerBlock.className= "text-center"
    var btn = document.createElement("button");
    btn.textContent="Select";  
    btn.className="btn btnOff btn-success center-block btn-lg  "
    
    
    
    centerBlock.appendChild(btn)
     
    
    cardBody.appendChild(name);
    cardBody.appendChild(gender);
    
    cards.appendChild(img);      
    cards.appendChild(cardBody)      
    cards.appendChild(centerBlock);
    
    colCard.appendChild(cards);
    container.appendChild(colCard);

          
  // creating a rwo for every thrid cols   
          
           
           
 // Selcting two cards       
 var count = 0;         
 btn.addEventListener('click', function (event) {
  var selectedCard = event.target;
  if (selectedCard.className === 'card') {
   return; 
  }
   
     if (selectedCard.class=="btnOn")
	{
		selectedCard.class="btnOff";
		btn.setAttribute("class","btnOff");
         selectedCard.innerHTML="Select"
		count--;
		return false;
	}
 
	if (count<2)
	{
        
        selectedCard.class="btnOn";
		selectedCard.setAttribute("class","btnOn");
         selectedCard.innerHTML="Play"
		count++;
       
       
	}
     
     else{
         alert('Not allowed beyond limit, deselect other button');
 		return false;
     }
     
     
         
})       
   
 
 
 
 
 
 
 
 
 
 
 
 
 
 
   }        
    
          }
        }          
  req.open("GET", "https://www.anapioficeandfire.com/api/characters?page=2&pageSize=11");
  req.send();
};


  getItems()
