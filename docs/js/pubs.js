ARROW_OPEN = "<i class=\"fas fa-chevron-down\"></i>";
ARROW_CLOSE = "<i class=\"fas fa-chevron-up\"></i>";

function toggle_visibility(tag) {
    if (tag.style.display == 'none' || tag.style.display == '')
        tag.style.display = 'block';
    else 
        tag.style.display = 'none';
}


function get_tag_details(tag_box) {
    target = document.getElementById("content-" + tag_box.id);
    return target;
}

function toggle_open_close_arrow(tag_box, target) {
    if (target.style.display == "block") {
        tag_box.innerHTML = "details "+ARROW_CLOSE;
    }
    else
        tag_box.innerHTML = "details "+ARROW_OPEN;
}

tag_boxes = document.getElementsByClassName("tag-details");
for (idx=0; idx<tag_boxes.length; idx++) {
     tag_box = tag_boxes[idx];

     tag_box.addEventListener("click", function() {
         target = get_tag_details(this);
         toggle_visibility(target);
         toggle_open_close_arrow(this, target);
     });

     tag = get_tag_details(tag_box);
     tag.style.display = 'none';
}
