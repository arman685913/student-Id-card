//logput btn
document.getElementById('logout').addEventListener('click', () => {
    window.open('index.html','_blank')
})

const names = document.getElementById('name');
const dep = document.getElementById('dep');
const roll = document.getElementById('roll');
const ses = document.getElementById('ses');
const sem = document.getElementById('sem');
const shift = document.getElementById('shift');
const phone = document.getElementById('phone');
const fname = document.getElementById('fname');
const mname = document.getElementById('mname');
const bg = document.getElementById('bg');
const date = document.getElementById('date');
const vl = document.getElementById('vl');
const pO = document.getElementById('pO');
const up = document.getElementById('up');
const dist = document.getElementById('dist');

const photoInput = document.getElementById('photoInput');


const downloadBtn2 = document.getElementById('download2');
const downloadBtn = document.getElementById('download');

//photo
photoInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file){
        const reader = new FileReader();
        reader.onload = function(e) {
            localStorage.setItem('studentPhoto', e.target.result);
        };
        reader.readAsDataURL(file);
    }
}
);

// generateBtn btn
document.getElementById('generateBtn').addEventListener('click', () =>{
    const inputs = [names, dep, roll, ses, shift, phone, fname, mname, bg, date, vl, pO, up, dist];
    const allFilled = inputs.every(input => input.value.trim() != ''); 
    if(allFilled){
        localStorage.setItem('names', names.value);     
        localStorage.setItem('dep', dep.value);     
        localStorage.setItem('roll', roll.value);     
        localStorage.setItem('ses', ses.value);     
        localStorage.setItem('sem', sem.value);     
        localStorage.setItem('shift', shift.value);     
        localStorage.setItem('phone', phone.value);     
        localStorage.setItem('fname', fname.value);     
        localStorage.setItem('mname', mname.value);     
        localStorage.setItem('bg', bg.value);     
        localStorage.setItem('date', date.value);     
        localStorage.setItem('vl', vl.value);     
        localStorage.setItem('pO', pO.value);     
        localStorage.setItem('up', up.value);     
        localStorage.setItem('dist', dist.value);
        
        document.getElementById('generateBtn').classList.add('hidden');

        document.getElementById('downloadM').classList.remove('hidden');
        document.getElementById('downloadM').classList.add('inline');
        
        downloadBtn.removeAttribute('disabled');
        downloadBtn2.removeAttribute('disabled');
        alert('Generate Id Card Successfully');
    } else{
        alert('Please fill all required fields!');
    }
})

