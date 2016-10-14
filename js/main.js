$().ready(function(){

	var checker = $("#checker");

	var reverse = function(word) {
		return word.split("").reverse().join("");
	}

	var anagram = function(word1, word2) {
		// TODO actual implementation
		return word1.toLowerCase() == reverse(word2.toLowerCase());
	};

	$("input").change(function()
	{
		// verify anagram
		var left = $("#input1").val();
		var right = $("#input2").val();

		if (left == "" || right == "") {
			// not yet entered
			checker.attr("class", "centered waiting");
		} else if (anagram(left, right)) {
			checker.attr("class", "centered valid");
		} else {
			checker.attr("class", "centered invalid");
		}
	});
});