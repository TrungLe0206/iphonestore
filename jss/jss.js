function chonlabel(radio) {
    var labels = document.querySelectorAll('.label-dungluong');
    labels.forEach(function(label) {
        label.classList.remove('selected');
    }
);
    var chonlabel = document.querySelector('label[for="' + radio.id + '"]');
    chonlabel.classList.add('selected');
}

function chonmau(radio) {
    var labels = document.querySelectorAll('.label-mau');
    labels.forEach(function(label) {
        label.classList.remove('selected');
    }
);
    var chonlabel = document.querySelector('label[for="' + radio.id + '"]');
    chonlabel.classList.add('selected');
}