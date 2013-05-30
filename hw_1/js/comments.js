$(function()
{
$(".comments-reply-button")
.on("click", function(e){
e.preventDefault();
$(this).parent().next(".user-comment")
.slideToggle()({
"display":"block"
});
});
$(".user-comment-btn").on("click", function(e){
		var username = $(this).siblings(".user-name-input").prop("value");
		var message = $(this).siblings(".comment-message-input").prop("value");
	if (!username || !message) {
		$(this).siblings(".comments-error") .fadeIn("slow") .css({"display":"block"});
		$(this).siblings(".comments-error").text("Заполните оба поля, пожалуйста.");
	return false;
	}else{
		$(this).siblings(".comments-error").css({"display":"none"});
	return true;
};
});
});