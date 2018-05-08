//hide reserve form
$(`#reserve`).hide();
//cursor (red/reserved tables), pointer (green/open tables)
$(`.circleOpen`).css(`cursor`, `pointer`);

$(`.circleOpen`).click(function(){
    $(`#reserve`).slideToggle("slow");
    $(`.circleReserved`).cursor("not-allowed");
    // $('.circleOpen').addClass('.circleReserved');
});

//to hide the reserve form when clicked submit and cancel
$(`#button`).click(function(){
  $(`#reserve`).hide(1000);
});
