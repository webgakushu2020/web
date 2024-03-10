$(function(){
    $('.button').on('click',function(){
        $(this).next().toggleClass('hidden');
    });
});