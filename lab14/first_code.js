//Function of addition button
add = function() {
result = parseInt(jQuery('#op1').html()) + parseInt(jQuery('#op2').html());
// jQuery('#operand_1').html('123213213213')
// alert(result);
text = jQuery('#op1').html() + " + " jQuery('#op2').html() + " = ";
jQuery('#result').html(text + result);
}
setup = function() {
  //alert("hi");
jQuery('#add_button').click(add);
}
jQuery(document).ready(setup)



//Function of Subtraction button
Subtraction = function() {
  result = parseInt(jQuery('#op1').html()) - parseInt(jQuery('#op2').html());
  text = jQuery('#op1').html() + " + " jQuery('#op2').html() + " = ";
  jQuery('#result').html(text + result);
  }
  setup = function() {
    //alert("hi");
jQuery('#sub_button').click(Subtraction);
  }
  jQuery(document).ready(setup)


  //Function of Multiplication button
  Multiplication = function() {
    result = parseInt(jQuery('#op1').html()) * parseInt(jQuery('#op2').html());
    text = jQuery('#op1').html() + " + " jQuery('#op2').html() + " = ";
    jQuery('#result').html(text + result);
    }
    setup = function() {
      //alert("hi");
  jQuery('#mul_button').click(Multiplication);
    }
    jQuery(document).ready(setup)




    //Function of Division button
    Multiplication = function() {
      result = parseInt(jQuery('#op1').html()) / parseInt(jQuery('#op2').html());
      text = jQuery('#op1').html() + " + " jQuery('#op2').html() + " = ";
      jQuery('#result').html(text + result);
      }
      setup = function() {
        //alert("hi");
    jQuery('#div_button').click(Division);
      }
      jQuery(document).ready(setup)
