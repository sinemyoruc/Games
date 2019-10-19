
let cell  =  document.getElementsByClassName("cell");
let cellxy = [[1,2,3,4] , [1,2,3,4] , [1,2,3,4], [1,2,3,4]];
var i=0;
function f() {

    var sayac = 0 ;
    for(var j = 0; j< Math.sqrt(cell.length)  ; j++)
    {
        for (var k= 0 ; k<Math.sqrt(cell.length) ; k++){
            cellxy[j][k] = cell[sayac] ;
            sayac++ ;
        }


    }

}

function renk(x ,y ) {
    for(var i = 0 ;i<4 ; i++)
    {
        for(var j = 0 ; j<4 ; j++)
        {
            if(x === i || y === j){
                if(cellxy[i][j].style.backgroundColor ===  "rgb(77, 182, 172)" ) {
                    cellxy[i][j].style.backgroundColor = "white";
                    
                }else{
                    cellxy[i][j].style.backgroundColor = "rgb(77, 182, 172)" ;
                }
            }

        }
    }


}

