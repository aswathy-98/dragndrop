const c1_c2 = new LeaderLine(
    document.getElementById('card1'),
    document.getElementById('card2'),
    {
        color: '#000',
        size: 3,
        startPlug: 'behind',
        endPlug: 'behind',
        path: 'grid'
    }
);
const c2_c3 = new LeaderLine(
    document.getElementById('card2'),
    document.getElementById('card3'),
    {
        color: '#000',
        size: 3,
        startPlug: 'behind',
        endPlug: 'behind',
        path: 'grid'
    }
);
const c2_c4 = new LeaderLine(
    document.getElementById('card2'),
    document.getElementById('card4'),
    {
        color: '#000',
        size: 3,
        startPlug: 'behind',
        endPlug: 'behind',
        path: 'grid'
    }
);   
   

   
 //////////////////////////////////////////  ENTITY 1
    
   
   function getItem1() {
        document.getElementById('item1').innerHTML = document.getElementById("e1").value;
        a=1;
    }
    function getItem2() {
        document.getElementById('item2').innerHTML = document.getElementById("e2").value;
        b=1;

    }
    function getItem3() {
        document.getElementById('item3').innerHTML = document.getElementById("e3").value;
        c=1;
    }
    function getItem4() {
        document.getElementById('item4').innerHTML = document.getElementById("e4").value;
        d=1;
    }
//////////////////////////////////////////////// ENTITY 2
    function getItem11() {
        document.getElementById('item11').innerHTML = document.getElementById("en1").value;
        e=1;
    }

    function getItem12() {
        document.getElementById('item12').innerHTML = document.getElementById("en2").value;
        f=1;
    } 

     function getItem13() {
         document.getElementById('item13').innerHTML = document.getElementById("en3").value;
         g=2;
     }

    function getItem14() {
        document.getElementById('item14').innerHTML = document.getElementById("en4").value;
        h=1;
    }
    //////////////////////////////////////////////////////////// ENTITY 3
    function getItem21() {
        document.getElementById('item21').innerHTML = document.getElementById("ent1").value;
        i=1;
    }
    function getItem22() {
        document.getElementById('item22').innerHTML = document.getElementById("ent2").value;
        j=1;
    }
    function getItem23() {
        document.getElementById('item23').innerHTML = document.getElementById("ent3").value;
        k=1;
    }
    
    function getItem24() {
        document.getElementById('item24').innerHTML = document.getElementById("ent4").value;
        l=1;
    }
///////////////////////////////////////////////////////////////// ENTITY 4
    function getItem31() {
        document.getElementById('item31').innerHTML = document.getElementById("enti1").value;
        m=1;
    }
    function getItem32(){
        document.getElementById('item32').innerHTML = document.getElementById("enti2").value;
        n=1;
    } 
    function getItem33(){
        document.getElementById('item33').innerHTML = document.getElementById("enti3").value;
        o=1;
    } 
    function getItem34(){
        document.getElementById('item34').innerHTML = document.getElementById("enti4").value;
        p=1;
    } 

/////////////////////////////////////////////////////////////////////////////////////
    function errored1() {

        document.getElementById("error1").innerHTML= "error occured currently check";

    }
    
    function ending() {
        if((a==1)&&(b==1)&&(c==1)&&(d==1)&&(e==1)&&(f<2)&&(g==1)&&(h==1)&&(i==1)&&(j==1)&&(k==1)&&(l==1))
        {
         alert("ER diagram validated succesfully");

        }
        else alert("Error: invalid input selected");



        if(f==2)
        {
            alert("error in table 2, revisit ");
        }

        
    }



    function printDiv()
    {
     var divContents=document.getElementById("tn").innerHTML;
     var printWindow = window.open();  
            printWindow.document.write('<html><head><title>Print DIV Content</title>');  
            printWindow.document.write('</head><body >');  
            printWindow.document.write(divContents);  
            printWindow.document.write('</body></html>');  
            printWindow.document.close();  
            printWindow.print();  
    }  
    
    function newDoc() {
        window.location.assign("index.html")
      }



      
      
/* function errored(){

    $(document).ready(function(){


    /* $('#email').on('focusout', function(){
    
        if($('#email').val() != ""){
    
            if(validateEmail($('#email').val())){
    
                $('.error').fadeOut('slow');
    
               }else{ */
       /*  document.getElementById("email").innerHTML =$('.error').text('Invalid Email...!');
        $('.error').fadeIn('slow');
          /*      }
    
            }else{
                $('.error').text('Email Required..!');
                $('.error').fadeIn("slow");
            }
    
    
    
        }); */
    
  /*   });
    
} */


$('#error3').click(function (){
    /* var s = document.getElementById('email');
    s.opacity = 1;
    (function fade(){(s.opacity-=.1)<0?s.display="none":setTimeout(fade,900)})(); */

    document.getElementById("pop").innerHTML= "error occured currently check";
    $('#pop').fadeOut(5000);

});
