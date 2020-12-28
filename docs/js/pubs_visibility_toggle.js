alert("AAA");

function toggle_visibility(tag) {
    if(tag.style.display != 'none')
        tag.style.display = 'none';
    else
        tag.style.display = 'block';
}

function get_tag_details(tag_box) {
     parent = this.parentElement.parentElement;
     tag_details = parent.getElementsByClassName('pubs-details')[0];
     return tag_details;
}

tag_boxes = document.getElementsByClassName("tag-details");
alert(tag_boxes.length);
for (idx=0; idx<2; idx++) {
     tag_box = tag_boxes[idx];

     tag_box.addEventListener("click", function() {
         alert("AAA");
         tag = get_tag_details(this);
         toggle_visibility(tag);
     }
}
