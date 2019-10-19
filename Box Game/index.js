
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
    for(var i = 0 ;i<cell.length ; i++)
    {
        for(var j = 0 ; j<cell.length ; j++)
        {
            if(x == i || y == j){
                if(cellxy[i][j].style.backgroundColor ==  "red" ) {
                    cellxy[i][j].style.backgroundColor = "white";
                }else{
                    cellxy[i][j].style.backgroundColor = "red" ;
                }
            }

        }
    }


}

