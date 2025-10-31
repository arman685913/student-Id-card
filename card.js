//set ver
const  sname = document.getElementById('sname');
const  sdep = document.getElementById('sdep');
const  sroll = document.getElementById('sroll');
const  sses = document.getElementById('sses');
const  ssem = document.getElementById('ssem');
const  sshift = document.getElementById('sshift');
const  fsname = document.getElementById('fsname');
const  msname = document.getElementById('msname');
const  sbg = document.getElementById('sbg');
const  sdate = document.getElementById('sdate');
const  svl = document.getElementById('svl');
const  spO = document.getElementById('spO');
const  sup = document.getElementById('sup');
const  sdist = document.getElementById('sdist');
const  sphone = document.getElementById('sphone');

const idPhoto = document.getElementById('idPhoto');



// <!-- QR Code Script -->
function updateQRCode() {
    const student = {
        name: document.getElementById('sname').innerText,
        dep: document.getElementById('sdep').innerText,
        roll: document.getElementById('sroll').innerText,
        shift: document.getElementById('ssem').innerText,
        shift: document.getElementById('sshift').innerText,
    };

const qrcode = JSON.stringify(student);
const qrContainer = document.getElementById("qrcode");
qrContainer.innerHTML = "";

new QRCode(qrContainer, {
    text: qrcode,
    width: 64,
    height: 64
  });
  
}

//get data

window.addEventListener('DOMContentLoaded', () =>{

    const savedPhoto = localStorage.getItem('studentPhoto');
    if (savedPhoto) {
    idPhoto.src = savedPhoto;    
    }

    sname.innerText = localStorage.getItem('names');     
    sdep.innerText = localStorage.getItem('dep');     
    sroll.innerText = localStorage.getItem('roll');     
    sses.innerText = localStorage.getItem('ses');     
    ssem.innerText = localStorage.getItem('sem');     
    sshift.innerText = localStorage.getItem('shift');     
    fsname.innerText = localStorage.getItem('fname');     
    msname.innerText = localStorage.getItem('mname');     
    sbg.innerText = localStorage.getItem('bg');     
    sdate.innerText = localStorage.getItem('date');     
    svl.innerText = localStorage.getItem('vl');          
    spO.innerText = localStorage.getItem('pO');     
    sup.innerText = localStorage.getItem('up');     
    sdist.innerText = localStorage.getItem('dist');
    sphone.innerText = localStorage.getItem('phone');
    updateQRCode();
});
