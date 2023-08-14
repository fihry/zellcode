
function Fihry(){
   const myCheck = document.getElementById('myCheck');
   const change = document.getElementById('change');
if(myCheck!=true){
   change.style.display='block';}
   if (change!=myCheck){
      myCheck.style.visibility="hidden";}
}
function Fihrynone(){
   const nonebox =document.getElementById('nonebox');
   const change = document.getElementById('change');
   const myCheck = document.getElementById('myCheck');

   if(myCheck!=nonebox){
      change.style.display='none';}
      if (myCheck!=nonebox){
         myCheck.style.visibility="visible";}
}
//login form//
function login(){
   const lf =document.getElementById('loginform');
   const l = document.getElementById('login');
   const Su =document.getElementById('Sing-up');
   const na =document.getElementById('new-acount');
   
   if (lf!=true){l.style.visibility="visible"; }
   
}
function loginnone(){
   const cf = document.getElementById('close-form');
   const l = document.getElementById('login');
   const Su =document.getElementById('Sing-up');
   if(cf!=true){
   Su.style.visibility="hidden";
   }
   if(cl=>true){
   l.style.visibility="hidden";
   }
}
function change1(){
   const na =document.getElementById('new-acount');
   const l = document.getElementById('login');
   const Su =document.getElementById('Sing-up');
   if (na!=true){
      l.style.visibility="hidden";
      Su.style.visibility="visible";  
   }

}
function change2(){
   const la =document.getElementById('login-acount');
   const l = document.getElementById('login');
   const Su =document.getElementById('Sing-up');

   if (la!=true){
      l.style.visibility="visible";
      Su.style.visibility="hidden" ; 
   }

}
