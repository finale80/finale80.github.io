
function toggle_visibility(tag) {
    if(tag.style.display == 'none' || tag.style.display == '')
        tag.style.display = 'block';
    else
        tag.style.display = 'none';
}

function get_tag_details(tag_box) {
     parent = tag_box.parentElement.parentElement;
     tag_details = parent.getElementsByClassName('pubs-details')[0];
     return tag_details;
}

tag_boxes = document.getElementsByClassName("tag-details");
for (idx=0; idx<tag_boxes.length; idx++) {
     tag_box = tag_boxes[idx];

     tag_box.addEventListener("click", function() {
         tag = get_tag_details(this);
         toggle_visibility(tag);
     });

     tag = get_tag_details(tag_box);
     tag.style.display = 'none';
}
