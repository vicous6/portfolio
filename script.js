defaultText = document.getElementsByClassName("inputDrag")[0].innerHTML
console.log(defaultText)
document.getElementById(defaultText).classList.remove("hidden")
console.log(document.getElementsByClassName("inputDrag"))

document.addEventListener('DOMContentLoaded', (event) => {




    function handleDragStart(e) {
        this.style.opacity = '0.4';
        dragSrcEl = this;

        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
    }

    function handleDragEnd(e) {
        this.style.opacity = '1';

        items.forEach(function (item) {
            item.classList.remove('over');
        });
    }
    function handleDrop(e) {
        e.stopPropagation();
        console.log("drop")
        if (dragSrcEl !== this) {
            dragSrcEl.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');

            let sections = document.getElementsByClassName("section")
            for (i = 0; i < sections.length; i++) {

                sections[i].classList.add("hidden")

            }
            document.getElementById(this.innerHTML).classList.remove("hidden")
            // console.log(sections)
            console.log()
        }

        return false;
    }
    function handleDragOver(e) {
        e.preventDefault();

        return false;
    }

    function handleDragEnter(e) {

        this.classList.add('over');
    }

    function handleDragLeave(e) {

        this.classList.remove('over');
    }

    let items = document.querySelectorAll('.container .box');
    items.forEach(function (item) {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragover', handleDragOver);
        item.addEventListener('dragenter', handleDragEnter);
        item.addEventListener('dragleave', handleDragLeave);
        item.addEventListener('dragend', handleDragEnd);
        item.addEventListener('drop', handleDrop);

    });
});