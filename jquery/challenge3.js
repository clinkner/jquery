$(document).ready(function(){
    $('#ch3form').submit(function(){
        if ($('input[name="fruit"]:checked').is(":checked")) {
            return true
        } 
        alert("You must pick a fruit!");
            return false;
    })
    $('#ch3form').submit(function(){

       if ($('input[name="standing"]:checked').is(":checked")) {
            return true
        }
        alert("You must pick a standing!");
            return false;
    })
})