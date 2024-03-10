const items = document.querySelectorAll('.checkbox input[type="checkbox"]');

items.forEach(item => item.addEventListener('change', checkList));

let lastItem;

function checkList(e) {
    if (!e.target.checked) return;

    if (lastItem != undefined && lastItem != this) {
        let inBetween = false;

        for (const item of items) {
            if (item === this || item === lastItem) {
                inBetween = !inBetween;
            }

            if (inBetween) {
                item.checked = true;
            }
        }
    }

    lastItem = this;
}