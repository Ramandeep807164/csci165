add = function() {
result = parseInt(jQuery('#operand_1').html()) + parseInt(jQuery('#operand_2').html());
// jQuery('#operand_1').html('123213213213')
  // alert(result);
text = jQuery('#operand_1').html() + " + " jQuery('#operand_2').html() + " = "
jQuery('#result').html(text + result);
}
setup = function() {
jQuery('#add_button').click(add)
jQuery('#sub_button').click(add)
jQuery('#mul_button').click(add)
jQuery('#div_button').click(add)

}
jQuery(document).ready(setup)
