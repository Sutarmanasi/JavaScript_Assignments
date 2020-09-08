function validation(){
    var firstName=document.forms["createAccount"]["firstname"].value;
    var surName=document.forms["createAccount"]["surname"].value;
    var email=document.forms["createAccount"]["emailphn"].value;
    var password=document.forms["createAccount"]["password1"].value;

    if(firstName===''){
        document.getElementById('err1').style.display='block';
    }else{
        document.getElementById('err1').style.display='none';
        
    }

    if(surName===''){
        document.getElementById('err2').style.display='block';
    }else{
        document.getElementById('err2').style.display='none';
        
    }

    if(email===''){
        document.getElementById('err3').style.display='block';
    }else{
        document.getElementById('err3').style.display='none';
        
    }

    if(password===''){
        document.getElementById('err4').style.display='block';
    }else{
        document.getElementById('err4').style.display='none';
        
    }
    return false;
    
}