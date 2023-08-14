var cl = console.log;
const loginform = document.getElementById('loginform')
const emailcontrol= document.getElementById('email');
const passworldcontrol = document.getElementById('passworld');

let blogs=[
    {
        email:"independenceday",
        passworld:"independenceday"
    }
]

const onLoginform=(eve)=>{
    eve.preventDefault();
    setTimeout(()=>{
    let emailvalue = emailcontrol.value;
    let passworldvalue = passworldcontrol.value;



    
    let isemailExit


    blogs.forEach(acc=>{
        if(emailvalue === acc.email){
            isemailExit=acc;
        }
        else{
         
            Swal.fire({
              imageUrl: 'https://media.istockphoto.com/id/513231275/photo/depressed-3d-man-sitting-on-white.jpg?s=612x612&w=0&k=20&c=kvFZI-tQUAajOjQnU-9GRsvB3UoKoObrfVloIugAXSI=',
              imageHeight: 500,
              imageAlt: 'Username is Wrong',
              title:"Something Went Wrong !!!!",
              timer:3000,
            })
        }
       
    })

    cl(isemailExit)

    if(isemailExit){
        //ckeckpassworld
        if(isemailExit.passworld === passworldvalue){
            teamplating()
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Passworld is not matched !!!!!!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
              
        }
        

        teamplating()
    }
    
    loginform.reset()
       
   
    },3000)

}

function teamplating(){
    // cl('Dashboard is loaded')
    window.location.href=`dasehedboard.html`;
    
}






loginform.addEventListener('submit',onLoginform)




