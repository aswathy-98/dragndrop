const btnOpenInstructionSection = $('#btnOpenInstructionSection');
const btnCloseInstructionSection = $('#btnCloseInstructionSection');
const instructionSection = $('#instructionSection');




btnOpenInstructionSection.on('click', function () {
    instructionSection.addClass('open');
});
btnCloseInstructionSection.on('click', function () {
    instructionSection.removeClass('open');
});