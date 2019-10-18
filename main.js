
//Main
const SIZE = 5;

var gallery = createBlankPieceArray(SIZE);

//PIECE 1
gallery[0].name = "A Flickering Spotlight";
gallery[0].price = 765;
gallery[0].image = "pictures/A Flickering Spotlight.jpg";

//PIECE 2
gallery[1].name = "A Goat Looking Left";
gallery[1].price = 755;
gallery[1].image = "pictures/A Goat Looking Left.jpg";

//PIECE 3
gallery[2].name = "Around the Forest";
gallery[2].price = 700;
gallery[2].image = "pictures/Around the Forest.jpg";

//PIECE 4
gallery[3].name = "Boon";
gallery[3].price = 800;
gallery[3].image = "pictures/Boon.jpg";

//PIECE 5
gallery[4].name = "Down the River";
gallery[4].price = 900;
gallery[4].image = "pictures/Down the River.jpg";

//Load data into HTML Document 
for(i = 0; i < SIZE; i++)
{
    let curr_name = "img" + (i+1);
    document.getElementById(curr_name).src=gallery[i].image;
}
//document.getElementById("mainImage").src=gallery[0].image;


//jQuery Triggers
$(document).ready(function()
{

    $('#imageBar img').on(
    {
        mouseover : function()
        {
            $(this).css(
            {
                'cursor':'pointer',
                'border-Color': 'red'
            });

            var imageURL = $(this).attr('src');
            $('#mainImage').fadeOut(0.1);
            $('#mainImage').fadeIn(700);
            $('#mainImage').attr('src', imageURL);
            
        },

        mouseout : function()
        {
            $(this).css(
            {
                'cursor':'default',
                'border-Color':'gray'
                
            });
        },

        click: function()
        {
            var imageURL = $(this).attr('src');
            var imgNum = findFromURL(imageURL);
            var pieceInfo = "Title: " + gallery[i].name + " ----- Price: $" + gallery[i].price;

            //document.getElementById("infoBox").innerHTML=pieceInfo;

            var $div2 = $("#infoBox");
            $div2.text(pieceInfo);
            setTimeout(function() {
                $div2.text("Click a Thumbnail for information");
            }, 5000);
            
        }


    });


});

//Parameters: String of an imageURL present in the pictures file
//Output: gallery array index location of the picture url
//Invariant: gallery array must exist and be globally accessable, string of imageURL is valid
function findFromURL(imageURL)
{
    var detected = false;
    for(i = 0; i < SIZE; i++)
    {
        if(gallery[i].image == imageURL)
            return i;
    }
    
}

//Parameters: integer of how many elements in the gallery array
//Output: Pointer(?) to an array of objects
//Invariants: none
function createBlankPieceArray(quantity)
{
    var array = new Array();
    for(i = 0; i < quantity; i++)
    {
        let piece = new Object();
            piece.name = "piece" + i;
            piece.price = 0;
            piece.image = "image here";
        array.push(piece);  
    }
    return array;
}
