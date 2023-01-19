



let n = 5;
let star = "";

for( i=1; i<=n; i++  ){

    for( j=n; j>i; j-- ){

        star += " " ;


    }

    for( k=0; k<i*2-1; k++  ){
        star += "*" ;


    }

    star +="\n"


}


for( i=1; i<=n-1; i++  ){

    for( j=0; j<i; j++ ){

        star += " " ;


    }

    for( k=(n-i) * 2-1; k>0; k-- ){

        star += "*"


    }

    star += "\n" ;

}

console.log(star);




