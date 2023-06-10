const errorMessages = ['Looks like you made a mistake', 'No Problem, try again', 'Try to choose right box', 'Try again'];
const successMessages = ['Wow', 'Looks like you are genius', 'Cool, go ahead', 'You are good', 'Excellent'];




function rn(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function error(heading, text, hideAfter) {
    $.toast({
        heading: heading,
        text: text,
        position: {
            top: '50%',
            right: '80px'
        },
        stack: false,
        hideAfter: hideAfter,
        icon: 'error'
    })
}
function success(heading, text, hideAfter) {
    $.toast({
        heading: heading,
        text: text,
        position: {
            top: '50%',
            right: '80px'
        },
        stack: false,
        hideAfter: hideAfter,
        icon: 'success'
    })
}
let p1, p2, p3, p4, flag = 4, m = 0;
m = localStorage.getItem(m);

$("document").ready(function () {
    $(".child").draggable({
        helper: 'clone',
        revert: 'invalid',
        start: function (event, ui) {
            $(ui.helper).css('width', `${$(event.target).width()}px`);
        },
        stop: function (event, ui) {
            $(ui.helper).css('width', `${$(event.target).width()}px`);
        }
    });

    $(".parent").droppable({
        accept: '.child',
        tolerance: 'pointer',
        greedy: true,
        hoverClass: 'highlight',

        drop: function (event, ui) {
            if ($(this).find('.dragable__item').length) {
                error('Error', 'Dropzones are intended to hold only one Droppable child', 3000);
                return;
            }
            $(this).append($(ui.draggable));
            
            $('.parent').attr('style', '');
            switch ($(this)[0].attributes.id.value) {
                case "n":
                    if (ui.draggable[0].attributes.id.value == "p1") {
                        $('#n').css({
                            'box-shadow': '0 0 20px #52ab98',
                            'border-color': '#52ab98'
                        })
                        $('#n').children('.child').attr('style', 'margin: 0px;background-color: #52ab98; border-color: #52ab98 !important;');
                        p1 = true;
                        success('Great', successMessages[rn(0, successMessages.length - 1)]);

                    }
                    else {
                        $('#n').css({
                            'box-shadow': '0 0 20px #ea5455',
                            'border-color': '#ea5455'
                        })
                        $('#n').children('.child').attr('style', 'margin: 0px;background-color: #ea5455; border-color: #ea5455 !important;');
                        p1 = false;
                        error('Oh No', errorMessages[rn(0, errorMessages.length - 1)]);
                    }
                    break;
                case "n1":
                    if (ui.draggable[0].attributes.id.value == "p4") {
                        $('#n1').css({
                            'box-shadow': '0 0 20px #52ab98',
                            'border-color': '#52ab98'
                        })
                        $('#n1').children('.child').attr('style', 'margin: 0px;background-color: #52ab98; border-color: #52ab98 !important;');
                        p4 = true;
                        success('Great', successMessages[rn(0, successMessages.length - 1)]);

                    }
                    else {
                        $('#n1').css({
                            'box-shadow': '0 0 20px #ea5455',
                            'border-color': '#ea5455'
                        })
                        $('#n1').children('.child').attr('style', 'margin: 0px;background-color: #ea5455; border-color: #ea5455 !important;');
                        error('Oh No', errorMessages[rn(0, errorMessages.length - 1)]);
                        p4 = false;
                    }
                    // code block
                    break;
                case "n2":
                    if (ui.draggable[0].attributes.id.value == "p2") {
                        $('#n2').css({
                            'box-shadow': '0 0 20px #52ab98',
                            'border-color': '#52ab98'
                        })
                        $('#n2').children('.child').attr('style', 'margin: 0px;background-color: #52ab98; border-color: #52ab98 !important;');
                        error('Oh No', errorMessages[rn(0, errorMessages.length - 1)]);
                        p2 = true;
                        success('Great', successMessages[rn(0, successMessages.length - 1)]);
                    }
                    else {
                        $('#n2').css({
                            'box-shadow': '0 0 20px #ea5455',
                            'border-color': '#ea5455'
                        })
                        $('#n2').children('.child').attr('style', 'margin: 0px;background-color: #ea5455; border-color: #ea5455 !important;');
                        error('Oh No', errorMessages[rn(0, errorMessages.length - 1)]);
                        p2 = false;
                    }
                    // code block
                    break;
                case "n3":
                    if (ui.draggable[0].attributes.id.value == "p3") {
                        $('#n3').css({
                            'box-shadow': '0 0 20px #52ab98',
                            'border-color': '#52ab98'
                        })
                        $('#n3').children('.child').attr('style', 'margin: 0px;background-color: #52ab98; border-color: #52ab98 !important;');
                        p3 = true;
                        success('Great', successMessages[rn(0, successMessages.length - 1)]);
                    }
                    else {
                        $('#n3').css({
                            'box-shadow': '0 0 20px #ea5455',
                            'border-color': '#ea5455'
                        })
                        $('#n3').children('.child').attr('style', 'margin: 0px;background-color: #ea5455; border-color: #ea5455 !important;');
                        error('Oh No', errorMessages[rn(0, errorMessages.length - 1)]);
                        p3 = false;
                    }
                    break;
            }

        }
    });
});



//////////////////////////////////////////////


const correct1 = ["Front Office", "Customer", "Vehicle", "Destination"]
localStorage.setItem('item1', JSON.stringify(correct1))
// console.log(JSON.parse(localStorage.getItem('item1')))
localStorage.clear()
if (localStorage.length > 0) {
    console.log(yes)
}


function btn() {

    if (p1) {
        // document.getElementById("n").style.borderColor="green";
        a = 1;
    }
    else {
        // document.getElementById("n").style.borderColor="red";
        flag = flag - 1;
    };
    if (p4) {
        // document.getElementById("n1").style.borderColor="green";
        b = 1;
    }
    else {
        // document.getElementById("n1").style.borderColor="red";
        flag = flag - 1;
    };
    if (p2) {
        // document.getElementById("n2").style.borderColor="green";
        c = 1;
    }
    else {
        // document.getElementById("n2").style.borderColor="red";
        flag = flag - 1;
    };
    if (p3) {
        // document.getElementById("n3").style.borderColor="green";
        d = 1;
    }
    else {
        // document.getElementById("n3").style.borderColor="red";
        flag = flag - 1;
    };



    if (flag < 4) {
        if (m == 4) {
            alert("hhfd");

        }
        localStorage.setItem(m, flag);
        if (confirm(" Go to study materials & refer")) {
            window.location = "popup2.html";
        }
    }

    else if ((a == 1) && (b == 1) && (c == 1) && (d == 1)) {

        alert("successful");

    }
    else if (flag < 4) {
        alert("wrong");
    }
    else {
        alert("hello");
    }
}


// if(flag<4)
//   {
// alert("ghhhh");
//   }
// }



//
window.onload = function () {
    OpenBootstrapPopup();
};
function OpenBootstrapPopup() {
    $("#simpleModal").modal('show');
}

function clos() {
    window.location = ("main.html");

}
function checkWidth() {
    const x = window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
    return x;
}
window.addEventListener('resize', function () {
    // if (checkWidth() <= 768) {
    //     $('#n1').removeClass('left__arrow');
    //     $('#n2').removeClass('down_left_arrow');
    // }
    // else {
    //     $('#n1').addClass('left__arrow');
    //     $('#n2').addClass('down_left_arrow');
    // }
});