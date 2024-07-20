i = 0
while(i < 10)
{
    i++  // the position of incrementation impacts the flow of the iteration
    console.log("i =", i)
}

n=0
for(j=0; j<=100; j++){
    if(j%2==0 || j%5 == 0){
        if(j%3 == 0) continue
        console.log(j)
        n++
        if(n == 10) break
    }
}