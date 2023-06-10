let result = document.querySelector('.counter__result');
let k = [1.2, 1.375, 1.55, 1.725, 1.9];
function getActivity(){
    let radios_group = document.querySelectorAll('ul.radios-group li div input');
    for (let i = 0; i < radios_group.length; i++) {
        if (radios_group[i].checked) {
            return k[i];
        }
    }
    return 0;
}
function getResult(){
    let age = document.getElementById('age').value;
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    let maleGender = document.querySelector('ul.switcher li input');
    let N = 0;
    if(maleGender.checked){
        N = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    }
    else{
        N = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
    let activity = getActivity();
    let weightMaintenancet = N * activity;
    let weightGain = weightMaintenancet * 1.15;
    let weightLoss = weightMaintenancet * 0.85;
    document.getElementById('calories-norm').innerHTML = Math.round(weightMaintenancet);
    document.getElementById('calories-minimal').innerHTML = Math.round(weightLoss);
    document.getElementById('calories-maximal').innerHTML = Math.round(weightGain);
    result.classList.remove('counter__result--hidden');
}
let submit_button = document.querySelector('button.form__submit-button');
submit_button.addEventListener('click', function(evt){ evt.preventDefault(); getResult();});
let reset_button = document.querySelector('button.form__reset-button');
reset_button.addEventListener('click', function(evt){ evt.preventDefault(); reset();});
function reset(){
    document.getElementById('age').value = null;
    document.getElementById('height').value = null;
    document.getElementById('weight').value = null;
    document.querySelector('ul.switcher li input').checked = true;
    document.querySelectorAll('ul.radios-group li div input')[0].checked = true;
    result.classList.add('counter__result--hidden');
    reset_button.setAttribute('disabled', true);
    submit_button.setAttribute('disabled', true);
}
document.getElementById('age').addEventListener('input', checkInputs);
document.getElementById('height').addEventListener('input', checkInputs);
document.getElementById('weight').addEventListener('input', checkInputs);
function checkInputs(){
    if(document.getElementById('age').value > 0 && document.getElementById('height').value > 0 && document.getElementById('weight').value > 0){
        submit_button.removeAttribute('disabled');
    }
    else{
        submit_button.setAttribute('disabled', true);
    }
    checkResets();
}
function checkResets(){
    if(document.getElementById('age').value != null || document.getElementById('height').value != null || document.getElementById('weight').value != null)
    {reset_button.removeAttribute('disabled');}
    else{
        if(document.getElementById('age').value <= 0 && document.getElementById('height').value <=  0 && document.getElementById('weight').value <= 0){
            reset_button.setAttribute('disabled', true);
        }
    }
}