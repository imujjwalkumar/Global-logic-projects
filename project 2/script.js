function check(){
    let phone=document.getElementById('phone').value
    let postcode=document.getElementById('postcode').value
    let email=document.getElementById('email').value
    let button=document.getElementById('button').value
    email+=" "
    let len=email.length

    
    if(!(email.substring(len-3,len-1)=="in" || email.substring(len-4,len-1)=="com" || email.substring(len-7,len-1)=="com.au" ))

    return alert("wrong email")

    if(!(phone[0]==0 && phone.length>=9 && phone.length<=10))
    return alert("wrong phn no")

    if(!(postcode.length==4))
    return alert("wrong post code")

    var recaptcha_response = '';
   
    function verifyCaptcha(token) {
        recaptcha_response = token;
    }

    if(recaptcha_response.length == 0) {
        return alert("invalid captcha");
    }        
}