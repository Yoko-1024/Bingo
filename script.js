const lst=[];
for (var i = 0; i < 75; i++){
    lst[i]=i+1;
}               

var roulette;
var random;
var a;
var count=75;   
var number=0; 
function start(){
    
    var btn =document.getElementById('button');
    
    if(count>0){
        if(btn.textContent=='start'){
            btn.textContent='stop';
            roulette=setInterval(function(){
            random=Math.floor(Math.random()*count);
            document.getElementById('roulette').innerHTML=lst[random];
            },10);   
        }else{
            btn.textContent='start';
            clearInterval(roulette);
            a=random;
            var list=document.createElement('li');
            list.textContent=lst[a];
            document.getElementById('number').appendChild(list);
            lst.splice(a,1);
            if(count>0){
                count--;
            }
            number++;
            document.getElementById('count').innerHTML=number+'/75';        
        }
    }else{
        document.getElementById('roulette').innerHTML='終了';
        btn.textContent='finish';
    }
}
